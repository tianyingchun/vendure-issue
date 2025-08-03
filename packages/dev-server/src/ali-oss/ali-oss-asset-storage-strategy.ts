import AliOss from 'ali-oss';
import { type Request } from 'express';
import { ReadStream } from 'fs';
import type { Stream } from 'stream';
import { Readable } from 'stream';
import { Logger } from '@vendure/core';
import { bufferToStream, streamToBuffer } from './buffer-stream.js';
import { normalizeFileNamePrefix } from './normalize-file-name-prefix.js';
import { type AliOssConfig } from './types.js';

export class AliOssAssetStorageStrategy {
  private client: AliOss;
  toAbsoluteUrl: ((reqest: Request, identifier: string) => string) | undefined;

  constructor(private ossConfig: AliOssConfig) {
    this.client = new AliOss({
      ...this.ossConfig,
    });
    if (this.ossConfig.toAbsoluteUrl) {
      this.toAbsoluteUrl = this.ossConfig.toAbsoluteUrl;
    }
  }

  async init() {
    await this.ensureBucket(this.ossConfig.bucket);
  }

  destroy?: (() => void | Promise<void>) | undefined;

  /**
   * Write buffer to aliyun oss
   * @param fileName The file name to be saved in the oss
   * @param data The buffer data to be saved
   * @returns `${prefix}/preview/f2/e110a-v__preview.png`
   */
  async writeFileFromBuffer(fileName: string, data: Buffer): Promise<string> {
    const finalFileName = this.getBucketFileName(fileName);
    await this.client.put(finalFileName, data);
    // identifier
    return finalFileName;
  }

  /**
   * Write stream to aliyun oss
   * @param fileName The file name to be saved in the oss
   * @param data The stream data to be saved
   * @returns `${prefix}/source/9a/e110a-v.png`
   */
  async writeFileFromStream(
    fileName: string,
    data: ReadStream
  ): Promise<string> {
    const buffer = await streamToBuffer(data);
    const finalFileName = this.getBucketFileName(fileName);
    // alioss only support buffer as put data.
    await this.client.put(finalFileName, buffer);

    return finalFileName;
  }

  /**
   * Read file to buffer from aliyun oss
   * @param identifier `assets/source/c2/home-page-02-edition-03__04.jpeg`
   * @returns Buffer
   */
  async readFileToBuffer(identifier: string): Promise<Buffer> {
    const sourceFileName = this.getBucketFileName(identifier);
    const result = await this.client.get(sourceFileName);
    const body = result.content;
    if (!body) {
      Logger.error(`Got undefined Body for ${identifier}`);
      return Buffer.from('');
    }
    if (body instanceof Buffer) {
      return body;
    }
    if (body instanceof Uint8Array || typeof body === 'string') {
      return Buffer.from(body as string);
    }
    if (body instanceof Readable) {
      return new Promise((resolve, reject) => {
        const buf: number[] = [];
        body.on('data', (data) => buf.push(data));
        body.on('error', (err) => reject(err));
        body.on('end', () => {
          const intArray = Uint8Array.from(buf);
          resolve(Buffer.concat([intArray]));
        });
      });
    }

    return Buffer.from(body);
  }

  async readFileToStream(identifier: string): Promise<Stream> {
    const sourceFileName = this.getBucketFileName(identifier);
    // alioss always return buffer.
    const result = await this.client.get(sourceFileName);
    const body = result.content;
    if (!(body instanceof ReadStream)) {
      return bufferToStream(body);
    }
    return body;
  }

  async readMultipleFileToStream(identifiers: string[]): Promise<
    Array<{
      stream: Stream;
      fileName: string;
    }>
  > {
    const streams: Array<{
      stream: Stream;
      fileName: string;
    }> = [];
    for (const identifier of identifiers) {
      const stream = await this.readFileToStream(identifier);
      streams.push({
        fileName: identifier,
        stream,
      });
    }
    return streams;
  }

  async deleteFile(fileName: string): Promise<void> {
    const deleteFileName = this.getBucketFileName(fileName);
    await this.client.delete(deleteFileName);
  }

  async fileExists(fileName: string): Promise<boolean> {
    const checkFileName = this.getBucketFileName(fileName);
    try {
      await this.client.head(checkFileName);
      return true;
    } catch {
      return false;
    }
  }

  getSignedUrl(identifier: string): Promise<string> | string {
    const signedFileName = this.getBucketFileName(identifier);
    return this.client.signatureUrl(signedFileName, {
      expires: this.ossConfig.expiresInSeconds,
    });
  }

  /**
   * prepend prefix for aliyun oss file name.
   * @param fileName
   * @returns without prefix `/`
   */
  private getBucketFileName(fileName: string): string {
    return normalizeFileNamePrefix(fileName, this.ossConfig.prefix);
  }

  private async ensureBucket(bucket: string) {
    let bucketExists = false;
    try {
      await this.client.getBucketInfo(bucket);
      bucketExists = true;
      Logger.verbose(`Found OSS bucket "${bucket}"`);
    } catch {
      Logger.verbose(
        `Could not find bucket "${bucket}". Attempting to create...`
      );
    }
    if (!bucketExists) {
      try {
        await this.client.putBucket(bucket, {
          storageClass: 'Standard',
          timeout: 60000,
          acl: 'private',
          // Local data redundancy LRS: Store your data redundantly within the same availability zone on different storage devices, supporting two storage devices to be damaged concurrently, maintaining data without loss, and normal access
          dataRedundancyType: 'LRS',
        });
        Logger.verbose(`Created OSS bucket "${bucket}"`);
      } catch (e) {
        Logger.error(
          `Could not find nor create the OSS bucket "${bucket}"`,
          (e as Error).stack
        );
      }
    }
    this.client.useBucket(bucket);
  }
}

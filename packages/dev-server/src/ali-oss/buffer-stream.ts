import type { ReadStream } from 'fs';
import { Stream } from 'stream';
import type { MutationUploadFile } from './upload-file.js';

export const bufferToStream = (buffer: Buffer): Stream => {
  const stream = new Stream.Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

export function streamToBuffer(stream: ReadStream): Promise<Buffer> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => {
      chunks.push(Buffer.from(chunk as Buffer));
    });
    stream.on('error', (err) => reject(err));
    stream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
  });
}

/**
 * 用户上传的文件转换为Buffer
 * @param file
 * @returns
 */
export const uploadedFileToBuffer = async (file: MutationUploadFile) => {
  const { createReadStream, filename, mimetype, encoding } = await file;
  const stream = createReadStream();
  const buffer = await streamToBuffer(stream);
  return {
    buffer,
    filename,
    mimetype,
    encoding,
  };
};

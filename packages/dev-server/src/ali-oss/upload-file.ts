import type { ReadStream } from 'fs';
import type { ReadStreamOptions } from 'fs-capacitor';

/** Object containing file metadata and access information. */
export interface UploadFile {
  /**
   * Name of the form field associated with this file.
   */
  filename: string;
  /**
   *  File stream transfer encoding.
   */
  encoding: string;
  /**
   * File MIME type. Provided by the client and can’t be
   */
  mimetype: string;

  /**
   * Creates a
   * [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams) of the file’s contents, for processing and storage.
   */
  createReadStream: FileUploadCreateReadStream;
}

/**
 * Creates a
 * [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams) of the file’s contents, for processing and storage.
 */
type FileUploadCreateReadStream = (
  options?: FileUploadCreateReadStreamOptions
) => ReadStream;

type FileUploadCreateReadStreamOptions = {
  /**
   * Specify an encoding for
   *   the [`data`](https://nodejs.org/api/stream.html#event-data) chunks to be
   *   strings (without splitting multi-byte characters across chunks) instead of
   *   Node.js [`Buffer`](https://nodejs.org/api/buffer.html#buffer) instances.
   *   Supported values depend on the
   *   [`Buffer` implementation](https://github.com/nodejs/node/blob/v18.1.0/lib/buffer.js#L590-L680)
   *   and include `utf8`, `ucs2`, `utf16le`, `latin1`, `ascii`, `base64`,
   *   `base64url`, or `hex`. Defaults to `utf8`.
   * @default `utf8`
   */
  encoding?: ReadStreamOptions['encoding'];
  /**
   * Maximum number
   *   of bytes to store in the internal buffer before ceasing to read from the
   *   underlying resource. Defaults to `16384`.
   * @default `16384`
   */
  highWaterMark?: ReadStreamOptions['highWaterMark'];
};

export type MutationUploadFile = Promise<UploadFile> | UploadFile;

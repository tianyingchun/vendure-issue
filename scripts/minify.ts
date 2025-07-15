import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Get files
 * @param {string} dirPath
 * @param {string[]} arrayOfFiles
 * @returns
 */
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = readdirSync(dirPath);

  files.forEach((file: string) => {
    if (statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(join(process.cwd(), dirPath, '/', file));
    }
  });
  return arrayOfFiles.filter((path) => /\.(js|mjs)$/.exec(path));
}

/**
 * Minify files
 * @param {string[]} filePaths
 */
async function minifyFiles(filePaths: string[]) {
  for (const filePath of filePaths) {
    const { minify } = await import('terser');
    const result = await minify(readFileSync(filePath, 'utf8'), {
      keep_fnames: true,
      keep_classnames: true,
      mangle: {
        keep_fnames: true,
        keep_classnames: true,
      },
    });
    writeFileSync(filePath, result.code || '');
  }
}

export const minify = (distDir: string) => {
  const files = getAllFiles(`./${distDir}`);
  minifyFiles(files).catch((err) => {
    console.log(`Minify failed!`, err);
  });
};

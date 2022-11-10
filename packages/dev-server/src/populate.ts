import { join } from 'path';
import type { INestApplicationContext } from '@nestjs/common';
import { populate } from '@vendure/core/cli';

export const populateData = async (app: INestApplicationContext) => {
  const dataSources = join(__dirname, '../mock-data/data-sources');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { initialData } = require(join(dataSources, 'initial-data'));

  await populate(
    () => Promise.resolve(app),
    initialData,
    join(dataSources, 'products.csv')
  );
};

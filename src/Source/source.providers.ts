import { DataSource } from 'typeorm';
import { Source } from './source.entity';

export const SourceProviders = [
  {
    provide: 'SOURCE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Source),
    inject: ['DATA_SOURCE'],
  },
];
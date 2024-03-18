import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SourceProviders } from './source.providers';
import { SourceService } from './source.service';
import { SourceController } from './source.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SourceController],
  providers: [
    ...SourceProviders,SourceService
  ],
})
export class SourceModule {}
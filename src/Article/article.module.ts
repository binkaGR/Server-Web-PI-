import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArticleProviders } from './article.providers';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './article.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [
    ...ArticleProviders,ArticleService
  ],
})
export class ArticleModule {}
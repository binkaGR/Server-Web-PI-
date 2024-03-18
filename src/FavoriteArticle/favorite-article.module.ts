import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FavoriteArticleProviders } from './favorite-article.providers';
import { FavoriteArticleService } from './favorite-article.service';
import { FavaoriteArticleController } from './favarite-article.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [FavaoriteArticleController],
  providers: [
    ...FavoriteArticleProviders ,FavoriteArticleService, 
  ],
})
export class FavoriteArticleModule {}
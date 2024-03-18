import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './Article/article.module';
import { SourceModule } from './Source/source.module';
import { FavoriteArticleModule } from './FavoriteArticle/favorite-article.module';
import { CommentModule } from './Comment/commnet.module';
import { EventModule } from './Events/event.module';

@Module({
  imports: [SourceModule,
          ArticleModule,
          FavoriteArticleModule,
          CommentModule ,
          EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

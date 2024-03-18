import { DataSource } from 'typeorm';
import { FavoriteArticle } from './favorite-article.entity';

export const FavoriteArticleProviders = [
  {
    provide: 'FAVORITE_ARTICLE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(FavoriteArticle),
    inject: ['DATA_SOURCE'],
  },
];
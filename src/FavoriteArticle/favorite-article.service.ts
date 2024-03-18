import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FavoriteArticle } from './favorite-article.entity';
import { Favorite_Article } from './favoriteArticle.interface';

@Injectable()
export class FavoriteArticleService {
  constructor(
    @Inject('FAVORITE_ARTICLE_REPOSITORY') 
    private favariteArticleRepository: Repository<FavoriteArticle>,

  ) {}

  async findAll(): Promise<FavoriteArticle[]> {
    return this.favariteArticleRepository.find();
  }

  async addArticleDB(article: Favorite_Article): Promise<string>
  {

    try{
    article.id =null;
    let br: number;
    br = 0;
    if ((await this.favariteArticleRepository.find()).length == 0) 
    {
      this.favariteArticleRepository.save(article);
      console.error("Data Base update finish");
      return "Data Base update finish";
    } else 
    {
      for (let j = 1; j <= (await this.favariteArticleRepository.find()).length; j++) {
        if ((await this.favariteArticleRepository.findOneById(j)) != null && (await this.favariteArticleRepository.findOneById(j)).title != null) {
          if (article.title == (await this.favariteArticleRepository.findOneById(j)).title) {
            br++;
            break;
          }
        }
      }
      if (br == 0) {
        this.favariteArticleRepository.save(article);
        console.error("Data Base update finish");
        return "Data Base update finish";
      } else {
        br = 0;
        console.error("Article is allready in Favaorite");
        return "Article is allready in Favaorite";
      }
    }
    
    } catch (error) {
      console.error(error);
      return "Error updating database";
    }
  }

  async DeleteFavoriteArticle(id: number): Promise<FavoriteArticle[]>
  {

    await this.favariteArticleRepository.delete(id);
    return this.favariteArticleRepository.find();
  }

  getFavoriteArticle(id): Promise<FavoriteArticle>
  {
    
    return this.favariteArticleRepository.findOneById(id);
  }
}
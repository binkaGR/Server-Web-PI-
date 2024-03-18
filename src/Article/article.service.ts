import { Injectable, Inject } from '@nestjs/common';
import { RelationQueryBuilder, Repository } from 'typeorm';
import { Article } from './article.entity';
import { mergeWith } from 'rxjs';
import { Articles } from 'src/article.interface';
import { News } from 'src/news.interface';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async getMostPopularArticles(type: string, from_Date: string, to_Date: string , choselanguage: string ): Promise<string> {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('2500995d07e242a6a711b21c2c10cf08');
  
    try {
      const response = await newsapi.v2.everything({
        q: type,
        from: from_Date,
        to: to_Date,
        language: choselanguage,
        sortBy: "popularity"
      });
      console.log(response );

      const news: News = response;
      let now: Date = new Date;
      console.log(news.totalResults+" Нова заявка  " + now.toLocaleTimeString() +  now.toLocaleDateString() );
  
      for (let i = 0; i < news.articles.length; i++) {
        const article: Articles = news.articles[i];
  
        if (article.id != null) {
          article.id = null;
        }
  
        if (article.author == null) {
          article.author = "unknown";
        }
  
        if (article.title == null) {
          article.title = "unknown title";
        }
  
        if (article.urlToImage == null) {
          article.urlToImage = "without image";
        }
  
        if (article.description == null) {
          article.description = "without description";
        }
  
        if (article.content == null) {
          article.content = "without description";
        }
  
        if (article.source.id != null) {
          article.source.id = null;
        }
        this.articleRepository.save(article);

      }
      console.error("Data Base update finish");
      return "Data Base update finish";
    } catch (error) {
      console.error(error);
      return "Error updating database";
    }
  }
  





async getArticlesByKeyWord(type: string, selectLanguage: string): Promise<string> {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('2500995d07e242a6a711b21c2c10cf08');
  
    try {
      const response = await newsapi.v2.everything({
        q: type,
        language: selectLanguage,
      });
  
      const news: News = response;
      let now: Date = new Date;
      console.log(news.totalResults+" Нова заявка  " + now.toLocaleTimeString() +  now.toLocaleDateString() );
  
      for (let i = 0; i < news.articles.length; i++) {
        const article: Articles = news.articles[i];
  
        if (article.id != null) {
          article.id = null;
        }
  
        if (article.author == null) {
          article.author = "unknown";
        }
  
        if (article.title == null) {
          article.title = "unknown title";
        }
  
        if (article.urlToImage == null) {
          article.urlToImage = "without image";
        }
  
        if (article.description == null) {
          article.description = "without description";
        }
  
        if (article.content == null) {
          article.content = "without description";
        }
  
        if (article.source.id != null) {
          article.source.id = null;
        }
        this.articleRepository.save(article);

      }
      console.error("Data Base update finish");
      return "Data Base update finish";
    } catch (error) {
      console.error(error);
      return "Error updating database";
    }
  }
  

  getArticle(id): Promise<Article>
  {
    
    return this.articleRepository.findOneById(id);
  }

  DeleteArticle(): Promise<Article[]>
  {
    try{
    this.articleRepository.clear();
    console.error("Data Base is clear");
    return this.articleRepository.find();
    }catch (error) {
      console.error(error);
    }
  }

 
}
  




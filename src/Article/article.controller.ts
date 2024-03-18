import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  
  @Get('GetArticleMostPopular/:type&from=:from&to=:to&language=:choselanguage')
  async GetArticleMostPopular(@Param('type') type ,@Param('from') from, @Param('to') to, @Param('choselanguage') choselanguage): Promise<Article[]>
  {
    await this.articleService.getMostPopularArticles(type, from , to ,  choselanguage);
    return this.articleService.findAll();
  }


  @Get('GetArticle')
  GetArticlesDb() : Promise<Article[]>
  {
    return this.articleService.findAll();
  }
  @Get('GetArticleID/:id')
  GetArticle(@Param('id') id) {
    return this.articleService.getArticle(id);
  }

  @Get('GetArticleByKeyWord/:keyword&language=:selectLanguage')
  async GetArticleDate(@Param('keyword') keyword, @Param('selectLanguage') selectLanguage) : Promise<Article[]>{
    await this.articleService.getArticlesByKeyWord(keyword, selectLanguage);
     return this.articleService.findAll();
  }
  @Delete('DeleteArticle') 
  async DeleteArticles(): Promise<Article[]> {
    return this.articleService.DeleteArticle();
  }
}

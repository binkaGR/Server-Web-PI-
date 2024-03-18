import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FavoriteArticleService } from './favorite-article.service';
import { FavoriteArticle } from './favorite-article.entity';


@Controller()
export class FavaoriteArticleController {
  constructor(private readonly favoriteArticleService: FavoriteArticleService ) {}

  @Get('FavoriteArticle')
  GetAricle() : Promise<FavoriteArticle[]>
  {
    return this.favoriteArticleService.findAll();
  }
  @Get('GetFavoriteArticleID/:id')
  GetFavoriteArticle(@Param('id') id) {
    return this.favoriteArticleService.getFavoriteArticle(id);
  }
  @Post('AddFAvaoriteArticle')
  async AddAricle(@Body() article) : Promise<string>
  {
    return (await this.favoriteArticleService.addArticleDB(article));
  }
  @Delete('DeleteFavoriteArticle/:id')
  DeleteFavoriteArticle(@Param('id') id) : Promise<FavoriteArticle[]>
  {
    return this.favoriteArticleService.DeleteFavoriteArticle(id);
  }
}

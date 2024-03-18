import { Get, Injectable } from '@nestjs/common';
import fs from 'fs';
import { Articles } from './article.interface';
import { News } from './news.interface';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getJson(): Promise<Articles[]>
  {
    const url: string = 'https://newsapi.org/v2/everything?q=tesla&from=2023-12-03&sortBy=publishedAt&apiKey=7bcb7e13342e4227be4bf42fde2a48cc';
    const req: Request = new Request(url); 
    const response = await fetch(req);
    const data = await response.json();
    const news: News = data;
    const article: Articles[] = news.articles;
    return article; 
   }
}

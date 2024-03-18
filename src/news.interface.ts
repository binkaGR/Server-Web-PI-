import { Articles } from "./article.interface";

export interface News {
  status: string;
  totalResults: number;
  articles: Articles[];
  }
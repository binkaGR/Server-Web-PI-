import { FavoriteArticle } from "src/FavoriteArticle/favorite-article.entity";

export interface Comments {
    id: number;
    firstName: string;
    lastName: string;
    comment: string;
    date: Date;
    artickeID: FavoriteArticle;
    }
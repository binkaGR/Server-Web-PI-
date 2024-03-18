import { Injectable, Inject } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { Comment } from './commnet.entity';
import { FavoriteArticle } from 'src/FavoriteArticle/favorite-article.entity';
import { Comments } from './comment.interface';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  getCommentfindByID(id: number): Promise<Comment> {
    return this.commentRepository.findOneById(id);
  }
  
  async  deleteCommentsByFavoriteArticleId(articleId: number) : Promise<string> {
    await this.commentRepository.createQueryBuilder()
      .delete()
      .from(Comment)
      .where("artickeIDId = :id", { id: articleId })
      .execute();
      return "All commmnet are remove";
  }

  async getCommentById(articleId: number): Promise<Comments[]>
  {
    const comments: Comments[] = await this.commentRepository.createQueryBuilder()
      .where("artickeIDId = :id", { id: articleId })
      .getMany();
      
      return comments;    
  }
  addComment(newComment): string 
  {
    if(newComment.id!=null)
    {
      newComment.id=null;
    }
    this.commentRepository.save(newComment);
    return "new commmnet is add";
  }



  async deleteCommnet(id: number): Promise<string>
  {
    await this.commentRepository.delete(id);     
    return "Comments are removed"; 
  }

  async updateComent(id: number , updateComent: Comments ): Promise<string>
  { 
    this.commentRepository.update(id ,updateComent);
    return "New Coment is update";  
  }
}
  




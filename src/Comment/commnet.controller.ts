import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './commnet.service';
import { Comment } from './commnet.entity';

@Controller('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('Get/:id')
  GetCommentByArticleID(@Param('id') id) : Promise<Comment[]>
  {
    return this.commentService.getCommentById(id);
  }
  @Get(':id')
  GetCommentByID(@Param('id') id) : Promise<Comment> 
  {
    return this.commentService.getCommentfindByID(id);
  }
  
  @Post('Add') 
  async AddComment(@Body() newcomment) : Promise<string>
  {
    return (await this.commentService.addComment(newcomment));
  }

  @Delete('DeleteAllCommnetByArticle/:id')
  async DeleteAllCommnetByArticle(@Param('id') id) : Promise<string>
  {
    return (await this.commentService.deleteCommentsByFavoriteArticleId(id));
  }
  @Delete('DeleteCommnet/:id')
  async DeleteComment(@Param('id') id) : Promise<string>
  {
    return (await this.commentService.deleteCommnet(id));
  }

  @Put('UpdateComment/:id') 
  async UpdateComment(@Param('id') id , @Body() updateComment) : Promise<string>
  {
    return (await this.commentService.updateComent(id , updateComment)); 
  }
}

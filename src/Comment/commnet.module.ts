import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CommentProviders } from './commnet.providers';
import { CommentService } from './commnet.service';
import { CommentController } from './commnet.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [
    ...CommentProviders,CommentService
  ],
})
export class CommentModule {}
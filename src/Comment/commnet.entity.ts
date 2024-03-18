import { FavoriteArticle } from 'src/FavoriteArticle/favorite-article.entity';
import { Entity, Column, PrimaryGeneratedColumn,  JoinColumn,    ManyToOne,  } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'longtext' })
  comment: string;

  @Column({ type: 'longtext' })
  date: Date;

  @ManyToOne(() => FavoriteArticle)
  @JoinColumn()
  artickeID: FavoriteArticle

}
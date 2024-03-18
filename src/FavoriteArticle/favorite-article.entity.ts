import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn  } from 'typeorm';

@Entity()
export class FavoriteArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  author: string;

  @Column({ type: 'longtext' })
  title: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({type: 'longtext'}) 
  url: string;

  @Column({type: 'longtext'}) 
  urlToImage: string;
  @Column() 
  publishedAt: Date;


  @Column({ type: 'longtext' })
  content: string;

 


}
import { Source } from 'src/Source/source.entity';
import { Entity, Column, PrimaryGeneratedColumn,  JoinColumn,  ManyToMany, OneToOne,  } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Source)
  @JoinColumn()
  source: Source

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
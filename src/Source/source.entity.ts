import { Entity, Column, PrimaryGeneratedColumn,  JoinColumn,  ManyToMany,  } from 'typeorm';

@Entity()
export class Source {
  @PrimaryGeneratedColumn()
  id: number;


  @Column() 
  name: string;


}


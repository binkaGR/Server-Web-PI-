import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column() 
  name: string;
  @Column() 
  location: string;
  @Column() 
  duration: string;
  @Column() 
  numberOfguest: number;

}

/*

    {
   "id": 2,
   "name": "basball",
   "location": "zala Sofiq",
   "duration": "95:00",
   "numberOfguest": 15
    }


*/
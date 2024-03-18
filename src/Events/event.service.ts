import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  getAllEventByLocation(location: string): Promise<Event[]>
  {
    return this.eventRepository.find({ where: { location } });
  }


  getEventById(id: number): Promise<Event>
  {
    return this.eventRepository.findOne({ where: { id } });
  }
 addEvent(newevent: Event)
 {
  //newevent.id=null;
  return this.eventRepository.save(newevent);
 }

 deleteEvent(id: number)
 {
  return this.eventRepository.delete(id);
 }

}
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('Event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':location')
  getAllEventsByLocation(@Param('location') location)
  {
    return this.eventService.getAllEventByLocation(location);
  } 
  @Get('GetEvent/:id')
  getEvent(@Param('id') id)
  {
    return this.eventService.getEventById(id);
  }
  @Post()
  async AddAricle(@Body() event) 
  {
    return this.eventService.addEvent(event);
  }
  @Delete(':id')
  deleteEvent(@Param('id') id)
  {
    this.eventService.deleteEvent(id)
    return "Event is delete";
  } 
  
}

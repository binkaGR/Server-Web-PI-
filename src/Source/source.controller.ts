import { Controller, Get, Param } from '@nestjs/common';
import { SourceService } from './source.service';
import { Source } from './source.entity';

@Controller()
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  
}

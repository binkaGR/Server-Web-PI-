import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Source } from './source.entity';
import { mergeWith } from 'rxjs';

@Injectable()
export class SourceService {
  constructor(
    @Inject('SOURCE_REPOSITORY')
    private sourceRepository: Repository<Source>,
  ) {}





}
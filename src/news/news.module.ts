import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from '../entities/news.entity';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  providers: [NewsService],
  controllers: [NewsController],
  exports: [NewsService],
})
export class NewsModule {}

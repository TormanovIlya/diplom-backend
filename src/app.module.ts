import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ImagesEntity } from './entities/images.entity';
import { ProductEntity } from './entities/product.entity';
import { ProductModule } from './product/product.module';
import { CategoryEntity } from './entities/category.entity';
import { CategoryModule } from './category/category.module';
import { ImagesModule } from './productImages/images.module';
import { TagEntity } from './entities/tag.entity';
import { NewsEntity } from './entities/news.entity';
import { NewsModule } from './news/news.module';
import { TagsModule } from "./tags/tags.module";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.DATABASE_PORT,
      username: 'root',
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      entities: [
        ImagesEntity,
        ProductEntity,
        CategoryEntity,
        TagEntity,
        NewsEntity,
      ],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    ProductModule,
    CategoryModule,
    ImagesModule,
    NewsModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

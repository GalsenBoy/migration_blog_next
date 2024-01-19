/* eslint-disable prettier/prettier */

import { dataSourceOptions } from '../db/data.source';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { UploadModule } from './upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // spécifiez le répertoire de destination des fichiers téléchargés
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      dataSourceOptions,
      // synchronize: true,
    ),
    PostModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

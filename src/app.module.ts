import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VodkasModule } from './vodkas/vodkas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    VodkasModule,
    MongooseModule.forRoot('mongodb://localhost/nest-course')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

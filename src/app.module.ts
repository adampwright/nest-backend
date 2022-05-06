import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VodkasModule } from './vodkas/vodkas.module';

@Module({
  imports: [VodkasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

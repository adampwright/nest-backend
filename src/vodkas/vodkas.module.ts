import { Module } from '@nestjs/common';
import { VodkasController } from './vodkas.controller';
import { VodkasService } from './vodkas.service';

@Module({
    controllers: [VodkasController],
    providers: [VodkasService]
})
export class VodkasModule { }

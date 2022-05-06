import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VodkasController } from './vodkas.controller';
import { VodkasService } from './vodkas.service';
import { Vodka, VodkaSchema } from './entities/vodka.entity';
import { Event, EventSchema } from '../events/entities/event.entity';

@Module({
    imports: [
        MongooseModule.forFeature([

            {
                name: Vodka.name,
                schema: VodkaSchema
            },
            {
                name: Event.name,
                schema: EventSchema
            }
        ])
    ],
    controllers: [VodkasController],
    providers: [VodkasService]
})
export class VodkasModule { }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Vodka } from './entities/vodka.entity';
import { Connection, Model } from 'mongoose';
import { CreateVodkaDto } from './dto/create-vodka.dto';
import { UpdateVodkaDto } from './dto/update-vodka.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';


@Injectable()
export class VodkasService {

    constructor(@InjectModel(Vodka.name) private readonly vodkaModel: Model<Vodka>, @InjectConnection() private readonly connection: Connection, @InjectModel(Event.name) private readonly eventModel: Model<Event>) { }

    findAll(paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.vodkaModel.find().skip(offset).limit(limit).exec();
    }

    async findOne(id: string) {
        // helpful for errors that are deep
        //throw "A random error"

        const vodka = await this.vodkaModel.findOne({ _id: id }).exec();
        if (!vodka) {
            throw new NotFoundException(`Vodka #${id} not found`);
        }
        return vodka;
    }

    create(CreateVodkaDto: CreateVodkaDto) {
        const vodka = new this.vodkaModel(CreateVodkaDto)
        return vodka.save();
    }

    async update(id: string, updateVodkaDto: UpdateVodkaDto) {

        const existingVodka = await this.vodkaModel
            .findOneAndUpdate({ _id: id }, updateVodkaDto, { new: true })
            .exec();

        if (!existingVodka) {
            throw new NotFoundException(`Vodka with id ${id} not found`);
        }

        return existingVodka
    }

    async remove(id: string) {
        const vodka = await this.findOne(id);
        return vodka.remove();
    }

    async recommendVodka(vodka: Vodka) {
        const session = await this.connection.startSession();
        session.startTransaction();

        try {
            vodka.reccomendations++;

            const recommendEvent = new this.eventModel({
                name: 'recommend_vodka',
                type: 'vodka',
                payload: { vodkaId: vodka.id }
            })

            await recommendEvent.save({ session });
            await vodka.save({ session });

            await session.commitTransaction();
        } catch (err) {
            await session.abortTransaction();
        } finally {
            session.endSession();
        }
    }

}

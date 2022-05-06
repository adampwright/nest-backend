import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Vodka } from './entities/vodka.entity';

@Injectable()
export class VodkasService {
    private vodkas: Vodka[] = [{ id: '1', name: 'Vodka', brand: 'Absolut', flavors: ['Vodka'] }];

    findAll(): Vodka[] {
        return this.vodkas;
    }

    findOne(id: string) {
        // helpful for errors that are deep
        //throw "A random error"

        const vodka = this.vodkas.find(vodka => vodka.id === id);
        if (!vodka) {
            throw new NotFoundException(`Vodka #${id} not found`);
        }
        return vodka;
    }

    create(vodka) {
        this.vodkas.push(vodka);
        return vodka;
    }

    update(id: string, updateCoffeeDto: any) {
        const existingVodka = this.findOne(id);
        if (existingVodka) {
            //update existing entity
        }
    }

    remove(id: string) {
        const vodkaIndex = this.vodkas.findIndex(vodka => vodka.id === id);
        if (vodkaIndex >= 0) {
            this.vodkas.splice(vodkaIndex, 1);
        }
    }

}

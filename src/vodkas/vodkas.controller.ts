import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateVodkaDto } from './dto/create-vodka.dto';
import { UpdateVodkaDto } from './dto/update-vodka.dto';
import { VodkasService } from './vodkas.service';

@Controller('vodkas')
export class VodkasController {

    constructor(private readonly vodkaService: VodkasService) { }

    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.vodkaService.findAll();
    }

    // @Param decorator is used to get the parameter from the url/
    // id passed to param lets access the id from the url
    @Get(':id')
    findOne(@Param('id') id: number) {
        // console.log(typeof id)
        // maybe change param input back to pure string or number
        return this.vodkaService.findOne('' + id);
    }

    @Post()
    // customize HTTP status code on response
    // @HttpCode(HttpStatus.GONE)
    create(@Body() createVodkaDto: CreateVodkaDto) {
        return this.vodkaService.create(createVodkaDto);
    }
    //return this action creates a vodka


    @Patch(":id")
    update(@Param('id') id: string, @Body() UpdateVodkaDto: UpdateVodkaDto) {
        return this.vodkaService.update(id, UpdateVodkaDto);
    }

    @Delete(":id")
    remove(@Param('id') id: string) {
        return this.vodkaService.remove(id);
    }
}

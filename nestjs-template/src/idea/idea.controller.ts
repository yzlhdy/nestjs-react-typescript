import { Controller, Get, Post, Delete, Body, Param, Put, UsePipes, Logger } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { ValidationPipe } from '../shared/validate.pipe'

@Controller('idea')
export class IdeaController {
    private logger = new Logger('IdeaController')
    constructor(private readonly ideasService: IdeaService) { }


    @Get()
    showAllIdea() {
        return this.ideasService.showAll()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createIdea(@Body() data: IdeaDTO) {
        this.logger.log(JSON.stringify(data))
        return this.ideasService.create(data)
    }

    @Get(':id')
    readIdea(@Param('id') id: string) {
        return this.ideasService.read(id)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        this.logger.log(JSON.stringify(data))
        return this.ideasService.update(id, data)
    }

    @Delete(':id')
    destoryIdea(@Param('id') id: string) {
        return this.ideasService.destroy(id)
    }
}

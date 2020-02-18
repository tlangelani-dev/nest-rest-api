import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Item } from './dto/Item';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items.';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`;
    }

    @Post()
    create(@Body() item: Item): string {
        return 'Create item.'
    }

    @Put(':id')
    update(@Body() item: Item, @Param('id') id): string {
        return `Update ${id}, Name: ${item.name}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }
}

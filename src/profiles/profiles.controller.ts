import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('age') age: number) {
    return [{ age }];
  }
  @Get(':id')
  findProfileById(@Param('id') id: string) {
    return { id, name: 'John Doe' };
  }
  @Post()
  createProfile(@Body() createProfileDTO: CreateProfileDto) {
    return {
      name: createProfileDTO.name,
      description: createProfileDTO.description,
    };
  }
}

import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile-dto';

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
  @Put(':id')
  updateProfile(@Body() updateProfileDto: UpdateProfileDto, @Param('id') id: string) {
    return {
      id,
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    };
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id') id: string) {
    return { id };
  }
}

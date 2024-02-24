import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile-dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profilesService.findAll();
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

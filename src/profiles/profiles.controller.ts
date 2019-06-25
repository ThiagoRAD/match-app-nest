import { Controller, Get, Query, Param } from '@nestjs/common';

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
}

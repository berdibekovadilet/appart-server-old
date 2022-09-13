import { Controller, Get } from '@nestjs/common';

@Controller('saleflat')
export class SaleflatController {
  @Get()
  findAll() {
    return ['dragon', 'coffee'];
  }
}

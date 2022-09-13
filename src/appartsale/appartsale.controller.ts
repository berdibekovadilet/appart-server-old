import { Controller, Get } from '@nestjs/common';
import { AppartSaleService } from './appartsale.service';

@Controller('appartsale')
export class AppartSaleController {
  constructor(private appartSaleService: AppartSaleService) {}
  @Get()
  findAll() {
    return this.appartSaleService.findAll();
  }
}

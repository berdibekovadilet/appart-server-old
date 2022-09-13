import { Module } from '@nestjs/common';
import { AppartSaleController } from './appartsale.controller';
import { AppartSaleService } from './appartsale.service';

@Module({
  imports: [],
  controllers: [AppartSaleController],
  providers: [AppartSaleService],
})
export class AppartSaleModule {}

import { Module } from '@nestjs/common';
import { SaleflatController } from './saleflat.contoller';

@Module({
  imports: [],
  controllers: [SaleflatController],
})
export class SaleflatModule {}

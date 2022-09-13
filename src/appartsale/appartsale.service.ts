import { Injectable } from '@nestjs/common';

@Injectable()
export class AppartSaleService {
  findAll() {
    return ['2room', '68k$'];
  }
}

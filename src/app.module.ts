import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppartSaleModule } from './appartsale/appartsale.module';

@Module({
  imports: [AppartSaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

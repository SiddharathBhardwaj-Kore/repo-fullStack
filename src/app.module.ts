import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
//          MongooseModule.forRoot(MongooseModule.forRoot('mongodb://localhost/testdb')),
        ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductListModule } from './products/product.module';
import { ProductsController } from './products/product.controller';
import { ProductsService } from './products/product.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';

@Module({
  imports: [ProductListModule],
  controllers: [
    AppController,
    UsersController,
    ProductsController,
    CategoryController,
    LocationController,
  ],
  providers: [AppService, ProductsService, CategoryService, LocationService],
})
export class AppModule {}

// src/products/products.controller.ts
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductDetail, ProductSummary } from './product.interface';
import { CreateProductDTO } from './create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): ProductSummary[] {
    return this.productsService.getAllProducts();
  }

  @Get('search')
  getProducts(@Query('search') search: string): ProductDetail[] {
    const product = this.productsService.getProducts(search);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Get(':id')
  getProductById(@Param('id') id: string): ProductDetail {
    const product = this.productsService.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  createProduct(@Body() createProductDTO: CreateProductDTO): ProductDetail {
    return this.productsService.createProduct(createProductDTO);
  }
}

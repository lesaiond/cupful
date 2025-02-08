/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/products/dto/create-product.dto.ts

import {
  IsString,
  IsArray,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Category, Location } from './product.interface';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly img: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  @IsNotEmpty()
  readonly size: string[];

  @IsOptional()
  @IsArray()
  readonly customize?: {
    milk?: string[];
    cream?: string[];
    syrup?: string[];
  };

  @IsNumber()
  readonly amount: number;

  @IsOptional()
  readonly category: Category;

  @IsOptional()
  readonly location: Location;
}

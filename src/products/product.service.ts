import { Injectable } from '@nestjs/common';
import { ProductDetail, ProductSummary } from './product.interface';
import { CreateProductDTO } from './create-product.dto';
import { products } from './product.data';

@Injectable()
export class ProductsService {
  private products: ProductDetail[] = products;

  getAllProducts(): ProductSummary[] {
    return this.products.map(
      ({ id, img, title, amount, category, location }) => ({
        id,
        img,
        title,
        amount,
        category,
        location,
      }),
    );
  }

  getProductById(id: string): ProductDetail | null {
    return this.products.find((product) => product.id === id) || null;
  }

  getProducts(search: string = ''): ProductDetail[] {
    const searchLower = search.toLowerCase();
    return this.products.filter((product) =>
      product.title.toLowerCase().includes(searchLower),
    );
  }

  createProduct(createProductDTO: CreateProductDTO): ProductDetail {
    // Дефолтные значения для customize, если они не были переданы
    const defaultCustomize = {
      milk: ['whole milk'],
      cream: ['without whipped cream'],
      syrup: ['vanilla'],
    };

    const newProduct: ProductDetail = {
      id: (this.products.length + 1).toString(),
      ...createProductDTO,
      customize: createProductDTO.customize
        ? {
            milk: createProductDTO.customize.milk ?? defaultCustomize.milk,
            cream: createProductDTO.customize.cream ?? defaultCustomize.cream,
            syrup: createProductDTO.customize.syrup ?? defaultCustomize.syrup,
          }
        : defaultCustomize,
    };

    this.products.push(newProduct);
    return newProduct;
  }
}

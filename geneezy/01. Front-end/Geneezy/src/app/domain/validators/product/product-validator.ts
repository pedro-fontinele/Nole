import { Product } from "src/app/domain/entity/product/product";

export abstract class ProductValidator{
    public static ProductValidatorEntity(id: number, product: Product): Product {
        if (!product.weight){
           product.weight = 0;
        }

        if (!product.height){
            product.height = 0;
        }

        if (!product.width){
            product.width = 0;
        }

        if (!product.length){
            product.length = 0;
        }

        product.id = id;

        return product;
    }
}
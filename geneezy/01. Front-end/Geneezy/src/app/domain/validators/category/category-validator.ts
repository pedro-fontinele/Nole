import { Category } from 'src/app/domain/entity/category/category';

export abstract class CategoryValidator{
    public static CategoryValidatorEntity(id: number, category: Category): Category {
        category.id = id;  
        return category;
      
    }
}
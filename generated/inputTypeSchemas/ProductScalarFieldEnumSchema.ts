import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','title','category','price','discount','quantity','mainImage','images','description','factoryId','userId','createdAt','updatedAt','styleId']);

export default ProductScalarFieldEnumSchema;

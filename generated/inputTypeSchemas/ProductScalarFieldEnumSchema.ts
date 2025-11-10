import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','title','price','discount','quantity','mainImage','images','description','factoryId','userId','createdAt','updatedAt']);

export default ProductScalarFieldEnumSchema;

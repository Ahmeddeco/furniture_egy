import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','title','price','quantity','size','mainImage','images','description','category','factoryId','modelId']);

export default ProductScalarFieldEnumSchema;

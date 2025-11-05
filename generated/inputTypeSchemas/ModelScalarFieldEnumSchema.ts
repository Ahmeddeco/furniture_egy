import { z } from 'zod';

export const ModelScalarFieldEnumSchema = z.enum(['id','title','factoryId','createdAt','updatedAt','productId']);

export default ModelScalarFieldEnumSchema;

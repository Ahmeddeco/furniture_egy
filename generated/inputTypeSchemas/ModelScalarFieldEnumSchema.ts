import { z } from 'zod';

export const ModelScalarFieldEnumSchema = z.enum(['id','title','factoryId','styleId','createdAt','updatedAt']);

export default ModelScalarFieldEnumSchema;

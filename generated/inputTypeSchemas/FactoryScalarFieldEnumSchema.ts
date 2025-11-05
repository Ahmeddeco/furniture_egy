import { z } from 'zod';

export const FactoryScalarFieldEnumSchema = z.enum(['id','name','phone','country','state','city','logo','email','createdAt','updatedAt']);

export default FactoryScalarFieldEnumSchema;

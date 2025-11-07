import { z } from 'zod';

export const FactoryScalarFieldEnumSchema = z.enum(['id','name','email','phone','country','state','city','logo','createdAt','updatedAt']);

export default FactoryScalarFieldEnumSchema;

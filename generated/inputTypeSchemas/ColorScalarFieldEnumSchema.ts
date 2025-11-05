import { z } from 'zod';

export const ColorScalarFieldEnumSchema = z.enum(['id','title']);

export default ColorScalarFieldEnumSchema;

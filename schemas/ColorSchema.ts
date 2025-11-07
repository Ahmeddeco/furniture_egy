import { z } from 'zod';

/////////////////////////////////////////
// COLOR SCHEMA
/////////////////////////////////////////

export const ColorSchema = z.object({
  id: z.string().nullish(),
  title: z.string(),
})

export type Color = z.infer<typeof ColorSchema>

export default ColorSchema;

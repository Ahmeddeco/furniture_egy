import { z } from 'zod';
import { OrderStatusSchema } from '../inputTypeSchemas/OrderStatusSchema'

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  id: z.string(),
  createdAt: z.date(),
  total: z.number(),
  userId: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

export default OrderSchema;

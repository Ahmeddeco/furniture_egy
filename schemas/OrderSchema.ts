import OrderStatusSchema from '@/generated/inputTypeSchemas/OrderStatusSchema'
import { z } from 'zod'

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  id: z.string().nullish(),
  createdAt: z.date(),
  total: z.number(),
  userId: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

export default OrderSchema

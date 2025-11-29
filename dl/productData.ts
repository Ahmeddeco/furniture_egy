import { isSeller } from "@/functions/isSeller"
import RoleSchema from "@/generated/inputTypeSchemas/RoleSchema"
import prisma from "@/lib/prisma"

/* ----------------------- getAllProductForProductPage ---------------------- */
export const getAllProductForProductPage = async (size: number, page: number,) => {
  try {
    const totalProducts = await prisma.product.count()
    const totalPages = Math.ceil(totalProducts / size)

    const authUser = await isSeller()
    const sellerId = authUser.authRole?.role === RoleSchema.enum.seller ? authUser.session.user?.id : undefined

    const data = await prisma.product.findMany({
      where: {
        userId: sellerId
      },
      select: {
        id: true,
        title: true,
        price: true,
        category: true,
        discount: true,
        quantity: true,
        mainImage: true,
        style: { select: { title: true } },
        factory: { select: { name: true } },
        seller: { select: { name: true } }
      },
      orderBy: { createdAt: "desc" },
      take: size,
      skip: (page * size) - size,
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------ getOneProduct ----------------------------- */
export const getOneProduct = async (id: string) => {
  try {
    const data = await prisma.product.findUnique({
      where: {
        id: id,
      }, include: {
        factory: {
          select: {
            id: true,
            name: true
          }
        },
        seller: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}

export const getLatestProduct = async () => {
  try {
    const data = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        title: true,
        price: true,
        category: true,
        discount: true,
        quantity: true,
        mainImage: true,
        style: { select: { title: true } },
        factory: { select: { name: true } },
        seller: { select: { name: true } }
      }
    })
    return data
  } catch (error) {
    console.error(error)
  }
}
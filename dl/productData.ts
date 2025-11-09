import { prisma } from "@/lib/prisma"

export const getAllProductForProductPage = async (size: number, page: number) => {
  try {
    const totalProducts = await prisma.product.count()
    const totalPages = Math.ceil(totalProducts / size)
    const data = await prisma.product.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        discount: true,
        quantity: true,
        mainImage: true,
        factory: {
          select: {
            id: true,
            name: true
          }
        },
        model: {
          select: {
            id: true,
            title: true
          }
        },
        seller: {
          select: {
            id: true,
            name: true
          }
        }
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
        model: {
          select: {
            id: true,
            title: true
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
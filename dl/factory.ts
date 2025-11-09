import { prisma } from "@/lib/prisma"

/* ------------------------------ getAllFactory ----------------------------- */
export const getAllFactory = async (size: number, page: number) => {
  try {
    const totalUsers = await prisma.user.count()
    const totalPages = Math.ceil(totalUsers / size)
    const data = await prisma.factory.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
        // createdAt: "desc",
        name: "asc",
      },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------ getOneFactory ----------------------------- */
export const getOneFactory = async (id: string) => {
  try {
    const data = await prisma.factory.findUnique({
      where: {
        id: id,
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}

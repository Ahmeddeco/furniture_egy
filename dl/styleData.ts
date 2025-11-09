import { prisma } from "@/lib/prisma"

export const getAllStyles = async (size: number, page: number) => {
  try {
    const totalUsers = await prisma.style.count()
    const totalPages = Math.ceil(totalUsers / size)
    const data = await prisma.style.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
        title: "asc",
      },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}


export const getOneStyle = async (id: string) => {
  try {
    const data = await prisma.style.findUnique({
      where: {
        id: id,
      },
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}
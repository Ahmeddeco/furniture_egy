import prisma from "@/lib/prisma"

/* ------------------------------ getAllFactory ----------------------------- */
export const getAllFactory = async (size: number, page: number) => {
  try {
    const totalFactories = await prisma.factory.count()
    const totalPages = Math.ceil(totalFactories / size)
    const data = await prisma.factory.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
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

export const getAllFactoryForDropdown = async () => {
  try {
    const data = await prisma.factory.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } })
    return data
  } catch (error) {
    console.error(error)
  }
}
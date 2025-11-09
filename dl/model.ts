import { prisma } from "@/lib/prisma"

export type AllFactoriesForModel = {
  id: string
  name: string
}[] | undefined

export type AllStylesForModel = {
  id: string
  title: string
}[] | undefined

export type OneModel = {
  data: ({
    style: {
      id: string
      title: string
    }
    factory: {
      id: string
      name: string
    }
  } & {
    id: string
    title: string
    factoryId: string
    styleId: string
    createdAt: Date
    updatedAt: Date
  }) | null
} | undefined
/* ------------------------- getAllFactoriesForModel ------------------------ */
export const getAllFactoriesForModel = async () => {
  try {
    const data = await prisma.factory.findMany({ select: { id: true, name: true } })
    return data
  } catch (error) {
    console.error(error)
  }
}

/* -------------------------- getAllStylesForModel -------------------------- */
export const getAllStylesForModel = async () => {
  try {
    const data = await prisma.style.findMany({ select: { id: true, title: true } })
    return data
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------ getAllModels ------------------------------ */
export const getAllModels = async (size: number, page: number) => {
  try {
    const totalModels = await prisma.model.count()
    const totalPages = Math.ceil(totalModels / size)
    const data = await prisma.model.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
        title: "asc",
      }, include: {
        factory: {
          select: {
            id: true,
            name: true
          }
        },
        style: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}


export const getOneModel = async (id: string) => {
  try {
    const data = await prisma.model.findUnique({
      where: {
        id: id,
      }, include: {
        factory: {
          select: {
            id: true,
            name: true
          }
        },
        style: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}
import prisma from "@/lib/prisma"

/* ------------------------------ getAllStyles ------------------------------ */
export const getAllStyles = async (size: number, page: number) => {
  try {
    const totalStyles = await prisma.style.count()
    const totalPages = Math.ceil(totalStyles / size)
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

/* ------------------------------- getOneStyle ------------------------------ */
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

/* ------------------------- getAllStylesForDropdown ------------------------ */
export const getAllStylesForDropdown = async () => {
  try {
    const data = await prisma.style.findMany({ orderBy: { title: "asc" }, select: { id: true, title: true } })
    return data
  } catch (error) {
    console.error(error)
  }
}
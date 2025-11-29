import prisma from "@/lib/prisma"


/* ------------------------------ get all users ----------------------------- */
export const getAllUsers = async (size: number, page: number) => {

  try {
    const totalUsers = await prisma.user.count()
    const totalPages = Math.ceil(totalUsers / size)
    const data = await prisma.user.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
        createdAt: "desc",
      },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------- getOneUser ------------------------------- */
export const getOneUser = async (id: string) => {
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------ getAllSellersForDropdown ------------------------ */
export const getAllSellersForDropdown = async () => {
  try {
    const data = await prisma.user.findMany({
      where: { role: { in: ["seller", "admin"] } },
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    })
    return data
  } catch (error) {
    console.error(error)
  }
}
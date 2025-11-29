import { PrismaClient, Role } from '@/generated/prisma/client'
import { faker } from '@faker-js/faker'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  /* ------------------------------ Create a User ----------------------------- */
  await prisma.user.createMany({
    data: Array.from({ length: 10 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      mobile: faker.phone.number({ style: "international" }),
      country: faker.location.country(),
      state: faker.location.state(),
      city: faker.location.city(),
      role: faker.helpers.enumValue(Role),
      image: faker.image.personPortrait(),
    })), skipDuplicates: true
  })
}

/* ------------------- Create a Factory owned by that User ------------------ */
await prisma.factory.createMany({
  data: Array.from({ length: 10 }).map(() => ({
    name: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: "international" }),
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    logo: faker.image.avatar(),
  })), skipDuplicates: true
})

/* ----------------------------- Create a Style ----------------------------- */
await prisma.style.createMany({
  data: [
    {
      title: "Traditional",
      description: "Ornate, formal designs inspired by European classics. Rich woods, carved details, and luxurious fabrics create a timeless, elegant feel.",
    },
    {
      title: "Modern",
      description: "Early 20th-century style focused on clean lines, functionality, and simplicity. Uses steel, glass, and lighter woods with minimal ornamentation.",
    },
    {
      title: "Contemporary",
      description: "Current, trend-driven style that blends modern minimalism with bold accents. Neutral palettes, sleek silhouettes, and mixed materials.",
    },
    {
      title: "Mid-Century Modern",
      description: "Retro yet timeless look from the 1950s–60s. Features organic shapes, tapered legs, and warm woods like teak.",
    },
    {
      title: "Industrial",
      description: "Inspired by factories and warehouses. Exposed steel, reclaimed wood, and raw finishes give an urban, edgy vibe.",
    },
    {
      title: "Rustic",
      description: "Natural, handmade feel with wood, stone, and earthy textures. Cozy and warm, often emphasizing imperfections.",
    },
    {
      title: "Scandinavian",
      description: "Bright and minimalist with light woods, neutral colors, and functional design. Creates airy, uncluttered spaces.",
    },
    {
      title: "Bohemian",
      description: "Eclectic and artistic, mixing vibrant textiles, layered décor, and global influences. Relaxed and expressive.",
    },
    {
      title: "Farmhouse",
      description: "Vintage-inspired with distressed wood, whitewashed finishes, and cozy charm. Homely and inviting.",
    },
    {
      title: "Art Deco",
      description: "Glamorous style from the 1920s–30s. Geometric patterns, glossy finishes, and bold colors create a luxurious atmosphere.",
    },
  ]
})

main()
  .then(() => console.log("Seeding complete"))
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
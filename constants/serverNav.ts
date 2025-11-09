import { Armchair, ChartColumnIncreasing, ClipboardList, Eye, Factory, PcCase, Shapes, SwatchBook, User2 } from "lucide-react"

export const serverNav = [
  {
    title: "server",
    href: "/server",
    icon: PcCase
  },
  {
    title: "information",
    href: "/information",
    icon: ChartColumnIncreasing
  },
  {
    title: "Users",
    href: "/server/users",
    icon: User2
  },
  {
    title: "factories",
    href: "/server/factories",
    icon: Factory
  },
  {
    title: "styles",
    href: "/server/styles",
    icon: SwatchBook
  },
  {
    title: "models",
    href: "/server/models",
    icon: Shapes
  },
  {
    title: "Products",
    href: "/server/products",
    icon: Armchair
  },
  {
    title: "orders",
    href: "/server/orders",
    icon: ClipboardList
  },
  {
    title: "reviews",
    href: "/server/reviews",
    icon: Eye
  },
]
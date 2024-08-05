"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Ecommerce websites",
    href: "#",
    description:
      "Websites for selling digital all other products on the internet",
  },
  {
    title: "Personal websites",
    href: "#",
    description:
      "Websites for your own personal portofolio. Optimised for artists, influencers and so on.",
  },
  {
    title: "Institution Websites",
    href: "#",
    description:
      "Websites for established companies, institutions and NGOs",
  },
  {
    title: "School websites",
    href: "#",
    description: "Websites for schools to showcase achievements, announcements, and registrarion information",
  },
  {
    title: "Startup Landing pages",
    href: "#",
    description:
      "Websites for companies that are raising funds, or still in development.",
  },
  {
    title: "Blogs",
    href: "#",
    description:
      "Website for people to publish their own thoughts to supporters, or News agencies",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Calcade Inc
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      The go-to web development firm in Rwanda. Responsive, fast and modern websites that drive revenue.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Web design">
                Wireframing, UI and UX research as well as User flows.
              </ListItem>
              <ListItem href="#" title="Development">
                We transform any idea or design into code using modern programming frameworks
              </ListItem>
              <ListItem href="#" title="Web maintenance">
                We maintain already exisiting websites, finding bugs and fixing them.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What we build</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" className="text-sm font-medium">
              Contact Us
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

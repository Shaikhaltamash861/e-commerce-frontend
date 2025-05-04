
import { useState } from "react"
import { Bell, Heart, Menu, Search, ShoppingCart, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// import { SidebarFilters } from "./sidebar-filters"

export default function Header() {
    const [cartCount, setCartCount] = useState(3)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            {/* Top Bar */}
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Mobile Menu Trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                        <div className="py-4">
                            {/* <SidebarFilters /> */}
                        </div>
                    </SheetContent>
                </Sheet> 

                {/* Logo */}
                <ShoppingCart className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold">PrimeLand</span>

                {/* Search Bar - Desktop */}
                <div className="hidden flex-1 px-6 lg:block lg:max-w-2xl">
                    <form className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search products..." className="w-full pl-8 pr-10" />
                        <Button type="submit" size="sm" className="absolute h-full right-0 top-0 rounded-l-none">
                            Search
                        </Button>
                    </form>
                </div>

                {/* Navigation Icons */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Wishlist</span>
                    </Button>
                    {/* <Button variant="ghost" size="icon" asChild>
                     <User className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                    </Button> */}
                    {/* <Button variant="ghost" size="icon" className="relative" asChild>
                    
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">{cartCount}</Badge>
                        )}
                        <span className="sr-only">Cart</span>
                    </Button> */}
                </div>
            </div>

            {/* Search Bar - Mobile */}
            {/* <div className="border-t py-2 lg:hidden">
        <div className="container mx-auto px-4">
          <form className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full pl-8" />
          </form>
        </div>
      </div> */}
        </header>
    )
}

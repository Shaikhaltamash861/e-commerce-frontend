import { Suspense } from "react"
import {Link }from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/molecules/Productcard" 
import Header from "@/components/molecules/Header"
import Footer from "@/components/molecules/Footer"

function Dashboard() {
    return (
        <div className="flex min-h-screen flex-col">
        
          <main className="flex-1">
            {/* Hero Banner */}
            <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700">
              <div className="container mx-auto flex h-full flex-col items-start justify-center px-4 text-white">
                <h1 className="mb-2 text-4xl font-bold">Summer Sale</h1>
                <p className="mb-6 text-xl">Up to 50% off on selected items</p>
                <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
                  Shop Now
                </Button>
              </div>
            </div>
    
            {/* Quick Links */}
            <div className="border-b bg-background py-4">
              <div className="container mx-auto px-4">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="deals">Today's Deals</TabsTrigger>
                    <TabsTrigger value="electronics">Electronics</TabsTrigger>
                    <TabsTrigger value="fashion">Fashion</TabsTrigger>
                    <TabsTrigger value="home">Home & Kitchen</TabsTrigger>
                    <TabsTrigger value="books">Books</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
    
            {/* Main Content */}
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                {/* Sidebar Filters */}
                <div className="hidden w-64 shrink-0 lg:block">
                  {/* <SidebarFilters /> */}
                </div>
    
                {/* Products Grid */}
                <div className="flex-1">
                  {/* Featured Products */}
                  <section className="mb-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Featured Products</h2>
                      <Link to="#" className="flex items-center text-sm text-teal-600 hover:underline">
                        View all <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="1"
                          title="Wireless Noise Cancelling Headphones"
                          price={149.99}
                          originalPrice={199.99}
                          rating={4.5}
                          reviewCount={1245}
                          image="/placeholder.svg?height=200&width=200"
                          badge="Sale"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="2"
                          title="Smart Watch Series 5"
                          price={299.99}
                          rating={4.8}
                          reviewCount={856}
                          image="/placeholder.svg?height=200&width=200"
                          badge="New"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="3"
                          title="Portable Bluetooth Speaker"
                          price={79.99}
                          originalPrice={99.99}
                          rating={4.2}
                          reviewCount={532}
                          image="/placeholder.svg?height=200&width=200"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="4"
                          title="Ergonomic Office Chair"
                          price={199.99}
                          rating={4.6}
                          reviewCount={324}
                          image="/placeholder.svg?height=200&width=200"
                        />
                      </Suspense>
                    </div>
                  </section>
    
                  {/* Today's Deals */}
                  <section className="mb-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Today's Deals</h2>
                      <Link to="#" className="flex items-center text-sm text-teal-600 hover:underline">
                        View all <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="5"
                          title="Smart Home Security Camera"
                          price={59.99}
                          originalPrice={89.99}
                          rating={4.3}
                          reviewCount={678}
                          image="/placeholder.svg?height=200&width=200"
                          badge="Deal"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="6"
                          title="Robot Vacuum Cleaner"
                          price={249.99}
                          originalPrice={349.99}
                          rating={4.7}
                          reviewCount={412}
                          image="/placeholder.svg?height=200&width=200"
                          badge="Deal"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="7"
                          title="Stainless Steel Cookware Set"
                          price={129.99}
                          originalPrice={179.99}
                          rating={4.4}
                          reviewCount={289}
                          image="/placeholder.svg?height=200&width=200"
                          badge="Deal"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="8"
                          title="Wireless Charging Pad"
                          price={24.99}
                          originalPrice={39.99}
                          rating={4.1}
                          reviewCount={567}
                          image="/placeholder.svg?height=200&width=200"
                          badge="Deal"
                        />
                      </Suspense>
                    </div>
                  </section>
    
                  {/* Recommended for You */}
                  <section>
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Recommended for You</h2>
                      <Link to="#" className="flex items-center text-sm text-teal-600 hover:underline">
                        View all <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="9"
                          title="Fitness Tracker"
                          price={49.99}
                          rating={4.2}
                          reviewCount={345}
                          image="/placeholder.svg?height=200&width=200"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="10"
                          title="Wireless Earbuds"
                          price={89.99}
                          rating={4.6}
                          reviewCount={721}
                          image="/placeholder.svg?height=200&width=200"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="11"
                          title="Digital Drawing Tablet"
                          price={159.99}
                          rating={4.4}
                          reviewCount={234}
                          image="/placeholder.svg?height=200&width=200"
                        />
                      </Suspense>
                      <Suspense fallback={<ProductCardSkeleton />}>
                        <ProductCard
                          id="12"
                          title="Portable Power Bank"
                          price={39.99}
                          rating={4.3}
                          reviewCount={512}
                          image="/placeholder.svg?height=200&width=200"
                        />
                      </Suspense>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
    
          {/* Footer */}
          <Footer/>
        </div>
      )
}

export default Dashboard

function ProductCardSkeleton() {
    return (
      <Card className="overflow-hidden">
        <div className="aspect-square w-full">
          <Skeleton className="h-full w-full" />
        </div>
        <CardContent className="p-4">
          <Skeleton className="mb-2 h-4 w-2/3" />
          <Skeleton className="mb-2 h-6 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    )
  }
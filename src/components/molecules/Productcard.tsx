import {Link } from "react-router-dom"
import { ShoppingCart, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  badge?: string
}

export function ProductCard({ id, title, price, originalPrice, rating, reviewCount, image, badge }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${id}`} className="relative block aspect-square overflow-hidden">
        {badge && <Badge className="absolute left-2 top-2 z-10">{badge}</Badge>}
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="line-clamp-2 text-sm font-medium hover:underline">{title}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
          )}
          {originalPrice && (
            <Badge variant="outline" className="ml-auto text-xs font-normal text-green-600">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

import { Separator } from "@radix-ui/react-dropdown-menu"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Shop</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Deals
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        New Releases
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Gift Ideas
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Shipping Info
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Account</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Your Account
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Track Packages
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold">About</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Press Center
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-muted-foreground hover:text-foreground">
                        Sustainability
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm text-muted-foreground">© 2023 ShopSmart. All rights reserved.</p>
                <div className="flex gap-4">
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Settings
                  </Link>
                </div>
              </div>
            </div>
          </footer>
  )
}

export default Footer
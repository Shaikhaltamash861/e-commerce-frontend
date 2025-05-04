import { Button } from "@/components/ui/button";
import { House, LayoutDashboard, Menu, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="flex w-20 h-screen flex-col gap-2.5 items-center border-r">

            <div className="py-2">
                <Button variant="ghost" size="icon" className="rounded-b-full">
                    <Menu />
                </Button>
            </div>
            <div className="flex flex-col gap-2.5">
                <Button variant="ghost" size="icon">
                    <House />
                </Button>
                <Button variant="ghost" size="icon">
                    <ShoppingBag />
                </Button>
                <Link to="/products">
                <Button variant="ghost" size="icon">
                    <LayoutDashboard />
                </Button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar


import Header from "@/components/molecules/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
        <div className="flex min-h-screen flex-col">
            <Header/>
            <div>
                <Outlet/>
            </div>

        </div>
        </>
    )
}

export default MainLayout
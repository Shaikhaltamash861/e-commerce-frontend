import Header  from "@/components/molecules/Header";
import Sidebar from "@/components/molecules/Sidebar";

import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <div className="flex">
                {/* <Sidebar /> */}
                <div className="w-full">
                    {/* <Header/> */}
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainLayout
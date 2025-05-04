

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
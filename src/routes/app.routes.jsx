import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SideMenu } from "../components/SideMenu";
import { Dish } from "../pages/Dish";
import { New } from "../pages/New";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<SideMenu />} />
            <Route path="/dish" element={<Dish />} />
            <Route path="/new" element={<New />} />
        </Routes>
    )
}
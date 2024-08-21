import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SideMenu } from "../components/SideMenu";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import {EditDish} from '../pages/EditDish'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewDish />} />
            <Route path="/edit/:id" element={<EditDish />} />
            <Route path="/menu" element={<SideMenu />} />
            <Route path="/dishes/:id" element={<Dish />} />
        </Routes>
    )
}
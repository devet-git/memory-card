import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
      </Routes>
   )
}
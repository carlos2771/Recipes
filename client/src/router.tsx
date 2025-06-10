import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeInfoPage from "./pages/RecipeInfoPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

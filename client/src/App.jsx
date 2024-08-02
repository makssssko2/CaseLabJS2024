import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/HomePage/MainPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import "./css/index.css";
import Layout from "./components/Layout/Layout";

export default function App() {
    return (
        <Routes>
            <Route path="" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/album" element={<AlbumPage/>}></Route>
            </Route>
        </Routes>
    );
}

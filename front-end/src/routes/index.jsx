import TeacherLogin from "../pages/TeacherLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/professor" element={<TeacherLogin />} />
            </Routes>
        </BrowserRouter>
    );
}
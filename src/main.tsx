import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import {Home} from "./pages/Home.tsx";
import {Suspense} from "react";
import {Branches} from "./pages/Branches.tsx";
import {AboutUs} from "./pages/AboutUs.tsx";
import {Contact} from "./pages/Contact.tsx";

const root = createRoot(document.getElementsByTagName('main')[0]);

root.render(
    <BrowserRouter>
        <Suspense fallback={<p>Cargando...</p>}>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/*'} element={<Home />} />
                <Route path={'/sucursales'} element={<Branches />} />
                <Route path={'/sobre-nosotros'} element={<AboutUs />} />
                <Route path={'/contacto'} element={<Contact />} />
            </Routes>
        </Suspense>
    </BrowserRouter>,
);

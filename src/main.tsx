import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home.tsx";
import {Branches} from "./pages/Branches.tsx";
import {AboutUs} from "./pages/AboutUs.tsx";
import {Contact} from "./pages/Contact.tsx";
import './index.css';

const root = createRoot(document.getElementsByTagName('main')[0]);

root.render(
    <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/*'} element={<Home />} />
                <Route path={'/sucursales'} element={<Branches />} />
                <Route path={'/sobre-nosotros'} element={<AboutUs />} />
                <Route path={'/contacto'} element={<Contact />} />
            </Routes>
    </BrowserRouter>,
);

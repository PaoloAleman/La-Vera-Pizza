import { Header } from "../components/Header.tsx";
import { Link } from "react-router-dom";
import {Footer} from "../components/Footer.tsx";

export const Contact = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-20 max-w-3xl text-white min-h-screen">
                <h1 className="text-5xl font-bold text-[#dc9d25] mb-6 text-center font-viera">Contacto</h1>

                <p className="text-center text-lg mb-10">
                    ¿Tenés dudas, querés hacer un pedido o simplemente saludarnos? Escribinos por cualquiera de
                    nuestras redes y te respondemos al toque.
                </p>

                <div className="card shadow-[0_0_10px_#dc9d25] hover:shadow-[0_0_20px_#dc9d25] transition-shadow duration-300 py-12 px-8">
                    <div className="grid grid-cols-4 gap-8 justify-items-center">
                        <a href="mailto:paoloaleman86@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
                            <img src="/gmail.svg" alt="Gmail"
                                 className="md:w-14 w-12 hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_10px_#dc9d25]"/>
                        </a>
                        <a href="https://wa.me/qr/O6PGT4RAMINRM1" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                            <img src="/whatsapp.svg" alt="Whatsapp"
                                 className="md:w-14 w-12 hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_10px_#dc9d25]"/>
                        </a>
                        <a href="https://www.instagram.com/paolo_2309/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <img src="/instagram.svg" alt="Instagram"
                                 className="md:w-14 w-12 hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_10px_#dc9d25]"/>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" title="TikTok">
                            <img src="/tiktok.svg" alt="TikTok"
                                 className="md:w-14 w-12 hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_10px_#dc9d25]"
                            />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link to="/sucursales">
                        <button className="btn bg-[#dc9d25] text-white text-lg px-8 shadow-[0_0_10px_#dc9d25] hover:shadow-[0_0_20px_#dc9d25] transition-shadow duration-300">
                            Ver sucursales
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-10 px-4 mt-0">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div className={'mx-auto'}>
                    <h2 className="text-2xl font-bold text-[#dc9d25] mb-4">La Vera Pizza</h2>
                    <p className="text-sm">
                        Masa artesanal, ingredientes frescos y ese sabor
                        italiano que te hace sentir como en casa. ¡Te esperamos con la muzza bien caliente y el horno
                        siempre encendido!
                    </p>
                </div>

                <div className={'mx-auto'}>
                    <h3 className="text-lg font-semibold text-[#dc9d25] mb-4">Enlaces rápidos</h3>
                    <ul className="grid grid-cols-2 space-y-2 text-sm">
                        <li><Link to="/" className="hover:underline">Inicio</Link></li>
                        <li><Link to="/sucursales" className="hover:underline">Sucursales</Link></li>
                        <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
                        <li><Link to="/sobre-nosotros" className="hover:underline">Sobre Nosotros</Link></li>
                    </ul>
                </div>

                <div className={'mx-auto'}>
                    <h3 className="text-lg font-semibold text-[#dc9d25] mb-4">Seguinos</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://www.instagram.com/paolo_2309/" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.svg" alt="Instagram" className="w-6 hover:scale-110 transition" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/tiktok.svg" alt="TikTok" className="w-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://wa.me/qr/O6PGT4RAMINRM1" target="_blank" rel="noopener noreferrer">
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 hover:scale-110 transition" />
                        </a>
                        <a href="mailto:paoloaleman86@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="/gmail.svg" alt="Gmail" className="w-6 hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10">
                © {new Date().getFullYear()} La Vera Pizza. Todos los derechos reservados.
            </div>
        </footer>
    );
};

import { Header } from "../components/Header.tsx";
import { Link } from "react-router-dom";
import {Footer} from "../components/Footer.tsx";

export const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-20 max-w-3xl text-white">
                <h1 className="text-5xl font-bold text-[#dc9d25] mb-6 text-center font-viera">Sobre Nosotros</h1>
                <p className="text-lg leading-relaxed mb-4">
                    En <strong>La Vera Pizza</strong>, creemos que una buena pizza no solo se come, se vive. Desde nuestros inicios, nos propusimos llevar a cada mesa el verdadero sabor italiano, con el toque criollo que tanto nos representa.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Nuestra masa es casera, preparada todos los días con ingredientes frescos y mucho amor. Cada muzza que sale del horno cuenta una historia: la de la familia, la amistad y los buenos momentos compartidos alrededor de una porción humeante.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Somos un equipo de apasionados por la pizza, por eso cada detalle importa. Desde la selección de la muzarella hasta el tomate triturado con receta propia, buscamos que cada visita a nuestras sucursales sea una experiencia para repetir.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                    Gracias por elegirnos. ¡Nos vemos en el mostrador o te lo llevamos a casa!
                </p>

                <div className="text-center">
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

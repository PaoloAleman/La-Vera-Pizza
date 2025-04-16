import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className=" navbar bg-black shadow-md px-4 py-3 z-10 relative">
            <div className="flex-1">
                <Link to="/" className="font-viera text-4xl text-[#dc9d25] hover:opacity-90 transition-opacity">
                    La Vera Pizza
                </Link>
            </div>

            <div className="dropdown dropdown-end">
                <label
                    tabIndex={0}
                    className="btn btn-ghost w-12 h-12 p-0 bg-black hover:bg-[#dc9d25]/20 transition"
                >
                    <img
                        src="/threePoints.svg"
                        alt="Menú"
                        className="w-6 h-6 mx-auto"
                    />
                </label>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-2 p-2 bg-black rounded-box shadow-[0_0_20px_#dc9d25] w-52 text-[#dc9d25] animate-fade-in"
                >
                    <li>
                        <Link to="/sucursales" className="hover:bg-[#dc9d25]/10 rounded-md p-2">
                            Sucursales
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre-nosotros" className="hover:bg-[#dc9d25]/10 rounded-md p-2">
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="hover:bg-[#dc9d25]/10 rounded-md p-2">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

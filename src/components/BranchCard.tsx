import { Branch } from "../types/types.tsx";

export const BranchCard = ({ branch }: { branch: Branch }) => {
    return (
        <div className="card shadow-[0_0_10px_#dc9d25] hover:shadow-[0_0_20px_#dc9d25] transition-shadow duration-300">
            <figure className="relative w-full h-48 overflow-hidden">
                <a
                    href={branch.linkGoogleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block"
                >
                    <img
                        src={branch.image}
                        alt={`Sucursal en ${branch.city}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#dc9d25] opacity-0 hover:opacity-30 transition-opacity duration-300" />
                </a>
            </figure>

            <div className="card-body text-white text-base md:text-lg space-y-4">
                <h2 className="card-title text-center text-[#dc9d25] text-2xl">{branch.city}</h2>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                        <p>
                            <strong className="text-[#dc9d25]">Dirección: </strong>
                            {branch.address}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong className="text-[#dc9d25]">Teléfonos: </strong>
                            {branch.cellphone.map((cell, index) => (
                                <span key={index}>
                                    {cell}
                                    {index < branch.cellphone.length - 1 && " / "}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                        <p>
                            <strong className="text-[#dc9d25]">Tarjeta: </strong>
                            {branch.acceptCard ? "Sí" : "No"}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong className="text-[#dc9d25]">Delivery gratis: </strong>
                            {branch.freeDelivery ? "Sí" : "No"}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong className="text-[#dc9d25]">Parque: </strong>
                            {branch.hasInflatable ? "Sí" : "No"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

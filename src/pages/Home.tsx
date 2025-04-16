export const Home = () => {
    return (
        <div className="relative min-h-screen bg-[url('/hero-bg.webp')] bg-cover bg-center">
            <div className="absolute bg-black opacity-80 z-0 inset-0"></div>
            <div
                className="relative z-10 text-center flex flex-col gap-6 items-center justify-center min-h-[93.2vh] text-white px-4">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl text-[#dc9d25] font-bold drop-shadow-lg">
                        Bienvenidos a La Vera Pizza
                    </h1>
                    <p className="mb-5 text-lg">
                        Masa artesanal, ingredientes frescos y ese sabor
                        italiano que te hace sentir como en casa. ¡Te esperamos con la muzza bien caliente y el horno
                        siempre encendido!
                    </p>

                    <button
                        className="btn bg-[#dc9d25] text-white text-lg px-8 shadow-[0_0_10px_#dc9d25] hover:shadow-[0_0_20px_#dc9d25] transition-shadow duration-300"
                    >
                        <a href="/sucursales">Ver sucursales</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
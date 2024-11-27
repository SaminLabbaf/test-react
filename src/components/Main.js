export default function Main({products}) {
    return (
        <main>
            {
                products.map((product, i) => (
                    <div className="shadow-lg flex flex-col justify-between">
                        <img 
                        className="w-64 h-32 round"
                            src={product.image}
                            alt={product.image}
                        />
                        <h2>{product.name}</h2>
                    </div>
                ))
            }
        </main>
    )
}
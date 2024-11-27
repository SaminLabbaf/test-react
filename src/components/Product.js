export default function Product({product}) {
    return (
        <div className="max-w-48 max-h-72 shadow-lg flex flex-col justify-between">
                        <img 
                        className="w-64 h-32 round"
                            src={product.image}
                            alt={product.image}
                        />
                        <h2 className="font-bold">{product.name}</h2>
                    </div>
    )
}
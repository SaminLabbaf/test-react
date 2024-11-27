import Product from "./Product";

export default function Main({products}) {
    return (
        <main className="pt-4 gap-4 flex flex-1 flex-wrap justify-center">
            {
                products?.map((product, i) => (
                    <Product product={product} />
                ))
            }
        </main>
    )
}

import { useFetch } from "../../hooks/useFetch/useFetch"
import { useCartStore } from "../../store/cartStore"
import UserCardSkeleton from "../../components/UserCardSkeleton/UserCardSkeleton"
import ProductCard from "../../components/ProductCard/ProductCard"
function Products() {
    const {data :products =[] , loading , error} = useFetch('https://fakestoreapi.com/products')
    const totalItems = useCartStore(state => state.getTotalItems)()
    return (
        <div>
<div className="mb-6 flex items-center justify-between">
<div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Products
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
                Browse our collection
            </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 . rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="text-xl">🛒</span>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {totalItems} items in cart
                </span>
            </div>
            </div>
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                    <p className="text-red-600 font-medium">{error}</p>
                    <button onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg tsxt-sm hover:bg-red-700">
                        Try Again
                    </button>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                {loading && (
                    Array.from ({length:8}).map((_,index)=>
                    <UserCardSkeleton key = {index}/>
                    ))
                }
                {!loading && !error && products && (
                    products.map (product => (
                        <ProductCard key={product.id} product={product}/>

                    ))
                )}
            </div>
        </div>
    )
}

export default Products
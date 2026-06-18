import { useCartStore } from "../../store/cartStore"
import { useMemo , useCallback } from 'react'
function Cart() {
    const cart = useCartStore(state => state.cart)
    const increaseQuantity = useCartStore(state => state.increaseQuantity)
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity)
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const totalPrice = useMemo(() =>{
        return cart.reduce((total,item) =>
        total + (item.price * item.quantity), 0)
    } , [cart])
    const handleIncrease = useCallback((id)=> {
        increaseQuantity(id)
    }, [increaseQuantity])
    const handleDecrease = useCallback((id)=>{
    decreaseQuantity(id)

} , [decreaseQuantity]) 
const handleRemove = useCallback((id)=>
{
    removeFromCart(id)
},[removeFromCart])
   return (
        <div>
            <div className="mb-6">
                <h2 className=" text-2xl font-bold text-gray-800 dark:text-gray-100">
                    My Cart
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    {cart.length} items in your cart
                </p>
            </div>
            {cart.length === 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
                    <p className="text-5xl mb-4">🛒</p>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Your cart is empty
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        Go to Products and add something!
                    </p>
                </div>
            )}
            {cart.length > 0 && (
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-4">
                            <img src={item.image}
                                alt={item.title}
                                className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-1" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-1">{item.title}</p>
                                <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleDecrease(item.id)}
                                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-bold">
                                    -
                                </button>
                                <span className="w-8 text-center font-semibold
                 text-gray-800 dark:text-gray-100">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => handleIncrease(item.id)}
                                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-bold">
                                    +
                                </button>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors mt-2">
                                    🗑
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="bg-white dark:bg-gray-800  rounded-xl border border-gray-200 dark:border-gray-700 p-6" >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Total
                            </span>
                            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>
                        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
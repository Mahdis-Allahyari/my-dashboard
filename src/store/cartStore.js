import { create } from "zustand";

export const useCartStore = create ((set,get)=>({
    cart:[],
    addToCart :(product) =>{
        const existingItem = get().cart.find(item =>item.id === product.id)
        if (existingItem){
            set(state =>({
                cart:state.cart.map(item => 
                    item.id === product.id? {...item , quantity :item.quantity + 1}
                    : item
                )
            }))

        } else {
            set(state => ({
                cart: [...state.cart , { ... product , quantity : 1}]
            }))
        }
    },
    increaseQuantity : (productId) => {
        set(state => ({
            cart : state.cart.map(item => item.id === productId
            ? { ...item,quantity : item.quantity + 1 }: item )

        }))
        },
        decreaseQuantity : (productId) => {
            const existingItem = get ().cart.find (item => item.id === productId)
            if (existingItem.quantity === 1){
                set (state => ({
                    cart : state.cart.filter(item => item.id !== productId)

                }))
            }else {
                set(state => ({
                    cart : state.cart.map(item =>
                        item.id === productId
                        ? { ...item , quantity:item.quantity - 1} 
                        : item)
            }))
            }
    },
    removeFormCard :(productId) => {
        set(state => ({
            cart: state.cart.filter(item => item.id !== productId)

        }))
    },
    getTotalItems :() =>{
        return get().cart.reduce((total,item)=> total + item.quantity , 0)
    },
    getTotalPrice :()=>{
        return get().cart.reduce((total,item)=> total + (item.price * item.quantity),0)
    }
}))
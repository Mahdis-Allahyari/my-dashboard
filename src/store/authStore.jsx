import { create } from "zustand";


export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    user: null,
    token: null,

    login: (userData, token) => {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(userData))
        set({
            isAuthenticated: true,
            user: userData,
            token: token
        })
    },
    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        set({
            isAuthenticated: false,
            user: null,
            token: null
        })
    },
    initializeAuth: () => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (token && user) {
            set({
                isAuthenticated: true,
                token: token,
                user: JSON.parse(user)
            })
        }
    }

})
)



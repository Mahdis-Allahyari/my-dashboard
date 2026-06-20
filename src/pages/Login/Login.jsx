import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from '../../store/authStore'
import { Button, Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"

function Login() {
    const navigate = useNavigate()
    const login = useAuthStore(state => state.login)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function handleSubmit(values) {
        setLoading(true)
        setError(null)
        setTimeout(() => {
            if (values.email === 'admin@myapp.com' && values.password === 'password123') {
                const userData = {
                    id: 1,
                    name: 'Admin.email',
                    email: values.email
                }
                const fakeToken = 'fake-jwt-token-12345'
                login(userData, fakeToken)
                navigate('/')
            } else {
                setError('Wrong email or password. Try admin@myapp.com / password123')
                setLoading(false)

            }

        }, 1500)
    }
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        MyApp
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        sign in to your account
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
                        <p className="text-red-600 dark:text-red-400 text-sm">
                            {error}
                        </p>
                    </div>
                )}
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}>
                    <FormItem
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' }
                        ]}>
                        <Input
                            placeholder="admin@myapp.com" size="large" />
                    </FormItem>
                    <FormItem
                        label="Password"
                        name="password"
                        rules={[{
                            required: true, message: 'Please enter your password'
                        }]}>
                        <Input.Password placeholder="password123" size="large" />
                    </FormItem>

                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        size="large"
                        className="w-full mt-2"
                        block>
                        {loading ? 'Signing...' : 'Sign In'}
                    </Button>
                </Form>
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
                        Demo credentials:
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                        Email:admin@myapp.com
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                        Password :password123
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Login

import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(email, password);
        navigate("/");
      } catch (err) {
        setError("Invalid credentials");
      }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 mx-2 bg-white rounded-3xl shadow-md border-2 ">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-50 rounded-full">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6C8.5 6 6 8.5 6 12" />
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-center text-gray-900">Welcome to PrimeLand!</h1>
                    <p className="mt-2 text-sm text-center text-gray-500">Sign in to continue</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                        </div>
                        <Input type="email" placeholder="Email" className="px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                        </div>
                        <div className="relative">
                            <Input type={showPassword ? "text" : "password"} placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <Eye className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <Button onClick={handleSubmit}
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-500"
                    > Sign In</Button>

                    {/* <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button> */}
                </div>
            </div>
        </div>
    );
}

export default Login
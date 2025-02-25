import { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";

const LoginPage = () => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    const handleClick = async (e) => {
        e.preventDefault();
        if (userName !== "" && password !== "") {
            auth.loginAction({ userName: userName, password: password });
            return;
        }
    }

    return (
        <div className="w-full h-screen bg-gradient-to-r from-fuchsia-800/80 to-fuchsia-900/70 flex items-center justify-center">
            <div className="bg-white p-6 md:w-[400px] w-[90%] rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center text-fuchsia-500 mb-6">به SOHO خوش آمدید.</h1>
                <form className="flex flex-col items-center" onSubmit={handleClick}>
                    <input
                        className="w-full mt-3 p-3 border border-fuchsia-600 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        type="text"
                        placeholder="نام کاربری"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="w-full mt-4 p-3 border border-fuchsia-600 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        type="password"
                        placeholder="رمز عبور"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full mt-5 py-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-900/70 text-white rounded-md hover:bg-fuchsia-700 transition duration-200"
                    >
                        ورود
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

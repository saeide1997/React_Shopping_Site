import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../hooks/AuthProvider";

const RegisterPage = () => {
  const [userInf, setUserInf] = useState([]);
  const auth = useAuth();

  const handleChange = (e) => {
    setUserInf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      ...userInf,
      role: "user",
    };
    auth.registerAction(user);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-fuchsia-800/80 to-fuchsia-900/70 flex items-center justify-center">
      <div className="p-6 sm:p-10 bg-white shadow-2xl rounded-2xl w-[90%] sm:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
          به <span className="text-fuchsia-500 font-bold">SOHO</span> خوش آمدید
        </h1>
        <p className="text-gray-500 text-center mt-2">لطفاً اطلاعات خود را وارد کنید.</p>
        
        <form className="mt-6 flex flex-col gap-4">
          <input className="input-field" type="text" onChange={handleChange} name="fullname" placeholder="نام کامل" />
          <input className="input-field" type="text" onChange={handleChange} name="userName" placeholder="نام کاربری" />
          <input className="input-field" type="text" onChange={handleChange} name="mobile" placeholder="موبایل" />
          <input className="input-field" type="email" onChange={handleChange} name="email" placeholder="ایمیل" />
          <input className="input-field" type="password" onChange={handleChange} name="password" placeholder="رمز عبور" />
          <input className="input-field" type="password" placeholder="تکرار رمز عبور" />

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="terms" className="w-4 h-4 text-fuchsia-500" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              شرایط و ضوابط را می‌پذیرم.
            </label>
          </div>

          <button
            onClick={handleClick}
            className="mt-4 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white py-2 rounded-xl shadow-md text-lg font-semibold hover:opacity-90 transition-all"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

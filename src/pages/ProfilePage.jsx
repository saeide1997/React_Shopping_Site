import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useAuth } from "../hooks/AuthProvider";
import { useState } from "react";
import Navbar from "../component/Navbar";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userInf, setUserInf] = useState({});
  const auth = useAuth();

  const handleChange = (e) => {
    setUserInf((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.updateUser(user._id, userInf);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mt-4 mx-auto p-5 flex flex-col lg:flex-row gap-6">
        {/* بخش اطلاعات کاربر */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-1/3">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt="User Avatar"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.fullname}</h2>
              <p className="text-gray-500">{user.role}</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="info-item">
              <PermIdentity className="icon" />
              <span>{user.userName}</span>
            </div>
            <div className="info-item">
              <CalendarToday className="icon" />
              <span>{user.role}</span>
            </div>
            <div className="info-item">
              <PhoneAndroid className="icon" />
              <span>{user.mobile}</span>
            </div>
            <div className="info-item">
              <MailOutline className="icon" />
              <span>{user.email}</span>
            </div>
            <div className="info-item">
              <LocationSearching className="icon" />
              <span>ایران، تبریز</span>
            </div>
          </div>
        </div>

        {/* فرم ویرایش اطلاعات */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold">ویرایش اطلاعات</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" onSubmit={handleSubmit}>
            <InputField label="نام کاربری" name="userName" placeholder={user.userName} onChange={handleChange} />
            <InputField label="نام و نام خانوادگی" name="fullname" placeholder={user.fullname} onChange={handleChange} />
            <InputField label="نقش" name="role" placeholder={user.role} onChange={handleChange} />
            <InputField label="شماره تماس" name="mobile" type="tel" placeholder={user.mobile} onChange={handleChange} />
            <InputField label="ایمیل" name="email" type="email" placeholder={user.email} onChange={handleChange} />
            <InputField label="رمز عبور" name="password" type="password" placeholder="*********" onChange={handleChange} />

            <div className="col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label htmlFor="img" className="cursor-pointer">
                  <Publish className="text-gray-500 hover:text-gray-800 transition-all" />
                </label>
                <input className="hidden" type="file" name="img" id="img" />
                <img className="w-20 h-20 rounded-full" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-all"
              >
                به‌روز‌رسانی
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", placeholder, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
    />
  </div>
);

export default ProfilePage;

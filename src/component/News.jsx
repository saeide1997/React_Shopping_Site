import { Send } from '@mui/icons-material';
import React from 'react';

const News = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // در آینده می‌تونی اینجا ارسال به API رو اضافه کنی
        console.log("ایمیل ارسال شد");
    };

    return (
        <div className="h-auto py-10 px-4 mb-4 shadow-lg bg-gradient-to-l from-fuchsia-800/80 to-fuchsia-800/50 flex items-center justify-center flex-col rounded-lg">
            <h1 className="text-white text-3xl sm:text-4xl mb-4 font-semibold">تازه‌ها</h1>

            <p className="text-white text-base sm:text-lg mb-6 text-center max-w-[90%] md:max-w-[60%]">
                تازه‌ترین اخبار و تخفیف‌ها را از محصولات محبوب‌تان دریافت کنید.
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-[45px] bg-white flex rounded-lg overflow-hidden"
            >
                <input
                    className="w-full py-2 px-4 text-sm sm:text-base border-none focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all duration-200"
                    type="email"
                    placeholder="ایمیل خود را وارد کنید..."
                    required
                />
                <button
                    type="submit"
                    className="bg-fuchsia-600 text-white flex items-center justify-center w-[60px] h-full cursor-pointer hover:bg-fuchsia-700 transition-all duration-300"
                >
                    <Send className="rotate-180" />
                </button>
            </form>
        </div>
    );
};

export default News;

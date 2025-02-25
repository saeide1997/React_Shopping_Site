import { Send } from '@mui/icons-material';
import React from 'react';

const News = () => {
    return (
        <div className='h-[40vh] m-4 shadow-lg bg-gradient-to-l from-fuchsia-800/80 to-fuchsia-800/50 flex items-center justify-center flex-col rounded-lg'>
            <h1 className='text-white text-[40px] mb-5 font-semibold'>تازه ها</h1>
            <div className='text-white text-[18px] mb-5 text-center max-w-[80%] md:max-w-[60%]'>
                تازه ترین اخبارها را از محصول محبوب خود دریافت کنید.
            </div>
            <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-[45px] bg-white flex rounded-lg overflow-hidden'>
                <input
                    className='w-full py-2 px-4 text-lg border-none focus:outline-none rounded-l-lg'
                    type="text"
                    placeholder='ایمیل خود را وارد کنید...'
                />
                <button
                    className='bg-fuchsia-600 text-white  flex items-center justify-center w-[60px] h-full cursor-pointer hover:bg-fuchsia-700 transition-all duration-300 rounded-r-lg'
                >
                    <Send className='rotate-180' />
                </button>
            </div>
        </div>
    );
};

export default News;

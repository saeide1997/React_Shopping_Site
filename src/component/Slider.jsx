import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/rings-png.png';
import img2 from '../assets/images/necklace jewelry-png.png';

const Slider = () => {
    return (
        <div className="m-4 shadow-lg rounded-xl overflow-hidden">
            <Carousel data-bs-theme="dark" className="w-full">
                <Carousel.Item>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full p-5">
                        <div className="flex-1 bg-inherit relative">
                            <img className="h-[70vh] w-full object-cover " src={img1} alt="Discounts" />
                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:p-5 text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">تخفیفات تابستانه</h3>
                            <p className="text-gray-600 mb-6">تخفیفات تابستانه را از دست ندهید...</p>
                            <button className="px-6 py-2 bg-fuchsia-600 text-white rounded-full shadow hover:bg-fuchsia-700 transition duration-300">
                                مشاهده کنید
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full  p-5">
                        <div className="flex-1 relative">
                        <img className=" h-[70vh] w-full object-cover"  src='https://pngimg.com/d/necklace_PNG30.png' alt="First slide"/>                        </div>
                        <div className="flex-1 mt-6 md:mt-0 md:p-5 text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">تخفیفات آخر فصل</h3>
                            <p className="text-gray-600 mb-6">تخفیفات آخر فصل را از دست ندهید...</p>
                            <button className="px-6 py-2 bg-fuchsia-600 text-white rounded-full shadow hover:bg-fuchsia-700 transition duration-300">
                                مشاهده کنید
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;

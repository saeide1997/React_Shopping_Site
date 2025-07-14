import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/slider1.png';
import img2 from '../assets/images/slider2.png';

const Slider = () => {
  return (
    <div className="m-4 shadow-xl rounded-2xl overflow-hidden">
      <Carousel data-bs-theme="dark" className="w-full">
        <Carousel.Item>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 p-6">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={img1}
                alt="تخفیفات تابستانه"
                className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-right space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                تخفیفات تابستانه
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                تخفیفات تابستانه را از دست ندهید...
              </p>
              <button className="inline-block px-6 py-2 bg-fuchsia-600 text-white rounded-full shadow-md hover:bg-fuchsia-700 transition duration-300">
                مشاهده کنید
              </button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 p-6">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={img2}
                alt="تخفیفات آخر فصل"
                className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-right space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                تخفیفات آخر فصل
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                تخفیفات آخر فصل را از دست ندهید...
              </p>
              <button className="inline-block px-6 py-2 bg-fuchsia-600 text-white rounded-full shadow-md hover:bg-fuchsia-700 transition duration-300">
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

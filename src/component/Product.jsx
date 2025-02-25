import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from "../redux/favoriteRedux";

const Product = ({item}) => {
    const dispatch = useDispatch();

    const favorite = useSelector((state) => state.favorite);
    const handleClick = () => {
        dispatch(addProduct({ ...item }));
      };

    return (
        <div className='flex flex-col items-center justify-center my-4 mx-2 w-full max-w-[250px] min-w-[200px] h-[280px] bg-gray-200 rounded-md shadow-md group relative hover:shadow-xl overflow-hidden'>
            <img className='object-contain h-[75%] w-[80%] z-20' src={item.img} alt="" /> 
            <div className='z-30 opacity-5 w-[100%] h-[100%] absolute top-0 right-0 flex items-center justify-center bg-slate-500/30  group-hover:opacity-90 ' >
                {/* <div className=' m-1 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-125'>
                    <ShoppingCartOutlined/>
                </div> */}
                <div className=' m-1 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-125'>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                    </Link>
                </div>
                <div onClick={handleClick} className=' m-1 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-125'>
                    <FavoriteBorderOutlined className='text-red-600'/>
                </div>
                
            </div>
            <div className='text-center mt-3 px-2'>
                <h3 className='text-lg font-semibold text-gray-800 truncate'>{item.title}</h3>
                <span className='text-sm text-gray-600'>{Intl.NumberFormat().format(item.price)} ریال</span>
            </div>
        </div>
    )
};

export default Product;
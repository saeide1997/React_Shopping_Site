import {categories} from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <div className='flex flex-col sm:flex-row m-4 shadoww items-center justify-between  bg-gradient-to-l from-fuchsia-800/80 to-fuchsia-800/50'>
            <h3 className='mr-4 text-white'>دسته‌بندی‌ها</h3>
        <div className='flex flex-wrap p-5 items-center justify-between'>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </div>
        </div>
    );
};

export default Categories;
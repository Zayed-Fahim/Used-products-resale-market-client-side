import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import { BsArrowRight} from "react-icons/bs";

import About from '../About/About';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <About></About>
        <div>
          <div className="flex container mx-auto mt-20 items-center gap-2 h-14 border font-bold text-blue-700">
            <h1 className="text-3xl lg:p-0 p-2">Category you can buy</h1>
            <div className='mt-2'>
              <Link to="/categories">
                <BsArrowRight className="h-8 w-8 text-blue-600"></BsArrowRight>
              </Link>
            </div>
          </div>
          <Categories></Categories>
        </div>
      </div>
    );
};

export default Home;
import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center p-16 w-full mx-auto gap-8'>
      <div className='md:w-1/2'>
        <h1 className='text-xl md:text-2xl font-medium mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam libero? Dolores nihil corrupti tempora, neque assumenda possimus in nobis, facere nemo nam, deleniti ipsum animi expedita consequatur quam ratione?
        </h1>
        <button className='btn btn-primary mt-4'>Test Test</button>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <img className='w-3/4 md:w-full rounded-lg shadow-lg' src={bookimage} alt='Books'/>
      </div>
    </div>
  );
};

export default Banner;


import React from 'react';

const TestimonialCard = ({review}) => {
    return (
      <div class="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
        <p class="leading-loose text-gray-500 dark:text-gray-300">
          {
            review.comments
          }
        </p>

        <div class="flex items-center mt-6">
          <img
            class="object-cover rounded-full w-14 h-14"
            src={review.photoUrl}
            alt=""
          />

          <div class="mx-4">
            <h1 class="font-semibold text-blue-500">{review.name}</h1>
            
          </div>
        </div>
        <div className='text-end'>
            <h1 className='font-bold'>Rating: {review.rating}</h1>
        </div>
      </div>
    );
};

export default TestimonialCard;
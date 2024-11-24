import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import axios from "axios";

const Testimonial = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await axios.get("http://localhost:5000/reviews");
      setReviews(data);
    };
    getReviews();
  }, []);

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span class="text-blue-500 ">clients</span> say
        </h1>

        <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          {reviews?.map((review) => (
            <TestimonialCard review={review} key={review._id}></TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

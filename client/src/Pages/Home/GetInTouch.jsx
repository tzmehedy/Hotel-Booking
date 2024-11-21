import React, { useEffect, useRef } from 'react';
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";






const GetInTouch = () => {
    
    return (
      <div className="flex flex-col md:flex-row justify-center md:space-x-5 p-2">
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-5xl font-bold">Get In Touch</h1>
          <p>
            Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
            felis. Nulla non pulvinar enim, vel viverra nunc
          </p>

          <div className="flex items-center md:space-x-3">
            <div>
              <MdOutlineAddIcCall className="text-5xl text-[#f99810f6]"></MdOutlineAddIcCall>
            </div>
            <div>
              <p>Emergency Help</p>
              <p className="font-bold">+123 ( 458 ) 896 895</p>
            </div>
          </div>
          <div className="flex items-center md:space-x-3">
            <div>
              <MdEmail className="text-5xl text-[#f99810f6]"></MdEmail>
            </div>
            <div>
              <p>Quick Email</p>
              <p className="font-bold">support@gamil.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <FaLocationDot className="text-5xl text-[#f99810f6]"></FaLocationDot>
            </div>
            <div>
              <p>Office Address</p>
              <p className="font-bold">GXF4+8HQ Chippenham United Kingdom</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930095498!2d90.25487217580321!3d23.781067239709326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1732115247142!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
};

export default GetInTouch;
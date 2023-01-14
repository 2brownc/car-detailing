import React from 'react';

function Footer() {
  return (
    <div
      className="
          grid grid-rows-2
          bg-neutral-900
          text-neutral-50
          shadow-2xl shadow-neutral-400
          items-center justify-center place-items-center
          p-5 gap-5
        "
    >
      <div className="
        flex flex-row gap-3
      ">
        <span className="  
          px-2 py-1
          hover:bg-amber-800
          transition-all
          duration-500
        ">
          <a
            href="/"
            className="
              appearence-none
              hover:mouse-pointer 
          ">
            Home
          </a>
        </span>
        <span className="  
          px-2 py-1
          hover:bg-amber-800
          transition-all
          duration-500
        ">
          <a
            href="/contact"
            className="
              appearence-none
              hover:mouse-pointer 
          ">
            Contact
          </a>
        </span>
      </div>
      <div>PK DETAILING</div>
    </div>

  );
}

export default Footer;
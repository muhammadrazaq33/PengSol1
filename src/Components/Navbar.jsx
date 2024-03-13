import React from "react";
// import tele from "../../public/assets/telegram.svg";

const Navbar = () => {
  return (
    <div className="w-[1370px] max-w-[98vw] m-auto h-[10rem] py-4">
      <div className="flex sm:justify-between justify-center  items-center">
        {/* ImAgeS */}
        <div className="flex items-center gap-4">
          <img src="./assets/instagram.svg" alt="" />
          <img src="./assets/instagram.svg" alt="" />
          <img src="./assets/instagram.svg" alt="" />
        </div>

        {/* lOgO */}
        <div className="sm:block hidden">
          <p className="text-[24px] font-bold header__link2">BUY $PENG</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

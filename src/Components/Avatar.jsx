import React from "react";

const Avatar = () => {
  return (
    <div className="w-[1370px] max-w-[98vw] m-auto mt-[12rem]">
      <div className="flex flex-col items-center gap-16">
        {/* TEXT  =====> */}
        <div className="flex flex-col items-center gap-6">
          {/* HEADINGS */}
          <div className="text-center mb-6">
            <h1 className="avatar__title rs1:text-[64px] rs3:text-[48px] rs4:text-[44px] text-[38px] ">
              RANDOM PENG
            </h1>
            <h1 className="avatar__title1 rs1:text-[64px] rs3:text-[48px] rs4:text-[44px] text-[38px]">
              AVATAR GENERATOR
            </h1>
          </div>

          {/* PARAGRAPH */}
          <p className="rs2:text-[24px] font-bold text-[20px] text-[#FFF] text-center max-w-[50rem]">
            DO YOU LIKE PENG? SHOW IT TO EVERYONE! NOW YOU CAN GENERATE YOUR OWN
            RANDOM AVATAR.
          </p>

          {/* BUTTONS   ==== > */}
          <div className=" flex gap-6 justify-center mt-2">
            <button className="uppercase avatar__btn rs4:text-[24px] text-[19px] ">
              GENERATE
            </button>
            <button className="uppercase bg-black  text-[#ffde68] avatar__btn1 rs4:text-[24px] text-[19px]">
              DOWNLOAD JPG
            </button>
          </div>
        </div>

        {/* IMAGE  ====> */}
        <div className="avatar__avatar">
          <img src="./assets/avatar.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;

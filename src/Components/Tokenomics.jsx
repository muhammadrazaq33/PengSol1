import React from "react";

const Tokenomics = () => {
  return (
    <div className="w-[1370px] max-w-[96vw] m-auto mt-[16rem]">
      <div className="text-center ">
        <h1 className="pt-[10px] pr-[20px] pl-[20px] tokens font-bold">
          PENG TOKENOMICS
        </h1>
        <div className="grid place-items-center mt-6">
          <div className="flex justify-between mt-[20px] w-[100%] bg-[white] pl-[24px] pr-[8px] items-center rounded-[999px] pt-[15px] rs4:max-w-[731px] max-w-[340px] link">
            <p className="mb-3 rs4:text-[18px] text-[10px] rs4:w-[100%] w-[50%]">
              A3eME5CetyZPBoWbRUwY3tSe25S6tb18ba9ZPbWk9eFJ
            </p>
            <button className="uppercase btn font-bold">copy</button>
          </div>
        </div>

        {/* cards  =======> */}
        <div className="grid rs4:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-20">
          {/* /first card */}
          <div className="tokens__card">
            <img src="./assets/card1.png" className="token_img" alt="" />
            <div className="text-left mt-4">
              <p className="text-[#19334a] text-[20px] mt-[5px] font-bold">
                TAXES
              </p>
              <h1 className="text-[28px] font-bold">0/0</h1>
            </div>
          </div>
          {/* end of card */}

          {/* /first card */}
          <div className="tokens__card">
            <img src="./assets/card2.png" className="token_img" alt="" />
            <div className="text-left mt-4">
              <p className="text-[#19334a] text-[20px] mt-[5px] font-bold">
                MINT & FREEZE
              </p>
              <h1 className="text-[28px] font-bold">REVOKED</h1>
            </div>
          </div>
          {/* end of card */}

          {/* /first card */}
          <div className="tokens__card">
            <img src="./assets/card3.png" className="token_img" alt="" />
            <div className="text-left mt-4">
              <p className="text-[#19334a] text-[20px] mt-[5px] font-bold">
                LIQUIDITY
              </p>
              <h1 className="text-[28px] font-bold">BURNED</h1>
            </div>
          </div>
          {/* end of card */}

          {/* /first card */}
          <div className="tokens__card">
            <img src="./assets/card4.png" className="token_img" alt="" />
            <div className="text-left mt-4">
              <p className="text-[#19334a] text-[20px] mt-[5px] font-bold">
                TOTAL SUPPLY
              </p>
              <h1 className="text-[28px] font-bold">100 M</h1>
            </div>
          </div>
          {/* end of card */}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

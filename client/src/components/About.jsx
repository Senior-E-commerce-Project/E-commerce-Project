import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
export const About = () => {
return (
    <>
    <div>
    {/* <Navbar/> */}
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-bg w-[1437px] h-[596px] relative">
        <div className="gap-[40px] absolute top-[150px] left-[87px] inline-flex flex-col items-start">
          <div className="relative text-4xl font-semibold text-center ml-36">
            Our Story
          </div>
          <div className="gap-[24px] relative flex-[0_0_auto] inline-flex flex-col items-start">
            <p className="relative w-[525px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
              Launced in 2015, ShopAholic is South Asia’s premier online shopping makterplace with an active presense in
              Bangladesh. Supported by wide range of tailored marketing, data and service solutions, ShopAholic has
              10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p className="relative w-[505px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
              ShopAholic has more than 1 Million products to offer, growing at a very fast. ShopAholic offers a diverse
              assotment in categories ranging&nbsp;&nbsp;from consumer.
</p>
          </div>
        </div>
<div className="absolute w-[705px] h-[500px] top-[50px] left-[686px] bg-[#eb7ea8] rounded-[4px_0px_0px_4px] overflow-hidden">
          <img
            className="absolute w-[705px] h-[500px] top-0 left-0"
            alt="affrican "
            src="https://shorturl.at/vDEN3"
            />
        </div>
      </div>
    </div>
    </div>
    <div className='ml-50 grid grid-cols-3 mt-20'>
        <div>
        <img className='rounded-full w-40 ml-36 ' src="https://st.depositphotos.com/27392032/60952/i/450/depositphotos_609525608-stock-photo-fast-shipping-delivery-truck-icon.jpg" alt="" />
        <h1 className='font-bold text-lg'>FREE AND FAST DELIVERY</h1>
        <h3 className='-ml-2'>Free delivery for all orders over $140</h3>
        </div>
        <div>
        <img className='rounded-full w-28 ml-36 mt-4 mb-10' src="https://static.thenounproject.com/png/4074783-200.png" alt="" />
        <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
        <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
        </div>
        <div>
            <img className='rounded-full w-28 ml-36  mt-4 mb-10' src="https://cdn-icons-png.flaticon.com/512/95/95454.png" alt="" />
            <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
        <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};
export default About;
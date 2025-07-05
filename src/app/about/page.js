"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white">
      {/* Navbar */}
      <nav className="bg-green-600 h-16 flex items-center justify-between px-8 fixed top-0 left-0 w-full z-20 shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="text-white font-bold text-2xl ml-2">AgRex</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/explore" className="text-white hover:text-gray-200">Explore</a>
          <a href="/shop" className="text-white hover:text-gray-200">AgRex Shop</a>
          <a href="/about" className="text-white hover:text-gray-200">About Us</a>
        </div>
      </nav>
      {/* Card Content */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen pt-24 pb-8">
        <div className="bg-green-600 rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl w-full mx-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl mb-8 text-center">
            At AgRex, we are committed to driving a new era of smart and sustainable agriculture. Our platform is built for farmers, agriculture enthusiasts, and rural entrepreneurs who seek to boost productivity, make informed decisions, and grow crops that are best suited for their land and season.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Fertilizer Sales</h2>
            <p className="text-white text-base md:text-lg">
              We offer a carefully curated range of high-quality fertilizers tailored to different crop types, soil conditions, and climate zones. Whether you're managing a small vegetable patch or large-scale farmland, our products are designed to promote healthy plant growth, increase yield, and restore soil vitality. Our team continually evaluates and updates our inventory to ensure you're getting the latest and most effective agricultural inputs—delivered right to your doorstep.
            </p>
            <p className="text-white text-base md:text-lg mt-2">
              From organic and bio-fertilizers to micronutrient mixes and soil enhancers, every product we sell is tested and approved for performance, quality, and sustainability. With AgRex, you can be confident you're investing in your farm’s long-term health.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Seasonal Crop Consultation</h2>
            <p className="text-white text-base md:text-lg">
              Agriculture isn’t one-size-fits-all—and that’s where we come in. Our expert consultants work closely with farmers to help them determine the best crops to grow during each season, based on real-time weather data, soil analysis, and market trends.
            </p>
            <p className="text-white text-base md:text-lg mt-2">
              We take into account regional climate variations, historical crop performance, pest and disease risks, and current demand patterns to offer tailored guidance that maximizes both yield and profitability. Whether you're planning for kharif, rabi, or summer crops, our insights will help you make smart, data-backed planting decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
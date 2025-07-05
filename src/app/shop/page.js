"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "NitroBoost Fertilizer",
    desc: "High-nitrogen formula for leafy growth.",
    price: "₹499",
    img: "/fert1.jpg",
  },
  {
    name: "PhosPlus",
    desc: "Phosphorus-rich for strong roots and blooms.",
    price: "₹599",
    img: "/2.avif",
  },
  {
    name: "GreenGro Organic",
    desc: "Organic blend for all-purpose gardening.",
    price: "₹699",
    img: "/fert3.jpg",
  },
  {
    name: "MicroMix Pro",
    desc: "Micronutrient mix for healthy crops.",
    price: "₹399",
    img: "/fert4.jpg",
  },
  {
    name: "SoilRevive",
    desc: "Soil conditioner for improved fertility.",
    price: "₹549",
    img: "/fert5.jpg",
  },
  {
    name: "BioGrow Advance",
    desc: "Bio-fertilizer for sustainable farming.",
    price: "₹799",
    img: "/fert6.jpg",
  },
];

export default function Explore() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="min-h-screen bg-white pb-12 px-4">
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
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-10 text-center drop-shadow-lg pt-24">Explore Our Fertilizer Products</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-green-100 rounded-xl shadow-md p-6 flex flex-col items-center">
            <div className="w-32 h-32 bg-green-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              {/* Replace with real images in /public/ as needed */}
              <Image src={prod.img} alt={prod.name} width={100} height={100} className="object-contain" />
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-2 text-center">{prod.name}</h2>
            <p className="text-gray-700 mb-2 text-center">{prod.desc}</p>
            <div className="text-lg font-bold text-green-700 mb-2">{prod.price}</div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-auto" onClick={() => setShowPopup(true)}>Buy Now</button>
          </div>
        ))}
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center max-w-xs w-full">
            <span className="text-3xl mb-4">📦</span>
            <h2 className="text-xl font-bold text-green-800 mb-2 text-center">We will reach you soon!</h2>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
} 
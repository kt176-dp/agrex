"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("crops");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("january");
  const [selectedRegion, setSelectedRegion] = useState("north");
  const [predictionInputs, setPredictionInputs] = useState({
    soilType: "",
    crop: "",
    region: "",
    season: ""
  });

  // Sample crop data
  const crops = [
    {
      id: 1,
      name: "Wheat",
      climate: "Temperate",
      soilType: "Loamy, Well-drained",
      yield: "2.5-3.5 tons/acre",
      fertilizer: "NPK 20-20-20",
      image: "/wheat.jpg",
      description: "A staple cereal crop grown worldwide for its nutritious grains."
    },
    {
      id: 2,
      name: "Rice",
      climate: "Tropical/Subtropical",
      soilType: "Clay loam, Paddy soil",
      yield: "4-6 tons/acre",
      fertilizer: "Urea + DAP",
      image: "/rice.jpg",
      description: "Primary food crop in Asia, requires flooded conditions."
    },
    {
      id: 3,
      name: "Corn/Maize",
      climate: "Warm temperate",
      soilType: "Sandy loam, Well-drained",
      yield: "8-12 tons/acre",
      fertilizer: "NPK 15-15-15",
      image: "/corn.jpg",
      description: "Versatile crop used for food, feed, and industrial products."
    },
    {
      id: 4,
      name: "Soybeans",
      climate: "Temperate",
      soilType: "Loamy, pH 6.0-7.0",
      yield: "2-3 tons/acre",
      fertilizer: "Phosphorus + Potassium",
      image: "/soybeans.jpg",
      description: "High-protein legume crop, excellent for crop rotation."
    },
    {
      id: 5,
      name: "Cotton",
      climate: "Warm, Dry",
      soilType: "Sandy loam, Well-drained",
      yield: "800-1200 kg/acre",
      fertilizer: "NPK 12-6-6",
      image: "/cotton.jpg",
      description: "Fiber crop requiring long growing season and warm temperatures."
    },
    {
      id: 6,
      name: "Sugarcane",
      climate: "Tropical/Subtropical",
      soilType: "Heavy clay, Rich organic",
      yield: "60-80 tons/acre",
      fertilizer: "NPK 20-10-10",
      image: "/sugarcane.jpg",
      description: "Perennial grass crop for sugar and ethanol production."
    }
  ];

  // Seasonal crop planner data
  const seasonalCrops = {
    january: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    },
    february: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    },
    march: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    },
    april: {
      north: ["Corn", "Soybeans", "Vegetables"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Corn", "Soybeans", "Vegetables"]
    },
    may: {
      north: ["Corn", "Soybeans", "Vegetables"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Corn", "Soybeans", "Vegetables"]
    },
    june: {
      north: ["Corn", "Soybeans", "Vegetables"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Corn", "Soybeans", "Vegetables"]
    },
    july: {
      north: ["Corn", "Soybeans", "Vegetables"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Corn", "Soybeans", "Vegetables"]
    },
    august: {
      north: ["Corn", "Soybeans", "Vegetables"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Corn", "Soybeans", "Vegetables"]
    },
    september: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    },
    october: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    },
    november: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    },
    december: {
      north: ["Wheat", "Mustard", "Peas"],
      south: ["Rice", "Corn", "Vegetables"],
      east: ["Rice", "Pulses", "Oilseeds"],
      west: ["Wheat", "Chickpeas", "Lentils"]
    }
  };

  // Soil and climate information
  const soilInfo = [
    {
      type: "Sandy Soil",
      characteristics: "Light, well-drained, warms quickly",
      ph: "5.5-7.0",
      crops: "Root vegetables, Carrots, Potatoes",
      tips: "Add organic matter, frequent watering needed"
    },
    {
      type: "Clay Soil",
      characteristics: "Heavy, retains water, rich in minerals",
      ph: "6.0-7.5",
      crops: "Rice, Wheat, Cabbage",
      tips: "Improve drainage, add sand and organic matter"
    },
    {
      type: "Loamy Soil",
      characteristics: "Balanced, ideal for most crops",
      ph: "6.0-7.0",
      crops: "Most crops, Vegetables, Fruits",
      tips: "Maintain organic matter, regular testing"
    },
    {
      type: "Silt Soil",
      characteristics: "Fine particles, holds moisture well",
      ph: "6.0-7.5",
      crops: "Grains, Vegetables, Fruits",
      tips: "Prevent compaction, add organic matter"
    }
  ];

  // Fertilizer guide
  const fertilizers = [
    {
      name: "NPK 20-20-20",
      type: "Balanced",
      usage: "General purpose, all crops",
      application: "Apply 2-3 times during growing season",
      benefits: "Promotes overall plant growth and development"
    },
    {
      name: "Urea (46-0-0)",
      type: "Nitrogen",
      usage: "Leafy growth, green vegetables",
      application: "Apply before planting and during growth",
      benefits: "Promotes vegetative growth and leaf development"
    },
    {
      name: "DAP (18-46-0)",
      type: "Phosphorus",
      usage: "Root development, flowering",
      application: "Apply at planting or early growth",
      benefits: "Enhances root growth and flower/fruit production"
    },
    {
      name: "Potash (0-0-60)",
      type: "Potassium",
      usage: "Fruit quality, disease resistance",
      application: "Apply during fruiting/flowering stage",
      benefits: "Improves fruit quality and plant resistance"
    },
    {
      name: "Organic Compost",
      type: "Organic",
      usage: "All crops, soil improvement",
      application: "Apply before planting or as mulch",
      benefits: "Improves soil structure and provides slow-release nutrients"
    }
  ];

  const handlePrediction = () => {
    // Simulate AI prediction
    const predictions = [
      "Based on your inputs, Wheat would be an excellent choice for your region and soil type.",
      "Consider using NPK 20-20-20 fertilizer for optimal results.",
      "Expected yield: 2.8-3.2 tons per acre under normal conditions.",
      "Planting season: October-November for best results."
    ];
    alert("AI Prediction:\n\n" + predictions.join("\n"));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden z-0" style={{
      backgroundImage: 'url("/bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Overlay for glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/70 via-white/60 to-blue-100/70 backdrop-blur-md z-0" />
      {/* Navbar */}
      <nav className="bg-green-600/90 h-16 flex items-center justify-between px-8 fixed top-0 left-0 w-full z-20 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="text-white font-bold text-2xl ml-2 drop-shadow">AgRex</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-blue-100 transition">Home</a>
          <a href="/explore" className="text-white font-semibold underline underline-offset-4 decoration-blue-200">Explore</a>
          <a href="/shop" className="text-white hover:text-blue-100 transition">AgRex Shop</a>
          <a href="/about" className="text-white hover:text-blue-100 transition">About Us</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-24 px-4 pb-12 z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-lg mb-3 tracking-tight">Agriculture Explorer</h1>
          <p className="text-lg text-green-900/80 font-medium drop-shadow-sm">Discover crops, plan seasons, and get AI-powered insights</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "crops", label: "📊 Crop Database", icon: "🌾" },
            { id: "planner", label: "📅 Seasonal Planner", icon: "📆" },
            { id: "soil", label: "🧪 Soil & Climate", icon: "🌱" },
            { id: "fertilizer", label: "💡 Fertilizer Guide", icon: "🌿" },
            { id: "prediction", label: "🔎 Prediction Tool", icon: "🤖" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold shadow transition-all border-2 ${
                activeTab === tab.id
                  ? "bg-green-600/90 text-white border-blue-300 scale-105 shadow-xl"
                  : "bg-white/80 text-green-800 border-green-200 hover:bg-green-50/80 hover:border-blue-200"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto">
          {/* Crop Database */}
          {activeTab === "crops" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800 mb-6 drop-shadow">Crop Database</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {crops.map((crop) => (
                  <div
                    key={crop.id}
                    className="bg-white/80 rounded-2xl shadow-2xl hover:shadow-green-200 transition-all p-6 cursor-pointer border border-green-100 hover:border-blue-200 backdrop-blur-md"
                    onClick={() => setSelectedCrop(crop)}
                  >
                    <div className="h-48 bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-lg mb-4 flex items-center justify-center shadow-inner">
                      <span className="text-5xl">🌾</span>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">{crop.name}</h3>
                    <p className="text-green-800/80 mb-3">{crop.description}</p>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-semibold">Climate:</span> {crop.climate}</div>
                      <div><span className="font-semibold">Soil:</span> {crop.soilType}</div>
                      <div><span className="font-semibold">Yield:</span> {crop.yield}</div>
                      <div><span className="font-semibold">Fertilizer:</span> {crop.fertilizer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seasonal Planner */}
          {activeTab === "planner" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800 mb-6 drop-shadow">Seasonal Crop Planner</h2>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-8 border border-green-100 backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Month</label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 font-medium text-green-900"
                    >
                      {Object.keys(seasonalCrops).map((month) => (
                        <option key={month} value={month}>
                          {month.charAt(0).toUpperCase() + month.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Region</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 font-medium text-green-900"
                    >
                      <option value="north">North</option>
                      <option value="south">South</option>
                      <option value="east">East</option>
                      <option value="west">West</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-gradient-to-r from-green-500 to-blue-400 text-white py-3 rounded-lg hover:from-green-600 hover:to-blue-500 font-bold shadow-lg transition">Get Recommendations</button>
                  </div>
                </div>
                <div className="bg-green-50/80 rounded-lg p-6 shadow-inner">
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    Recommended Crops for {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} - {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {seasonalCrops[selectedMonth][selectedRegion].map((crop, index) => (
                      <div key={index} className="bg-white/90 rounded-lg p-4 shadow hover:shadow-green-100 border border-green-100 flex items-center gap-2">
                        <span className="text-2xl">🌾</span>
                        <span className="font-semibold text-green-900">{crop}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Soil & Climate Info */}
          {activeTab === "soil" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800 mb-6 drop-shadow">Soil & Climate Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {soilInfo.map((soil, index) => (
                  <div key={index} className="bg-white/80 rounded-2xl shadow-2xl p-6 border border-green-100 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-green-900 mb-4">{soil.type}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-green-800">Characteristics:</span>
                        <p className="text-green-800/80">{soil.characteristics}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-green-800">pH Range:</span>
                        <p className="text-green-800/80">{soil.ph}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-green-800">Suitable Crops:</span>
                        <p className="text-green-800/80">{soil.crops}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-green-800">Management Tips:</span>
                        <p className="text-green-800/80">{soil.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Soil Testing Tips */}
              <div className="bg-white/80 rounded-2xl shadow-2xl p-6 mt-8 border border-green-100 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-green-900 mb-4">🌡️ Soil Testing Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">When to Test:</h4>
                    <ul className="text-green-800/80 space-y-1">
                      <li>• Before planting season</li>
                      <li>• Every 2-3 years for established fields</li>
                      <li>• When crop performance is poor</li>
                      <li>• After major soil amendments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">What to Test:</h4>
                    <ul className="text-green-800/80 space-y-1">
                      <li>• pH levels (6.0-7.0 ideal for most crops)</li>
                      <li>• Nitrogen, Phosphorus, Potassium (NPK)</li>
                      <li>• Organic matter content</li>
                      <li>• Soil texture and structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fertilizer Guide */}
          {activeTab === "fertilizer" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800 mb-6 drop-shadow">Fertilizer Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fertilizers.map((fertilizer, index) => (
                  <div key={index} className="bg-white/80 rounded-2xl shadow-2xl p-6 border border-green-100 backdrop-blur-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">🌿</span>
                      <div>
                        <h3 className="text-xl font-bold text-green-900">{fertilizer.name}</h3>
                        <span className="text-sm text-green-600 font-medium">{fertilizer.type}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-green-800">Usage:</span>
                        <p className="text-green-800/80">{fertilizer.usage}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-green-800">Application:</span>
                        <p className="text-green-800/80">{fertilizer.application}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-green-800">Benefits:</span>
                        <p className="text-green-800/80">{fertilizer.benefits}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prediction Tool */}
          {activeTab === "prediction" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800 mb-6 drop-shadow">AI Prediction Tool</h2>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-8 border border-green-100 backdrop-blur-md">
                <p className="text-green-800/80 mb-6">
                  Input your soil type, desired crop, region, and season to get AI-powered recommendations for optimal farming practices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Soil Type</label>
                    <select
                      value={predictionInputs.soilType}
                      onChange={(e) => setPredictionInputs({...predictionInputs, soilType: e.target.value})}
                      className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 font-medium text-green-900"
                    >
                      <option value="">Select Soil Type</option>
                      <option value="sandy">Sandy Soil</option>
                      <option value="clay">Clay Soil</option>
                      <option value="loamy">Loamy Soil</option>
                      <option value="silt">Silt Soil</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Desired Crop</label>
                    <select
                      value={predictionInputs.crop}
                      onChange={(e) => setPredictionInputs({...predictionInputs, crop: e.target.value})}
                      className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 font-medium text-green-900"
                    >
                      <option value="">Select Crop</option>
                      {crops.map((crop) => (
                        <option key={crop.id} value={crop.name}>{crop.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Region</label>
                    <select
                      value={predictionInputs.region}
                      onChange={(e) => setPredictionInputs({...predictionInputs, region: e.target.value})}
                      className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 font-medium text-green-900"
                    >
                      <option value="">Select Region</option>
                      <option value="north">North</option>
                      <option value="south">South</option>
                      <option value="east">East</option>
                      <option value="west">West</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Season</label>
                    <select
                      value={predictionInputs.season}
                      onChange={(e) => setPredictionInputs({...predictionInputs, season: e.target.value})}
                      className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 font-medium text-green-900"
                    >
                      <option value="">Select Season</option>
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="autumn">Autumn</option>
                      <option value="winter">Winter</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={handlePrediction}
                    className="bg-gradient-to-r from-green-500 to-blue-400 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-blue-500 font-bold shadow-lg transition text-lg"
                  >
                    🤖 Get AI Prediction
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Crop Detail Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-green-200 backdrop-blur-md">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-green-900">{selectedCrop.name}</h2>
                <button
                  onClick={() => setSelectedCrop(null)}
                  className="text-green-700 hover:text-green-900 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="h-64 bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-lg mb-6 flex items-center justify-center shadow-inner">
                <span className="text-6xl">🌾</span>
              </div>
              <div className="space-y-4">
                <p className="text-green-800/80">{selectedCrop.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50/80 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Growing Conditions</h3>
                    <p><span className="font-medium">Climate:</span> {selectedCrop.climate}</p>
                    <p><span className="font-medium">Soil Type:</span> {selectedCrop.soilType}</p>
                  </div>
                  <div className="bg-blue-50/80 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Expected Yield</h3>
                    <p className="text-lg font-medium text-blue-600">{selectedCrop.yield}</p>
                  </div>
                </div>
                <div className="bg-yellow-50/80 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Fertilizer Recommendation</h3>
                  <p className="text-lg font-medium text-yellow-700">{selectedCrop.fertilizer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

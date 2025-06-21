import React from "react";
import { Star, TrendingUp } from "lucide-react";

interface BrandCardProps {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
  popularity: "trending" | "popular" | "premium";
  vehicleCount: number;
}

const BrandCard: React.FC<BrandCardProps> = ({
  name,
  logo,
  description,
  rating,
  popularity,
  vehicleCount,
}) => {
  const getPopularityBadge = () => {
    const badges = {
      trending: {
        text: "Trending",
        color: "from-orange-500 to-red-500",
        icon: TrendingUp,
      },
      popular: {
        text: "Popular",
        color: "from-green-500 to-emerald-500",
        icon: Star,
      },
      premium: {
        text: "Premium",
        color: "from-purple-500 to-indigo-500",
        icon: Star,
      },
    };

    const badge = badges[popularity];
    const IconComponent = badge.icon;

    return (
      <div
        className={`absolute top-4 right-4 bg-gradient-to-r ${badge.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1`}
      >
        <IconComponent className="w-3 h-3" />
        <span>{badge.text}</span>
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-60" />

      {/* Popularity Badge */}
      {getPopularityBadge()}

      {/* Content */}
      <div className="relative p-8 text-center">
        {/* Logo Container - Made Much Larger */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 bg-white rounded-3xl shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 p-4">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Enhanced Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl" />
          </div>
        </div>

        {/* Brand Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center mb-4 space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">({rating})</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Vehicle Count */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-blue-600">
            {vehicleCount}
          </span>
          <span className="text-gray-600 text-sm ml-1">
            {vehicleCount === 1 ? "vehicle" : "vehicles"}
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
          Explore {name}
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </div>
  );
};

export default BrandCard;

import React from "react";
import { Calendar, DollarSign, Car, Star, Heart } from "lucide-react";

interface CarCardProps {
  id: string;
  image: string;
  name: string;
  year: number;
  price: string;
  rating: number;
  isFavorite?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({
  image,
  year,
  name,
  price,
  rating,
  isFavorite = false,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`variants`}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Favorite Heart */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110">
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-600 hover:text-red-500"
            }`}
          />
        </button>

        {/* Year Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          <Calendar className="w-4 h-4 inline mr-1" />
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {name}
            </h3>
            <div className="flex items-center mt-1 space-x-2">
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
              <span className="text-sm text-gray-600">({rating})</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-green-600 mr-1" />
            <span className="text-3xl font-bold text-green-600">{price}</span>
          </div>
        </div>

        {/* Mileage */}
        {/* <div className="flex items-center mb-4 text-gray-600">
          <Car className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">
            {formatMileage(mileage)} miles
          </span>
        </div> */}

        {/* Description */}
        {/* <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p> */}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
            View Details
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-[1.02]">
            Contact
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </div>
  );
};

export default CarCard;

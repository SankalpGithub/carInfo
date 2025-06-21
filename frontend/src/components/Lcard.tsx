import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { model } from "../../type";

interface CarCardProps {
  car: model;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
      <div className="relative">
        <img
          src={car.img_url}
          alt={car.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        <div className="absolute top-4 right-4">
          <Badge
            variant="secondary"
            className="bg-black/80 text-white backdrop-blur-sm"
          >
            {car.foundation_year}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
            {car.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Since</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-semibold">
              {car.foundation_year}
            </span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm line-clamp-3">
          {car.description}
        </p>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-600">Available</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;

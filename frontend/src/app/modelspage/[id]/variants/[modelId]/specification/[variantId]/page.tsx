"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Car,
  Fuel,
  Gauge,
  Settings,
  Shield,
  Smartphone,
  Palette,
  Zap,
  Wind,
} from "lucide-react";
import Image from "next/image";
import carData from "@/data/variant.json";
import { VehicleData } from "@/../types/variantType";
import proscheImage from "@/../public/images/bugati.png";
// Sample data
const vehicleData: VehicleData = carData[0];

export default function VehicleDetails() {
  const {
    basicInformation,
    performance,
    fuelEfficiency,
    dimensions,
    chassisSuspension,
    brakesTires,
    exteriorFeatures,
    interiorFeatures,
    safetyFeatures,
    comfortConvenience,
    infotainmentConnectivity,
    variantsColors,
  } = vehicleData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Images */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Main Image and Carousel */}
          <div className="space-y-4 mb-8">
            {/* Main Large Image */}
            <div className="w-full">
              <Image
                src={
                  "http://res.cloudinary.com/diarlf57x/image/upload/v1750338663/qar6sfhglf5vetyc4pdj.jpg"
                }
                alt={`${basicInformation.brand} ${basicInformation.model} ${basicInformation.variant} - Main View`}
                width={1200}
                height={600}
                className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Image Carousel */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex-shrink-0">
                <Image
                  src={
                    "http://res.cloudinary.com/diarlf57x/image/upload/v1750338607/wc711asabcbqjwkae7ti.jpg"
                  }
                  alt={`${basicInformation.brand} ${basicInformation.model} - Side View`}
                  width={200}
                  height={150}
                  className="w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="http://res.cloudinary.com/diarlf57x/image/upload/v1750338763/k4p6uutefd9tzhgmxsyj.jpg"
                  alt={`${basicInformation.brand} ${basicInformation.model} - Interior View`}
                  width={200}
                  height={150}
                  className="w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="http://res.cloudinary.com/diarlf57x/image/upload/v1750338798/pkiczeyi7dmj50doqhhf.jpg"
                  alt={`${basicInformation.brand} ${basicInformation.model} - Front View`}
                  width={200}
                  height={150}
                  className="w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="http://res.cloudinary.com/diarlf57x/image/upload/v1750338828/cotqsvczzdou1wod5yks.jpg"
                  alt={`${basicInformation.brand} ${basicInformation.model} - Rear View`}
                  width={200}
                  height={150}
                  className="w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="http://res.cloudinary.com/diarlf57x/image/upload/v1750338607/wc711asabcbqjwkae7ti.jpg"
                  alt={`${basicInformation.brand} ${basicInformation.model} - Dashboard View`}
                  width={200}
                  height={150}
                  className="w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="http://res.cloudinary.com/diarlf57x/image/upload/v1750338607/wc711asabcbqjwkae7ti.jpg"
                  alt={`${basicInformation.brand} ${basicInformation.model} - Engine View`}
                  width={200}
                  height={150}
                  className="w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Basic Information Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Car className="h-6 w-6 text-blue-500" />
              Vehicle Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {basicInformation.brand} {basicInformation.model}
                  </h1>
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    {basicInformation.variant}
                  </h2>
                  <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                    {basicInformation.vehicle_type}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {basicInformation.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl px-6 py-4 text-white">
                  <div className="text-sm font-medium text-green-100 mb-1">
                    Starting Price
                  </div>
                  <div className="text-3xl font-bold">
                    {variantsColors.price}
                  </div>
                  <div className="text-sm text-green-100 mt-1">
                    *Ex-showroom price
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {variantsColors.variant_features
                      .split(", ")
                      .map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="px-3 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                    Schedule Test Drive
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="container mx-auto px-4 py-8">
          {/* Performance Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-orange-500" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {performance.horsepower}
                  </div>
                  <div className="text-sm text-gray-600">Horsepower</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {performance.torque}
                  </div>
                  <div className="text-sm text-gray-600">Torque</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {performance.top_speed}
                  </div>
                  <div className="text-sm text-gray-600">Top Speed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {performance.acceleration}
                  </div>
                  <div className="text-sm text-gray-600">0-100 km/h</div>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <span className="font-semibold">Engine:</span>{" "}
                  {performance.engine_type}
                </div>
                <div>
                  <span className="font-semibold">Displacement:</span>{" "}
                  {performance.engine_displacement}
                </div>
                <div>
                  <span className="font-semibold">Transmission:</span>{" "}
                  {performance.transmission}
                </div>
                <div>
                  <span className="font-semibold">Drivetrain:</span>{" "}
                  {performance.drivetrain}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Fuel Efficiency */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-green-500" />
                  Fuel Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Fuel Type:</span>
                  <span className="font-semibold">
                    {fuelEfficiency.fuel_type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mileage:</span>
                  <span className="font-semibold">
                    {fuelEfficiency.mileage}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tank Capacity:</span>
                  <span className="font-semibold">
                    {fuelEfficiency.fuel_tank_capacity}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Range:</span>
                  <span className="font-semibold">{fuelEfficiency.range}</span>
                </div>
              </CardContent>
            </Card>

            {/* Dimensions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-blue-500" />
                  Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Length:</span>
                  <span className="font-semibold">{dimensions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Width:</span>
                  <span className="font-semibold">{dimensions.width}</span>
                </div>
                <div className="flex justify-between">
                  <span>Height:</span>
                  <span className="font-semibold">{dimensions.height}</span>
                </div>
                <div className="flex justify-between">
                  <span>Wheelbase:</span>
                  <span className="font-semibold">{dimensions.wheelbase}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kerb Weight:</span>
                  <span className="font-semibold">
                    {dimensions.kerb_weight}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Boot Space:</span>
                  <span className="font-semibold">{dimensions.boot_space}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {/* Safety Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  Safety Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Airbags:</span>
                    <Badge variant="outline">{safetyFeatures.airbags}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>ABS with EBD:</span>
                    <Badge
                      variant={
                        safetyFeatures.abs_with_ebd ? "default" : "secondary"
                      }
                    >
                      {safetyFeatures.abs_with_ebd ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Traction Control:</span>
                    <Badge
                      variant={
                        safetyFeatures.traction_control
                          ? "default"
                          : "secondary"
                      }
                    >
                      {safetyFeatures.traction_control ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>ESP:</span>
                    <Badge
                      variant={safetyFeatures.esp ? "default" : "secondary"}
                    >
                      {safetyFeatures.esp ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Parking Camera:</span>
                    <Badge
                      variant={
                        safetyFeatures.rear_parking_camera
                          ? "default"
                          : "secondary"
                      }
                    >
                      {safetyFeatures.rear_parking_camera ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Blind Spot Monitor:</span>
                    <Badge
                      variant={
                        safetyFeatures.blind_spot_monitor
                          ? "default"
                          : "secondary"
                      }
                    >
                      {safetyFeatures.blind_spot_monitor ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interior Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-purple-500" />
                  Interior Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Seating Capacity:</span>
                    <Badge variant="outline">
                      {interiorFeatures.seating_capacity}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Seat Material:</span>
                    <span className="font-semibold">
                      {interiorFeatures.seat_material}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Adjustable Seats:</span>
                    <span className="font-semibold">
                      {interiorFeatures.adjustable_seats}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>AC Type:</span>
                    <span className="font-semibold">
                      {interiorFeatures.air_conditioner_type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Apple CarPlay:</span>
                    <Badge
                      variant={
                        interiorFeatures.apple_carplay ? "default" : "secondary"
                      }
                    >
                      {interiorFeatures.apple_carplay ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Cruise Control:</span>
                    <Badge
                      variant={
                        interiorFeatures.cruise_control
                          ? "default"
                          : "secondary"
                      }
                    >
                      {interiorFeatures.cruise_control ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Infotainment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-indigo-500" />
                  Infotainment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Display:</span>
                    <p className="text-sm text-gray-600">
                      {interiorFeatures.infotainment_system}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <span>Speaker System:</span>
                    <span className="font-semibold">
                      {infotainmentConnectivity.speaker_system.brand} (
                      {infotainmentConnectivity.speaker_system.count})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>USB Ports:</span>
                    <Badge variant="outline">
                      {infotainmentConnectivity.usb_ports}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Bluetooth:</span>
                    <Badge
                      variant={
                        infotainmentConnectivity.bluetooth_connectivity
                          ? "default"
                          : "secondary"
                      }
                    >
                      {infotainmentConnectivity.bluetooth_connectivity
                        ? "Yes"
                        : "No"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>WiFi Hotspot:</span>
                    <Badge
                      variant={
                        infotainmentConnectivity.wifi_hotspot
                          ? "default"
                          : "secondary"
                      }
                    >
                      {infotainmentConnectivity.wifi_hotspot ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Chassis & Suspension */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-gray-600" />
                  Chassis & Suspension
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Chassis Type:</span>
                  <span className="font-semibold">
                    {chassisSuspension.chassis_type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Front Suspension:</span>
                  <span className="font-semibold">
                    {chassisSuspension.front_suspension}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Rear Suspension:</span>
                  <span className="font-semibold">
                    {chassisSuspension.rear_suspension}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Steering Type:</span>
                  <span className="font-semibold">
                    {chassisSuspension.steering_type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Turning Radius:</span>
                  <span className="font-semibold">
                    {chassisSuspension.turning_radius}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Brakes & Tires */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-gray-600" />
                  Brakes & Tires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Front Brakes:</span>
                  <span className="font-semibold">
                    {brakesTires.front_brakes}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Rear Brakes:</span>
                  <span className="font-semibold">
                    {brakesTires.rear_brakes}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Wheel Type:</span>
                  <span className="font-semibold">
                    {brakesTires.wheel_type}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Tire Size:</span>
                  <p className="text-sm text-gray-600">
                    {brakesTires.tire_size}
                  </p>
                </div>
                <div className="flex justify-between">
                  <span>Spare Tire:</span>
                  <span className="font-semibold">
                    {brakesTires.spare_tire}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colors and Variants */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-pink-500" />
                Colors & Variants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Available Colors:</h4>
                <div className="flex flex-wrap gap-2">
                  {variantsColors.available_colors.map((color, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Variant Features:</h4>
                <p className="text-gray-600">
                  {variantsColors.variant_features}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

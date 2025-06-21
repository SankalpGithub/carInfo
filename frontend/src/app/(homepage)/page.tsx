"use client";
import Image from "next/image";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useBrandStore } from "@/store/car/useBrandStore";
import sampleData from "@/data/cardData.json";
import CarCard from "@/components/Card";

const page = () => {
  const { brands, setBrands } = useBrandStore();

  // useEffect(() => {
  //   if (brands.length === 0) {
  //     axios
  //       .get("http://localhost:8000/api/v1/carInfo/getAllBrand")
  //       .then((r) => setBrands(r.data.data));
  //   }
  // }, [brands, setBrands]);

  return (
    <div className="p-10">
      <p className="text-[25px] tracking-wider font-bold text-center sm:text-[50px] md:text-[60px] lg:text-[95px]">
        Explore the World of <br />
        Automobiles
      </p>

      <div className="my-10">
        <div className="font-normal text-[20px] sm:text-[40px] md:text-[50px] lg:text[100px]">
          Brands
        </div>
        <div className="w-fit grid grid-cols-4 gap-6 md:grid-cols-5">
          {brands.map((brand, index) => (
            <div key={index} className="text-center w-fit">
              <Link
                href={`/modelspage/${brand._id}`}
                prefetch
                className="w-[80px] h-[80px] border-2 rounded-sm flex justify-center items-center mt-3 bg-black sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]"
              >
                <Image
                  src={brand.logo_url}
                  alt="logo"
                  width={50}
                  height={60}
                  quality={100}
                  className="sm:w-[65px] sm:h-[60px] lg:w-[80px] lg:h-[75px]"
                />
              </Link>
              <p className="">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="font-normal text-[40px]">Most Search</div>
        {/* Car Cards Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sampleData.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default page;

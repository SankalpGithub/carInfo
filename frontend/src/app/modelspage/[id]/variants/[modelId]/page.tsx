"use client";
import React, { useEffect } from "react";
import { useVarinatStore } from "@/store/car/useVariantStore";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Lcard from "@/components/Lcard";
import CarCard from "@/components/Card";
import { useRouter } from "next/navigation";

const page = () => {
  const { id, modelId } = useParams<{ id: string; modelId: string }>();
  const { variants, setVariants } = useVarinatStore();
  console.log(id, modelId);
  const router = useRouter();

  // useEffect(() => {
  //   if (models.length === 0) {
  //     axios
  //       .get(`http://localhost:8000/api/v1/carInfo/getModelsByBrandId/${id}`)
  //       .then((r) => setModels(r.data.data));
  //   }
  // }, [models, setModels]);

  return (
    <div className="px-10 py-10 flex flex-col gap-6">
      <div className="text-2xl font-normal sm:text-3xl md:text-4xl">
        Porsche variants
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {variants.map((variant, index) => (
          <CarCard
            name={variant.name}
            id={variant._id}
            image={variant.img_url[1]}
            year={Number(variant.foundation_year)}
            price={variant.price}
            rating={4.5}
            onClick={() =>
              router.push(
                `/modelspage/${id}/variants/${modelId}/specification/${variant._id}/`
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default page;

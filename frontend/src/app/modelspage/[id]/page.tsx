"use client";
import React, { useEffect } from "react";
import { useModelStore } from "@/store/car/useModelStore";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Lcard from "@/components/Lcard";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const { models, setModels } = useModelStore();

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
        Porsche
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {models.map((model, index) => (
          <Link key={index} href={`/modelspage/${id}/variants/${model._id}`}>
            <Lcard car={model} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

"use client";

import dynamic from "next/dynamic";
import React from "react";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export const GoogleMap = () => {
  return (
    <section>
      <LeafletMap />
    </section>
  );
};

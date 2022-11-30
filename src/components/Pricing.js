import React from "react";

export default function Pricing() {
  const tierList = [
    {
      name: "Basic",
      tier: "Tier 1",
      price: "Free",
      list: [
        {
          name: "Mencatat barang masuk",
        },
        {
          name: "Mencatat barang keluar",
        },
        {
          name: "Mencatat hasil keuntungan",
        },
      ],
    },
    {
      name: "Business",
      tier: "Tier 2",
      price: "$12",
      list: [
        {
          name: "Mencatat barang masuk dan keluar",
        },
        {
          name: "Mencatat keuntungan",
        },
        {
          name: "Dapat menganalisa hasil penjualan dengan CHART",
        },
        {
          name: "Support 7x24 Jam",
        },
      ],
    },
    {
      name: "Entrepreneur",
      tier: "Tier 3",
      price: "$15",
      list: [
        {
          name: "Mencatat barang masuk dan keluar",
        },
        {
          name: "Mencatat Keuntungan",
        },
        {
          name: "Dapat menganalisa hasil penjualan dengan CHART",
        },
        {
          name: "Support 7x24 Jam",
        },
        {
          name: "Export data ke Excel",
        },
        {
          name: "AI Prediksi penghasilan",
        },
      ],
    },
  ];

  return (
    <div className="mt-8" id="price">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          {tierList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700"
            >
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                  {item.tier}
                </h2>
              </div>

              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                  {item.name}
                </span>
              </div>

              <ul className="flex-1 space-y-4">
                {item.list.map((item, idx) => (
                  <li key={idx} className="text-gray-500 dark:text-gray-400">
                    {item.name}
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                Start {item.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

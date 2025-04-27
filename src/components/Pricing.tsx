import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import React from "react";

export type PlanTableRow = {
  feature: string;
  week1: boolean | number | string;
  week3: boolean | number | string;
  week9: boolean | number | string;
};

export type Props = {
  data: PlanTableRow[];
};

const Pricing: React.FC<Props> = ({ data }) => {
  const renderCellValue = (
    value: boolean | number | string,
    isDiscounted: boolean = false
  ) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircleIcon className="h-6 w-6 text-green-500 mx-auto" />
      ) : (
        <XCircleIcon className="h-6 w-6 text-red-500 mx-auto" />
      );
    } else if (typeof value === "number") {
      return isDiscounted ? (
        <span className="text-center block line-through text-gray-400 text-xl">
          ₹{value}
        </span>
      ) : (
        <span className="text-center block text-xl">₹{value}</span>
      );
    } else if (typeof value === "string") {
      // If the value is a string, render it inside a button
      return (
        <button className="px-4 py-2 bg-gray-200 text-black font-weight-30 rounded-3xl ">
          {value}
        </button>
      );
    }

    return <span className="text-gray-400">N/A</span>;
  };

  return (
    <div className="w-full py-16 sm:py-20 bg-white">
      <div className="overflow-x-auto w-full p-4 flex flex-col items-center justify-center">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-left font-semibold border-r border-gray-300">
                Features
              </th>
              <th className="px-4 py-2 text-center font-semibold border-r border-gray-300">
                1 Week Plan
              </th>
              <th className="px-4 py-2 text-center font-semibold border-r border-gray-300">
                3 Week Plan
              </th>
              <th className="px-4 py-2 text-center font-semibold">
                9 Week Plan
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-b border-gray-200 hover:bg-gray-50 transition-color"
              >
                <td className="px-4 py-3 border-r border-gray-300">
                  {row.feature}
                </td>
                <td className="py-2 text-center border-r border-gray-300">
                  {row.feature.includes("Exclusive Discounts")
                    ? renderCellValue(row.week1, true)
                    : renderCellValue(row.week1)}
                </td>
                <td className="py-2 text-center border-r border-gray-300">
                  {row.feature.includes("Exclusive Discounts")
                    ? renderCellValue(row.week3, true)
                    : renderCellValue(row.week3)}
                </td>
                <td className="py-2 text-center">
                  {row.feature.includes("Exclusive Discounts")
                    ? renderCellValue(row.week9, true)
                    : renderCellValue(row.week9)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full">
        {/* Image Section - 30% of the Card */}
        <div className="w-1/5 p-4 flex flex-col items-center justify-center">
          <img
            src="https://picsum.photos/seed/picsum/200/300" // Sample Pexels image URL
            alt="Feature Image"
            className="h-32 w-32 object-cover rounded-full mb-2"
          />
          <span className="text-sm text-gray-500">Feature Image</span>
        </div>

        {/* Table Section - 70% of the Card */}
        <div className="w-6/3 p-4">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-left font-semibold border-r border-gray-300">
                  Features
                </th>
                <th className="px-4 py-2 text-center font-semibold border-r border-gray-300">
                  1 Week Plan
                </th>
                <th className="px-4 py-2 text-center font-semibold border-r border-gray-300">
                  3 Week Plan
                </th>
                <th className="px-4 py-2 text-center font-semibold">
                  9 Week Plan
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-t border-b border-gray-200 hover:bg-gray-50 transition-color"
                >
                  <td className="px-4 py-3 border-r border-gray-300">
                    {row.feature}
                  </td>
                  <td className="py-2 text-center border-r border-gray-300">
                    {row.feature.includes("Exclusive Discounts")
                      ? renderCellValue(row.week1, true)
                      : renderCellValue(row.week1)}
                  </td>
                  <td className="py-2 text-center border-r border-gray-300">
                    {row.feature.includes("Exclusive Discounts")
                      ? renderCellValue(row.week3, true)
                      : renderCellValue(row.week3)}
                  </td>
                  <td className="py-2 text-center">
                    {row.feature.includes("Exclusive Discounts")
                      ? renderCellValue(row.week9, true)
                      : renderCellValue(row.week9)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

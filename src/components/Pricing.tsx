import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import React, { useState } from "react";

export type PlanTableRow = {
  feature: string;
  week1: boolean | number | string;
  week3: boolean | number | string;
  week9: boolean | number | string;
};

type planType = "Basic" | "Premium";

const Basic = [
  {
    feature: "DIET PLAN GIVEN",
    week1: "3",
    week3: "3",
    week9: "6",
  },
  {
    feature: "NUTRITIONAL COMPREHENSIVE ASSESSMENT DONE",
    week1: true,
    week3: true,
    week9: true,
  },
  {
    feature: "FOLLOWUPS WEEKLY VIDEO CALLS",
    week1: "12",
    week3: "24",
    week9: "36",
  },
  {
    feature: "FOLLOWUPS WEEKLY AUDIO CALLS",
    week1: "12",
    week3: "24",
    week9: "36",
  },
  {
    feature: "BLOOD REPORT EVALUATION DONE AT START AND END OF 3 MONTHS",
    week1: "1",
    week3: "2",
    week9: "3",
  },
  {
    feature:
      "DOWNLOADABLE RESOURCES PDF - END OF PACKAGE - SUMMARY OUTLINE OF WHAT THEY LEARN THROUGHOUT THE PROGRAM",
    week1: false,
    week3: true,
    week9: true,
  },
  {
    feature: "",
    week1: "Buy Now",
    week3: "Buy Now",
    week9: "Buy Now",
  },
];

const Premium = [
  {
    feature: "DIET PLAN GIVEN",
    week1: "3",
    week3: "6",
    week9: "9",
  },
  {
    feature: "NUTRITIONAL COMPREHENSIVE ASSESSMENT DONE",
    week1: true,
    week3: true,
    week9: true,
  },
  {
    feature: "FOLLOWUPS WEEKLY VIDEO CALLS",
    week1: "12",
    week3: "24",
    week9: "36",
  },
  {
    feature: "FOLLOWUPS WEEKLY AUDIO CALLS",
    week1: "24",
    week3: "48",
    week9: "72",
  },
  {
    feature: "BLOOD REPORT EVALUATION DONE AT START AND END OF 3 MONTHS",
    week1: "1",
    week3: "2",
    week9: "3",
  },
  {
    feature:
      "TEACHING CURATED MINDFULNESS PRACTICES TO BE MORE HAPPIER AND HEALTHIER",
    week1: true,
    week3: true,
    week9: true,
  },
  {
    feature: "TRAVEL PLAN AND GUIDANCE SHARED",
    week1: true,
    week3: true,
    week9: true,
  },
  {
    feature:
      "DOWNLOADABLE RESOURCES PDF - END OF PACKAGE - SUMMARY OUTLINE OF WHAT THEY LEARN THROUGHOUT THE PROGRAM",
    week1: true,
    week3: true,
    week9: true,
  },
  {
    feature: "WEEKLY LIVE GUIDED MEDITATION ON ZOOM",
    week1: true,
    week3: true,
    week9: true,
  },
  {
    feature: "",
    week1: "Buy Now",
    week3: "Buy Now",
    week9: "Buy Now",
  },
];

const Pricing: React.FC = () => {
  const [currentPlanView, setCurrentPlanView] = useState<planType>("Basic");
  const [data, setData] = useState(Basic);
  const handleChangePlans = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("This is the id of the button", e.currentTarget.value);
    const plan = e.currentTarget.value;
    setCurrentPlanView(e.currentTarget.value as planType);
    console.log(currentPlanView);
    if (plan === "Basic") {
      setData(Basic);
    }
    if (plan === "Premium") {
      setData(Premium);
    }
  };

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
      <div className="flex space-x-4 pl-4">
        <button
          onClick={handleChangePlans}
          value="Basic"
          className={`w-32 px-4 py-2 rounded transition ${
            currentPlanView === "Basic"
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Basic
        </button>
        <button
          onClick={handleChangePlans}
          value="Premium"
          className={`w-32 px-4 py-2 rounded transition ${
            currentPlanView === "Premium"
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Premium
        </button>
      </div>
      <div className="overflow-x-auto w-full p-4 flex flex-col items-center justify-center">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-left font-semibold border-r border-gray-300">
                {currentPlanView} Plan
              </th>
              <th className="px-4 py-2 text-center font-semibold border-r border-gray-300">
                {currentPlanView === "Basic" ? (
                  <p>3 MONTHS - RS. 10,000</p>
                ) : (
                  <p>3 MONTHS - RS. 15,000</p>
                )}
              </th>
              <th className="px-4 py-2 text-center font-semibold border-r border-gray-300">
                {currentPlanView === "Basic" ? (
                  <p>6 MONTHS - RS. 18,000</p>
                ) : (
                  <p>6 MONTHS - RS. 28,000</p>
                )}
              </th>
              <th className="px-4 py-2 text-center font-semibold">
                {currentPlanView === "Basic" ? (
                  <p>9 MONTHS - RS. 27,000</p>
                ) : (
                  <p>9 MONTHS - RS. 42,000</p>
                )}
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
  );
};

export default Pricing;

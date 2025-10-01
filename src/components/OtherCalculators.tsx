import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type CalcKey = "bmr" | "onerm" | "bodyfat" | "macro";

interface CalcItem {
  key: CalcKey;
  label: string;
  path: string;
  description: string;
  svg: ReactNode;
}

const calculators: CalcItem[] = [
  {
    key: "bmr",
    label: "BMR Calculator",
    path: "/tools/bmr-calculator",
    description: "Calculate your Basal Metabolic Rate",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-20 h-20 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="32" cy="32" r="22" />
        <path
          d="M14 34 H24 L28 26 L34 42 L38 34 H50"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "onerm",
    label: "1RM Calculator",
    path: "/tools/onerm-calculator",
    description: "Find your one-rep max strength",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-20 h-20 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="8" y1="32" x2="56" y2="32" />
        <rect x="10" y="24" width="6" height="16" rx="1" />
        <rect x="48" y="24" width="6" height="16" rx="1" />
        <rect x="18" y="26" width="6" height="12" rx="1" />
        <rect x="40" y="26" width="6" height="12" rx="1" />
      </svg>
    ),
  },
  {
    key: "bodyfat",
    label: "Body Fat Calculator",
    path: "/tools/body-fat-calculator",
    description: "Estimate your body fat percentage",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-20 h-20 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="22" cy="22" r="10" />
        <circle cx="42" cy="22" r="10" />
        <circle cx="32" cy="42" r="10" />
      </svg>
    ),
  },
  {
    key: "macro",
    label: "Macro Calculator",
    path: "/tools/macro-calculator",
    description: "Plan your protein, carbs & fats",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-20 h-20 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="32" cy="32" r="22" />
        <path d="M32 10 A22 22 0 0 1 54 32 H32 Z" />
        <path d="M32 54 A22 22 0 0 1 10 32 H32 Z" />
      </svg>
    ),
  },
];

const getCurrentKey = (pathname: string): CalcKey | null => {
  if (pathname.includes("body-fat-calculator")) return "bodyfat";
  if (pathname.includes("onerm-calculator")) return "onerm";
  if (pathname.includes("bmr-calculator")) return "bmr";
  if (pathname.includes("macro-calculator")) return "macro";
  return null;
};

const OtherCalculators: React.FC = () => {
  const location = useLocation();
  const current = getCurrentKey(location.pathname);

  const items = current
    ? calculators.filter((c) => c.key !== current)
    : calculators;

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Other Calculators
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((calc) => (
            <Link
              key={calc.key}
              to={calc.path}
              aria-label={calc.label}
              className="group bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-green-600">{calc.svg}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {calc.label}
              </h4>
              <p className="text-sm text-gray-500">{calc.description}</p>
              <span className="mt-4 inline-block px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 group-hover:bg-gray-200 text-sm font-medium">
                Calculate Now
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherCalculators;

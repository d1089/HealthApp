import React, { useState, ChangeEvent } from "react";
import OtherCalculators from "../components/OtherCalculators";

interface FormData {
  gender: "male" | "female" | "";
  waist: string;
  waistUnit: "in" | "cm";
  height: string;
  heightUnit: "in" | "cm";
  neck: string;
  neckUnit: "in" | "cm";
  hip?: string; // for females
  hipUnit?: "in" | "cm";
}

const toInches = (value: string, unit: "in" | "cm") => {
  const v = parseFloat(value);
  if (isNaN(v)) return NaN;
  return unit === "cm" ? v / 2.54 : v;
};

export default function BodyFatCalculator() {
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    waist: "",
    waistUnit: "in",
    height: "",
    heightUnit: "cm",
    neck: "",
    neckUnit: "in",
    hip: "",
    hipUnit: "in",
  });

  const [bodyFat, setBodyFat] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value } as FormData));
  };

  const calculateBodyFat = () => {
    const {
      gender,
      waist,
      waistUnit,
      neck,
      neckUnit,
      height,
      heightUnit,
      hip,
      hipUnit,
    } = formData;

    // convert everything to INCHES for the USC equations
    const waistIn = toInches(waist, waistUnit);
    const neckIn = toInches(neck, neckUnit);
    const heightIn = toInches(height, heightUnit);
    const hipIn = hip ? toInches(hip, hipUnit || "in") : NaN;

    if (
      !gender ||
      isNaN(waistIn) ||
      isNaN(neckIn) ||
      isNaN(heightIn) ||
      heightIn <= 0
    ) {
      setBodyFat(null);
      return;
    }

    let result: number;

    if (gender === "male") {
      // U.S. Navy (USC) — all values in inches
      // BFP = 86.010*log10(waist - neck) - 70.041*log10(height) + 36.76
      const diff = waistIn - neckIn;
      if (diff <= 0) {
        setBodyFat(null);
        return;
      }
      result = 86.01 * Math.log10(diff) - 70.041 * Math.log10(heightIn) + 36.76;
    } else {
      // Female USC version: needs hip
      // BFP = 163.205*log10(waist + hip - neck) - 97.684*log10(height) - 78.387
      if (isNaN(hipIn)) {
        setBodyFat(null);
        return;
      }
      const sum = waistIn + hipIn - neckIn;
      if (sum <= 0) {
        setBodyFat(null);
        return;
      }
      result =
        163.205 * Math.log10(sum) - 97.684 * Math.log10(heightIn) - 78.387;
    }

    setBodyFat(result.toFixed(2));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Section */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Body Fat Calculator
            </h1>

            <label className="block mb-4">
              <span className="text-gray-700">Gender*</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="text-sm text-gray-500 underline mb-6"
            >
              Why only two genders?
            </button>

            {/* Waist */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="col-span-2">
                <label className="block text-gray-700">Waist*</label>
                <input
                  type="number"
                  name="waist"
                  value={formData.waist}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Unit</label>
                <select
                  name="waistUnit"
                  value={formData.waistUnit}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-2 py-2"
                >
                  <option value="in">in</option>
                  <option value="cm">cm</option>
                </select>
              </div>
            </div>

            {/* Height */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="col-span-2">
                <label className="block text-gray-700">Height*</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Unit</label>
                <select
                  name="heightUnit"
                  value={formData.heightUnit}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-2 py-2"
                >
                  <option value="cm">cm</option>
                  <option value="in">in</option>
                </select>
              </div>
            </div>

            {/* Neck */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="col-span-2">
                <label className="block text-gray-700">
                  Neck Circumference*
                </label>
                <input
                  type="number"
                  name="neck"
                  value={formData.neck}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Unit</label>
                <select
                  name="neckUnit"
                  value={formData.neckUnit}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-2 py-2"
                >
                  <option value="in">in</option>
                  <option value="cm">cm</option>
                </select>
              </div>
            </div>

            {/* Hip for females */}
            {formData.gender === "female" && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-2">
                  <label className="block text-gray-700">
                    Hip Circumference*
                  </label>
                  <input
                    type="number"
                    name="hip"
                    value={formData.hip}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Unit</label>
                  <select
                    name="hipUnit"
                    value={formData.hipUnit}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-lg px-2 py-2"
                  >
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                  </select>
                </div>
              </div>
            )}

            <button
              onClick={calculateBodyFat}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Let's calculate
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-8 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">
              Your Body fat Percentage is
            </h2>
            <div className="text-3xl font-bold text-gray-800 bg-white border rounded-lg py-6 text-center mb-6">
              {bodyFat ?? "-"} {bodyFat ? "%" : ""}
            </div>
            <p className="text-gray-600 mb-6">
              Body fat percentage is a key indicator of good health…
            </p>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              {/* <p className="font-semibold text-gray-800 mb-2">
              Take the first step to unlocking a new you!
            </p>
            <p className="text-sm text-gray-600 mb-4">
              3 million+ members trust FITTR for their fitness & nutrition needs
            </p> */}
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-lg p-8 max-w-lg text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Why only two genders?</h2>
              <p className="text-gray-600 mb-6">
                This calculator uses the Navy method which has sex-specific
                constants…
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" bg-gray-50 flex items-center justify-center px-6 relative">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl grid grid-cols-1 overflow-hidden">
          <OtherCalculators />
        </div>
      </div>
    </>
  );
}

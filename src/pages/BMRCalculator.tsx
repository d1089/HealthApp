import React, { useState } from "react";
import OtherCalculators from "../components/OtherCalculators";

const BMRCalculator: React.FC = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [exercise, setExercise] = useState<string>("1.2"); // activity factor
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateBMR = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (isNaN(h) || isNaN(w) || isNaN(a)) {
      setBmr(null);
      setTdee(null);
      return;
    }

    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      bmrValue = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    }

    const tdeeValue = bmrValue * parseFloat(exercise);

    setBmr(Math.round(bmrValue));
    setTdee(Math.round(tdeeValue));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              BMR Calculator
            </h1>
            {/* Left side - inputs */}
            <div className="space-y-4">
              {/* Gender */}
              <div>
                <label className="block text-sm font-medium">Gender*</label>
                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value as "male" | "female")
                  }
                  className="w-full mt-1 p-2 border rounded-lg"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Exercise */}
              <div>
                <label className="block text-sm font-medium">Exercise*</label>
                <select
                  value={exercise}
                  onChange={(e) => setExercise(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                >
                  <option value="1.2">Sedentary (little/no exercise)</option>
                  <option value="1.375">Lightly active (1-3 days/week)</option>
                  <option value="1.55">
                    Moderately active (3-5 days/week)
                  </option>
                  <option value="1.725">Very active (6-7 days/week)</option>
                  <option value="1.9">
                    Extra active (hard daily exercise)
                  </option>
                </select>
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium">
                  Height (cm)*
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="e.g. 170"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium">
                  Weight (kg)*
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="e.g. 70"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium">Age*</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="e.g. 25"
                />
              </div>

              <button
                onClick={calculateBMR}
                className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Calculate
              </button>
            </div>
          </div>

          {/* Right side - results */}
          <div className="bg-gray-50 p-8 flex flex-col justify-center">
            <div className="text-lg font-semibold text-gray-700">
              Your BMR is
            </div>
            <div className="text-2xl font-bold">
              {bmr ? `${bmr} kcal` : "--"}
            </div>

            <div className="text-lg font-semibold text-gray-700">
              Your TDEE is
            </div>
            <div className="text-2xl font-bold">
              {tdee ? `${tdee} kcal` : "--"}
            </div>

            <div className="mt-4 bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
              Take the first step to unlocking a new you! Your BMR is the number
              of calories your body burns at rest. TDEE includes your daily
              activity.
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-50 flex items-center justify-center px-6 relative">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl grid grid-cols-1 overflow-hidden">
          <OtherCalculators />
        </div>
      </div>
    </>
  );
};

export default BMRCalculator;

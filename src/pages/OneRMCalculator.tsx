import React, { useState } from "react";
import OtherCalculators from "../components/OtherCalculators";

const OneRmCalculator: React.FC = () => {
  const [exercise, setExercise] = useState<string>("");
  const [weight, setWeight] = useState<number | "">("");
  const [reps, setReps] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  // Brzycki formula for 1RM
  const calculate1RM = () => {
    if (!weight || !reps) return;
    const rm = Number(weight) * (36 / (37 - Number(reps)));
    setResult(Math.round(rm));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              1RM Calculator
            </h1>
            {/* Left side - inputs */}
            <div className="space-y-4">
              {/* Exercise Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select exercise*
                </label>
                <select
                  value={exercise}
                  onChange={(e) => setExercise(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Choose Exercise --</option>
                  <option value="bench">Bench Press</option>
                  <option value="squat">Squat</option>
                  <option value="deadlift">Deadlift</option>
                  <option value="overhead">Overhead Press</option>
                </select>
              </div>

              {/* Weight Input */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Weight lifted*
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) =>
                      setWeight(e.target.value ? Number(e.target.value) : "")
                    }
                    placeholder="Enter weight"
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Unit</label>
                  <select className="border rounded-lg p-2">
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>

              {/* Reps Input */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Repetitions*
                </label>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) =>
                    setReps(e.target.value ? Number(e.target.value) : "")
                  }
                  placeholder="Enter reps"
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculate1RM}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Calculate
              </button>
            </div>
          </div>

          {/* Right side - results */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Your 1RM is
            </h3>
            <div className="text-3xl font-bold text-gray-900 mb-4">
              {result ? (
                `${result} kg`
              ) : (
                <span className="text-gray-400">
                  Your result will appear here
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">
              1 Repetition Maximum (1RM for short) is the maximum weight that
              you can lift in a single repetition of an exercise. This value
              determines your strength levels for a particular exercise.
            </p>
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

export default OneRmCalculator;

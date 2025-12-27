import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Sparkles, AlertCircle } from "lucide-react";

const FODMAP_LOW = [
  "carrot",
  "potato",
  "tomato",
  "spinach",
  "zucchini",
  "cucumber",
  "bell pepper",
  "chicken",
  "egg",
  "rice",
  "oats",
  "lactose-free milk",
  "banana",
  "orange",
  "strawberry",
];

const FODMAP_HIGH = [
  "garlic",
  "onion",
  "wheat",
  "pear",
  "apple",
  "honey",
  "cauliflower",
  "mushroom",
  "milk",
  "yogurt",
  "beans",
];

type Nutrition = {
  calories: number;
  protein_g: number;
  carbohydrates_total_g: number;
  fat_total_g: number;
};

type Recipe = {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  nutrition?: Nutrition;
  fodmapTag: "Low" | "Moderate" | "High";
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MealPlanner: React.FC = () => {
  const [ingredientInput, setIngredientInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "9xE0sAVr8Ykn+7oC4he4MA==M2BDqr9iE9oqavNm"; // TODO: move to env variable

  const parseIngredients = (input: string): string[] =>
    input
      .split(",")
      .map((i) => i.trim().toLowerCase())
      .filter((i) => i.length > 0);

  const getFodmapTagForIngredients = (
    ings: string[]
  ): "Low" | "Moderate" | "High" => {
    let highFound = false;
    let lowCount = 0;

    for (const ing of ings) {
      if (FODMAP_HIGH.some((h) => ing.includes(h))) {
        highFound = true;
      }
      if (FODMAP_LOW.some((l) => ing.includes(l))) {
        lowCount += 1;
      }
    }

    if (highFound) return "High";
    if (lowCount === ings.length && ings.length > 0) return "Low";
    return "Moderate";
  };

  const buildSimpleRecipes = (ings: string[]): Recipe[] => {
    const base: Recipe[] = [];

    if (ings.length === 0) return base;

    const allIngs = [...ings];
    const titleBase = allIngs
      .slice(0, 3)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(", ");

    const candidates: Recipe[] = [
      {
        id: 1,
        title: `${titleBase} Stir-Fry`,
        ingredients: allIngs,
        instructions:
          "Heat oil in a pan, add chopped ingredients, stir-fry on medium heat until cooked. Season with salt, pepper and herbs.",
        fodmapTag: getFodmapTagForIngredients(allIngs),
      },
      {
        id: 2,
        title: `${titleBase} Bowl`,
        ingredients: allIngs,
        instructions:
          "Cook any grains (like rice or oats) if available, top with remaining ingredients. Add dressing or spices to taste.",
        fodmapTag: getFodmapTagForIngredients(allIngs),
      },
      {
        id: 3,
        title: `${titleBase} Quick Salad`,
        ingredients: allIngs,
        instructions:
          "Chop all ingredients into bite-sized pieces, toss with lemon juice, olive oil, salt, and pepper.",
        fodmapTag: getFodmapTagForIngredients(allIngs),
      },
    ];

    const unique = new Map<string, Recipe>();
    for (const r of candidates) unique.set(r.title, r);
    return Array.from(unique.values());
  };

  const fetchNutrition = async (
    ingredients: string[]
  ): Promise<Nutrition | undefined> => {
    if (!ingredients.length) return undefined;

    const query = ingredients.join(", ");
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(
          query
        )}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      if (!res.ok) {
        console.error("Nutrition API error", await res.text());
        return undefined;
      }

      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) return undefined;

      const totals = data.reduce(
        (acc: Nutrition, item: any) => {
          return {
            // calories: acc.calories + (item.calories || 0),
            // protein_g: acc.protein_g + (item.protein_g || 0),
            carbohydrates_total_g:
              acc.carbohydrates_total_g + (item.carbohydrates_total_g || 0),
            fat_total_g: acc.fat_total_g + (item.fat_total_g || 0),
          };
        },
        { calories: 0, protein_g: 0, carbohydrates_total_g: 0, fat_total_g: 0 }
      );

      return totals;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const ings = parseIngredients(ingredientInput);

    if (!ings.length) {
      setError("Please list at least one ingredient, separated by commas.");
      return;
    }

    setLoading(true);
    try {
      const baseRecipes = buildSimpleRecipes(ings);

      const withNutrition = await Promise.all(
        baseRecipes.map(async (r) => {
          const nutrition = await fetchNutrition(r.ingredients);
          return { ...r, nutrition };
        })
      );

      setRecipes(withNutrition);
    } catch (err) {
      setError("Something went wrong while generating recipes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden pt-24 pb-20">
      {/* Fresh Vegetables Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🥬</div>
        <div className="absolute top-40 right-20 text-7xl">🥕</div>
        <div className="absolute bottom-32 left-32 text-9xl">🥗</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🥑</div>
        <div className="absolute bottom-20 right-40 text-7xl">🍅</div>
        <div className="absolute top-2/3 left-20 text-8xl">🥒</div>
      </div>

      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <ChefHat className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            What's in your fridge?
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Enter your ingredients and get quick recipe ideas with{" "}
            <span className="font-semibold text-green-600">
              nutrition info and FODMAP tags
            </span>
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Your Ingredients
            </h2>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              What's available in your kitchen?
            </label>
            <textarea
              className="w-full rounded-2xl bg-white/50 backdrop-blur border-2 border-gray-200 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-32 transition-all"
              placeholder="e.g. chicken, rice, spinach, tomato, 200g broccoli"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
            />
            <p className="mt-3 text-sm text-gray-600 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600" />
              <span>
                Tip: Separate items with commas. Include quantities for more
                accurate nutrition, e.g. "200g chicken, 1 cup rice".
              </span>
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerate}
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <ChefHat className="w-5 h-5" />
                  Generate Recipes
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Recipe Results */}
        <AnimatePresence>
          {recipes.length > 0 && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Recipe Ideas 🍽️
              </h2>
              {recipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-8 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {recipe.title}
                    </h3>
                    <span
                      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap ${
                        recipe.fodmapTag === "Low"
                          ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-300"
                          : recipe.fodmapTag === "High"
                          ? "bg-red-100 text-red-700 border-2 border-red-300"
                          : "bg-amber-100 text-amber-700 border-2 border-amber-300"
                      }`}
                    >
                      FODMAP: {recipe.fodmapTag}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">🥘</span>
                        Ingredients
                      </h4>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ing, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-green-600 font-bold mt-1">
                              •
                            </span>
                            <span className="capitalize">{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">👨‍🍳</span>
                        Instructions
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {recipe.instructions}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-green-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-xl">📊</span>
                      Nutrition Info (Whole Recipe)
                    </h4>
                    {recipe.nutrition ? (
                      <div className="overflow-x-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {/* <div className="bg-white/60 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-emerald-600">
                              {Math.round(recipe.nutrition.calories)}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold mt-1">
                              Calories
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-blue-600">
                              {recipe.nutrition.protein_g.toFixed(1)}g
                            </div>
                            <div className="text-sm text-gray-600 font-semibold mt-1">
                              Protein
                            </div>
                          </div> */}
                          <div className="bg-white/60 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-purple-600">
                              {recipe.nutrition.carbohydrates_total_g.toFixed(
                                1
                              )}
                              g
                            </div>
                            <div className="text-sm text-gray-600 font-semibold mt-1">
                              Carbs
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-orange-600">
                              {recipe.nutrition.fat_total_g.toFixed(1)}g
                            </div>
                            <div className="text-sm text-gray-600 font-semibold mt-1">
                              Fat
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-xs text-gray-600 text-center">
                          Values are approximate, computed using the Nutrition
                          API from ingredient text.
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600 text-center py-4">
                        Could not fetch nutrition for this recipe. Try adding
                        quantities to your ingredients.
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MealPlanner;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat,
  Sparkles,
  AlertCircle,
  Clock,
  Users,
  ExternalLink,
} from "lucide-react";

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
  "lettuce",
  "kale",
  "eggplant",
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
  "asparagus",
  "artichoke",
];

type Recipe = {
  id: number;
  title: string;
  image: string;
  usedIngredients: string[];
  missedIngredients: string[];
  instructions: string[]; // Changed to string array for steps
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
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

  // TODO: Replace with your Spoonacular API key
  // Get free API key at: https://spoonacular.com/food-api/console#Dashboard
  const SPOONACULAR_API_KEY = "c3b9db5d0f0e4ebca730896f4163b80b";

  const parseIngredients = (input: string): string =>
    input
      .split(",")
      .map((i) => i.trim().toLowerCase())
      .filter((i) => i.length > 0)
      .join(",");

  const getFodmapTag = (ingredients: string[]): "Low" | "Moderate" | "High" => {
    let highCount = 0;
    let lowCount = 0;

    for (const ing of ingredients) {
      const ingLower = ing.toLowerCase();
      if (FODMAP_HIGH.some((h) => ingLower.includes(h))) highCount++;
      if (FODMAP_LOW.some((l) => ingLower.includes(l))) lowCount++;
    }

    if (highCount > 0) return "High";
    if (lowCount === ingredients.length && ingredients.length > 0) return "Low";
    return "Moderate";
  };

  const fetchRecipesByIngredients = async (ingredients: string) => {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
      ingredients
    )}&number=5&ranking=2&ignorePantry=true&apiKey=${SPOONACULAR_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    return response.json();
  };

  const stripHtmlTags = (html: string): string => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const parseInstructions = (instructions: string): string[] => {
    if (!instructions) return [];

    // Strip HTML tags
    const cleanText = stripHtmlTags(instructions);

    // Split by periods, newlines, or numbered lists
    const steps = cleanText
      .split(/\d+\.|\.(?=[A-Z])|[\n\r]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 10); // Filter out very short fragments

    return steps;
  };

  const fetchRecipeInstructions = async (recipeId: number) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOONACULAR_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    return response.json();
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (SPOONACULAR_API_KEY === "YOUR_API_KEY_HERE") {
      setError(
        "Please add your Spoonacular API key. Get one free at https://spoonacular.com/food-api/console#Dashboard"
      );
      return;
    }

    const ings = parseIngredients(ingredientInput);

    if (!ings) {
      setError("Please list at least one ingredient, separated by commas.");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Find recipes by ingredients
      const recipeResults = await fetchRecipesByIngredients(ings);

      if (!recipeResults || recipeResults.length === 0) {
        setError(
          "No recipes found with these ingredients. Try different ingredients or add more common items."
        );
        setLoading(false);
        return;
      }

      // Step 2: Fetch detailed instructions for each recipe
      const detailedRecipes = await Promise.all(
        recipeResults.slice(0, 4).map(async (recipe: any) => {
          const details = await fetchRecipeInstructions(recipe.id);

          const usedIngredientNames = recipe.usedIngredients.map(
            (ing: any) => ing.name
          );
          const missedIngredientNames = recipe.missedIngredients.map(
            (ing: any) => ing.name
          );

          const instructionSteps = parseInstructions(
            details?.instructions ||
              "Instructions not available. Check the source link for details."
          );

          return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            usedIngredients: usedIngredientNames,
            missedIngredients: missedIngredientNames,
            instructions: instructionSteps,
            readyInMinutes: details?.readyInMinutes,
            servings: details?.servings,
            sourceUrl: details?.sourceUrl,
            fodmapTag: getFodmapTag([
              ...usedIngredientNames,
              ...missedIngredientNames,
            ]),
          };
        })
      );

      setRecipes(detailedRecipes);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to fetch recipes. Please check your API key and internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden pt-24 pb-20">
      {/* Background Pattern */}
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
            Enter your ingredients and get{" "}
            <span className="font-semibold text-green-600">
              real recipe recommendations
            </span>{" "}
            powered by Spoonacular
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

          <form onSubmit={handleGenerate}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                What's available in your kitchen?
              </label>
              <textarea
                className="w-full rounded-2xl bg-white/50 backdrop-blur border-2 border-gray-200 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-32 transition-all"
                placeholder="e.g. chicken, rice, spinach, tomato, bell pepper, carrots"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
              />
              <p className="mt-3 text-sm text-gray-600 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600" />
                <span>
                  Tip: List main ingredients you want to use. The API will
                  suggest recipes and show what else you might need.
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
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    Finding Recipes...
                  </>
                ) : (
                  <>
                    <ChefHat className="w-5 h-5" />
                    Find Recipes
                  </>
                )}
              </motion.button>
            </div>
          </form>
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
                Recipe Recommendations 🍽️
              </h2>
              {recipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                    {/* Recipe Image */}
                    <div className="md:col-span-1">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg"
                      />
                    </div>

                    {/* Recipe Details */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="text-2xl font-bold text-gray-900 flex-1">
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

                      {/* Recipe Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        {recipe.readyInMinutes && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-600" />
                            <span className="font-semibold">
                              {recipe.readyInMinutes} mins
                            </span>
                          </div>
                        )}
                        {recipe.servings && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-emerald-600" />
                            <span className="font-semibold">
                              {recipe.servings} servings
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Ingredients */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {recipe.usedIngredients.length > 0 && (
                          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                            <h4 className="font-bold text-green-800 mb-2 text-sm">
                              ✅ You Have
                            </h4>
                            <ul className="space-y-1">
                              {recipe.usedIngredients.map((ing, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-700 capitalize"
                                >
                                  • {ing}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {recipe.missedIngredients.length > 0 && (
                          <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                            <h4 className="font-bold text-orange-800 mb-2 text-sm">
                              🛒 You'll Need
                            </h4>
                            <ul className="space-y-1">
                              {recipe.missedIngredients.map((ing, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-700 capitalize"
                                >
                                  • {ing}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Instructions Preview */}
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                          <span>👨‍🍳</span>
                          Instructions
                        </h4>
                        {recipe.instructions.length > 0 ? (
                          <ol className="space-y-2">
                            {recipe.instructions
                              .slice(0, 3)
                              .map((step, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                  <span className="flex-shrink-0 w-5 h-5 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">
                                    {idx + 1}
                                  </span>
                                  <span className="leading-relaxed">
                                    {step}
                                  </span>
                                </li>
                              ))}
                            {recipe.instructions.length > 3 && (
                              <li className="text-sm text-gray-500 italic ml-7">
                                + {recipe.instructions.length - 3} more steps...
                              </li>
                            )}
                          </ol>
                        ) : (
                          <p className="text-sm text-gray-700">
                            Instructions not available. Click "View Full Recipe"
                            below for details.
                          </p>
                        )}
                      </div>

                      {/* View Full Recipe Button */}
                      {recipe.sourceUrl && (
                        <a
                          href={recipe.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                          View Full Recipe
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* API Attribution */}
              <div className="text-center text-sm text-gray-600 pt-4">
                <p>
                  Recipes powered by{" "}
                  <a
                    href="https://spoonacular.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-semibold hover:underline"
                  >
                    Spoonacular API
                  </a>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MealPlanner;

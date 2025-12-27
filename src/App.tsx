import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BodyFatCalculator from "./pages/BodyFatCalculator";
import BMRCalculator from "./pages/BMRCalculator";
import OneRmCalculator from "./pages/OneRMCalculator";
import Pricing from "./components/Pricing";
import MealPlanner from "./pages/MealPlanner";
// import AboutUsPage from "./pages/AboutUsPage";
// import MacronutrientCalculator from "./pages/MacronutrientCalculator";
// import NutritionPlanner from "./pages/NutritionPlanner";
// import NutritionPlanner from "./pages/NutritionPlanner";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/tools/body-fat-calculator"
            element={<BodyFatCalculator />}
          />
          <Route path="/tools/bmr-calculator" element={<BMRCalculator />} />
          <Route path="/tools/onerm-calculator" element={<OneRmCalculator />} />
          <Route path="/tools/meal-planner" element={<MealPlanner />} />
        </Routes>
        <Footer />
        <a
          href="https://wa.me/+919653398294"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
          {/* <i className="fa-brands fa-whatsapp"></i> */}
        </a>
      </div>
    </Router>
  );
}

export default App;

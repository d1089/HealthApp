import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

function App() {
  const planData = [
    {
      feature: "Primary Weight loss + One Secondary Goal",
      week1: true,
      week3: true,
      week9: true,
    },
    {
      feature: "Meal Plan updated every week",
      week1: false,
      week3: true,
      week9: true,
    },
    {
      feature: "Nutritional Supplements",
      week1: false,
      week3: true,
      week9: true,
    },
    {
      feature: "Automated Whatsapp support",
      week1: false,
      week3: false,
      week9: true,
    },
    {
      feature: "Monthly Open House",
      week1: true,
      week3: true,
      week9: true,
    },
    {
      feature: "The Nourish Genie Group",
      week1: false,
      week3: false,
      week9: false,
    },
    {
      feature: "Blood Report Evaluation",
      week1: true,
      week3: true,
      week9: true,
    },
    {
      feature: "Blood Report Evaluation",
      week1: true,
      week3: true,
      week9: true,
    },
    {
      feature: "Exclusive Discounts till 31st March 25",
      week1: 1999,
      week3: 3999,
      week9: 7999,
    },
    {
      feature: "Final Price inclusive of taxes",
      week1: 999,
      week3: 1599,
      week9: 3599,
    },
    {
      feature: "",
      week1: "Buy Now",
      week3: "Buy Now",
      week9: "Buy Now",
    },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing data={planData} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

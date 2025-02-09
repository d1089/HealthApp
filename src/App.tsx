import "./App.css";
import { Menu } from "./components/menu";

function App() {
  // let lastScrollTop: number;
  // let navbar = document.getElementById("navbar");
  // if (navbar)
  //   window.addEventListener("scroll", function () {
  //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //       navbar.style.top = "-80px";
  //     } else {
  //       navbar.style.top = "0";
  //     }
  //     lastScrollTop = scrollTop;
  //   });

  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;

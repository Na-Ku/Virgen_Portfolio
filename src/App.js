import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import CarouselComponent from "./Pages/CarouselBanner/CarouselComponent";
import AllCategories from "./Pages/Category/AllCategories";
import Promo from "./Pages/Diskon/Promo";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main style={{ height: "1000px" }}>
        <div className="bg-warning bg-opacity-50">
          <CarouselComponent />
        </div>
        <span>
          <AllCategories />
        </span>
        <span>
          <Promo />
        </span>
      </main>
    </div>
  );
}

export default App;

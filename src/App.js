import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import CarouselComponent from "./Pages/CarouselBanner/CarouselComponent";
import AllCategories from "./Pages/Category/AllCategories";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="bg-warning bg-opacity-50">
          <CarouselComponent />
        </div>
        <span>
          <AllCategories />
        </span>
      </main>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import CarouselComponent from "./Pages/CarouselBanner/CarouselComponent";

function App() {
  return (
    <div className="App bg-warning">
      <header>
        <NavBar />
      </header>
      <main>
        <CarouselComponent />
      </main>
    </div>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;

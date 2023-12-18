import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Exercises from "./components/exercises/Exercices";
import Plans from "./components/plans/Plans";
import Footer from "./components/footer/Footer";
import Train from "./components/trains/Train";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Exercises />
      <Train />
      <Plans />
      <Footer />
    </>
  )
}

export default App

import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App = () => (
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
  </main>
)
export default App
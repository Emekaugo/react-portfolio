import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <h1>Home Page</h1> */}
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default Home;

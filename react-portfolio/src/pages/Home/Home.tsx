import About from "../../components/About/About";
import Contact from "../../components/Contacts/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <h1>Home Page</h1> */}
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;

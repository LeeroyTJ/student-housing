import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />      
      <Hero />
      <SearchBar />
      <Stats />
      <HowItWorks />
      <Footer />
    </div>
  );
};
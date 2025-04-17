import Easy from "@/companents/Easy";
import FlightCard from "@/companents/FlightCard";
import Main from "@/companents/Main";
import Selling from "@/companents/Selling";
import Testimonials from "@/companents/Testimonials";
import Logos from "@/companents/Logos";
import Cards from "@/companents/Cards";
import Footer from "@/companents/Footer";

export default function Home() {
  return (
    <div>
      <Main />
      <FlightCard />
      <Selling />
      <Easy />
      <Testimonials />
      <Logos />
      <Cards />
      <Footer />
    </div>
  );
}

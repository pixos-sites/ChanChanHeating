import { Navbar } from "./components/Navbar";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ServiceArea } from "./components/ServiceArea";
import { About } from "./components/About";
import { RecentWork } from "./components/RecentWork";
import { HowItWorks } from "./components/HowItWorks";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] font-['DM_Sans'] overflow-x-hidden">
      <Navbar />
      <EmergencyBanner />
      <Hero />
      <Services />
      <ServiceArea />
      <About />
      <RecentWork />
      <HowItWorks />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

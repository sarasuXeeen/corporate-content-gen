import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AboutSection from "@/components/AboutSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import BPOSection from "@/components/BPOSection";
import DeliveryModel from "@/components/DeliveryModel";
import GovernanceSection from "@/components/GovernanceSection";
import SectorsSection from "@/components/SectorsSection";
import WhenToEngageSection from "@/components/WhenToEngageSection";
import WhyChooseTRI from "@/components/WhyChooseTRI";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* 1. What we do */}
      <HeroSection />
      {/* 2. How we work — capabilities & engagement forms */}
      <CapabilitiesSection />
      {/* 3. Where we fit — about / why TRI exists */}
      <AboutSection />
      {/* 4. Core services */}
      <RecruitmentSection />
      <BPOSection />
      {/* 5. Delivery model & governance */}
      <DeliveryModel />
      <GovernanceSection />
      {/* 6. Sectors */}
      <SectorsSection />
      {/* 7. When to engage */}
      <WhenToEngageSection />
      {/* 8. Why TRI */}
      <WhyChooseTRI />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;

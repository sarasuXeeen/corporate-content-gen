import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import BPOSection from "@/components/BPOSection";
import DeliveryModel from "@/components/DeliveryModel";
import GovernanceSection from "@/components/GovernanceSection";
import SectorsSection from "@/components/SectorsSection";
import WhyChooseTRI from "@/components/WhyChooseTRI";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <RecruitmentSection />
      <BPOSection />
      <DeliveryModel />
      <GovernanceSection />
      <SectorsSection />
      <WhyChooseTRI />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import ProblemSection from "@/components/site/ProblemSection";
import SolutionSection from "@/components/site/SolutionSection";
import RoiSection from "@/components/site/RoiSection";
import HowItWorks from "@/components/site/HowItWorks";
import ContactForm from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <RoiSection />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

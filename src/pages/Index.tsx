import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Anusha A | UI/UX Designer in Dubai, UAE</title>
        <meta 
          name="description" 
          content="Anusha A is a UI/UX Designer and Junior Product Designer based in Dubai, UAE. Specializing in user-centered digital experiences, UX research, and design systems."
        />
        <meta name="keywords" content="UI/UX Designer, UX Designer, Product Designer, Dubai, UAE, Figma, User Experience, User Interface" />
        <meta property="og:title" content="Anusha A | UI/UX Designer in Dubai, UAE" />
        <meta property="og:description" content="Designing intuitive, scalable, and user-centered digital experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anusha A | UI/UX Designer" />
        <meta name="twitter:description" content="UI/UX Designer specializing in user-centered digital experiences." />
        <link rel="canonical" href="https://anusha-portfolio.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anusha A",
            "jobTitle": "UI/UX Designer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "UAE"
            },
            "email": "arumugamanusha03@gmail.com",
            "telephone": "+971056148413",
            "sameAs": [
              "https://www.linkedin.com/in/anusha-a-553508331/"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

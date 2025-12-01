import LandingNavbar from '@/components/Landing/LandingNavbar';
import LandingHero from '@/components/Landing/LandingHero';
import LandingFeatures from '@/components/Landing/LandingFeatures';
import LandingFooter from '@/components/Landing/LandingFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-primary/20 selection:text-primary">
      <LandingNavbar />
      
      <main>
        <LandingHero />
        <LandingFeatures />
      </main>

      <LandingFooter />
    </div>
  );
}
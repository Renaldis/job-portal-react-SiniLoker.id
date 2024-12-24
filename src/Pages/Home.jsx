import HeroSection from "../Components/HeroSection/HeroSection";
import JobVacanciesSection from "../Components/jobVacanciesSection/JobVacanciesSection";
import MitraSection from "../Components/mitraSection/MitraSection";
import Testimoni from "../Components/testimoniSection/Testimoni";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <JobVacanciesSection />
      <Testimoni />
      <MitraSection />
    </main>
  );
}

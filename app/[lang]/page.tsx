import Image from "next/image";
import { getDictionary } from "./dictionaries";
import ClientSection from "../home/ClientSection";
import Hero from "../home/Hero";
import MazayaLogistics from "../home/MazayaLogistics";
import Partner from "../home/Partner";
import QuickSolution from "../home/QuickSolution";
import Services from "../home/Services";
import Story from "../home/Story";
import Teams from "../home/Teams";
import WhyChoose from "../home/WhyChoose";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      {/* Full-page fixed background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0700]">
        <Image
          src="/home/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Hero lang={lang} t={dict.home.hero} />
      <Partner t={dict.home.partner} />
      <Story t={dict.home.story} />
      <div className="relative">
        <QuickSolution t={dict.home.quickSolution} />
        <Services t={dict.home.services} />
      </div>
      <WhyChoose t={dict.home.whyChoose} />
      <Teams t={dict.home.teams} />
      <MazayaLogistics lang={lang} t={dict.home.mazayaLogistics} />
      <ClientSection t={dict.home.clientSection} />
    </main>
  );
}

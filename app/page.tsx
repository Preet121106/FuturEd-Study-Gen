import Header from "./_components/Header";
import Hero from "./_components/Hero";
import DotPattern from "@/components/ui/dot-pattern";
import { ny } from "@/lib/utils";
import dynamic from "next/dynamic";

// ✅ Use dynamic imports with explicit `.default`
const HowItWorks = dynamic(
  () => import("./_components/HowItWorks").then((mod) => mod.default),
  { ssr: false }
);

const AICourseText = dynamic(
  () => import("./_components/AICourseText").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AICourseText />
      <HowItWorks />
      <DotPattern
        className={ny(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}

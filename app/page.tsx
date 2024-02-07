import Image from "next/image";
import { GlobalComponents } from "./components/global";
import { HeroComponents } from "./components/hero";
import { CardsComponents } from "./components/cards";
import { DownloadingComponents } from "./components/downloading";
import { FeatureComponents } from "./components/feature";
import { LearnersComponents } from "./components/learners";
import { CarouselComponents } from "./components/carousel";
import { MightKnowComponents } from "./components/might-know";
import { NewsletterComponents } from "./components/newsletter";
import { CommentsComponents } from "./components/comments";
import { QuestionsComponents } from "./components/questions";
import { KidComponents } from "./components/kid";

export default function Home() {
  return (
    <main className="container mx-auto">
      <GlobalComponents.Nav />
      <HeroComponents.Hero />
      <CardsComponents.Cards />
      <DownloadingComponents.Downloading />
      <FeatureComponents.Feature />
      <LearnersComponents.Learners />
      <CarouselComponents.Wrapper />
      <MightKnowComponents.MightKnow />
      <NewsletterComponents.Newsletter />
      <CommentsComponents.Comments />
      <QuestionsComponents.Questions />
      <KidComponents.Kid />
      <GlobalComponents.Footer />
    </main>
  );
}

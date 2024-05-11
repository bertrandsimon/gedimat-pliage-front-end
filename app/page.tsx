import Image from "next/image";
import Banner from "@/components/homepage/banner";
import Steps from "@/components/homepage/steps";
import Presentation from "@/components/homepage/presentation";
import Categories from "@/components/homepage/categories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14">

      <Banner />
      <Steps />
      <Presentation />
      <Categories />

    </main>
  );
}

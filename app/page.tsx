import Image from "next/image";
import Banner from "@/components/homepage/banner";
import Steps from "@/components/homepage/steps";
import Presentation from "@/components/homepage/presentation";
import Categories from "@/components/homepage/categories";
import Partners from "@/components/homepage/partners";
import { Test } from "@/components/test";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14">

      {/* <Test /> */}
      
      
      <Banner />
      <Steps />
      <Presentation />
      <Categories />
      <Partners />

    </main>
  );
}

import Image from "next/image";
import Banner from "@/components/homepage/banner";
import Steps from "@/components/homepage/steps";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10">
       <Banner />
      <Steps />
    </main>
  );
}

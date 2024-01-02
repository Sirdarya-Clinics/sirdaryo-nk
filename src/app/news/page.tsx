import { GetNews } from "@/components/getNews";
import Footer from "@/sections/Footer";
import { Header2 } from "@/sections/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Respublika ixtisoslashtirilgan narkologiya ilmiy amaliy tibbiyot markazi Sirdaryo viloyat mintaqaviy filiali yangiliklari",
  description:
    "Respublika ixtisoslashtirilgan narkologiya ilmiy amaliy tibbiyot markazi Sirdaryo viloyat mintaqaviy filiali yangiliklari",
};

export default async function NewsPage() {
  return (
    <>
      <Header2 />
      <div className="flex flex-col  items-center ">
        <GetNews />
      </div>

      <Footer />
    </>
  );
}

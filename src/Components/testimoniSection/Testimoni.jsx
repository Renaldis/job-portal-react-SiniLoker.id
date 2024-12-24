import { Carousel } from "flowbite-react";
import CardTestimoni from "./CardTestimoni";
import testiListing from "../../dataTestimoni";
import { useState, useEffect } from "react";

export default function Testimoni() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [groupedTesti, setGroupedTesti] = useState([]);

  const chunkArray = (array, size) => {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(array.slice(i, i + size));
      return acc;
    }, []);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallScreen(isSmall);

      const chunkSize = isSmall ? 1 : 2;
      const groupedData = chunkArray(testiListing, chunkSize);

      if (
        groupedData.length > 0 &&
        groupedData[groupedData.length - 1].length < chunkSize
      ) {
        groupedData[groupedData.length - 1] =
          groupedData[groupedData.length - 1];
      }

      setGroupedTesti(groupedData);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [testiListing]);
  return (
    <section className="bg-blue-100 py-10">
      <h1 className="text-xl font-semibold text-black text-start ml-8 mb-8">
        1 Juta+ pelamar terbantu dengan loker di SiniLoker.id
      </h1>
      <div className="h-96 w-[100%] mx-auto px-8">
        <Carousel>
          {groupedTesti.map((group, index) => (
            <div key={index} className="flex justify-center gap-4 items-center">
              {group.map((item, idx) => (
                <CardTestimoni key={idx} res={item} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

import { Button } from "@mui/material";
import { HeadCircuit, Coin, CubeTransparent } from "@phosphor-icons/react";
import { Bold, Package } from "lucide-react";
import React from "react";

const Solutions = () => {
  const solutions = [
    {
      title: "Innovative minds",
      description:
        "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition. ",
      icon: <HeadCircuit size={64} weight="bold" />,
    },
    {
      title: "Cost effective",
      description:
        "TypeScript support included TypeScript support includedTypeScript support includedTypeScript support includedTypeScript support includedTypeScript support ",
      icon: <Coin size={70} weight="bold" />,
    },
    {
      title: "Product squad",
      description:
        "We give you a cross-functional team (full-stack devs, QA, optional PM) that plugs into your roadmap and workflow. You get the output of a full engineering team at the cost of one U.S. senior engineer.",
      icon: <CubeTransparent size={64} weight="bold" />,
    },
    {
      title: "Type Safe",
      description:
        "We give you a cross-functional team (full-stack devs, QA, optional PM) that plugs into your roadmap and workflow. You get the output of a full engineering team at the cost of one U.S. senior engineer.",
      icon: <Package size={64} />,
    },
    {
      title: "Type Safe",
      description:
        "We give you a cross-functional team (full-stack devs, QA, optional PM) that plugs into your roadmap and workflow. You get the output of a full engineering team at the cost of one U.S. senior engineer.",
      icon: <Package size={64} />,
    },
    {
      title: "Type Safe",
      description:
        "We give you a cross-functional team (full-stack devs, QA, optional PM) that plugs into your roadmap and workflow. You get the output of a full engineering team at the cost of one U.S. senior engineer.",
      icon: <Package size={64} />,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-t from-white-500 to-sky-200">
      <div className="max-w-7xl mx-auto">
        <div className=" grid">
          {/* map */}
          <div className="">
            <p className="text-black my-5 text-center bg-cream-300 h-5 w-28 rounded-sm col-span-2">
              HOW WE DO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Solutions
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {solutions.map((solutions, i) => (
                <div
                  key={i}
                  className="bg-white hover:border-shadow-20 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover:bg-black/10 transition group flex flex-col"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition text-blue-400">
                    {solutions.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {solutions.title}
                  </h3>
                  <p className="text-gray-400 mb-5 grow">
                    {solutions.description}
                  </p>
                  <div className="border-t border-gray-300 pt-5">
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-500 hover:text-blue-700 hover:underline"
                    >
                      See more
                    </a>
                  </div>
                </div>
              ))}
            </div>
            ;
          </div>
          <div className="mx-auto block mt-20">
            <Button variant="contained">View all solutions</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;

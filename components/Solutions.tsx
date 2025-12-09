import { Button } from "@mui/material";
import {
  HeadCircuit,
  Coin,
  CubeTransparent,
  Browsers,
  TreeStructure,
  ChartLineUp,
  Robot,
  Binary,
  CodeBlock,
} from "@phosphor-icons/react";
import { Bold, Package } from "lucide-react";
import React from "react";

const Solutions = () => {
  const solutions = [
    {
      title: "Managed Services",
      description:
        "Keep your business running 24/7 with fully managed IT infrastructure, proactive monitoring, cloud optimization, and instant support whenever you need it.",
      icon: <CodeBlock size={64} weight="thin" />,
    },
    {
      title: "Custom Software Development",
      description:
        "We design and build scalable applications tailored to your workflow—fast, secure, and optimized for growth.",
      icon: <Browsers size={70} weight="thin" />,
    },
    {
      title: "IT Consulting & Digital Strategy",
      description:
        "Make smarter tech decisions with strategic guidance on digital transformation, cloud migration, automation, and long-term IT planning.",
      icon: <Binary size={64} weight="thin" />,
    },
    {
      title: "DevOps & Automation Solutions",
      description:
        "Ship faster and safer with CI/CD pipelines, containerization, cloud automation, and infrastructure-as-code.",
      icon: <Robot size={64} weight="thin" />,
    },
    {
      title: "Network & Systems Engineering",
      description:
        "Build a reliable network backbone with secure architecture, high-performance connectivity, and resilient system design.",
      icon: <TreeStructure size={64} weight="thin" />,
    },
    {
      title: "Data Intelligence & Analytics",
      description:
        "Turn raw data into actionable insights with dashboards, analytics pipelines, and automated reporting powered by modern data engineering.",
      icon: <ChartLineUp size={64} weight="thin" />,
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-t from-white-500 to-sky-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className=" grid">
          {/* map */}
          <div className="">
            <p className="text-black my-5 text-center bg-cream-300 h-5 w-28 rounded-sm col-span-2">
              WHAT WE DO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">
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

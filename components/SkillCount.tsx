import CountUp from "react-countup";

export default function SkillCount() {
  const countRecords = [
    {
      number: 10,
      text: "Years in business",
    },

    {
      number: 40,
      text: "Engineers",
    },

    {
      number: 100,
      text: "Enterprise Projects",
    },

    {
      number: 98,
      text: "Customer satisfaction",
    },
  ];

  return (
    <div className=" max-w-7xl mx-auto overflow-hidden">
      <div className="container mx-auto mt-20 px-6 md:px-12 overflow-hidden">
        <div className="flex flex-row items-center justify-evenly gap-4 w-full">
          {countRecords.map((item, index) => (
            <div className="flex flex-col items-center md:gap-3">
              <h3 className="text-2xl md:text-5xl font-hepta-slab font-bold text-pink-400">
                <CountUp
                  end={item.number}
                  duration={1}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {`${index === 3 ? "%" : "+"} `}
              </h3>
              <p className="font-inter-tight text-sky-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

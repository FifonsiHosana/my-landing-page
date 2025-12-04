import { assets } from "../src/assets/assets";


const Industries = () => {
 const categories = [
   {
     title: "Healthcare",
     alt: "health",
     imageSrc: assets.health.src,
   },
   {
     title: "Legal Service",
     alt: "law",
     imageSrc: assets.law.src,
   },
   {
     title: "Finance",
     alt: "finance",
     imageSrc: assets.finance.src,
   },
   {
     title: "Finance",
     alt: "finance",
     imageSrc: assets.finance.src,
   },
   {
     title: "Finance",
     alt: "finance",
     imageSrc: assets.finance.src,
   },
 ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="">
          <p className="text-black my-5 text-center bg-cream-300 h-5 w-28 rounded-sm col-span-2 font-main">
            WHAT WE DO
          </p>
          <h2 className="text-black text-5xl font-bold mt-10">
            Solving IT challenges
            <br />
            in every industry, every day.
          </h2>
        </div>
        {/* Industries */}

        <div className=" w-full mt-20">
          <div className="grid grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative rounded-full flex justify-center overflow-hidden items-stretch justify-items-stretch h-1/2 border-2 hover:border-amber-100 hover:shadow-2xl pb-0 mb-0"
              >
                <img
                  src={category.imageSrc}
                  alt={category.alt}
                  className=" min-w-full min-h-full object-cover "
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 hover:bg-black/80 transition-all duration-500 ease-in-out">
                  <h2 className="md:text-3xl text-sky-300 text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-center">
                    {category.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

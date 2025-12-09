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
     title: "Entertainment",
     alt: "finance",
     imageSrc:
       "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     title: "Alimentary",
     alt: "finance",
     imageSrc:
       "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
 ];

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden">
        <div className="text-center md:text-left">
          <p className="text-black my-5 bg-cream-300 h-5 w-28 rounded-sm col-span-2 font-main">
            WHAT WE DO
          </p>
          <h2 className="text-black text-4xl md:text-5xl font-bold mt-10">
            Solving IT challenges
            <br />
            in every industry, every day.
          </h2>
        </div>
        {/* Industries */}

        <div className=" w-full mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div className="flex flex-col" key={index}>
              <div
                key={index}
                className="relative rounded-full flex justify-center overflow-hidden items-stretch md:h-1/2 border-6 hover:border-amber-100 hover:shadow-xl pb-0 mb-0"
              >
                <img
                  src={category.imageSrc}
                  alt={category.alt}
                  className=" min-w-full h-48 md:h-full object-cover "
                />
                
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30">
                </div>
                
              </div>
              <p className="md:text-3xl text-sky-400 text-3xl font-bold text-center  mt-2">{category.title}</p>
              </div>
            ))}
          </div>
  
      </div>
      
      </div>
    </section>
  );
};

export default Industries;

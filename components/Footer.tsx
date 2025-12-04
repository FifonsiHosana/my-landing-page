import { Checkbox, TextareaAutosize } from "@mui/material";
import { ArrowArcRightIcon, ArrowRightIcon } from "@phosphor-icons/react";

const Footer = ()=>{
    return (
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h2 className="text-4xl md:text-2xl font-extrabold text-pink-300 mb-8">
            Solutions
          </h2>
          <div className="grid grid-cols-2">
            <div className="">
              <div className="grid grid-cols-2">
                <div className="">
                  <p>One </p>
                  <p>two</p>
                  <p>three</p>
                  <p>four</p>
                </div>
                <div className="">
                  <p>One </p>
                  <p>two</p>
                  <p>three</p>
                  <p>four</p>
                </div>
              </div>

              <h2 className="text-4xl md:text-2xl font-extrabold text-pink-300 mb-8 mt-10">
                Agency
              </h2>
              <div className="grid grid-cols-2">
                <div className="">
                  <p>One </p>
                  <p>two</p>
                  <p>three</p>
                  <p>four</p>
                </div>
                <div className="mb-4">
                  <p>One </p>
                  <p>two</p>
                  <p>three</p>
                  <p>four</p>
                </div>
              </div>
              <div className="grid grid-rows-3 mt-5">
                <input
                  type="email"
                  id="Email"
                  aria-description="email"
                  className="mt-0.5 w-1/2 rounded border border-gray-500 shadow-sm sm:text-sm my-4"
                />
                <p className="">
                  <input
                    type="checkbox"
                    className="mr-3 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  />
                  Buncha random words long long long long long long
                </p>
                <a
                  className="inline-block rounded-sm w-1/5  border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black "
                  href="#"
                >
                  <p>send </p>
                  <ArrowRightIcon fontWeight="bold" />
                </a>
              </div>
            </div>
            <div className="">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Footer;
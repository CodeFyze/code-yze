import services from "~/constants/services";
import { motion } from "framer-motion";

export default function TopServices() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className="flex w-screen h-full px-5 sm:px-10 lg:px-[3vw] py-11 lg:py-40 xl:pt-72 max-md:mt-11 bg-cover bg-no-repeat bg-topServicesBgVertical md:bg-topServicesBg md:bg-contain xl:bg-cover bg-center relative lg:-top-24 xl:-top-48"
      id="services"
    >
      <motion.div
        className="flex flex-col gap-y-7 items-center justify-around w-full text-white bg-black/30 transparent backdrop-blur-xl py-16 px-5 lg:px-2 rounded-md border-slate-200 border-[3px]"
        id="about-us"
        variants={divVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.01 }}
      >
        <div className="[&>*]:text-center">
          <h1 className="font-bold text-2xl md:text-3xl md:text-start lg:text-3xl">
            Our Top Services
          </h1>
          <p className="font-medium text-base md:text-lg md:text-start">
            We provide a full suite of IT services designed to help businesses
          </p>
        </div>
        <div className="~w-5/6/6/12 md:w-11/12 h-full grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {/* Top Services */}
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 lg:p-7 border rounded-xl shadow-lg bg-white space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="w-full">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold text-black">
                {service.title}
              </h2>
              <ul className="w-4/5">
                {service.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="text-[#7D8D9A]">
                    {tech.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

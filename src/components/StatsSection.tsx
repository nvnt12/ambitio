import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { value: 4.96, label: "Google Rating" },
    { value: 98.2, label: "got into their Target Program", isPercentage: true },
    { value: 5000, label: "Students Assisted", isNumber: true },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-20 xl:px-20">
      <div className="relative mt-20 p-8 sm:p-12 rounded-2xl bg-white/10 backdrop-blur-lg overflow-clip">
        <div className="absolute -top-10 -left-14 w-72 h-72 bg-[#B1060F] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-[40%] left-[25%] w-4xl h-16 bg-[#B1060F] rounded blur-2xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-5 w-60 h-60 bg-[#B1060F] rounded-full blur-3xl opacity-30"></div>

        <h2 className="text-center text-3xl sm:text-4xl font-sans text-black font-semibold">
          We let <span className="text-[#B1060F]">our numbers</span> do the talking
        </h2>
        <p className="text-lg sm:text-2xl mt-2 font-sans text-center leading-8 font-normal text-[#696969] mx-auto tracking-wide">
          Our users love us and we know you will too! Explore our products.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-5 mt-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <AnimatedNumber targetValue={stat.value} isPercentage={stat.isPercentage} isNumber={stat.isNumber} />
              <div className="mt-3 text-lg sm:text-xl font-medium tracking-wide text-[#696969]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedNumber({ targetValue, isPercentage = false, isNumber = false }: { 
    targetValue: number; 
    isPercentage?: boolean; 
    isNumber?: boolean; 
  }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = targetValue / steps;

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      setCount(currentCount > targetValue ? targetValue : currentCount);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl sm:text-7xl font-semibold font-sans text-[#B1060F]"
    >
      {isNumber ? Math.floor(count) : count.toFixed(2)}{isPercentage && "%"}{isNumber && "+"}
    </motion.div>
  );
}

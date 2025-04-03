import Image from "next/image";

export default function HeroSectionGrid() {
  const content = [
    [
      { name: "University 1", logo: "/assets/uni1.png" },
      { name: "Person 1", logo: "/assets/p1.png", color: "bg-[#589FC7]" },
      { name: "University 2", logo: "/assets/uni2.png" },
      { name: "Person 2", logo: "/assets/p2.png", color: "bg-[#E7BD40]" },
      { name: "University 3", logo: "/assets/uni3.png" },
      { name: "Person 3", logo: "/assets/p3.png", color: "bg-[#E55740]" },
      { name: "University 4", logo: "/assets/uni4.png" },
      { name: "Person 4", logo: "/assets/p4.png", color: "bg-[#85B05B]" },
      { name: "University 5", logo: "/assets/uni5.png" },
      { name: "Person 5", logo: "/assets/p5.png", color: "bg-[#B03972]" },
      { name: "University 6", logo: "/assets/uni6.png" },
      { name: "Person 6", logo: "/assets/p6.png", color: "bg-[#5AC0B4]" },
      { name: "University 7", logo: "/assets/uni7.png" },
    ],
    [
      { name: "Person 7", logo: "/assets/p7.png", color: "bg-[#E7BD40]" },
      { name: "University 8", logo: "/assets/uni8.png" },
      { name: "Person 8", logo: "/assets/p8.png", color: "bg-[#B24D96]" },
      { name: "University 9", logo: "/assets/uni9.png" },
      { name: "Person 9", logo: "/assets/p9.png", color: "bg-[#4563A8]" },
      { name: "University 10", logo: "/assets/uni10.png" },
      { name: "University 11", logo: "/assets/uni11.png" },
      { name: "Person 10", logo: "/assets/p10.png", color: "bg-[#589FC7]" },
      { name: "University 12", logo: "/assets/uni12.png" },
      { name: "Person 11", logo: "/assets/p11.png", color: "bg-[#A0BC53]" },
      { name: "University 13", logo: "/assets/uni13.png" },
      { name: "Person 12", logo: "/assets/p12.png", color: "bg-[#E55740]" },
    ],
    [
      { name: "University 14", logo: "/assets/uni14.png" },
      { name: "Person 13", logo: "/assets/p13.png", color: "bg-[#E05555]" },
      { name: "University 15", logo: "/assets/uni15.png" },
      { name: "Person 14", logo: "/assets/p14.png", color: "bg-[#E7A742]" },
      { name: "University 16", logo: "/assets/uni16.png" },
      { name: "Person 15", logo: "/assets/p15.png", color: "bg-[#E165A4]" },
      { name: "University 17", logo: "/assets/uni17.png" },
      { name: "Person 16", logo: "/assets/p16.png", color: "bg-[#7A47AA]" },
      { name: "University 18", logo: "/assets/uni18.png" },
      { name: "Person 17", logo: "/assets/p17.png", color: "bg-[#E28F36]" },
      { name: "University 19", logo: "/assets/uni19.png" },
      { name: "Person 18", logo: "/assets/p18.png", color: "bg-[#4364A8]" },
      { name: "University 20", logo: "/assets/uni20.png" },
    ],
  ];

  return (
    <div className="relative mt-20">
      <div className="flex flex-wrap justify-center gap-5 mx-auto mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {content.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-5 mx-auto flex-nowrap">
            {row.map((item, index) => (
              <div key={index} className="w-[84px] h-[84px] flex justify-center items-center">
                <div
                  className={`relative overflow-clip ${
                    item.name.includes("Person")
                      ? `rounded-full w-[84px] h-[84px] ${item.color}`
                      : "rounded-[20px] border-2 w-20 h-20 border-gray-100 shadow"
                  }`}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className={`object-contain ${item.name.includes("University") && "p-2.5"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="relative w-[78px] h-[78px] md:w-[92px] md:h-[92px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#c86666] to-[#874242] shadow-[0px_0px_20px_5px_rgba(255,0,0,0.5)]">
            <div className="relative  w-[70px] h-[70px] md:w-[84px] md:h-[84px] flex items-center justify-center rounded-xl bg-gradient-to-br from-[#9F0000] to-[#3E0000]">
                <Image src="/icons/crown-white.svg" alt="Crown" width={48} height={48} className=" w-9 h-9 md:w-12 md:h-12" />
            </div>
        </div>
      </div>

    </div>
  );
}

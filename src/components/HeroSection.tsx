import HeroSectionGrid from "./HeroSectionGrid";

export default function HeroSection() {
    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
        <HeroSectionGrid />

        <div className="mt-10 text-center px-4 sm:px-8 lg:px-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight font-semibold text-black tracking-wider">
            Give the best shot<br />
            at your <span className="text-[#9E030C]">Dream University</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-sans leading-7 md:leading-8 font-medium text-[#696969] mx-auto tracking-wide">
            Get expert help, personalized guidance, and all the support you need to<br />
            <span className="text-black">increase your chances of success with Ambitio Elite.</span>
          </p>
          <button className="mt-6 bg-[#212121] cursor-pointer font-sans text-white px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 rounded-lg sm:rounded-2xl text-base sm:text-lg tracking-wide font-medium">
            10x your chances with Ambitio
          </button>
        </div>
      </div>
    )
}
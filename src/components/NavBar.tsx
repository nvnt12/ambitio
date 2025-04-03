import Image from "next/image";
import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  iconSrc?: string;
  position: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label, iconSrc, position }) => (
  <Link
    href={href}
    className="flex text-nowrap items-center gap-1 md:gap-2 px-3 text-[1.1vw] font-medium text-black tracking-wider"
  >
    {iconSrc && position === "left" && <Image src={iconSrc} alt={label} height={18} width={18} className=" w-[1.2vw]" />}
    {label}
    {iconSrc && position === "right" && <Image src={iconSrc} alt={label} height={16} width={16} className=" w-[1.1vw]" />}
  </Link>
);

export default function NavBar() {
  return (
    <nav className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
      <div className="flex justify-between w-full h-16 items-center">
        {/* Logo */}
        <Image
          src={"/assets/logo-icon.svg"}
          alt="Ambitio Home"
          height={26}
          width={26}
          className="block sm:hidden"
        />
        <Image
          src={"/assets/logo.svg"}
          alt="Ambitio Home"
          height={26}
          width={130}
          className="hidden sm:block"
        />

        {/* Menu Items */}
        <div className="hidden lg:flex items-center gap-4">
          <NavItem href="/" label="Study-abroad" iconSrc="/icons/arrow-down.svg" position="right" />
          <NavItem href="/" label="Bootcamps" iconSrc="/icons/arrow-down.svg" position="right" />
          <NavItem href="/" label="Products" iconSrc="/icons/arrow-down.svg" position="right" />
          <NavItem href="/" label="Ambitio Pro" iconSrc="/icons/diamond.svg" position="left" />
          <NavItem href="/" label="Ambitio Elite" iconSrc="/icons/crown.svg" position="left" />
        </div>

        <div className="flex items-center gap-4">
          <button className="flex bg-transparent items-center gap-3 cursor-pointer border-2 border-[#9E030C] text-[#9E030C] lg:text-[1.1vw] text-md font-medium tracking-wider px-4 py-1 lg:py-2 rounded-lg">
            <Image
              src={"/icons/call.svg"}
              alt="Call"
              height={18}
              width={18}
              className="hidden lg:block w-[1.1vw]"
            />
            Speak with our Expert
          </button>

          {/* Mobile Menu Icon */}
          <button className="block md:hidden">
            <Image src={"/icons/menu.svg"} alt="Menu" height={26} width={26} />
          </button>
        </div>
      </div>
    </nav>
  );
}

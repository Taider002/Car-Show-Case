import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-8 py-4">
        <Link
          rel="stylesheet"
          href="/"
          className="flex justify-center items-center"
        >
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
        />
      </nav>
    </header>
  );
}

export default Navbar;

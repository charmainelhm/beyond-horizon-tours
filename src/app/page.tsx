import Link from "next/link";
import bgMobile from "@/assets/home/background-home-mobile.jpg";
import bgTablet from "@/assets/home/background-home-tablet.jpg";
import bgDesktop from "@/assets/home/background-home-desktop.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-lg:text-center relative pt-28 pb-12 container flex flex-col lg:flex-row items-center lg:items-end lg:justify-between">
      {/* <Image
        src={bgMobile}
        alt=""
        layout="fill"
        className="sm:hidden object-cover"
      />
      <Image
        src={bgTablet}
        alt=""
        layout="fill"
        className="sm:max-lg:block object-cover"
      />
      <Image
        src={bgDesktop}
        alt=""
        layout="fill"
        className="hidden lg:block object-cover"
      /> */}
      <div className="relative z-20">
        <h1>
          <span className="tracking-widest sm:text-xl lg:text-2xl">
            So, You Want to Travel to{" "}
          </span>
          <span className="block text-white font-bellefair text-7xl lg:text-10xl leading-normal">
            Space
          </span>
        </h1>
        <p className="max-w-md">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link
        className="relative text-charcoal lg:text-3xl bg-white font-bellefair max-lg:mt-auto uppercase inline-grid place-content-center w-36 lg:w-64 aspect-square rounded-full before:transition-transform before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/20 focus:before:scale-150 hover:before:scale-150 before:z-[-1]]"
        href=""
      >
        Explore
      </Link>
    </div>
  );
}

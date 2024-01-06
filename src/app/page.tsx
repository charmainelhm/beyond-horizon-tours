import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen container max-lg:text-center relative z-20 pt-28 sm:pt-48 lg:pt-[42vh] pb-12 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-between gap-y-20 sm:gap-y-36">
          <div>
            <h1>
              <span className="tracking-widest sm:text-xl lg:text-2xl">
                So, You Want to Travel to{" "}
              </span>
              <span className="block text-white sm:my-6 font-bellefair text-7xl sm:text-9xl lg:text-10xl leading-normal">
                Space
              </span>
            </h1>
            <p className="max-w-[25rem] leading-relaxed">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <Link
            className="relative bg-white inline-grid place-content-center w-36 sm:w-56 lg:w-64 aspect-square rounded-full text-charcoal sm:text-3xl font-bellefair uppercase before:transition-transform before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/20 focus:before:scale-150 hover:before:scale-150 before:z-[-1]]"
            href=""
          >
            Explore
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/assets/home/background-home-mobile.jpg"
          alt=""
          layout="fill"
          className="sm:hidden object-cover"
        />
        <Image
          src="/assets/home/background-home-tablet.jpg"
          alt=""
          layout="fill"
          className="sm:max-lg:block object-cover"
        />
        <Image
          src="/assets/home/background-home-desktop.jpg"
          alt=""
          layout="fill"
          className="hidden lg:block object-cover"
        />
      </div>
    </>
  );
}

import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper
      pageName="home"
      className="pt-28 sm:pt-48 lg:pt-[42vh] pb-12 sm:pb-24"
    >
      <div className="px-[var(--content-side-padding)] flex flex-col lg:flex-row items-center lg:items-end lg:justify-between gap-y-20 sm:gap-y-36">
        <div>
          <h1>
            So, You Want to Travel to
            <span className="block text-white sm:my-6 font-bellefair text-7xl sm:text-9xl lg:text-10xl leading-normal">
              Space
            </span>
          </h1>
          <p className="max-w-[25rem] leading-relaxed">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link
          className="relative bg-white inline-grid place-content-center w-36 sm:w-56 lg:w-64 aspect-square rounded-full text-charcoal-900 sm:text-3xl font-bellefair uppercase before:transition-transform before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/20 focus:before:scale-150 hover:before:scale-150 before:z-[-1]]"
          href="/destination"
        >
          Explore
        </Link>
      </div>
    </PageWrapper>
  );
}

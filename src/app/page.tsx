import NavHome from "@/components/commons/NavHome";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-secondary-2 min-h-screen flex flex-col ">
      <NavHome />

      {/* <!-- ====== Hero Section Start --> */}
      <div className="relative bg-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-primary-2  sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  The Greatest <br />
                  Journey Of Learning <br />
                  Online.
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                  With Our personalized teaching plans you will have better
                  chance to get your dream job.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary-1 lg:px-7"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -left-8 -bottom-8 z-[-1]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Hero Section End --> */}

      {/* <!-- ====== Cards Section Start --> */}
      <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      50+ Best creative website themes & templates
                    </a>
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      The ultimate UX and UI guide to card design
                    </a>
                  </h3>
                  <p className="text-base leading-relaxed text-body-color mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      Creative Card Component designs graphic elements
                    </a>
                  </h3>
                  <p className="text-base leading-relaxed text-body-color mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Cards Section End --> */}
    </div>
  );
}

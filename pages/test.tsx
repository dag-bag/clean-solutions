import Head from "next/head";
const Foo = () => (
  <div className="px-64 py-6">
    <Head>
      <link rel="stylesheet" href="styles.css" />
    </Head>
    <div>
      <div className="flex items-center justify-between">
        <div>
          <img
            src="https://cleansolutions.tech/wp-content/uploads/2022/09/clean-solution-logo-1024x337-1-2.png"
            alt=""
          />
          Best Destinations around the world dfsd
        </div>
        <div className="flex items-center space-x-12 z-50">
          <a href="#" className="font-semibold">
            Destinations
          </a>
          <a href="#" className="font-semibold">
            Hotels
          </a>
          <a href="#" className="font-semibold">
            Flights
          </a>
          <a href="#" className="font-semibold">
            Bookings
          </a>
          <a href="#" className="font-semibold">
            Login
          </a>
          <a
            href="#"
            className="border px-4 py-1.5 rounded-md border-black font-semibold"
          >
            Sign up
          </a>
          <div className="flex items-center">
            <a href="#" className="font-semibold">
              EN
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <img
          src="images/Decore.png"
          className="absolute right-0 top-0"
          alt=""
        />
      </div>
      <div className="pt-60 flex items-center">
        <div className="w-[450px]">
          <div>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <span className="text-redText font-bold text-2xl">
                  Best Destinations around the world
                </span>
                <span className="font-bold text-6xl text-purpleText z-50">
                  Travel, enjoy and live a new and full life
                </span>
                <img
                  src="images/Decore_line.png"
                  className="absolute top-[400px] left-[430px] h-[12px] w-[300px]"
                  alt=""
                />
              </div>
              <div>
                <span className="text-lightPurpleText">
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="px-4 py-2.5 rounded-md bg-yellowColor text-textWhite"
                >
                  Find out more
                </a>
                <div className="flex items-center space-x-3">
                  <div className="rounded-full  bg-buttonColor p-2  text-textWhite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lightPurpleText">Play Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-20 right-40">
            <img src="images/Traveller.png" className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Foo;

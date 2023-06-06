const Foo = () => (
  <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100">
    <div className="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50">
      <span className="sm:hidden">DEFAULT</span>
      <span className="hidden sm:inline-block md:hidden">SM</span>
      <span className="hidden md:inline-block lg:hidden">MD</span>
      <span className="hidden lg:inline-block xl:hidden">LG</span>
      <span className="hidden xl:inline-block">XL</span>
    </div>
    <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
      <a href="#" className="text-3xl md:text-4xl font-bold tracking-wide">
        Clean<span className="text-green">Tech</span>
      </a>
      <div className="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14">
        <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
          <li
            v-for="menu in menus"
            className="text-lg md:text-base lg:text-lg font-medium group"
          >
            <a href="#"> </a>
            <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
        </ul>
        <button className="flex justify-center items-center h-13 px-7 font-medium text-white bg-red rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap">
          Start Quiz
        </button>
      </div>
      <button className="block md:hidden relative z-30">
        {/* <hamburgericon className="w-8 h-8 fill-current text-gray-900"></hamburgericon> */}
      </button>
    </nav>
    <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="relative z-10 md:w-1/2 w-full">
        {/* <img
          className="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
          src="/img/leaf.png"
          alt=""
        /> */}
        <span className="flex items-center px-1 text-xl text-green">
          <span className="font-medium">100% Trusted By Brands</span>
          {/* <img className="w-auto h-8" src="/img/vegetable.png" alt="" /> */}
        </span>
        <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
          Clean Tech Solutions <br />
          Take Your Own <br />
          <span className="whitespace-nowrap text-green"> Adventure Quiz</span>
        </h1>
        <p className="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
          Today’s world requires a stronger and safer response for disinfection.
          Use it on hard and soft surfaces.
        </p>
        <div className="flex pt-8 space-x-4 sm:space-x-6">
          <button className="flex justify-center items-center w-full sm:w-auto h-13 px-8 bg-red font-medium text-white rounded-xl whitespace-nowrap hover:shadow-red transition-shadow duration-300">
            Start Quiz
          </button>
          <button className="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative md:w-1/2 w-full flex flex-col justify-between">
        <img
          className="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
          src="/img/dish.png"
          alt=""
        />
        <div className="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex -space-x-3">
            <div
              v-for="i in 3"
              className="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src="`/img/avatar-${i}.jpeg`" alt="" />
            </div>
          </div>
          <div className="pt-3 font-bold">Happy customers</div>
          <div className="flex items-center text-gray-600 leading-relaxed">
            {/* <staricon className="w-5 h-5"> */}
            <span className="pl-1">4.9 (+2.5k Ratings)</span>
            {/* </staricon> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Foo;

const Slide = ({ img, title, des }) => {
    return (
      <div
        className="w-full bg-center bg-cover h-[20rem] md:h-screen fixed-bg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'fixed',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              {title}
            </h1>
            <p className="text-white opacity-70 my-5">{des}</p>
            <button className="px-5 py-2 mt-4 text-sm font-medium text-white bg-[#8B755A] capitalize transition-colors duration-300 transform rounded-md lg:w-auto  focus:outline-none ">
              Start project
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Slide;
  
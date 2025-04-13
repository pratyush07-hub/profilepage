import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-blue-200 flex">
        <div className="w-full md:w-[45%] h-screen md:flex justify-center items-center">
          
            <div
              className="w-full h-screen md:w-[400px] md:h-[400px] rounded-lg shadow-lg"
              style={{ backgroundImage: "url('/images/image.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover"
               }}></div>
          
        </div>
        <div className="absolute md:relative md:w-[55%] md:h-screen">
          <div className="pt-120 pb-10 p-10 md:pt-48 md:pl-10 md:pr-30">
            <span className="text-xl md:text-4xl block text-white md:text-blue-900 font-semibold">
              Hi, I am
            </span>
            <span className="block pt-2 text-4xl md:text-6xl font-bold text-white md:text-purple-500">
              Aadya Mathur
            </span>
            <p className="pt-6 text-md md:text-xl text-white md:text-blue-900">
              I'm an enthusiastic Application Developer with a strong foundation
              in frontend technologies like HTML, CSS, JavaScript, and React.
              Currently diving deeper into backend development to become a
              well-rounded full-stack developer.
            </p>
            <ul className="list-disc list-inside text-md md:text-2xl text-white md:text-blue-900 font-semibold pt-4">
              <li>I enjoy playing chess.</li>
              <li>I play BGMI in my free time.</li>
              <li>I enjoy traveling new places.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

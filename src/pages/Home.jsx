import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-blue-200 flex flex-col md:flex-row">
        <div className="w-full relative md:w-[40%] flex justify-center items-center">
          <div
            className="w-full h-screen md:w-[400px] md:h-[400px] md:rounded-full md:shadow-2xl"
            style={{
              backgroundImage: "url('/images/image.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></div>
        </div>

        <div className="w-full absolute bottom-0 md:relative md:w-[60%] flex items-center">
          <div className="p-6 md:p-4 md:pr-30">
            <span className="text-xl md:text-4xl block text-white md:text-blue-900 font-semibold">
              Hi, I am
            </span>
            <span className="block pt-0 md:pt-2 text-4xl md:text-6xl font-bold text-white md:text-purple-500">
              Aadya Mathur
            </span>
            <p className="pt-2 md:pt-6 text-md md:text-xl text-white md:text-blue-900">
              I'm an enthusiastic Application Developer with a strong foundation
              in frontend technologies like HTML, CSS, JavaScript, and React.
              Currently diving deeper into backend development to become a
              well-rounded full-stack developer.
            </p>
            <ul className="list-disc list-inside text-md md:text-2xl text-white md:text-blue-900 font-semibold pt-2 md:pt-4">
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

import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section class="px-4 bg-black py-24 pt-32 mt-2 mx-auto w-full h-screen">
        <div class="w-full mt-32 mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 class="mb-6 text-6xl font-header font-extrabold leading-12 tracking-normal text-white md:text-6xl md:tracking-tight">
            All your{" "}
            <span class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Money Transactions
            </span>{" "}
            in one single place.
          </h1>
          <p class="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
            All your digital money transaction in one single place. Deposit,
            withdraw as you like and enjoy the full potential of online money
            transactions.
          </p>
          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Link
              class="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto bg-[#6d28d9] hover:bg-[#4b199b] text-white md:text-xl font-bold px-5 py-3 rounded-lg sm:mb-0"
              to="/account"
            >
              Explore Yourself
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link
              class="inline-flex items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0 bg-[#c9d0da] hover:bg-[#b8c2cf] text-black md:text-xl font-bold px-5 py-3 rounded-lg"
              to="/deposit"
            >
              Deposit Now
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

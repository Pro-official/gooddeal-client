import React from "react";
import fpass from "../../../src/images/fpass.png";
import bcard from "../../../src/images/bcard.png";
import waddress from "../../../src/images/waddress.png";
import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className="bg-white">
      <section className="mx-auto container py-20 shadow-xl">
        <div className="flex justify-center items-center flex-col">
          <div className="pt-8 pb-8 grid shadow-xl lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <Link to="/fund-password">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <img
                    src={fpass}
                    alt="fund password"
                    width={200}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                </div>
                <div className="text-gray-800 text-2xl font-semibold text-center">
                  <h2>Fund Password</h2>
                </div>
                <div className="text-gray-800 mt-2 text-center text-sm">
                  <p>
                    It is strongly recommended that users set a password by
                    mixing numbers, uppercase and lowercase letters to enhance
                    security
                  </p>
                </div>
              </div>
            </Link>
            <Link to="bank-card">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <img
                    src={bcard}
                    alt="Bank Card"
                    width={180}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                </div>
                <div className="text-gray-800  text-2xl font-semibold text-center">
                  <h2>Bank Card</h2>
                </div>
                <div className="text-gray-800   mt-2 text-sm text-center">
                  <p>
                    In order to process funds quickly, please add the bank card
                    first. This is a way to get your digital experience more
                    advance
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/wallet-address">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <img
                    src={waddress}
                    alt="Walet Address"
                    width={200}
                    viewBox="0 0 32 32"
                    fill="none"
                  />
                </div>
                <div className="text-gray-800  text-2xl font-semibold text-center">
                  <h2>Wallet Address</h2>
                </div>
                <div className="text-gray-800  mt-2 text-sm text-center">
                  <p>
                    Let us help you level up your digital transactions, explore
                    solutions for digital increase of your precious business
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation";
import useAuth from "../../Hooks/useAuth";

const ApproveDeposit = () => {
  const { user } = useAuth();
  const amountRef = useRef();
  const emailRef = useRef();
  const balanceRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    const email = emailRef.current.value;
    const amount = amountRef.current.value;
    const balance = balanceRef.current.value;
    const name = user.displayName;
    const newBalance = parseFloat(amount) + parseFloat(balance);
    const updatedBalance = (balance * 1) / 100;
    const upBalance = parseFloat(balance) + parseFloat(updatedBalance);
    const depositData = { email, newBalance, upBalance, name };
    console.log(depositData);

    fetch(`https://dry-peak-78703.herokuapp.com/deposit/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(depositData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Deposit Successful");
          history.push("/home");
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <Navigation />
      <form
        onSubmit={handleSubmit}
        className="flex mt-10 md:max-w-xl mx-auto flex-col pt-3 md:pt-8"
      >
        <div className="flex flex-col pt-4">
          <div className="flex ">
            <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <svg
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
              </svg>
            </span>
            <input
              type="email"
              id="design-login-email"
              className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Email"
              name="email"
              ref={emailRef}
            />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="flex ">
            <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <svg
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              id="design-login-email"
              className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Balance"
              name="balance"
              ref={balanceRef}
            />
          </div>
        </div>
        <div className="flex flex-col pt-4 mb-12">
          <div className="flex  ">
            <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <svg
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              id="design-login-amount"
              className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Amount"
              name="amount"
              ref={amountRef}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-14 px-4 py-2 text-base text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:border-2 border-black font-bold font-header hover:bg-white focus:outline-none focus:ring-2"
        >
          <span className="w-full">SUBMIT</span>
        </button>
      </form>
    </>
  );
};

export default ApproveDeposit;

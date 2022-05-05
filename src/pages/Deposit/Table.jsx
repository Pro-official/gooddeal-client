import { useEffect, useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm, ValidationError } from "@formspree/react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Example() {
  const history = useHistory();
  const { user } = useAuth();
  const [money, setMoney] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const amountRef = useRef();
  const balanceRef = useRef();

  useEffect(() => {
    fetch("https://dry-peak-78703.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setMoney(data));
  }, []);

  const [state, handleSubmit] = useForm("mnqwbbez");
  if (state.succeeded) {
    history.push("/home");
  }

  //   const HandleDb = (e) => {
  // const name = nameRef.current.value;
  // const email = emailRef.current.value;
  // const address = addressRef.current.value;
  // const amount = amountRef.current.value;
  // const balance = balanceRef.current.value;
  // const newBalance = parseFloat(amount) + parseFloat(balance);
  // const updatedBalance = (balance * 1) / 100;
  // const upBalance = parseFloat(balance) + parseFloat(updatedBalance);
  // const depositData = { name, email, address, newBalance, upBalance };
  // console.log(depositData);

  // fetch(`http://localhost:5000/deposit/${email}`, {
  // 	method: "PUT",
  // 	headers: {
  // 		"content-type": "application/json",
  // 	},
  // 	body: JSON.stringify(depositData),
  // })
  // 	.then((res) => res.json())
  // 	.then((data) => {
  // 		if (data.modifiedCount) {
  // 			alert("Deposit Successful");
  // 			history.push("/home");
  // 		}
  // 	});
  // e.preventDefault();
  //     setSuccess(true);
  //     if (success) {
  //       alert(
  //         "Deposit Successful. Please wait at least 5 minutes for your transaction to be processed"
  //       );
  //       history.push("/home");
  //     }
  //   };

  return (
    <div className="flex flex-col mt-8 md:max-w-3xl">
      <form
        action="https://formspree.io/f/mnqwbbez"
        method="post"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl -mt-4 mb-2 font-semibold md:flex text-center items-center">
          <span className="underline text-base text-gray-500 decoration-sky-500 underline-offset-2">
            Deposit Method:
          </span>
          <p className="text-gray-500 text-base mt-2 md:ml-1 -ml-6">
            <input
              type="checkbox"
              value="USDT-TRC20"
              className="default:ring-2 ml-4 w-7 h-4"
              required
            />{" "}
            USDT-TRC20
          </p>
        </h1>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 hidden md:block">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Min. Deposit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Max. Deposit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Deposit Countdown
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            100
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        10,000
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        6 Minutes
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h1 className="underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center">
                        Name :
                      </h1>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        className="border-2 w-56 px-1 h-12 border-slate-300"
                        type="text"
                        defaultValue={user.displayName}
                        name="name"
                        ref={nameRef}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h1 className="underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center">
                        Email:
                      </h1>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        className="border-2 h-12 w-56 px-1 border-slate-300"
                        type="email"
                        defaultValue={user.email}
                        name="email"
                        ref={emailRef}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h1 className="underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center">
                        Wallet:
                      </h1>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {money
                        .filter((money) => money.email === user.email)
                        .map((money) =>
                          money.walletAddress ? (
                            <input
                              key={money.email}
                              className="border-2 p-3 w-56 px-1 h-12 border-slate-300"
                              type="text"
                              defaultValue={money.walletAddress}
                              name="address"
                              required
                              ref={addressRef}
                            />
                          ) : (
                            <p className="text-white bg-red-500 rounded-lg pl-4 py-2 w-72">
                              You have to add WalletAddress first
                            </p>
                          )
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to="/wallet-address"
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-blue-500 hover:text-blue-600"
                      >
                        Enter Wallet Address
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h1 className="underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center">
                        Deposit:
                      </h1>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        className="border-2 h-12 w-56 px-1 border-slate-300"
                        type="text"
                        placeholder="Deposit Amount"
                        name="amount"
                        required
                        ref={amountRef}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Enter Deposit Amount
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <h1 className="underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center">
                        Balance:
                      </h1>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {money
                        .filter((money) => money.email === user.email)
                        .map((money) =>
                          money.balance ? (
                            <input
                              key={money.email}
                              className="border-2 w-56 px-1 h-12 border-slate-300"
                              type="text"
                              name="balance"
                              defaultValue={money.balance}
                              required
                              ref={balanceRef}
                            />
                          ) : (
                            <input
                              key={money.email}
                              className="border-2 w-56 px-1 h-12 border-slate-300"
                              type="text"
                              name="balance"
                              defaultValue="0"
                              required
                              ref={balanceRef}
                            />
                          )
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Your current balance
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* -------------------------------- Mobile  ----------------------------------- */}

        <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full md:hidden sm:mx-auto sm:overflow-hidden">
          <div class="px-4 py-8 sm:px-10">
            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 text-gray-500 bg-white">Deposit Money</span>
              </div>
            </div>
            <div class="mt-6">
              <div class="w-full space-y-6">
                <div class="w-full">
                  <div class=" relative ">
                    <input
                      defaultValue={user.displayName}
                      name="name"
                      ref={nameRef}
                      type="text"
                      id="search-form-price"
                      class="rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-2"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class=" relative ">
                    <input
                      type="email"
                      defaultValue={user.email}
                      name="email"
                      ref={emailRef}
                      id="search-form-location"
                      class="rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-2"
                      placeholder="Email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
                {money
                  .filter((money) => money.email === user.email)
                  .map((money) =>
                    money.walletAddress ? (
                      <div key={money.email} class="w-full">
                        <div class=" relative ">
                          <input
                            type="text"
                            defaultValue={money.walletAddress}
                            name="address"
                            required
                            ref={addressRef}
                            id="search-form-name"
                            class="rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-2"
                            placeholder="Wallet"
                          />
                        </div>
                      </div>
                    ) : (
                      <p className="text-white bg-red-500 rounded-lg pl-4 py-2 w-72">
                        You have to add WalletAddress first
                      </p>
                    )
                  )}

                <div class="w-full">
                  <div class=" relative ">
                    <input
                      type="text"
                      name="amount"
                      required
                      ref={amountRef}
                      id="search-form-name"
                      class="rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-2"
                      placeholder="Deposit"
                    />
                  </div>
                </div>
                {money
                  .filter((money) => money.email === user.email)
                  .map((money) =>
                    money.balance ? (
                      <div class="w-full">
                        <div class=" relative ">
                          <input
                            type="text"
                            name="balance"
                            defaultValue={money.balance}
                            required
                            ref={balanceRef}
                            id="search-form-name"
                            class="rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-2"
                            placeholder="Balance"
                          />
                        </div>
                      </div>
                    ) : (
                      <div class="w-full">
                        <div class=" relative ">
                          <input
                            type="text"
                            name="balance"
                            defaultValue="0"
                            required
                            ref={balanceRef}
                            id="search-form-name"
                            class="rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-2"
                            placeholder="Balance"
                          />
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
          <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
            <p class="text-xs leading-5 text-gray-500">
              This may take a few minutes to fully process.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {money
          .filter((money) => money.email === user.email)
          .map((money) =>
            money.walletAddress ? (
              <button>
                <input
                  className="bg-black text-white w-28 mt-4 ml-5 px-3 py-2 font-header font-bold rounded-lg cursor-pointer focus:bg-white focus:border-black focus:text-black"
                  value="DEPOSIT"
                  type="submit"
                />
              </button>
            ) : (
              <button
                className="w-28 mt-4 ml-5 px-3 py-2 font-header font-bold rounded-lg cursor-pointer border-2 border-black text-gray-400"
                disabled
              >
                DEPOSIT
              </button>
            )
          )}
      </form>
    </div>
  );
}

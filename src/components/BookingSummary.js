import { useHistory } from "react-router-dom";
import card from "../assets/card.jpg";
import insurance from "../assets/insurance.jpg";

const BookingSummary = () => {
  const history = useHistory();

  const checkOutHandler = () => {
    history.replace("/details");
  };

  return (
    <div className="px-16">
      <ul
        data-te-stepper-init
        className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out px-24 ml-40 mt-20"
      >
        <li
          data-te-stepper-step-ref
          data-te-stepper-step-active
          className="w-[4.5rem] flex-auto"
        >
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pl-2 leading-[1rem] no-underline after:ml-0 after:h-px after:w-[1rem] after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-light-violet text-sm font-medium text-white"
            >
              1
            </span>
          </div>
          <p>Search</p>
          <div
            data-te-stepper-content-ref
            className="absolute w-full p-4 transition-all duration-500 ease-in-out"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] after:h-px after:w-full after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-light-violet text-sm font-medium text-white"
            >
              2
            </span>
          </div>
          <p>Recommended Services</p>
          <div
            data-te-stepper-content-ref
            className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] after:h-px after:w-full after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-light-violet text-sm font-medium text-white"
            >
              3
            </span>
            {/* <p>Result</p> */}
          </div>
          <p>Results</p>
          <div
            data-te-stepper-content-ref
            className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <div>
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-light-violet text-sm font-medium text-white"
            >
              4
            </span>
            <p>Booking</p>
          </div>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div class="block rounded-lg w-[55rem] bg-gray p-6">
          <div class="block rounded-lg w-[50rem] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Booking&nbsp;Summary
            </h5>
            <br />
            <br />
            <div className="grid grid-cols-3 gap-0 px-16">
              <li className="flex w-full items-center after:content-[''] after:w-[300px] after:h-1 after:border-b after:border-1 after:inline-block dark:after:border-blue-800">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    />
                  </svg>
                </div>
              </li>
              <li className="flex items-center w-full before:content-[''] before:w-[130px] before:h-1  before:border-b before:border-1">
                <div className="flex items-center ml-[2px] justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    />
                  </svg>
                </div>
              </li>
              {/* </ol> */}
            </div>
            <div className="grid grid-cols-2 px-16">
              <p>
                Delhi,
                <br /> 11300 India
              </p>
              <p>
                Shanghai,
                <br /> 200080 China
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 mt-8">
            <div class="block rounded-lg w-[20rem] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <h5 className="mb-2 text-lg text-dark-gray font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Total weight/Volume
              </h5>
              <br />
              <p className="mb-4 pl-[100px] text-base text-neutral-600 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>
                <br />
                114.21Kg
              </p>
            </div>

            <div class="block rounded-lg w-[29rem] ml-[130px] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <h5 className="mb-2 text-lg text-dark-gray font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Load
              </h5>
              <br />
              <br />
              <div className="grid grid-cols-2">
                <p className="mb-4 pl-[100px] text-lg font-bold text-neutral-600 dark:text-neutral-200">
                  1 X
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-8">
            <div class="block rounded-lg w-[22rem] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <h5 className="mb-2 text-lg text-dark-gray font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Seller: Primetime worlwide
              </h5>
              <br />
              <img
                src={card}
                className="h-10 w-40 ml-[60px] mt-[10px]"
                alt=""
              />
            </div>

            <div class="block rounded-lg w-[22rem] ml-[170px] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <h5 className="mb-2 text-lg text-dark-gray font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Insurance:Xcover.com
              </h5>
              <br />
              <img src={insurance} width="200px" alt="" />
            </div>
          </div>
        </div>

        <div class="block rounded-lg ml-[300px] h-[35rem] w-[22rem] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-8">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Price Details
            <span class="inline-block whitespace-nowrap text-xs rounded-[0.30rem] bg-d-dark-gray ml-[30px] px-[0.65em] pb-[0.35em] pt-[0.15em] text-center">
              Known Shipper
            </span>
          </h5>
          <br />
          <div className="grid grid-cols-2">
            <p className="mb-4 text-base text-dark-gray dark:text-neutral-200">
              Seller's Quote
            </p>
            <p className="mb-4 ml-20 text-base text-dark-gray dark:text-neutral-200">
              $ 3,659.25
            </p>
          </div>

          <hr className="text-dark-gray" />
          <br />
          <div className="grid grid-cols-2">
            <p className="mb-4 text-base text-dark-gray dark:text-neutral-200">
              Duties and Taxes
            </p>
            <p className="mb-4 ml-12 text-base text-dark-gray dark:text-neutral-200">
              Not Included
            </p>
          </div>
          <div className="grid grid-cols-2">
            <p className="mb-4 text-base text-dark-gray dark:text-neutral-200">
              Insurance
            </p>
            <p className="mb-4 ml-20 text-base text-dark-gray dark:text-neutral-200">
              $ 320.40
            </p>
          </div>

          <hr className="text-dark-gray" />
          <br />
          <p className="mb-4 text-base text-dark-gray dark:text-neutral-200">
            Add a <button className="underline text-blue">promo code</button>
          </p>
          <div className="grid grid-cols-2">
            <p className="mb-4 text-base text-dark-gray dark:text-neutral-200">
              Platform Fee
            </p>
            <p className="mb-4 ml-20 text-base text-dark-gray dark:text-neutral-200">
              $ 119.48
            </p>
          </div>

          <hr className="text-dark-gray" />
          <br />
          <div className="grid grid-cols-2">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Total
            </h5>
            <h5 className="mb-2 ml-19 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              $ 4,102.13
            </h5>
          </div>

          <br />
          <br />
          <button
            className="bg-dark-violet rounded text-white px-12 py-2 ml-20 hover:bg-dark-violet"
            onClick={checkOutHandler}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

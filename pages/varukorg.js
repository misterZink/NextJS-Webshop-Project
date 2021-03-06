import Head from "next/head";
import useCart from "../lib/hooks/useCart";
import { CART_ACTIONS } from "../lib/reducers/CartReducer";

export default function Varukorg() {
  const cart = useCart();
  let dogs = cart.cart;
  let summ = 0;
  getSum();

  /**
   * Updates the sum the customer should pay.
   */
  function getSum() {
    dogs.forEach((dog) => (summ += dog.price));
  }

  /**
   * Updates what dogs the customer has in their basket.
   */
  function displayDogs() {
    return dogs.map((dog) => (
      <div key={dog.dogName}>
        <span className="bg-gray-200 rounded block ...">
          {dog.dogName}&emsp;&emsp;&emsp;&emsp;{dog.price} :-
        </span>
      </div>
    ));
  }

  return (
    <div className="px-10 mt-10 mb-32 flex flex-col justify-center items-center">
      <Head>
        <title>Dogshop | Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-center mb-12 text-3xl">Varukorgen</h1>
      </div>

      <h1 className="text-center mb-1 text-xl">Artiklar</h1>

      <div className="border-2 border-gray-100 rounded space-y-0.5 w-1/5 text-center ...">
        {displayDogs()}
      </div>

      <div className="flex flex-col w-50% max-w-lg mb-5">
        <h1 className="text-center mt-10 mb-5 text-3xl">Summa: {summ} kr</h1>
        <button
          onClick={() => cart.cartDispatch({ type: CART_ACTIONS.RESET_CART })}
          className="hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link"
        >
          Töm varukorg
        </button>
      </div>

      <form className="w-full max-w-lg mt-10 mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-5">
          Kund information
        </label>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Förnamn
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="namn"
            />
            {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Efternamn
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="efternamn"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phonenumber"
            >
              Telefonnummer
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="telefonnummer"
              max="256"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-adress"
            >
              Adress
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="adress"
              max="256"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Postnummer
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="postnummer"
              max="5"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Stad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="stad"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-cardnumber"
            >
              Kortnummer
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="**** **** **** ****"
              maxLength="16"
            />
            <p className="text-gray-600 text-xs italic">
              De 16 siffrorna på ditt korts framsida.
            </p>
          </div>

          <div className="w-full md:w-1/6 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-card-month"
            >
              Månad
            </label>
            <input
              className="w-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="**"
              maxLength="2"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-card-year"
            >
              År
            </label>
            <input
              className="w-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="**"
              maxLength="2"
            />
          </div>
        </div>
      </form>

      <div className="w-50% max-w-lg mb-10">
        <button
          onClick={() => cart.cartDispatch({ type: CART_ACTIONS.RESET_CART })}
          className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link"
        >
          Genomför köp
        </button>
      </div>
    </div>
  );
}

import getDogPictures, {getDogBreeds} from "../../helpers/ApiHelper";
import useCart from "../../lib/hooks/useCart";
import Head from "next/head";
import Image from "next/image";
import {CART_ACTIONS} from "../../lib/reducers/CartReducer";

export default function Dog({dogPictures, breed}) {

    const dogName = require('dog-names').allRandom();
    const price = randomPrice();
    const cart = useCart();
    console.log(cart)
    breed = breed.charAt(0).toUpperCase() + breed.slice(1); // toUppercase the first letter

    function randomPrice() {
        const max = 10000;
        const min = 2000;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (<>
        <main className="flex place-content-center my-72">
            <Head>
                <title>Dog shop | {breed}</title>
            </Head>
            <div className="border-2  border-gray-300 rounded-lg">
                <div className="container flex xl:h-[500px] ">
                    <div>
                        <Image className="rounded-l-lg"
                               width={400}
                               height={500}
                               src={dogPictures[0]}
                               alt={breed}
                        />
                    </div>
                    <div className="flex flex-col px-8 py-2">
                        <h1 className="text-gray-900 font-semibold text-4xl text-center">
                            {dogName}
                        </h1>

                        <h2 className="text-gray-700 text-lg mb-8 text-center"><span
                            className="font-semibold">Breed:</span> {breed}</h2>
                        <hr/>
                        <h2 className="font-semibold">Description:</h2>
                        <p className="flex-grow max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum at nisi sit amet est efficitur volutpat eu nec quam. Sed ullamcorper dignissim
                            varius. Nulla cursus tortor eget sapien fermentum convallis. Nunc at enim lectus. Etiam
                            condimentum libero in turpis molestie lacinia. Etiam id dictum tortor. Vivamus ligula risus,
                            tristique ut ante id, volutpat varius erat. Curabitur tincidunt at massa sed feugiat. Aenean
                            quis varius tortor. Phasellus ac ullamcorper mauris. Nullam condimentum luctus lacus ac
                            feugiat. Fusce in ipsum volutpat, hendrerit nibh vel, rhoncus felis. Phasellus eleifend
                            augue elit, eget mattis nisi dignissim quis. Vestibulum ac libero pellentesque, malesuada
                            elit ac, tincidunt augue. Pellentesque auctor, sem quis convallis pretium, dui arcu suscipit
                            ex, at facilisis neque leo id dui. Etiam hendrerit maximus enim nec congue. Donec rutrum
                            lorem quis porta pharetra. Praesent magna enim, fringilla at mauris in, efficitur gravida
                            nisi. Nam vestibulum posuere ante, sit amet viverra risus cursus id. Fusce ultricies
                            consectetur odio, quis faucibus urna tincidunt eget. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <hr/>
                        <h2 className="font-semibold text-2xl text-center text-red-500">{price} kr</h2>
                        <button onClick={() => cart.cartDispatch({type: CART_ACTIONS.ADD_TO_CART, dogName: dogName, price: price})}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded content-center mt-2">Add
                            to basket
                        </button>
                        <button onClick={() => cart.cartDispatch({type: CART_ACTIONS.REMOVE_FROM_CART, dogName: dogName})}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded content-center mt-2">RESET
                            to basket
                        </button>

                    </div>
                </div>
            </div>
        </main>
    </>);
};

export async function getStaticPaths() {
    const dogBreeds = await getDogBreeds()
    const paths = dogBreeds.map((dog) => ({
        params: {dog: dog}
    }))

    return {paths, fallback: false};
}

export async function getStaticProps({params: {dog}}) {
    const dogPictures = await getDogPictures(dog);
    return {props: {dogPictures: dogPictures, breed: dog}};
}
import Head from "next/head";
import getDogPictures, {getDogBreeds} from "../../helpers/ApiHelper";
import Image from "next/image";

export default function Dog({dogPictures, breed}) {

    const dogNames = require('dog-names');

    function randomPrice() {
        const max = 10000;
        const min = 2000;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    breed = breed.charAt(0).toUpperCase() + breed.slice(1); // toUppercase the first letter

    return (<>
        <main className="flex place-content-center my-72">
            <Head>
                <title>Dog shop | {breed}</title>
            </Head>
            <div className="border-2  border-gray-300 rounded-lg">
            <div className="flex h-[500px]">
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
                        {dogNames.allRandom()}
                    </h1>
                    <hr/>
                    <h2 className="text-gray-700 text-lg mt-8 mb-2"><span
                        className="font-semibold">Breed:</span> {breed}</h2>

                    <h2 className="font-semibold">Description:</h2>
                    <p className="flex-grow">Funny dog who likes to eat alot.</p>
                    <hr/>
                    <h2 className="font-semibold text-2xl text-center text-red-500">{randomPrice()} kr</h2>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center mt-2">Add
                        to basket
                    </button>
                </div>
            </div>
            </div>
        </main>
    </>);
};

export async function getStaticPaths() {
    const dogNames = await getDogBreeds()
    const paths = dogNames.map((dog) => ({
        params: {dog: dog}
    }))

    return {paths, fallback: false};
}

export async function getStaticProps({params: {dog}}) {
    const dogPictures = await getDogPictures(dog);
    return {props: {dogPictures: dogPictures, breed: dog}};
}
import getDogPictures, {getDogBreeds} from "../../helpers/ApiHelper";
import Image from "next/image";
import styles from "../../styles/dog.module.css";

export default function Dog({dogPictures, breed}) {

    const dogNames = require('dog-names');

    function randomPrice(){
        const max = 10000;
        const min = 2000;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    breed = breed.charAt(0).toUpperCase() + breed.slice(1); // toUppercase the first letter

    return (<>
        <main className={styles.main}>
            <div>
                <Image
                    width={400}
                    height={500}
                    src={dogPictures[0]}
                    alt={breed}
                />
            </div>
            <div className={styles.doginfo}>
                <h1>{dogNames.allRandom()}</h1>
                <h2>Breed: {breed}</h2>
                <h2>Price: {randomPrice()}kr</h2>
                <button>Add to basket</button>
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
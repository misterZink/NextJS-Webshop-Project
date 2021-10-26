import getDogPictures, {getDogBreeds} from "../../helpers/ApiHelper";
import Image from "next/image";



export default function Dog({dogPictures, breed}) {
    return (<>
        <main>
            <div>
                <h1>{breed}</h1>
                <Image
                    width={200}
                    height={200}
                    src={dogPictures[2]}
                    alt={breed}
                />
                <h2>Price: 3000kr</h2>
                <button>Add to basket</button>
            </div>
        </main>
    </>);
};

export async function getStaticPaths() {
    const dogNames = await getDogBreeds()
    console.log(dogNames)
    const paths = dogNames.map((dog) => ({
        params: {dog: dog}
    }))

    return {paths, fallback: false};
}

export async function getStaticProps({params: {dog}}) {
    const dogPictures = await getDogPictures(dog);
    return {props: {dogPictures: dogPictures, breed: dog}};
}
import getDogPictures, {getDogBreeds} from "../../helpers/ApiHelper";


export default function Dog({dogPictures, breed}) {
    console.log("Breed:", breed);
    console.log("Pictures:", dogPictures)
    return (<>
        <h1>Test</h1>
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
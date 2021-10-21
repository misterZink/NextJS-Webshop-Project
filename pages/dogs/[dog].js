import getDogPictures, {getDogBreeds} from "../../helpers/ApiHelper";


export default function Dog({dog}) {
    console.log(dog)
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

export async function getStaticProps({params}) {
    const dogPictures = await getDogPictures(params.dog);
    return {props: {dog: dogPictures}};
}
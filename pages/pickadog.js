import getDogPictures from "../helpers/ApiHelper";
import Image from "next/image";
import Link from "next/link";

export default function kort({ dogPictures }) {
  console.log(dogPictures);
  return (
    <>
      <div>
        <h1>dogPictures</h1>
        <Image width={200} height={200} src={dogPictures[0]} alt="pug" />
        <Link passHref href={"/dogs/pug"}>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              Go Cart page!
            </button>
          </div>
        </Link>

        <Image width={200} height={200} src={dogPictures[1]} alt="boxer" />
        <Link passHref href={"/dogs/boxer"}>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              Go Cart page!
            </button>
          </div>
        </Link>

        <Image width={200} height={200} src={dogPictures[2]} alt="boxer" />
        <Link passHref href={"/dogs/akita"}>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              Go Cart page!
            </button>
          </div>
        </Link>

        <Image width={200} height={200} src={dogPictures[3]} alt="boxer" />
        <Link passHref href={"/dogs/dalmatian"}>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              Go Cart page!
            </button>
          </div>
        </Link>

        <Image width={200} height={200} src={dogPictures[4]} alt="boxer" />
        <Link passHref href={"/dogs/puggle"}>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              Go Cart page!
            </button>
          </div>
        </Link>

        <Image width={200} height={200} src={dogPictures[5]} alt="boxer" />
        <Link passHref href={"/dogs/shiba"}>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              Go Cart page!
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
export async function getStaticProps() {
  let dogPictures = [];

  let dogPicture = await getDogPictures("pug");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("boxer");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("akita");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("dalmatian");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("puggle");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("shiba");
  dogPictures.push(dogPicture[0]);

  return { props: { dogPictures: dogPictures } };
}

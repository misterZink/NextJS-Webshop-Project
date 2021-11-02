import getDogPictures from "../helpers/ApiHelper";
import Image from "next/image";
import Link from "next/link";

export default function kort({ dogPictures }) {
  return (
    <>
      <div>
        <h1 className="text-center mb-12 text-3xl mt-10">Dog picture</h1>
      </div>

      <div className="flex flex-row  flex-wrap justify-around  ">
        <div className="flex  flex-col w-60   ">
          <Image
            className="rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-md"
            width={200}
            height={200}
            src={dogPictures[0]}
            alt="pug"
          />
          <Link passHref href={"/dogs/pug"}>
            <button className=" hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              More info!
            </button>
          </Link>
        </div>
        <div className="flex flex flex-col w-60  ">
          <Image
            className="rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-md"
            width={200}
            height={200}
            src={dogPictures[1]}
            alt="pug"
          />
          <Link passHref href={"/dogs/boxer"}>
            <button className=" hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              More info!
            </button>
          </Link>
        </div>

        <div className="flex  flex-col w-60   ">
          <Image
            className="rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-md"
            width={200}
            height={200}
            src={dogPictures[2]}
            alt="pug"
          />
          <Link passHref href={"/dogs/akita"}>
            <button className=" hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              More info!
            </button>
          </Link>
        </div>
        <div className="flex  flex-col w-60 ">
          <Image
            className="rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-md"
            width={200}
            height={200}
            src={dogPictures[3]}
            alt="pug"
          />
          <Link passHref href={"/dogs/dalmatian"}>
            <button className="hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              More info!
            </button>
          </Link>
        </div>

        <div className="flex  flex-col w-60 ">
          <Image
            className="rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-md"
            width={200}
            height={200}
            src={dogPictures[4]}
            alt="pug"
          />
          <Link passHref href={"/dogs/puggle"}>
            <button className="hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              More info!
            </button>
          </Link>
        </div>

        <div className="flex  flex-col w-60 ">
          <Image
            className="rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-md"
            width={200}
            height={200}
            src={dogPictures[5]}
            alt="pug"
          />
          <Link passHref href={"/dogs/shiba"}>
            <button className="  hover:scale-110 transition duration-500 ease-in-out; mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center Link">
              More info!
            </button>
          </Link>
        </div>
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

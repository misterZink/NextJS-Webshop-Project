import getDogPictures from "../helpers/ApiHelper";
import Image from "next/image";
import Link from "next/link";

export default function kort({ dogPictures }) {
  console.log(dogPictures);
  return (
    <>
      <div>
        <h1>dogPictures</h1>
        <Link passHref href={"/dogs/pug"}>
          <div>
            <h1>hello</h1>
            <Image width={200} height={200} src={dogPictures[0]} alt="pug" />
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

  dogPicture = await getDogPictures("husky");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("puggle");
  dogPictures.push(dogPicture[0]);

  dogPicture = await getDogPictures("shiba");
  dogPictures.push(dogPicture[0]);

  return { props: { dogPictures: dogPictures } };
}

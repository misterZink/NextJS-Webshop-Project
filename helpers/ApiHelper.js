export default async function getDogPictures(breed) {
	const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
	const data = await res.json();
	return data.message;
}

export async function getDogBreeds() {
	const res = await fetch("https://dog.ceo/api/breeds/list/all");
	const data = await res.json();

	return Object.getOwnPropertyNames(data.message);
}

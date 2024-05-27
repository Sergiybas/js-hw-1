const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const list = document.querySelector(".gallery");
// function createImage(arr) {
//   const imagesMap = arr.map(({ url, alt }) => {
//     const imagesLi = document.createElement("li");
//     imagesLi.style.marginBottom = "80px";
//     const imagesImg = document.createElement("img");
//     imagesImg.style.width = "400px";
//     imagesImg.src = url;
//     imagesImg.alt = alt;
//     imagesLi.append(imagesImg);
//     return imagesLi;
//   });
//   list.append(...imagesMap);
// }
// createImage(images);
// console.log(list);
///////////////////////////////////////////////////////////
//////////////////variant2//////////////////////////////
const list = document.querySelector(".gallery");
function createImage(arr) {
  const imagesMap = arr
    .map(
      ({ url, alt }) =>
        ` <li>
  <img src="${url}" alt="${alt}" width = '600'>
   </li>`
    )
    .join("");

  list.insertAdjacentHTML("beforebegin", imagesMap);
}
createImage(images);

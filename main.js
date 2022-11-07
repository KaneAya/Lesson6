const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let img=[pic1.jpg,pic2.jpg,pic3.jpg,pic4.jpg,pic5.jpg]

/* Declaring the alternative text for each image file */

/* Looping through images */
for(let i=1;i<=5;i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/picS{i}.jpg`);
  newImage.setAttribute('alt', xxx);
  thumbBar.appendChild(newImage);
}

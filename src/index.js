console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function dog() {
    fetch(imgUrl)
        .then((res) => res.json())
        .then((pic) => {
            pictureContainer = document.querySelector("#dog-image-container");
            pic.message.forEach((dog) => {
                picture = document.createElement("img");
                picture.src = `${dog}`;
                pictureContainer.appendChild(picture);
            });
        });
    fetch(breedUrl)
        .then((res) => res.json())
        .then((breeds) => {
            const dogObject = breeds.message;
            dogBreeds = document.querySelector("#dog-breeds");
            for (const property in dogObject) {
                eachBreed = document.createElement("li");
                eachBreed.className = "dog-list";
                eachBreed.textContent = `${property}: ${dogObject[property]}`;
                dogBreeds.appendChild(eachBreed);
                document.querySelectorAll(".dog-list").forEach((item) => {
                    item.addEventListener("click", function () {
                        item.style.color = "red";
                    });
                });
            }
        });
});

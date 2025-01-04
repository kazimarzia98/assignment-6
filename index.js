const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
    categories.forEach((item) => {
        const categoryBtn = document.getElementById('category-btn');


        const button = document.createElement("button");
        button.innerHTML = `
        <div>
        <button class ='border border-1 rounded-xl px-7 py-3 flex gap-2 hover:text-white hover:bg-[#0E7A81]'>
        <img class = 'w-6 h-6' src ='${item.category_icon}' alt ='' >
        ${item.category}</button>
        </div>
    `
        categoryBtn.appendChild(button);
    })
};

const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayPets(data.pets))
        .catch((error) => console.log(error))
};

const displayPets = (pets) => {
    pets.forEach((pet) => {
        console.log(pet);
        const showPetsSection = document.getElementById('showPets');

        const gridTemplt = document.createElement("div");
        gridTemplt.innerHTML =
            `
        <div class="card bg-base-100 class="grid lg:grid-cols-3 grid-flow-row border border-red-800">
        <figure>
            <img src='${pet.image}' alt="Album" />
        </figure>
        <div class="card-body border border-yellow-200 ">
            <h2 class="card-title">${pet.pet_name}</h2>

            <p  class="flex gap-2">
            <span>
                    <img class="w-5 h-5" src="./images/square.png" alt="">
                </span>
            Breed: ${pet.breed}</p>

            <p  class="flex gap-2">
            <span >
                    <img class="w-5 h-5" src="./images/gender.png" alt="">
                </span>
            Gender: ${pet.gender}</p>

            <p  class="flex gap-2">
            <span >
                    <img class="w-5 h-5" src="./images/calender.png" alt="">
                </span>
            Birth: ${pet.date_of_birth}</p>

            <p  class="flex gap-2">
            <span>
                    <img class="w-5 h-5" src="./images/dollar.png" alt="">
                </span>
            Price: ${pet.price}$</p>

           <div class="divider"></div>

        <div class="card-actions justify-around">
        <button class="btn btn-active">
        <span >
                    <img class="w-5 h-5" src="./images/thumbs-up.png" alt="">
                </span>
        </button>
        <button class="btn btn-active text-[#0E7A81]">Adopt</button>
        <button class="btn btn-active text-[#0E7A81]">Details</button>
        </div>
        </div>
        </div>
        `


        showPetsSection.appendChild(gridTemplt);

        const sideBar = document.getElementById('side-bar');
        const sideBarContent = document.createElement("div");
        sideBarContent.innerHTML =
            `
        <div >
        
        </div>
        `
        sideBar.appendChild(sideBarContent);


    })

}




loadCategories();
loadPets();
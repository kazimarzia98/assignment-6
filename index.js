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
        <div class="card bg-base-100 class="grid lg:grid-cols-3 grid-flow-row border border-red-800"">
        <figure>
            <img src='${pet.image}' alt="Album" />
        </figure>
        <div class="card-body border border-yellow-200 ">
            <h2 class="card-title">${pet.pet_name}</h2>
            <p>Breed: ${pet.breed}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Birth: ${pet.date_of_birth}</p>
            <p>Price: ${pet.price}$</p>

            <hr>

        <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
        </div>
        </div>
        </div>
        `


        showPetsSection.appendChild(gridTemplt);


    })

}




loadCategories();
loadPets();
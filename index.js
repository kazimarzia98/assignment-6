const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
    categories.forEach((item) => {
        // console.log(item.category);

        const categoryBtn = document.getElementById('category-btn');


        const button = document.createElement("button");
        button.innerHTML = `
        <div>
        <button id="btn-${item.id}" onclick = loadActiveBtn(${item.id}) class ='category-btn border border-1 rounded-xl px-7 py-3 flex gap-2 hover:text-white hover:bg-[#0E7A81]'>
        <img class = 'w-6 h-6' src ='${item.category_icon}' alt ='' >
        ${item.category}</button>
        </div>
    `;

        button.onclick = () => loadCategoryPets(item.category);
        categoryBtn.appendChild(button);
    })
};

// active button

const loadActiveBtn = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => showActiveBtn(data.petData))
        .catch((error) => console.log(error));
}
const showActiveBtn = (petData) =>{
    // console.log(petData.petId);
    const petId = petData.petId;
    removeActiveClass();

    const activeBtn = document.getElementById(`btn-${petId}`);
    activeBtn.classList.add("active");
    // console.log(activeBtn);
}

const removeActiveClass = () =>{
   const buttons = document.getElementsByClassName("category-btn");
//    console.log(buttons);
   for(let btn of buttons){
    btn.classList.remove("active")
   }
}

// show category pets after clicking button

const loadCategoryPets = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(res => res.json())
        .then(data => displayCategoryPets(data.data))
        .catch((error) => console.log(error));
};

const displayCategoryPets = (pets) => {
    const showPets = document.getElementById('showPets');
    showPets.innerHTML = "";


    if (pets.length === 0) {
        showPets.classList.remove("grid");
        showPets.innerHTML =
            `
        <div class ='flex flex-col justify-center items-center py-12'>
        <img class="w-20 h-20" src='./images/error.webp' alt=''>
        <p class = "text-2xl font-bold">No Content Available</p>
        </div>
        `;
        return;
    } else {
        showPets.classList.add("grid");
    }

    pets.forEach((pet) => {
        const showPetsSection = document.getElementById('showPets');

        const gridTemplt = document.createElement("div");
        gridTemplt.innerHTML =
            `
        <div class="card bg-base-100  border border-slate-300 pt-4 ">
        <figure>
             <img class = 'w-[270px] h-[160px] border rounded-lg' src='${pet.image}' alt="" />
        </figure>
        <div class="card-body ">
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
        <button  onclick = loadPetsInSideBar(${pet.petId}) class="btn btn-active">
                <span >
                    <img class="w-5 h-5" src="./images/thumbs-up.png" alt="">
                </span>
        </button>
        <button class="btn btn-active text-[#0E7A81]">Adopt</button>
        <button onclick = loadModal(${pet.petId}) class="btn btn-active text-[#0E7A81]">Details</button>
        </div>
        </div>
        </div>
        `;
        showPetsSection.appendChild(gridTemplt);
    })

}


// show all pets in card

const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayPets(data.pets))
        .catch((error) => console.log(error))
};

const displayPets = (pets) => {
    pets.forEach((pet) => {
        const showPetsSection = document.getElementById('showPets');

        const gridTemplt = document.createElement("div");
        gridTemplt.innerHTML =
            `
        <div>
        <div class="card bg-base-100  border border-slate-300 pt-4">
        <figure>
            <img class = 'w-[270px] h-[160px] border rounded-lg' src='${pet.image}' alt="" />
        </figure>
        <div class="card-body ">
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
        <button onclick = loadPetsInSideBar(${pet.petId})  class="btn btn-active">
                <span >
                    <img class="w-5 h-5" src="./images/thumbs-up.png" alt="">
                </span>
        </button>
        <button class="btn btn-active text-[#0E7A81]">Adopt</button>
        <button onclick = loadModal(${pet.petId}) class="btn btn-active text-[#0E7A81]">Details</button>
        </div>
        </div>
        </div>
        
        </div>
        `;


        showPetsSection.appendChild(gridTemplt);
    })
}

// show modal
const loadModal = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => displayModal(data.petData))
        .catch((error) => console.log(error))
}

const displayModal = (petData) => {

    const modalContainer = document.getElementById("modal-content");
    modalContainer.innerHTML =
        `
    <img class='w-[500px] h-[270px]' src = '${petData.image}' alt =''>
    <h2 class='text-xl font-bold py-2'>${petData.pet_name}</h2>
   <div class='flex flex-row'>
   <div>
    <p  class="flex gap-2">
            <span>
                    <img class="w-5 h-5" src="./images/square.png" alt="">
                </span>
            Breed: ${petData.breed}</p>

            <p  class="flex gap-2">
            <span >
                    <img class="w-5 h-5" src="./images/gender.png" alt="">
                </span>
            Gender: ${petData.gender}</p>

            <p  class="flex gap-2">
            <span >
                    <img class="w-5 h-5" src="./images/calender.png" alt="">
                </span>
            Birth: ${petData.date_of_birth}</p>
   </div>

            <div>
            <p  class="flex gap-2">
            <span>
                    <img class="w-5 h-5" src="./images/dollar.png" alt="">
                </span>
            Price: ${petData.price}$</p>

            <p  class="flex gap-2">
            <span>
                    <img class="w-5 h-5" src="./images/dollar.png" alt="">
                </span>
            Vaccinated Status : ${petData.vaccinated_status}</p>
            </div>

   </div>
           <div class="divider"></div>

           <h2 class='text-xl font-bold'>Detials Information</h2>
           <p class='text-xs'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using is that it has a more-or-less normal distribution of letters, as opposed to using.</p>


    
    `
    document.getElementById("showModalDetails").click();
}

// load pet images for side bar

const loadPetsInSideBar = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => displayPetsInSideBar(data.petData))
        .catch((error) => console.log(error));
}

// display pets images in side bar

const displayPetsInSideBar = (petData) => {
    // console.log(petData.image);

    const sideBar = document.getElementById('side-bar');
    const newCard = document.createElement('div');
    newCard.innerHTML =
        `
    <div class = 'border border-slate-300 py-2 px-2 '>
     <img class = 'w-[270px] h-[160px]' src = '${petData.image}'>
    </div>
    `;
    sideBar.appendChild(newCard);
}








loadCategories();
loadPets();
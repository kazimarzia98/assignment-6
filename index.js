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

loadCategories();
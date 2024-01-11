// loader 
// enter button activtion
// light box for photos open together
// photo clickable
// random photos at home page
//  more photos at home page instead of 3
// adding better css
// header >> images keep repeating like Pexel
// navbar
// search button attractivness
// make website like Pexel and Yandex

const accessKey = "4CW4fmD5UhhB1SumLRtm9zLfdUamebyFKmFf12uZq0U"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputDate = ""
let page = 1;

async function searchImages() {
    inputDate = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputDate}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";

    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        // document.imageLink.style.searchresult.backgroundColor = "red";
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        // >>>>>>>>>>*********<<<<<<>>>>>>>>

        // document.getElementById("anchorcolor").style.backgroundColor = "red";



        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    page++

    if (page > 1) {
        showMore.style.display = "block"
    }
}



formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages()
})
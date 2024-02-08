const postsListContainer = document.querySelector(".posts-list-container");

// 1st method fetch using XHR================

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
      //   console.log(xhr);
    } else {
      console.log("some error ocurred");
    }
  };
}
// End of 1nd method============

// 2nd Method ======================
function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    // .then((result) => console.log(result))

    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}
// fetchUsingFetchMethod();

// End of 2nd method fetchUsingFetchMethod()===========

// 3rd Method asyncAwaitMethod()============
async function fetchUsingAsyncAwaitMethod() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const result = await response.json();
  displayResults(result);
  //   console.log(result);
}
// fetchUsingAsyncAwaitMethod();

// End of 3rd Method asyncAwaitMethod()============
// 4th method =============================
function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}

// helperMethod();

async function fetchUsingAsyncAwaitMethod() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  // console.log(response);
  displayResults(response);
}
fetchUsingAsyncAwaitMethod();
function displayResults(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class ="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>`
    )
    .join(" ");
}

// End of 4th method =============================

// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetch using the AsyncAwaitMethod(); why ? it is cleaner code

// fetchUsingXHRAndAsyncAwait(); and helperMethod()



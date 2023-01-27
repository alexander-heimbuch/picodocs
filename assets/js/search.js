const resultsContainer = document.getElementById("search-results");
const navigationContainer = document.getElementById("navigation");
const nothingFound = document.createElement("li");
nothingFound.innerText = "Nothing found.";
const searchQuery = document.getElementById("search-input");

database = window.database || {};

function createSearchStore(data) {
  return window.lunr(function () {
    this.field("id");
    this.field("title", { boost: 10 });
    this.field("category");
    this.field("content");

    Object.keys(data).forEach((key) => {
      this.add({
        id: key,
        title: data[key].title,
        category: data[key].category,
        content: data[key].content,
      });
    });
  });
}

function resultEntry(result) {
  const searchEntry = document.createElement("li");
  const searchLink = document.createElement("a");

  const categoryPath = result.url.split("/");
  categoryPath.shift();
  categoryPath.pop();

  searchEntry.appendChild(searchLink);

  searchLink.setAttribute("href", result.href);

  searchLink.innerText = result.title;

  return searchEntry;
}

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length > 0) {
    results.map(function (entry) {
      resultsContainer.appendChild(resultEntry(entry));
    });
  } else {
    resultsContainer.appendChild(nothingFound);
  }

  navigationContainer.style.display = "none";
  resultsContainer.style.display = "block";
}

function hideResults() {
  resultsContainer.style.display = "none";
  navigationContainer.style.display = "block";
}

function searchStore(store, data) {
  return (term) => store.search(term).map((result) => data[result.ref]);
}

function queryChange(display, hide, search) {
  return (event) => {
    var value = event.srcElement.value;

    if (value.length === 0) {
      hide();
    }

    if (value.length > 2) {
      display(search(value));
    }
  };
}

function keyboardControls(hide) {
  return function (event) {
    switch (event.keyCode) {
      case 27:
        hide();
        break;
    }
  };
}

function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");

  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
    }
  }
}

const search = searchStore(createSearchStore(database), database);
const searchTerm = getQueryVariable("query");

if (searchTerm) {
  displayResults(search(searchTerm));
  searchQuery.attr("value", searchTerm);
}

searchQuery.addEventListener(
  "input",
  queryChange(displayResults, hideResults, search)
);
document.addEventListener("keyup", keyboardControls(hideResults));

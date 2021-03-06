const searchBox = document.querySelector('.search-box');
const searchResults = document.querySelector('.search-results');

const fetchResults = (input) => {
  if (searchBox.value === '') {
    return null;
  } else {
    fetch(`https://swapi.co/api/people/?search=${searchBox.value}`)
      .then(response => response.json())
      .then(jsonResponse => parseResults(jsonResponse));
  }
};

const parseResults = response => {
  const html = response.results.map((element, idx) => (
    `<li>
      ${element.name}
    </li>`
  )).join('');
  searchResults.innerHTML = html;
};

searchBox.addEventListener('keypress', fetchResults);

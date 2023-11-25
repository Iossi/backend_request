async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const letter = "C";
  const emails = data
    .filter((item) => {
      return item.name.startsWith(letter);
    })
    .map((item) => {
      return item.email;
    });

  const divUsers = document.querySelector("#background");
  divUsers.innerHTML = `<p>${emails}</p>`;
}
fetchData();

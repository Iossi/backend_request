async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const emails = data.map(array => {
        return array.email;
    });
    const divUsers = document.querySelector('#background');
    divUsers.innerHTML = `<p>${emails}</p>`;
};
fetchData();
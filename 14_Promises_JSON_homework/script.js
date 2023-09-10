const BASE_URL = "https://jsonplaceholder.typicode.com";
const userList = document.getElementById("userList");
const userInfoContainer = document.getElementById("userInfoContainer");

fetch(`${BASE_URL}/users`)
    .then((res) => res.json()) //запрос
    .then((users) => {
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            li.addEventListener("click", () => displayUsersInfo(user));
            userList.appendChild(li);
        });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent =
            "Пользователи не найдены: попробуйте повторить позднее";
        // userList.appendChild(li);
    })
    .finally(console.log("Финиш"));

userInfoContainer.addEventListener("click", async () => {
    const user = await fetchUsersInfo(userId);
    displayUsersInfo(user);
});

async function fetchUsersInfo() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const user = response.json();
        console.log(user);
        console.log(user);
        return user;
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}

function displayUsersInfo(user) {
    console.log("displayUsersInfo called", user);
    userInfoContainer.style.display = "block"; // делаем контейнер видимым

    userInfoContainer.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <p><strong>ID:</strong>${user.id}</p>   
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>
    <p><strong>Company:</strong> ${user.company.name}</p>
    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
`;
    userInfoContainer.appendChild(div);
}

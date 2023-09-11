fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((users) => {
        const userList = document.getElementById("userList");
        users.forEach((user) => {
            const li = document.createElement("li");
            li.dataset.userID = user.id;//берем id без явного указания в строке
            li.textContent = user.name;//берем name с указанием в строке
            li.classList.add("userClass");//даем класс li для дальнейшей идентификации
            userList.appendChild(li);//создаем li
        });

        const li = document.querySelectorAll(".userClass");
        const handleClick = (e) => {
            const userID = e.target.dataset.userID;//привязываем клик к li
            fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)//обращаемся к базе данных
                .then((response) => response.json())//Response: json() method– декодирует ответ в формате JSON
                .then((userInfo) => {
                    const userInfoContainer =
                        document.getElementById("userInfoContainer");
                        userInfoContainer.style.display = 'block'; // делаем контейнер видимым
                    userInfoContainer.innerHTML = "";

                    const div = document.createElement("div");
                    div.innerHTML = `
                    <p>ID:${userInfo.id}</p>
                    <h2>Name:${userInfo.name}</h2>
                    <p>Unsername:${userInfo.unsername}<p>
                    <p>Email:${userInfo.email}<p>
                    <p>Address:
                    <span> ${userInfo.address.street}</span>
                    <span> ${userInfo.address.suite}</span>
                    <span> ${userInfo.address.cite}</span>
                    <span> ${userInfo.address.zipcode}</span>                                  
                     </p>                
                    `;
                    userInfoContainer.appendChild(div);
                });
            //Статический JSON.stringify()метод преобразует значение JavaScript в строку JSON, при необходимости заменяя значения, если указана функция замены,
            // или, при необходимости, включая только указанные свойства, если указан массив замены.
        };
        li.forEach((li) => {
            li.addEventListener("click", handleClick);
        });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent = "Error customer ";
        userList.appendChild(li);
    })
    .finally(console.log("Stop"));

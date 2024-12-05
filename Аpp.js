const list = document.getElementById('list');
const input = document.getElementById('filter');

const USERS = [];
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        const users = await response.json();
        USERS.push(...users);
    } catch (error) {
        console.error(error.message);
    }
}

input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    const filteredUsers = USERS.filter(user => user.name.toLowerCase().includes(filter));
    list.innerHTML = '';
    filteredUsers.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        list.appendChild(li);
    
    });
});

getUsers()



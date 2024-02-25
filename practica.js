//Fetch(GET,POST,BLOW, y response.clone)

let url = "https://dummyjson.com/users";
var url2 = 'https://jsonplaceholder.typicode.com/posts';

fetch(url2)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ',error))

//POST
fetch(url2,{
    method: 'POST',
    body: JSON.stringify({
        userId: 102,
        id:290,
        title: 'Wyliam Cordero',
        body: 'Practica Fetch'
    }),
    headers: {
        'Content-type':'aplication/json; charset=UTF-8'
    },
})
.then((response)=> response.json())
.then((json) => console.log(json))

//BLOB
fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/154.png')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error:', error));

//response.clone()
fetch(url2)
  .then(response => {
    response.json().then(data => {
      const originalResponseContainer = document.getElementById('original-response');
      originalResponseContainer.textContent = 'Respuesta Original:';

      data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `ID: ${item.id}, Title: ${item.title}`;
        originalResponseContainer.appendChild(itemElement);
      });
      const clonedResponse = response.clone();
      clonedResponse.json().then(data => {
        const clonedResponseContainer = document.getElementById('cloned-response');
        clonedResponseContainer.textContent = 'Respuesta Clonada:';

        data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.textContent = `ID: ${item.id}, Title: ${item.title}`;
          clonedResponseContainer.appendChild(itemElement);
        });
      });
    });
  })
  .catch(error => console.error('Error:', error));
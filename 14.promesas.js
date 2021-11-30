//Promesas

/*Crear una promesa
Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros,
resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó.*/

const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));


//Ej de promesa con un fetch

fetch("/robots.txt")
  .then(response => {
    return response.text(); // Devuelve una promesa
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => { /* Código a realizar cuando se rechaza la promesa */ });

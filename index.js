import { argv } from 'node:process';

const API_URL = 'https://fakestoreapi.com/';

// desestructuración de argv
const [,, ...args] = argv;


//saco los datos de argv
//primero la operación, luego la ruta y por último el número

const operation = args[0].toUpperCase();
const path = args[1];
const tittleOrNumber = args[2] ? args[2] : null;
const price = args[3] ? args[3] : null;
const category = args[4] ? args[4] : null;

console.log(`Operation: ${operation}`);

switch (operation) {
    case 'GET':

        fetch(`${API_URL}${path}${tittleOrNumber ? `/${tittleOrNumber}` : ''}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        break;
    case 'POST':
        fetch(`${API_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: tittleOrNumber,
                price: price,
                category: category
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        break;
    case 'DELETE':
        fetch(`${API_URL}${path}${tittleOrNumber ? `/${tittleOrNumber}` : ''}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        break;
}
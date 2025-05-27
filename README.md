# 📘 Proyecto de Procesamiento de Argumentos desde la Línea de Comandos

Este proyecto fue desarrollado para demostrar cómo capturar y procesar argumentos desde la terminal utilizando `process.argv` en Node.js, aplicando técnicas modernas de JavaScript como **destructuring** y el **spread operator** junto con estructuras de control como `switch`.

## ✅ ¿Qué se realizó?

- Captura de argumentos con `process.argv`.
- Procesamiento mediante `switch` para identificar acciones.
- Uso de **destructuring** para extraer argumentos de forma clara.
- Uso de **spread operator** para manejar múltiples entradas dinámicas.
- Implementación de tres comandos básicos: `get`, `post`, `delete`.

## 🛠️ Tecnologías Utilizadas

- Node.js
- JavaScript ES6+

## 📦 Instalación

No se requiere instalación adicional. Solo necesitas tener Node.js instalado en tu sistema.

## 🚀 Ejecución

Para ejecutar el programa, utiliza el siguiente comando desde la terminal:

npm run start <operación> <tituloONumero> <precio> <categoria>

precio y categoria se utilizan solo para el POST

## 📌 Ejemplos de Uso

 ❯ npm run start get products 3

 Operation: GET
```json
{
  "id": 3,
  "title": "Mens Cotton Jacket",
  "price": 55.99,
  "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.7,
    "count": 500
  }
}

```
 
 ❯ npm run start post products T-shirt-Rex 300 remeras  

 Operation: POST
```json
{ 
  "id": 21, 
  "title": "T-shirt-Rex", 
  "price": "300", 
  "category": "remeras"' 
}
```

## 📂 Estructura del Proyecto
```
api-fake/
├── index.js
└── README.md
```


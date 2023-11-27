import app from "./app.js";

const port = 3000;

// Escutando na porta 3000
// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});

// Para instalar o nodemon como dependência de desenvolvimento, você pode usar o comando:
// npm install nodemon --save-dev

// Para executar o aplicativo com o nodemon, você pode adicionar o seguinte script no seu arquivo package.json:
// "scripts": {
//   "dev": "nodemon src/app.js"
// }

// Em seguida, execute o aplicativo usando o seguinte comando:
// npm run dev

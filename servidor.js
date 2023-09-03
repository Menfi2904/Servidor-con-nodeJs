import chalk from "chalk";
import http from "http";

const minombre = [
  {
    nombre: "Menfi Garcia",
    edad: 28,
    soltera: false,
    pais: "Honduras",
  },
];

const puerto = 8080;
const host = "localhost";

let server = http.createServer((request, respuesta) => {
  if (request.method === "GET" && request.url === "/informacion") {
    respuesta.statusCode = 200;
    respuesta.setHeader("Content-type", "application/json");
    respuesta.end(JSON.stringify(minombre));
  } else {
    request.statusCode = 404;
    respuesta.end = "url no encontrada";
  }
});

server.listen(puerto, host, () => {
  const log = console.log;
  log(
    chalk.green(
      `el servidor localhost:8080/informacion esta corriendo adecuadamente en el ${host} y el puerto ${puerto}`
    )
  );
});

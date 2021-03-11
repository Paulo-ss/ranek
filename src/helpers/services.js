import axios from "axios";

// Criando uma instância do axios para definir
// uma URL base para todas as requisições
const axiosRequest = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  // Requisições do tipo GET
  async get(endpoint) {
    // Usando o axios para fazer requisições.
    // O get() já transforma a resposta em JSON,
    // porém o JSON fica dentro do data
    const response = await axiosRequest.get(endpoint);

    return response;
  },
  // Requisições do tipo POST
  async post(endpoint, body) {
    const response = await axiosRequest.post(endpoint, body);

    return response;
  },
};

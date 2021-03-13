import axios from "axios";

// Criando uma instância do axios para definir
// uma URL base para todas as requisições
const axiosRequest = axios.create({
  baseURL: "ranekapilocal.local",
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
    await axiosRequest.post(endpoint, body);
  },
  // Requisições do tipo PUT
  async put(endpoint, body) {
    await axiosRequest.put(endpoint, body);
  },
  // Requisições do tipo DELETE
  async delete(endpoint) {
    await axiosRequest.delete(endpoint);
  },
};

export const getCep = (cep) => {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
};

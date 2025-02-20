import api from './api'; 


export const fetchUser = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const createUser = async (userData) => {
  try {
    const response = await api.post('/user', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para atualizar dados do usuário
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

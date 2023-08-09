import axios from "axios";

export const Api=axios.create({
    baseURL : 'http://10.0.2.2:8080/api'
})

export const create = async (email, password) => {
  return Api.post('/auth/signup', {email, password})
}

export const createSession = async (email, password) => {
    try {
      const response = await Api.post('/auth/signin', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
};
export const deleteSkill = async (id) => {
  return Api.delete(`/skill/${id}`);
};
export const listaSkill = async () => {
  return Api.get('/skill/listar')
}
export const skillPut = async (id, usuarioId, levelSkill) =>{
  return Api.put(`/skill/levelSkill`, {levelSkill, usuarioId, skillId : id})
}

export const deleteUsuarioId = async(usuarioId, skillId) => {
  return Api.delete(`/skill/${usuarioId}/${skillId}`);
}

export const atualizarId = async (id, levelSkill, usuarioId) => {
  return Api.put(`/skill/atualizar`, { skillId: id, levelSkill, usuarioId });
};

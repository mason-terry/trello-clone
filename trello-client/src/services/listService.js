import { Api } from './apiService'
import { apiKey, token } from '../../.secrets'

const apiKeyAndToken = `?key=${apiKey}&token=${token}`

export default {
  getLists(id) {
    return Promise.all([Api.get(`/boards/${id}/lists${apiKeyAndToken}`)])
  },
  addListToBoard(id, list) {
    const formattedList = list.replace(' ', '%20')
    return Api.post(`/lists${apiKeyAndToken}&name=${formattedList}&idBoard=${id}`)
  }
}

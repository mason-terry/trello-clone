import { Api } from './apiService'
import { apiKey, token } from '../../.secrets'

const apiKeyAndToken = `?key=${apiKey}&token=${token}`

export default {
  getCards(id) {
    return Api.get(`/boards/${id}/cards${apiKeyAndToken}`)
  },
  addCardToList(id, card) {
    const formattedCard = card.replace(' ', '%20')
    return Api.post(`/cards${apiKeyAndToken}&idList=${id}&name=${formattedCard}`)
  }
}

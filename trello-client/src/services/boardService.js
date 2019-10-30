import { Api } from './apiService'
import { apiKey, token } from '../../.secrets'

const apiKeyAndToken = `?key=${apiKey}&token=${token}`

export default {
  getBoards() {
    return Api.get(`/members/me/boards${apiKeyAndToken}`)
  }
}

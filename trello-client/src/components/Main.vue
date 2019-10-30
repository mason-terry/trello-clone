<template>
  <div>
    <h1>Boards</h1>
    <h3>My Boards</h3>
    <button @click="getBoards">My Boards</button>
    <div v-if="addNewCard">
      <input type="text" placeholder="Card Name" v-model="newCard">
      <button @click="addCardToList">Add Card</button>
    </div>
    <div v-if="addNewList">
      <input type="text" placeholder="List Name" v-model="newList">
      <button @click="addListToBoard">Add List</button>
    </div>
    <div v-for="board in boards" :key="board.id">
      <p>{{ board.name }}</p>
      <button @click="getLists(board.id)">Board Lists</button>
      <button @click="getCards(board.id)">Board Cards</button>
      <button @click="addList(board.id)">Add List To Board</button>
    </div>
    <div v-for="list in lists" :key="list.id">
      <p>{{ list.name }}</p>
      <button @click="addCard(list.id)">Add Card To List</button>
    </div>
    <div v-for="card in cards" :key="card.id">
      <p>{{ card.name }}</p>
    </div>
  </div>
</template>

<script>
import boardService from '../services/boardService'
import listService from '../services/listService'
import cardService from '../services/cardService'

export default {
  name: 'Main',
  data: () => ({
    boards: [],
    lists: [],
    cards: [],
    newCard: '',
    addNewCard: false,
    listId: '',
    boardId: '',
    addNewList: false,
    newList: ''
  }),
  mounted() {},
  methods: {
    async resetData() {
      this.boards = []
      this.lists = []
      this.cards = []
      this.newCard = ''
      this.addNewCard = false
      this.listId = ''
      this.boardId = ''
      this.addNewList = false
      this.newList = ''
    },
    async getBoards() {
      this.resetData()
      const response = await boardService.getBoards()
      this.boards = response.data
    },
    async getLists(id) {
      const response = await listService.getLists(id)
      this.lists = response.data
      this.boards = []
    },
    async getCards(id) {
      const response = await cardService.getCards(id)
      this.cards = response.data
      this.boards = []
    },
    async addCard(id) {
      this.addNewCard = true
      this.listId = id
    },
    async addCardToList() {
      const card = this.newCard
      const id = this.listId
      await cardService.addCardToList(id, card)
      this.resetData()
    },
    async addList(id) {
      this.addNewList = true
      this.boardId = id
    },
    async addListToBoard() {
      const list = this.newList
      const id = this.boardId
      await listService.addListToBoard(id, list)
      this.resetData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

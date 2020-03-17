export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({
    commit
  }) {
    for (let i = 0; i < 5; i++) {

      // const users = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users`)
      //   .then(response => {
      //     this.users.push(response.data.users[0]);

      //   })
      //   .catch(error => console.log(error));

      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', users)
    }
  }
}

export const getters = {
  users: s => s.users
}

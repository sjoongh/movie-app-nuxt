<template>
<div>
  <button
  class ="btn btn-primary" 
  @click="fetchMovie">
    Get Movie!
    </button>
    <h1>{{ title }}</h1>
    <p>{{ director }}</p>
    <img
    :src="poster"
    :alt="title" />
</div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: '',
      poster: '',
      director: ''
    }
  },
  computed: {
    msg() {
      return this.$store.state.message.msg
    },
    reversedMsg() {
      return this.$store.getters['message/reverserdMsg']
    }
  },
  // mounted() {
  //   this.fetchMovie()
  // },
  methods: {
    updateMsg() {
      this.$store.commit('message/updateMsg', '1234')
    },
    reverseMsg() {
      this.$store.dispatch('message/reverseMsg')
    },
    async fetchMovie() {
      //n apikey로 일종의 비밀번호 설정
      const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&i=tt3896198')
      const movie = await res.json()
      console.log(movie)
      this.title = movie.Title
      this.director = movie.Director
      this.poster = movie.Poster
    } 
  }
}
</script>

<style lang="scss" scoped>
h1 {
  $color: red;
  background-color: $color;
  display: flex;
}
</style>
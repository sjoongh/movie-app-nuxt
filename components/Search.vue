<template>
  <div class=container>
    <input 
      v-model="title" 
      class="form-control"
      placeholder="Search for Movies, Series and more"
      type="text"
      @keyup.enter="apply"
    />

    <!--수동으로 하기-->
    <!--
    <select v-model="type">
      <option>movie</option>
      <option>series</option>
      <option>episode</option>
    </select>
    <button @click="log(type)"></button>
    -->

    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select"
      >
        <option
          v-if="filter.name === 'year'"
          value=""
        >
          All years
                      <!-- All years는 빈 파라미터로 연도 정보가 입력이 안되면 모든 연도정보가 전부 넘어옴 -->
        </option>
        <option
          v-for="item in filter.items"
          :key="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply"
    >
      Apply
    </button>
  </div>
  <!-- v-model로 양방향 바인딩설정,
    변화에 따라 DOM 객체 전체를 렌더링해주거나 데이터를 바꿔줌 -->
</template>

<script>
export default {
    data() {
        return {
            title: '',
            type: 'movie',
            number: '10',
            year: '', //동적인 요소는 함수로 따로 빼서 실행
            filters: [
                {
                    name: 'type',
                    items: ['movie', 'series', 'episode']
                },
                {
                    name: 'number',
                    items: [10, 20, 30]
                },
                {
                    name: 'year',
                    // IIFE 즉시 실행하는 함수
                    items: (() => {
                        const years = []
                        const thisYear = new Date().getFullYear()
                        for( let i = thisYear; i >= 1985; i--) {
                            years.push(i)
                        }
                        return years
                    })()
                }
            ]
        }
    },
    methods: {
        apply() {
            this.$store.dispatch('movie/searchMovies', {
                title: this.title,
                type: this.type,
                number: this.number,
                year: this.year
            })
        },
        log(name) {
            console.log(name) 
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
        > * {
            margin-right: 10px;
            font-size: 15px;
            &:last-child {
                margin-right: 0;
            }
        }
    .selects {
        display: flex;
        select {
            width: 120px;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .btn {
        width: 120px;
        height: 50px;
        font-weight: 700;
        flex-shrink: 0;
    }
}
</style>
<template>
<div class="container">
    <div
    :class="{ 'no-result': noMovies }"
    class="inner">
    <Loader v-if="loading" />
    <div 
    v-if="message"
    class="message">
    {{ message }}
    </div>
    <div class="movies">
        <MovieItem 
        v-for="movie in movies" 
        :key="movie.imdbID" 
        :movie="movie" />
        </div>
    </div>
</div>
</template>        

<script>
import { mapState } from 'vuex'
import Loader from '@/components/Loader'
import MovieItem from '@/components/MovieItem'

export default {
    components: {
        Loader,
        MovieItem
    },
    computed: {
        ...mapState('movie', [
        'movies',
        'loading',
        'message'
        ]),
       noMovies() {
            return !this.movies.length
        }
    }
}
</script>

<style lang="scss" scoped>
// @import "@/scss/main"; // 색상변수사용, 부트스트랩 파일 임포트
// webpack 설정으로 매번 자동 삽입
.container {
    margin-top: 30px;
    .inner {
        background-color: $gray-200;
        padding: 10px 0;
        border-radius: 4px;
        text-align: center;
        &.no-result { // &로 상위선택자 지정 -> .inner
            padding: 70px 0;
        }
        .message {
            color: $gray-400;
            font-size: 20px;
        }
        .movies {
            display: flex;
            flex-wrap: wrap; 
            justify-content: center;
        }
    }
}
</style>
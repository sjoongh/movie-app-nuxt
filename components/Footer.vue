<template>
    <footer>
        <Logo />
        <a href="https://heropy.blog"
        traget="_blank">(c){{ thisYear }} {{ name }}</a>
        <!-- new Date().getFullYear()를 {{}} 안에 바로 넣어도됨 -->
    </footer>
</template>

<script>
import Logo from '@/components/Logo'
export default {
    components: {
        Logo
    },
    computed: {
        thisYear() {
            return new Date().getFullYear()
        },
        name() {
            // name가져오기
            return this.$store.state.about.name
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
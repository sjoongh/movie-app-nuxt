<template>
    <div 
    :style ="{
        width: `${size}rem`,
        height: `${size}rem`
    }"
    :class="{ absolute, fixed}"
    class="spinner-border text-primary"></div>
    <!-- absolute:absolute, fixed:fixed
        v-bind는 객체와 데이터의 이름이 같으면 데이터 생략가능
        객체:데이터, 객체:데이터
        absolute(HTML클래스): absoulte(props) -->
</template>

<script>
export default {
    // loading될때 동그라미 가운데로 위치시키기위한 설정
    props: {
        size: {
            type: Number,
            default: 2
        },
        absolute: {
            type: Boolean,
            default: false
        },
        fixed: {
            deafault: false
        },
        zIndex: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
// style로 가운데 배치 설정 loding중일때
.spinner-border {
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &.absolute {
    position: absolute;
  }
  &.fixed {
    position: fixed;
  }
}
</style>
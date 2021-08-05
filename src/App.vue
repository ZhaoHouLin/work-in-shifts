<script>
import Calendar from './components/Calendar.vue'
export default {
  components: {
    Calendar
  },

  setup() {


    return {

    }
  }
}
</script>


<template lang='pug'>
Calendar
</template>

<style lang='stylus'>
*
  padding 0
  margin 0
  box-sizing border-box
  font-family '微軟正黑體'
html,body
  width 100%
  height 100vh
  

#app 
  // border 1px solid #222
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  // margin-top 60px
  height 100%
  display flex
  justify-content center
  align-items center
  flex-direction column

  
.window
  width 80vw
  height 50vh
  padding 2rem
  background-color #222
  border-radius 16px
  box-shadow 2px 2px 12px rgba(0,0,0,0.5)
  display flex
  justify-content center
  flex-direction column
  overflow auto
  
.btn
  margin-top 32px
  button
    cursor pointer
    width 100px
    padding 4px
    font-size 32px
    margin-right 16px
    border-radius 4px
    border none
    background-color #222
    box-shadow 2px 2px 12px rgba(0,0,0,0.5)
    color #fff
    user-select none


</style>

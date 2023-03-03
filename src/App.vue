<template>
<div id="app" class="main">
  <div class="container">
     <web-nav/>
     <Imgsearch/>
     <div class="row">
        <div class="col-8">
          <div class="home-book-box">
            <!-- <button> -->
              <span  @click="activeBookComp = 'NewlyBooks' " class="active">
                <p class="icon"><icons icon="book"/></p>
                <p class="text"> أحدث الكتب</p>
              </span>
            <!-- </button> -->
            <!-- <button > -->
            <span @click="activeBookComp = 'FameBooks' ">
              <p class="icon"><icons icon="book"/></p>
              <p  class="text">أشهر الكتب</p>
            </span>
            <!-- </button> -->
            <!-- <button > -->
            <span @click="activeBookComp = 'PaiedBooks' ">
              <p class="icon"><icons icon="book"/></p>
              <p class="text">الكتب المدفوعة</p>
            </span>
             
              
            <!-- </button> -->
          </div>
          <div class="content">
            <component :is="activeBookComp"/>
          </div>
        </div>
        <div class="col-4">
          <bookdep/>
        </div>
     </div>
  </div>
</div>
<router-view></router-view>
</template>
<script>
import webNav from './views/web-nav'
import Imgsearch from './views/Img-search'
import bookdep from './views/Books_dep'
import NewlyBooks from './components/Newly-books'
import FameBooks from './components/Fame-books'
import PaiedBooks from './components/Paied-books'

export default {
  components:{
    webNav,
    Imgsearch,
    bookdep,
    NewlyBooks,
    FameBooks,
    PaiedBooks,

    },
  data() {
    return {
      activeBookComp:'NewlyBooks'
    }
  },
  mounted(){
    let homeBookBox = document.querySelectorAll('.home-book-box span')
    homeBookBox.forEach(el=>{
      el.addEventListener('click',()=>{
        homeBookBox.forEach(ele=>{
          ele.classList.remove('active')
        })
        el.classList.add('active')        
      })
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  direction: rtl;
  margin-top: 0;
  background-color: #73abfe;
  position: absolute;
  width: 100%;
  .home-book-box{
    background-color: #ececf4;
    border-radius: 15px;
    width: 75%;
    transform: translate(-145px,0);
    display: flex;
    span{
      padding-top: 7px;
      padding-bottom: 5px;
      font-size: 1.2rem;
      margin: 0 40px;
      cursor: pointer;
      .icon,.text{
        padding: 0;
        margin-bottom: 0;
      }
    }
    span:hover{color: blueviolet;}
  }.active{
    color: blueviolet;
  }
}
</style>

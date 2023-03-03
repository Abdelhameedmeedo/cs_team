<template>
    <div class="profile">
        <div class="container">
            <Log_nav/>
            <img src="../imgs/static-img.png" alt="">
            <h3>تيم الشرفاء</h3>
            <div class="switch-content">
                <div class="btns">
                    <button class="upload">
                        <icons icon="save"/>
                      <span>  الكتب المحفوظة</span>
                    </button>
                </div>
                <div class="uploaded">
                    <ul>
                        <li v-for="book in books" :key="book.id" :id="book.id">
                            <img :src="book.image"/>
                            <h3>{{ book.name }}</h3>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {ref,onValue} from 'firebase/database'
import {db} from '@/firebase/init'
//components
import Log_nav from '../components/Log_nav.vue'
export default {
    name:'profile-comp',
    data(){
        return{
            // is_active:'Downloaded'
            books:[],
        }
    },
    components:{
        Log_nav
    },
    mounted(){
        const refe = ref(db,'books')
        onValue(refe,snap=>{
            const data = snap.val()
            for(let x of data){
              this.books.push(x)
              this.img = x.image
              this.id = x.id
            }
        })
    }

}
</script>
<style lang="scss" scoped>
.profile{
    position: absolute;
    z-index: 999;
    background-color: #73abfe;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    img{
        width: 150px;
        height: 150px;
        border: 1px solid;
        border-radius: 50%;
        padding: 3px;
        margin-top: 50px;
    }
    h3{
        padding-top: 10px;
        margin-bottom: 50px;
        color: white;
        font-weight: bold;
    }
    .switch-content{
        background-color: white;
        border-radius: 15px;
        padding-bottom: 10px;
        .btns{
            display: flex;
            justify-content: center;
            button{
                border: none;
                font-size: 20px;
                padding: 5px 10px;
            }
            .upload{
                display: inline-grid;
                svg{
                    transform: translate(-50px,0);
                }
            }
        }
        .uploaded{
            padding-top: 25px;
            ul{
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
                list-style: none;
                column-gap: 10px;
                li{
                    list-style: none;
                    width: 200px;
                    border: 1px solid;
                    border-radius: 15px;
                    height: 255px;
                    h3{
                        color: black;
                    }
                    img{
                        width: 200px;
                        height: 200px;
                        border: 1px solid;
                        border-radius: 15px;
                        padding: 3px;
                        margin:0
                    }
                }
            }
        }
    }

}
</style>
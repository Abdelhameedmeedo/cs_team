<template>
    <div class="paied">
        <div class="container">
            <ul class="content" >
                <li v-for="book in names" :key="book.id" :id="book.id">
                    <!-- <a :href=" book.url "> {{ book.name }}</a> -->
                    <img :src="book.image"/>
                    <h3 @click="clicked_Desc ='Book_description' ">{{ book.name }}</h3>
                    <ul class="stars">
                        <li class="star-icon" @change="starsRating(book.id)"><icons icon="star"/></li>
                        <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                        <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                        <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                        <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                    </ul>
                </li>
            </ul>
            <div class="book-dsecription">
                <Book_description v-if="clicked_Desc" :database="names"/>
            </div>
        </div>
    </div>
</template>

<script>
import {ref,onValue} from 'firebase/database'
import {db} from '@/firebase/init'

import Book_description from '../components/Book-description.vue'

export default {
    name:'paied-books',


    data() {
        return {
            names: [],
            img:'',
            id:'',
            clicked_Desc:false
        }
    },
    components:{
        Book_description,
    },
    methods:{
        starsRating(){
            let starElements = document.querySelectorAll('.stars .star-icon')
            // let starElementSvg = document.querySelector('.stars .star-icon svg')
            starElements.forEach((el,index)=>{
                el.addEventListener('click',()=>{
                    let current_index = index + 1
                    console.log(current_index,this.id)
                    // starElements.forEach((el,in_index)=>{
                        
                    //     if(current_index >= in_index + 1){
                    //         console.log(el[id])
                    //         starElementSvg.innerHTML = 'red'
                    //         // starElementSvg.classList.add('coloru')
                    //     }else{
                    //     console.log('ho')
                    //     }
                    // })
                })
            
            })
        }
    },
    mounted(){
        const refe = ref(db,'books')
        onValue(refe,snap=>{
            const data = snap.val()
            for(let x of data){
              this.names.push(x)
              this.img = x.image
              this.id = x.id
            }
        })
    }
   
}


</script>

<style lang="scss" scoped>
.paied{
    width: 645px;
    .content{
        column-gap: 10px;
        padding-top: 20px;
        margin-right: -49px;
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        li{
            list-style: none;
            background: #ececf4;
            width: 200px;
            border-radius: 15px;
            margin-bottom: 10px;
            img{
                width: 200px;
                height: 150px;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            h3{
                padding-top: 2px;
                padding-bottom: 2px;
                cursor: pointer;
            }
            .stars{
                list-style: none;
                display: flex;
                padding-bottom: 5px;
                width: 185px;
                .star-icon{cursor: pointer;}
                .coloru{color: red;}
            }
        }
    }
}

</style>
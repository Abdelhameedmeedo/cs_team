<template>
    <div class="newly">
        <div class="container">
            <ul class="content" >
                <li v-for="book in names" :key="book.id" :id="book.id">
                    <!-- <a :href=" book.url "> {{ book.name }}</a> -->
                    <img :src="book.image"/>
                    <h3 @click="clicked_Desc ='Book_description' " @mouseenter="getInfo()">{{ book.name }}</h3>
                    <ul class="stars">
                        <li class="star-icon" > <icons icon="star"  /> </li>
                        <li class="star-icon" > <icons icon="star"  /> </li>
                        <li class="star-icon" > <icons icon="star"  /> </li>
                        <li class="star-icon" > <icons icon="star"  /> </li>
                        <li class="star-icon" > <icons icon="star"  /> </li>
                    </ul>
                </li>
            </ul>
            <div class="book-dsecription">
                <Book_description v-if="clicked_Desc" :database="book_desc"/>
            </div>
        </div>
    </div>
</template>

<script>
import {ref,onValue} from 'firebase/database'
import {db} from '@/firebase/init'

import Book_description from '../components/Book-description.vue'
//@click="clicked_Desc ='Book_description' "
import Funs from '../assets/funs'
export default {
    name:'newly-books',


    data() {
        return {
            names: [],
            book_desc:[],
            clicked_Desc:false,
        }
    },
    mixins:[Funs],
    components:{
        Book_description,
    },
    methods:{
    
     

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
.newly{
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
            margin-bottom:10px;
    
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
                .star-icon{cursor: pointer;color: #ccc;}
                .star-icon:hover,
                .star-icon:hover ~ .star-icon{color: orange;}
                .star-icon.hover{color: orange;}
            }
        }
    }
}

</style>
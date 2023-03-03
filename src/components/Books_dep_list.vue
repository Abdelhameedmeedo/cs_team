<template>
    <div class="books_list">
        <div class="container">
            <ul class="content" >
                <li v-for="book in names" :key="book.id" :id="book.id">
                    <img :src="book.image"/>
                    <h3 @click="clicked_Desc ='Book_description' " @mouseenter="getInfo()">{{ book.name }}</h3>
                    <ul class="stars">
                        <li class="star-icon" ><icons icon="star"/></li>
                        <li class="star-icon" ><icons icon="star"/></li>
                        <li class="star-icon" ><icons icon="star"/></li>
                        <li class="star-icon" ><icons icon="star"/></li>
                        <li class="star-icon" ><icons icon="star"/></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <Book_description v-if="clicked_Desc" :database="book_desc"/>
</template>

<script>
import {ref,onValue} from 'firebase/database'
import {db} from '@/firebase/init'
import Book_description from '../components/Book-description.vue'
import Funs from '../assets/funs'
export default {
    name:'newly-books',
    data() {
        return {
            names: [],
            clicked_Desc:false,
        }
    },
    components:{
        Book_description
    },
    mixins:[Funs],
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
.books_list{
    position: absolute;
    background: #73abfe;
    right: 3%;
    height: -webkit-fill-available;
    width: 65%;
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
                .star-icon{cursor: pointer;}
                .coloru{color: red;}
            }
        }
    }
}

</style>
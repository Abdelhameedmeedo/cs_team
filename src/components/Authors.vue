<template>
    <div class="author">
        <div class="container">
            <Nav/>
            <div class="row">
                <div class="col-8">
                    <div class="author_name">
                        <h3>اسم المؤلف: {{ data.name }}</h3>
                        <p>xjsjxosxjos</p>
                    </div>
                    <div class="author_books">
                        <ul>
                            <li v-for="book in data" :key="book.id" :id="book.id">
                                <img :src="book.image"/>
                                <h3 @click="clicked_Desc ='Book_description' " @mouseenter="getInfo()">{{ book.name }}</h3>
                                <ul class="stars">
                                    <li class="star-icon" @change="starsRating(book.id)"><icons icon="star"/></li>
                                    <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                                    <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                                    <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                                    <li class="star-icon" @click="starsRating(book.id)"><icons icon="star"/></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4">
                    <bookdep/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bookdep from '../views/Books_dep.vue'
import Nav from '../views/web-nav.vue'
export default {
    name:'author-description',
    data(){
        return{
            data:[]
        }
    },
    props:['author_data'],
    components:{
        bookdep,
        Nav
    },
    mounted(){
        for (let i of this.author_data){
            console.log(i)
            for(let j in i){
                console.log('d=>',i[j])//put item in its place
            }
        }
    }

}
</script>
<style lang="scss" scoped>
$main_backcolor:white;

//funcs
@mixin desc_social_style{
    background: $main_backcolor;
    margin-top: 10px;
    padding:5px;
    border-radius: 10px;
}
.author{
    position: absolute;
    background: #73abfe;
    top: 0%;
    width: 100%;
    height: 100%;
    left: 0%;
    z-index: 9999;
    padding-bottom: 30px;
    .nav{
        margin-bottom: 100px;
    }
    .author_name{
        background-color: $main_backcolor;
        border-radius: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        h3{font-size: 20px;padding-right: 10px}
        p{}
    }
    .author_books{
        ul{
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

}
</style>
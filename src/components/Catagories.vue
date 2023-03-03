<template>
    <div class="Catagories">
        <div class="container">
            <Nav/>
            <form action="">
                <input type="search" name="" id="" placeholder="الأقسام...">
            </form>
            <img src="../imgs/static-img.png" alt="">
            <h3>الأقسام</h3>
            <div class="links">
                <a href="#" class="anchor" v-for="objects in obj" :key="objects.ob1" >
                    <span @click="objects.open = !objects.open">{{ objects.heading }}</span>
                    <icons icon="book"/>
                    <div class="sub-catagory" v-if="objects.open">
                        <ul>
                            <li>book1</li>
                            <li>book2</li>
                            <li>book3</li>
                            <li>book4</li>
                        </ul>
                    </div>
                </a>
               
                <!-- <a href="#" class="anchor" @click="open = !open">
                    <span>الطب</span>
                    <icons icon="book"/>
                    <div class="sub-catagory" v-if="open">
                        <ul>
                            <li>book1</li>
                            <li>book2</li>
                            <li>book3</li>
                            <li>book4</li>
                        </ul>
                    </div>
                </a>
                <a href="#" class="anchor" @click=" !open">
                    <span>الفقه</span>
                    <icons icon="book"/>
                    <div class="sub-catagory" v-if="open">
                        <ul>
                            <li>book1</li>
                            <li>book2</li>
                            <li>book3</li>
                            <li>book4</li>
                        </ul>
                    </div>
                </a>
                <a href="#" class="anchor" @click="open = !open">
                    <span>التفسير</span>
                    <icons icon="book"/>
                    <div class="sub-catagory" v-if="open">
                        <ul>
                            <li>book1</li>
                            <li>book2</li>
                            <li>book3</li>
                            <li>book4</li>
                        </ul>
                    </div>
                </a>
                <a href="#" class="anchor" @click="open = !open">
                    <span>الحديث</span>
                    <icons icon="book"/>
                    <div class="sub-catagory" v-if="open">
                        <ul>
                            <li>book1</li>
                            <li>book2</li>
                            <li>book3</li>
                            <li>book4</li>
                        </ul>
                    </div>
                </a> -->
            </div>
        </div>
    </div>
</template>

<script>
// @click="showHideSubCata()"
import Nav from '../views/web-nav.vue'
    export default {
        name:'book-catagories',
        data(){
            return{
                obj:{
                    ob1:{
                        heading:'الهندسة',
                        open:false
                    },
                    ob2:{
                        heading:'الطب',
                        open:false
                    },
                    ob3:{
                        heading:'الفقه',
                        open:false
                    },
                    ob4:{
                        heading:'الحديث',
                        open:false
                    },
                    ob5:{
                        heading:'أصول الفقه',
                        open:false
                    },
                }
            }
        },
        components:{
            Nav
        },
        methods:{
            // showHideSubCata(){
            //     let links_anchor = document.querySelectorAll('.Catagories .links a')
            //    for(let i=0;i<links_anchor.length;i++){
            //         links_anchor[i].addEventListener('click',()=>{
            //             links_anchor[i].children[2].classList.toggle('toggle')
            //         })
            //    }
            // }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
@import '../sass/Catagories.scss'
</style>
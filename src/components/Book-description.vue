<template>
    <div class="book-desc">
        <div class="container">
            <Nav/>
            <div class="row">
                <div class="col-8">
                    <div class="desc-img">
                        <div class="img-rating">
                            <img src="../imgs/logo.png" alt="">
                            <h3 @click="auther_open=true" @mouseenter="author">المؤلف</h3>
                        </div>
                        <ul>
                            <caption>الاسم</caption>
                            <li>jjijij</li>
                            <li>hih</li>
                        </ul>
                    </div>
                    <div class="desc">
                        <h3>وصف الكتاب</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus reprehenderit enim, quo eveniet dolorum provident distinctio in eum corporis, sint illo hic quasi inventore. Accusamus, dolores debitis? Consequatur, eligendi?</p>

                    </div>
                    <div class="social">
                        <ul>
                            <li> <icons :icon="['fas','book-reader']" title="قراءة"/> </li>
                            <li> <icons icon="download" title="تحميل"/> </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4">
                    <bookdep/>
                </div>
            </div>
        </div>
    </div>
    <Author v-if="auther_open" :author_data="author_desc"/>
</template>
<script>
import bookdep from '../views/Books_dep.vue'
import Nav from '../views/web-nav.vue'
import Author from '../components/Authors.vue'
import Fun from '../assets/funs'
export default {
    name:'book-description',
    data(){
        return{
            data:[],
            author_desc:[],
            auther_open:false
        }
    },
    props:['database'],
    mixins:[Fun],
    components:{
        bookdep,
        Nav,
        Author
    },
    mounted(){
        for (let i of this.database){
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
.book-desc{
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
    .desc-img{
        background-color: $main_backcolor;
        display: flex;
        border-radius: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        img{
            width: 200px;
            height: 200px;
            border: 1px solid;
            margin-right: 50px;
            border-radius: 15px;
        }
        h3{
            font-size: 20px;
            padding-top: 10px;
            cursor: pointer
        }
    }
    .desc{
       @include desc_social_style();
        h3{
            text-align: start;
            padding-right: 20px;
        }
    }
    .social{
        @include desc_social_style();
        ul{
            list-style:none;
            display: flex;
            margin: 0;
            justify-content: center;
            padding-top: 2px;
            li{
                margin-right: 20px;
                margin-left: 20px;
                cursor: pointer;
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background: lightgray;
                color: teal;
                svg{font-size: 30px;}
            }
        }
    }

}
</style>
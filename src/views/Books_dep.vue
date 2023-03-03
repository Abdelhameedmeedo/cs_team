<template>
    <div class="deps">
        <div class="container">
            <input type="search" name="" id="" placeholder="الأقسام...">
            <!-- <fa icon="search" class="search"/> -->
            <div class="links">
                <a href="#" @click="open_books = true">
                    المصحف
                    <icons icon="book"/>
                </a>
                <a href="#" @click="open_books = true">علوم الطبيعة
                    <icons icon="book"/>
                </a>
                <a href="#" @click="open_books = true">علم الاحياء
                    <icons icon="book"/>
                </a>
                <a href="#" @click="open_books = true">الكيمياء
                    <icons icon="book"/>
                </a>
                <a href="#" @click="open_books = true">الفيزياء
                    <icons icon="book"/>
                </a>
            </div>
        </div>
    </div>
    <Books_list v-if="open_books"/>
</template>
<script>
import Books_list from '../components/Books_dep_list.vue'
export default{
    name:"books_dep",
    data(){
        return{
            open_books:false
        }
    },
    components:{
        Books_list
    }

}
</script>
<style lang="scss" scoped>
@import '../sass/departments.scss';
</style>
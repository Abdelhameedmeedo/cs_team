<template>
    <nav class="nav ms-20">
        <div class="container">
            <div class="row">
                <div class="col-3 image">
                    <img src="@/imgs/logo.png" alt="">
                </div>
                <div class="col-6 d-flex column links">
                    <a @click="RootPage()" href="/home" class="active">
                        <icons icon="home" /> 
                        الرئيسية
                    </a>
                    <router-link to="/catagory">
                        <icons icon="map" /> 
                        الأقسام
                    </router-link>      
                    <a href="#">
                        <icons icon="dollar"/>
                        الكتب المدفوعة
                    </a>
                </div>
                <div class="col-3 column links">
                  <img src="../imgs/logo.png" alt="">
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default{
    name:'web-nav',
    methods:{
        RootPage(){
            this.$router.push('/')
        }
    },
    mounted(){
        let navLinks = document.querySelectorAll('.nav .column a')
        navLinks.forEach(el=>{
            el.addEventListener('click',()=>{
                navLinks.forEach(ele=>{
                    ele.classList.remove('active')
                })
                el.classList.add('active')        
            })
         })
    }
}
</script>
<style scoped lang="scss">
@import '../sass/log_nav.scss'
</style>
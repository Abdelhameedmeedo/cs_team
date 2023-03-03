<template>
    <div class="log">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="content">
                        <img src="../imgs/logo.png" alt="">
                        <div class="inner-content">
                            <h4>
                                إنشاء حساب
                                <router-link to="/">
                                    <icons icon="arrow-right" title="رجوع"/>
                                </router-link>
                            </h4>
                            <form action="">
                                <input type="text" v-model="logup_name" name="" placeholder="اكتب اسمك" >
                                <input type="email" v-model="logup_email" name="email" placeholder="البريد الالكتروني">
                                <input type="password" v-model="logup_pass" name="password" placeholder="كلمة السر">
                                <input type="submit" name="" value="إنشاء حساب" class="agree">
                            </form>
                            <div class="have-acc">
                                <h3>بالفعل لدي حساب؟</h3>
                                <router-link to="/login">
                                    تسجيل الدخول
                                </router-link>
                            </div>
                            <span class="or">أو</span>
                            <div class="log-social">
                                <a href="">
                                    <icons :icon="['fab','google']"/>
                                </a>
                                <a href="">
                                    <icons :icon="['fab','facebook']"/>
                                </a>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-6 left-content">
                    <img src="../imgs/static-img.png" alt="">
                </div>
            </div>
            <div class="login-vue"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'log-up',
    data(){
        return{
            logup_name:'',
            logup_email:'',
            logup_pass:'',
        }
    },
    mounted(){
        console.log(document.querySelector('form > input').value)
    }

}
</script>
<style lang="scss" scoped>
@import '../sass/log.scss'
</style>
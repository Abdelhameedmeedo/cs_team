<template>
    <div class="log">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="content">
                        <img src="../imgs/logo.png" alt="">
                        <div class="inner-content">
                            <h4>
                                تسجيل دخول
                                <router-link to="/">
                                    <icons icon="arrow-right" title="رجوع"/>
                                </router-link>
                            </h4>
                            <form action="">
                                <input type="email" v-model="login_email" name="email" placeholder="البريد الالكتروني">
                                <input type="password" v-model="login_pass" name="password" placeholder="كلمة السر">
                                <div class="check">
                                    <input type="checkbox" name="" id="checked">
                                    <label for="checked">تذكرني</label>
                                </div>
                                <label for="" class="forget-pass">نسيت كلمة السر؟</label>
                                <input type="submit" name="" value="تسجيل دخول" class="agree">
                            </form>
                            <div class="have-acc">
                                <h3>ليس لديك حساب؟</h3>
                                <router-link to="/logup">
                                    إنشاء حساب
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
        </div>
    </div>
</template>
<script>
export default {
    name:'log-in',
    data(){
        return{
            login_email:'',
            login_pass:''
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../sass/log.scss'
</style>
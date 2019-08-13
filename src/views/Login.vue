<template>
 <div class="section">
    <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <form class="box bluebox" @submit.prevent="login">
            <h1 class="title blue">Log in</h1>
            <div class="field">
                <label class="label blue">Email</label>
                <div class="control has-icons-left">
                    <input required v-model="email" type="email" placeholder="ben@tempelhof.de" class="input"/>
                    <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                        </span>
                </div>
            </div>
        
            <div class="field">
                <label class="label blue">Password</label>
                <div class="control has-icons-left">
                 <input required v-model="password" type="password" placeholder="*******" class="input"/>
                <span class="icon is-small is-left">
                     <i class="fa fa-lock"></i>
                     </span>

               </div>
     </div>

     <button type="submit" class="button bluebox">Login</button>
   </form>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password:""
        }
    },
    methods: {
        login: function () {
            let email = this.email;
            let password = this.password;
            this.$store.dispatch('login', {email, password})
            .then(() => this.$router.push('/'))
            .catch(err => {throw err});
        }
    }
}
</script>

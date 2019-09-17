<template>
 <div class="section">
    <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <form class="box bluebox" @submit.prevent="register">
            <h1 class="title blue">Sign Up</h1>
            <div class="field">
                <label class="label blue">Username</label>
                <div class="control has-icons-left">
                    <input v-model="user.name" placeholder="superduper" class="input" required autofocus/>
                    <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                        </span>
                </div>
            </div>
            <div class="field">
                <label class="label blue">E-Mail</label>
                <div class="control has-icons-left">
                    <input required v-model="user.email" type="email" placeholder="super@duper.com" class="input"/>
                    <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                        </span>
                </div>
            </div>
        
            <div class="field">
                <label class="label blue">Password</label>
                <div class="control has-icons-left">
                 <input required v-model="user.password" type="password" placeholder="*******" class="input"/>
                <span class="icon is-small is-left">
                     <i class="fa fa-lock"></i>
                     </span>

               </div>
            </div>
            <div class="field">
                <label class="label blue">Confirm password</label>
                <div class="control has-icons-left">
                 <input required v-model="user.password_confirm" type="password" placeholder="*******" class="input"/>
                <span class="icon is-small is-left">
                     <i class="fa fa-lock"></i>
                     </span>

               </div>
            </div>


     <button type="submit" class="button bluebox">Sign Up</button>
   </form>
        </div>
    </div>
 </div>
</template>

<script>

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirm: '',
                is_admin: null
            }
        }
    },
    methods: {
       register: function() {
            let data = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                is_admin: this.user.is_admin
            }
            this.$store.dispatch('register', data)
            .then(() => this.$router.push('/'))
            .catch(err => {throw (err)});

        }
    }
}
</script>

<template>
   <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
         <h1>Login</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
         <form @submit.prevent="userLogin">
            <v-layout column>
               <v-flex>
                  <v-text-field
                  v-model="user.email"
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required></v-text-field>
               </v-flex>
               <v-flex>
                  <v-text-field
                  v-model="user.password"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required></v-text-field>
               </v-flex>
               <v-flex class="text-xs-center" mt-5>
                  <v-btn color="primary" type="submit">Login</v-btn>
               </v-flex>
            </v-layout>
         </form>
      </v-flex>
   </v-layout>
</template>

<script>
	export default {
		data: function () {
			return {
				user: {email: '', password: ''}
			}
		},
		methods: {
			userLogin: function () {
//				axios.post('api/to/login/', this.user)
//                .then(function (response) {
//                    console.log(response.data)
//                })
//                .catch(function (error) {
//                    console.log(error.response.data)
//                })
				console.log('Email is: ' + this.user.email + ' and Password is: ' + this.user.password);
			}
		}
	}
</script>

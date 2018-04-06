<template>
   <v-card flat>
      <!--<v-form @submit.prevent="submit" ref="form">-->
      <v-card-title primary-title>
         <!--<div class="headline">Registration Form</div>-->
         <div class="display-1">Registration Form</div>
      </v-card-title>
      <v-divider></v-divider>
      <form @submit.prevent="submit">
         <!--<v-card-text>-->
         <!--<div class="title">Athlete Information</div>-->
         <!--</v-card-text>-->
         <v-container grid-list-xl fluid>
            <v-layout wrap>
               <v-flex xs12 sm4>
                  <v-text-field
                  label="Athlete First Name"
                  required
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm4>
                  <v-text-field
                  label="Athlete Last Name"
                  required
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm4>
                  <v-menu
                  ref="menu"
                  lazy
                  :close-on-content-click="false"
                  v-model="dateOfRegMenu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                  :return-value.sync="dateOfReg"
                  >
                     <v-text-field
                     slot="activator"
                     label="Date of Reg."
                     v-model="dateOfReg"
                     prepend-icon="event"
                     readonly
                     required
                     ></v-text-field>
                     <v-date-picker v-model="dateOfReg" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="dateOfRegMenu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(dateOfReg)">OK</v-btn>
                     </v-date-picker>
                  </v-menu>
               </v-flex>
            </v-layout>
            <v-layout wrap>
               <v-flex xs12 sm6>
                  <v-text-field
                  label="Athlete's email (Optional for club mailings)"
                  type="email"
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm6>
                  <v-text-field
                  label="Athlete's Phone (Optional for group texts)"
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-layout wrap>
               <v-flex xs12 sm3>
                  <v-menu
                  ref="menu"
                  lazy
                  :close-on-content-click="false"
                  v-model="dobMenu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                  >
                     <v-text-field
                     slot="activator"
                     label="Date of Birth"
                     v-model="dob"
                     prepend-icon="event"
                     readonly
                     required
                     ></v-text-field>
                     <v-date-picker
                     ref="picker"
                     v-model="dob"
                     @change="save"
                     min="1950-01-01"
                     :max="new Date().toISOString().substr(0, 10)"
                     ></v-date-picker>
                  </v-menu>
               </v-flex>
               <v-flex xs12 sm4>
                  <v-radio-group v-model="gender" :mandatory="false" row>
                     <v-radio label="Male" value="M"></v-radio>
                     <v-radio label="Female" value="F"></v-radio>
                  </v-radio-group>
               </v-flex>
               <v-flex xs12 sm3>
                  <v-text-field
                  label="School"
                  required
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm2>
                  <v-text-field
                  label="Grade"
                  required
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
               <v-flex xs12 sm5 md4>
                  <div class="title">Parent 1:</div>
                  <v-text-field
                  label="Name"
                  ></v-text-field>
               </v-flex>
               <!--<v-spacer></v-spacer>-->
               <v-flex xs12 sm5 md4 offset-xs0 offset-lg1>
                  <div class="title">Parent 2:</div>
                  <v-text-field
                  label="Name"
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-layout row wrap>
               <v-flex xs12 sm5 md4>
                  <v-text-field
                  label="Phone"
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm5 md4 offset-xs0 offset-lg1>
                  <v-text-field
                  label="Phone"
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-layout row wrap>
               <v-flex xs12 sm5 md4>
                  <v-text-field
                  label="Address"
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm5 md4 offset-xs0 offset-lg1>
                  <v-text-field
                  label="Address"
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-layout row wrap>
               <v-flex xs12 sm5 md4>
                  <v-text-field
                  label="City, State, Zip"
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm5 md4 offset-xs0 offset-lg1>
                  <v-text-field
                  label="City, State, Zip"
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-layout row wrap>
               <v-flex xs12 sm5 md4>
                  <v-text-field
                  label="Email"
                  ></v-text-field>
               </v-flex>
               <v-flex xs12 sm5 md4 offset-xs0 offset-lg1>
                  <v-text-field
                  label="Email"
                  ></v-text-field>
               </v-flex>
            </v-layout>
            <v-divider></v-divider>

         </v-container>
         <v-card-actions>
            <v-btn @click="resetForm">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn
            color="primary"
            :loading="loading"
            @click.native="loader = 'loading'"
            :disabled="loading"
            >
               Submit
            </v-btn>
         </v-card-actions>
      </form>
      <!--</v-form>-->
   </v-card>
</template>

<script>
	export default {
		data () {
			return {
				loader: null,
				loading: false,
				gender: 'M',
			   dateOfReg: null,
			   dateOfRegMenu: false,
			   dob: null,
			   dobMenu: false
			}
		},
		watch: {
			loader () {
				const l = this.loader
				this[l] = !this[l]

				setTimeout(() => (this[l] = false), 3000)

				this.loader = null
			},
		  dobMenu (val) {
			  val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
		  }
		},

		computed: {},

		methods: {
		  save (dob) {
			  this.$refs.menu.save(dob)
		  }
      }
	}
</script>
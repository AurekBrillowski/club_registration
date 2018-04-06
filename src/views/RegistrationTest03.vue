<template>
   <v-container fluid>
      <v-layout row wrap>
         <v-flex xs12>
            <v-card>
               <v-card-title>
                  <div class="headline">Registration Form</div>
               </v-card-title>
            </v-card>
         </v-flex>
      </v-layout>
      <v-layout row wrap>
         <v-flex xs12>
            <v-card flat>
               <v-card-text>
                  <v-stepper v-model="registerStep" non-linear>
                     <v-stepper-header>
                        <v-stepper-step step="1" :complete="registerStep > 1" editable>Athlete Information</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" :complete="registerStep > 2" editable>Optional Athlete Information</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3" editable>Parent Information</v-stepper-step>
                     </v-stepper-header>
                     <v-stepper-items>
                        <v-stepper-content step="1">
                           <v-card>
                              <v-container grid-list-xl fluid>
                                 <v-layout row wrap>
                                    <v-flex xs12 sm6>
                                       <v-text-field
                                       label="Athlete First Name"
                                       required
                                       ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                       <v-text-field
                                       label="Athlete Last Name"
                                       required
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
                                    <v-flex xs12 sm3>
                                       <v-radio-group v-model="gender" label="Gender:" row>
                                          <v-radio label="Male" value="M"></v-radio>
                                          <v-radio label="Female" value="F"></v-radio>
                                       </v-radio-group>
                                    </v-flex>
                                    <!--<v-flex xs12 sm3>-->
                                       <!--<v-text-field-->
                                       <!--label="School"-->
                                       <!--required-->
                                       <!--&gt;</v-text-field>-->
                                    <!--</v-flex>-->
                                    <!--<v-flex xs12 sm2>-->
                                       <!--<v-text-field-->
                                       <!--label="Grade"-->
                                       <!--required-->
                                       <!--&gt;</v-text-field>-->
                                    <!--</v-flex>-->
                                 </v-layout>
                              </v-container>
                           </v-card>
                           <v-btn color="primary" @click.native="registerStep = 2">Next</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                           <v-container grid-list-xl fluid>
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
                           </v-container>
                           <v-btn color="primary" @click.native="registerStep = 1">Previous</v-btn>
                           <v-btn color="primary" @click.native="registerStep = 3">Next</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                           <v-btn color="primary" @click.native="registerStep = 2">Previous</v-btn>
                           <v-btn color="primary" @click.native="goToConfirmPage">Submit</v-btn>
                        </v-stepper-content>
                     </v-stepper-items>
                  </v-stepper>
               </v-card-text>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
	export default {
		data () {
			return {
			 registerStep: 0,
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
       methods: {
			goToConfirmPage() {
				console.log('Successful!')
         },
	       save (dob) {
		       this.$refs.menu.save(dob)
	       }
       }
	}
</script>
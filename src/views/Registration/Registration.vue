<template>
   <v-container>
      <v-stepper v-model="step" vertical>
         <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1">Athlete Information</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="step > 2">Contact Information</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Address Information</v-stepper-step>
         </v-stepper-header>
         <v-stepper-items>
            <v-stepper-content step="1">

               <v-layout wrap>
                  <v-flex xs12 sm6>
                     <v-text-field
                     label="First name"
                     required
                     v-model="athlete.firstName"
                     ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                     <v-text-field
                     label="Last name"
                     v-model="athlete.lastName"
                     required
                     ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                     <v-text-field
                     multi-line
                     v-model="athlete.bio"
                     >
                        <div slot="label">
                           Bio
                           <small>(optional)</small>
                        </div>
                     </v-text-field>
                  </v-flex>
               </v-layout>

               <!--<v-text-field label="Full Name" v-model="athlete.name" required></v-text-field>-->
               <!--<v-text-field label="Age" v-model="athlete.age" required></v-text-field>-->
               <!--<v-text-field label="Date Of Birth" v-model="athlete.dob" required></v-text-field>-->
               <!--<v-text-field label="Phone Number" v-model="athlete.phoneNumber"></v-text-field>-->

               <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">

               <v-layout>
                  <v-flex xs12>
                     <v-card>
                        <v-card-text>
                           <v-layout row wrap>
                              <v-flex xs6>
                                 <v-card-title>
                                    <div class="headline">Athlete Contact Information:</div>
                                 </v-card-title>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-flex>
               </v-layout>

               <!--<v-text-field label="Athlete Email" type="email" v-model="athlete.email" required></v-text-field>-->

               <v-btn flat @click.native="step = 1">Previous</v-btn>
               <v-btn color="primary" @click.native="step = 3">Continue</v-btn>


            </v-stepper-content>

            <v-stepper-content step="3">

               <v-layout>
                  <v-flex xs6>
                     <v-card>
                        <v-card-text>
                           <v-layout row wrap>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="Address Line 1"
                                 required
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="City"
                                 required
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="State"
                                 required
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="Zipcode"
                                 required
                                 ></v-text-field>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-flex>
                  <!--<v-spacer></v-spacer>-->
                  <!--<v-divider></v-divider>-->
                  <v-flex xs6>
                     <v-card>
                        <v-card-text>
                           <v-layout row wrap>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="Address Line 2"
                                 required
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="City"
                                 required
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="State"
                                 required
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 class="px-3">
                                 <v-text-field
                                 label="Zipcode"
                                 required
                                 ></v-text-field>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-flex>
               </v-layout>


               <!--<v-text-field label="Street" v-model="athlete.street" required></v-text-field>-->
               <!--<v-text-field label="City" v-model="athlete.city" required></v-text-field>-->
               <!--<v-text-field label="State" v-model="athlete.state" required></v-text-field>-->

               <v-btn flat @click.native="step = 2">Previous</v-btn>
               <v-btn color="primary" @click.prevent="submit">Save</v-btn>
            </v-stepper-content>
         </v-stepper-items>
      </v-stepper>
   </v-container>
</template>

<script>
	export default {
		data() {
			return {
				step: 1,
				athlete: {
					firstName: null,
					lastName: null,
					email: null,
					bio: null,
					age: '',
					dob: '',
					phoneNumber: null,
					street: null,
					city: null,
					state: null,
				},
				pref: '',
				alt: '',
				options: [{
					Text: 'Home Number',
					value: 1
				},
					{
						Text: 'Mobile Number',
						value: 2
					},
					{
						Text: 'Work Number',
						value: 3
					}]
			}
		},
		methods: {
			submit() {
				alert('This is the post. Blah');
			}
		}
	}
</script>
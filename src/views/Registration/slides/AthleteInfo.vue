<template>
   <v-card flat>
      <v-container grid-list-xl fluid>
         <!-- GENERAL ATHLETE INFORMATION START -->
         <v-layout row wrap>
            <v-flex xs12 sm12>
               <div class="title">General Athlete Information:</div>
            </v-flex>
         </v-layout>
         <v-divider></v-divider>
         <v-layout row wrap class="ml-3">
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
               <v-text-field
               label="Date of Birth"
               mask="####-##-##"
               placeholder="YYYY-DD-MM"
               >
               </v-text-field>
            </v-flex>
         </v-layout>
         <v-layout row wrap class="ml-3">
            <v-flex xs12 sm4>
               <v-text-field
               label="Name Athlete Goes By"
               >
               </v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
               <v-text-field
               label="Date of Birth"
               mask="####-##-##"
               placeholder="YYYY-DD-MM"
               >
               </v-text-field>
            </v-flex>
            <v-flex xs12 sm3>
               <v-radio-group v-model="gender" :mandatory="false" row>
                  <v-radio label="Male" value="M"></v-radio>
                  <v-radio label="Female" value="F"></v-radio>
               </v-radio-group>
            </v-flex>
         </v-layout>
         <!-- GENERAL ATHLETE INFORMATION END -->

         <!-- ATHLETE ADDRESS INFORMATION START -->
         <v-layout row wrap>
            <v-flex xs12 sm12>
               <div class="title">Address Information:</div>
            </v-flex>
         </v-layout>
         <v-divider></v-divider>
         <v-layout row wrap>
            <v-flex xs12 sm5 class="ml-4">
               <v-text-field label="Street Address"></v-text-field>
               <v-text-field label="Street Address Line 2"></v-text-field>
               <v-text-field label="City"></v-text-field>
               <v-select
               label="State"
               autocomplete
               >
               </v-select>
               <v-text-field label="Postal / Zipcode"></v-text-field>
            </v-flex>
         </v-layout>
         <!-- ATHLETE ADDRESS INFORMATION END -->

         <!-- ATHLETE CONTACT INFORMATION START -->
         <v-layout row wrap>
            <v-flex xs12 sm12>
               <div class="title">Contact Information:</div>
            </v-flex>
         </v-layout>
         <v-divider></v-divider>
         <v-layout row wrap class="ml-3">
            <v-flex xs12 sm5>
               <v-text-field label="Email (Optional for club mailings)"></v-text-field>
            </v-flex>
            <v-flex xs12 sm5>
               <v-text-field
               label="Phone Number (Optional for club group texts)"
               mask="(###) ###-####"
               placeholder="(###) ###-####"
               >
               </v-text-field>
            </v-flex>
         </v-layout>
         <!-- ATHLETE CONTACT INFORMATION END -->

         <!-- ATHLETE SCHOOL INFORMATION START -->
         <v-layout row wrap>
            <v-flex xs12 sm12>
               <div class="title">School Information:</div>
            </v-flex>
         </v-layout>
         <v-divider></v-divider>
         <v-layout row wrap class="ml-3">
            <v-flex xs12 sm4>
               <v-text-field label="School Name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
               <v-text-field label="Grade"></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
               <v-select
               label="School Sports"
               multiple
               chips
               hint="If your sport is not present, list below."
               persistent-hint
               >
               </v-select>
            </v-flex>
         </v-layout>
         <!-- ATHLETE SCHOOL INFORMATION END -->
      </v-container>
      <v-btn color="primary" @click.native="registerStep = 1">Previous</v-btn>
      <v-btn color="primary" @click.native="registerStep = 3">Next</v-btn>
   </v-card>
</template>

<script>
	export default {
		data() {
			return {
				gender: 'M'
			}
		}
	}
</script>
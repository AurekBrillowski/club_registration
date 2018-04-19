<template>
   <v-card flat>
      <v-container fluid grid-list-xl>
         <v-layout row justify-center>
            <v-flex xs12 sm6 md6>
               <div class="headline">Parent 1:</div>
            </v-flex>
            <v-flex xs12 sm6 md6>
               <div class="headline">Parent 2:</div>
            </v-flex>
         </v-layout>
         <v-layout row justify-center>
            <v-flex xs12 sm6 md6>
               <v-text-field
               label="Full Name"
               >
               </v-text-field>
               <div class="title mt-2 mb-2">Address Information:</div>
               <v-divider></v-divider>
               <v-switch label="Same Address as Athlete"></v-switch>
               <v-text-field label="Street Address"></v-text-field>
               <v-text-field label="Street Address Line 2"></v-text-field>
               <v-text-field label="City"></v-text-field>
               <v-select
               label="State"
               hint="Enter or select your state"
               autocomplete
               persistent-hint
               >
               </v-select>
               <v-text-field label="Postal / Zipcode"></v-text-field>

               <div class="title mt-3 mb-2">Contact Information:</div>
               <v-divider></v-divider>
               <v-text-field label="Email Address" required></v-text-field>
               <v-text-field
               label="Mobile Phone"
               mask="(###) ###-####"
               placeholder="(###) ###-####"
               required
               >
               </v-text-field>
               <v-text-field
               label="Home Phone"
               mask="(###) ###-####"
               placeholder="(###) ###-####"
               >
               </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
               <v-text-field
               label="Full Name"
               >
               </v-text-field>
               <div class="title mt-2 mb-2">Address Information:</div>
               <v-divider></v-divider>
               <v-switch label="Same Address as Athlete"></v-switch>
               <v-text-field label="Street Address"></v-text-field>
               <v-text-field label="Street Address Line 2"></v-text-field>
               <v-text-field label="City"></v-text-field>
               <v-select
               label="State"
               hint="Enter or select your state"
               autocomplete
               persistent-hint
               >
               </v-select>
               <v-text-field label="Postal / Zipcode"></v-text-field>

               <div class="title mt-3 mb-2">Contact Information:</div>
               <v-divider></v-divider>
               <v-text-field label="Email Address" required></v-text-field>
               <v-text-field
               label="Mobile Phone"
               mask="(###) ###-####"
               placeholder="(###) ###-####"
               required
               >
               </v-text-field>
               <v-text-field
               label="Home Phone"
               mask="(###) ###-####"
               placeholder="(###) ###-####"
               >
               </v-text-field>
            </v-flex>
         </v-layout>
      </v-container>
      <v-btn color="primary" @click.native="registerStep = 2">Previous</v-btn>
      <v-btn color="primary" @click.native="goToConfirmPage">Submit</v-btn>
   </v-card>
</template>

<script>
	export default {}
</script>
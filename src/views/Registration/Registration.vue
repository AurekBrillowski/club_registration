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
               <v-stepper v-model="registerStep" non-linear>
                  <v-stepper-header>
                     <v-stepper-step step="1" :complete="registerStep > 1" editable>Athlete Profile</v-stepper-step>
                     <v-divider></v-divider>
                     <v-stepper-step step="2" :complete="registerStep > 2" editable>Athlete Information</v-stepper-step>
                     <v-divider></v-divider>
                     <v-stepper-step step="3" editable>Parent(s) Information</v-stepper-step>
                  </v-stepper-header>
                  <v-stepper-items>
                     <v-stepper-content step="1">
                        <athlete-profile :profile="profile"></athlete-profile>
                     </v-stepper-content>
                     <v-stepper-content step="2">
                        <athlete-info :gender="gender"></athlete-info>
                     </v-stepper-content>
                     <v-stepper-content step="3">
                        <parents-info></parents-info>
                     </v-stepper-content>
                  </v-stepper-items>
               </v-stepper>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
	import AthleteProfile from './slides/AthleteProfile.vue'
	import AthleteInfo from './slides/AthleteInfo.vue'
	import ParentsInfo from './slides/ParentsInfo.vue'

	export default {
		components: {
			'athlete-profile': AthleteProfile,
			'athlete-info': AthleteInfo,
			'parents-info': ParentsInfo,
		},
		data() {
			return {
				registerStep: 0,
            profile: null,
            gender: null
			}
		}
	}
</script>
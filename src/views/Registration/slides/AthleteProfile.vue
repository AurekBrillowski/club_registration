<template>
   <v-stepper v-model="profile" vertical>
      <v-stepper-step step="1" :completed="profile > 1" editable>Current Running Involvement</v-stepper-step>
      <v-stepper-content step="1">
         <v-card flat>
            <v-card-text>
               <v-container fluid>
                  <v-layout row wrap>
                     <v-flex xs12 sm4 md8>
                        <div class="title">
                           Current Running Involvement
                           <div class="caption ml-2 mt-1">
                              (Please Mark all that apply)
                           </div>
                        </div>
                        <v-spacer class="mt-2"></v-spacer>
                        <v-flex class="ml-4">
                           <v-checkbox
                           label="School Track"
                           value="School_Track"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="School Cross Country"
                           value="School_XC"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="5Ks and Fun Runs"
                           value="5k_and_Fun_Runs"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="National Competition"
                           value="National_Competition"
                           hide-details
                           ></v-checkbox>
                        </v-flex>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card-text>
         </v-card>
      </v-stepper-content>
      <v-stepper-step step="2" :completed="profile > 2" editable>What do you want to get out of the club:</v-stepper-step>
      <v-stepper-content step="2">
         <v-card flat>
            <v-card-text>
               <v-container fluid>
                  <v-layout row wrap>
                     <v-flex xs12 sm4 md8>
                        <div class="title">
                           What do you want to get out of the club:
                           <div class="caption ml-2 mt-1">
                              (Please Mark all that apply)
                           </div>
                        </div>
                        <v-spacer class="mt-2"></v-spacer>
                        <v-flex class="ml-4">
                           <v-checkbox
                           label="Be a top competitor"
                           value="Be_a_top_competitor"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="Improve my running in general"
                           value="Improve_my_running_in_general"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="Improve my endurance"
                           value="Improve_my_endurance"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="Improve my speed"
                           value="Improve_my_speed"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="Help me in my other sport(s):"
                           value="Help_in_other_sports"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="Stay in Shape"
                           value="Stay_in_Shape"
                           hide-details
                           ></v-checkbox>
                           <v-checkbox
                           label="Get in Shape!"
                           value="Get_in_Shape"
                           hide-details
                           ></v-checkbox>
                        </v-flex>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card-text>
         </v-card>
      </v-stepper-content>
      <v-stepper-step step="3" :completed="profile > 3" editable>Experience/Ability Level:</v-stepper-step>
      <v-stepper-content step="3">
         <v-card flat>
            <v-card-text>
               <v-container fluid>
                  <v-layout row wrap>
                     <v-flex xs12 sm4 md10>
                        <div class="title">
                           Experience/Ability Level
                        </div>
                        <v-flex class="ml-4">
                           <v-radio-group hint="test" column>
                              <v-radio label="1. Top Competitor" value="Top_Competitor"></v-radio>
                              <div class="caption ml-4">
                                 (Top competitor at YMCA meets, District in Middle School, top State in High School, etc.)
                              </div>
                              <v-radio label="2. Experienced" value="Experienced"></v-radio>
                              <div class="caption ml-4">
                                 (Has been running 5Ks for awhile, possibly on their school track or cross country team.)
                              </div>
                              <v-radio label="3. Limited Experience" value="Limited_Experience"></v-radio>
                              <div class="caption ml-4">
                                 (Has run some 5Ks, on school team but not one of the better runners.)
                              </div>
                              <v-radio label="4. Needs to get in shape!" value="Get_in_Shape"></v-radio>
                           </v-radio-group>
                        </v-flex>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card-text>
         </v-card>
      </v-stepper-content>
      <v-stepper-step step="4" :completed="profile > 4" editable>Competitiveness:</v-stepper-step>
      <v-stepper-content step="4">
         <v-card flat>
            <v-card-text>
               <v-container fluid>
                  <v-layout row wrap>
                     <v-flex xs12 sm4 md10>
                        <div class="title">
                           Competitiveness
                        </div>
                        <v-flex class="ml-4">
                           <v-radio-group hint="test" column>
                              <v-radio label="1. Extremely Competitive" value="Extremely_Competitive"></v-radio>
                              <div class="caption ml-4">
                                 (Nothing's going to stop this kid. Not afraid of hard work., Super-motivated. Must-win Attitude.)
                              </div>
                              <v-radio label="2. Very Competitive" value="Very_Competitive"></v-radio>
                              <div class="caption ml-4">
                                 (Has been running 5Ks for awhile, possibly on their school track or cross country team.)
                              </div>
                              <v-radio label="3. Likes Competitions" value="Likes_Competitions"></v-radio>
                              <v-radio label="4. Take ir or leave it" value="Take_it_or_leave_it"></v-radio>
                              <v-radio label="5. Needs help getting out of bed!" value="Needs_help_out_of_bed"></v-radio>
                           </v-radio-group>
                        </v-flex>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card-text>
         </v-card>
      </v-stepper-content>
      <v-stepper-step step="5" editable>Other Sports:</v-stepper-step>
      <v-stepper-content step="5"></v-stepper-content>
   </v-stepper>
</template>

<script>
	export default {
//		props: ['profile'],
       data() {
			return {
				profile: 0
         }
       }
   }
</script>
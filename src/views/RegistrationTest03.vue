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
                        <v-stepper-step step="1" :complete="registerStep > 1" editable>Athlete Profile</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" :complete="registerStep > 2" editable>Athlete Information</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3" editable>Parent Information</v-stepper-step>
                     </v-stepper-header>
                     <v-stepper-items>
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
                                             v-model="athlete.runningInvolvement"
                                             value="School_Track"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="School Cross Country"
                                             v-model="athlete.runningInvolvement"
                                             value="School_XC"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="5Ks and Fun Runs"
                                             v-model="athlete.runningInvolvement"
                                             value="5k_and_Fun_Runs"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="National Competition"
                                             v-model="athlete.runningInvolvement"
                                             value="National_Competition"
                                             hide-details
                                             ></v-checkbox>
                                          </v-flex>
                                       </v-flex>
                                    </v-layout>
                                 </v-container>
                                 <v-divider class="mb-2"></v-divider>
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
                                             v-model="athlete.athleteHopeToGet"
                                             value="Be_a_top_competitor"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="Improve my running in general"
                                             v-model="athlete.athleteHopeToGet"
                                             value="Improve_my_running_in_general"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="Improve my endurance"
                                             v-model="athlete.athleteHopeToGet"
                                             value="Improve_my_endurance"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="Improve my speed"
                                             v-model="athlete.athleteHopeToGet"
                                             value="Improve_my_speed"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="Help me in my other sport(s):"
                                             v-model="athlete.athleteHopeToGet"
                                             value="Help_in_other_sports"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="Stay in Shape"
                                             v-model="athlete.athleteHopeToGet"
                                             value="Stay_in_Shape"
                                             hide-details
                                             ></v-checkbox>
                                             <v-checkbox
                                             label="Get in Shape!"
                                             v-model="athlete.athleteHopeToGet"
                                             value="Get_in_Shape"
                                             hide-details
                                             ></v-checkbox>
                                          </v-flex>
                                       </v-flex>
                                    </v-layout>
                                 </v-container>
                                 <v-divider class="mb-2"></v-divider>
                                 <v-container fluid>
                                    <v-layout row wrap>
                                       <v-flex xs12 sm4 md10>
                                          <div class="title">
                                             Experience/Ability Level
                                          </div>
                                          <v-flex class="ml-4">
                                             <v-radio-group v-model="athlete.experienceOrAbilityLevel" hint="test" column>
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
                                                <v-radio label="4. Needs to get in shape!" value="Get_in_Shape" ></v-radio>
                                             </v-radio-group>
                                          </v-flex>
                                       </v-flex>
                                    </v-layout>
                                 </v-container>
                                 <v-divider class="mb-2"></v-divider>
                                 <v-container fluid>
                                    <v-layout row wrap>
                                       <v-flex xs12 sm4 md10>
                                          <div class="title">
                                             Competitiveness
                                          </div>
                                          <v-flex class="ml-4">
                                             <v-radio-group v-model="athlete.competitiveness" hint="test" column>
                                                <v-radio label="1. Extremely Competitive" value="Extremely_Competitive"></v-radio>
                                                <div class="caption ml-4">
                                                   (Nothing's going to stop this kid. Not afraid of hard work., Super-motivated. Must-win Attitude.)
                                                </div>
                                                <v-radio label="2. Very Competitive" value="Very_Competitive"></v-radio>
                                                <div class="caption ml-4">
                                                   (Has been running 5Ks for awhile, possibly on their school track or cross country team.)
                                                </div>
                                                <v-radio label="3. Likes Competitions" value="Likes_Competitions"></v-radio>
                                                <v-radio label="4. Take ir or leave it" value="Take_it_or_leave_it" ></v-radio>
                                                <v-radio label="5. Needs help getting out of bed!" value="Needs_help_out_of_bed"></v-radio>
                                             </v-radio-group>
                                          </v-flex>
                                       </v-flex>
                                    </v-layout>
                                 </v-container>
                              </v-card-text>
                           </v-card>
                           <v-btn color="primary" @click.native="registerStep = 2">Next</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                           <v-container grid-list-xl fluid>
                              <v-layout wrap>
                                 <v-flex xs12 sm6>
                                 </v-flex>
                                 <v-flex xs12 sm6>
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
				athlete: {
					runningInvolvement: [],
					athleteHopeToGet: [],
				   experienceOrAbilityLevel: '',
				   competitiveness: '',
					gender: 'M',
					dob: null,
					dateOfReg: null,
				},
				registerStep: 0,
				loader: null,
				loading: false,
				dateOfRegMenu: false,
				dobMenu: false
			}
		}
	}
</script>
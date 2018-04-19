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
                     <!-- ATHLETE PROFILE SLIDE -->
                     <v-stepper-content step="1">
                        <!--<v-card flat>-->
                        <!--<v-card-text>-->
                        <v-stepper v-model="athleteProfile" vertical>
                           <v-stepper-step step="1" :completed="athleteProfile > 1" editable>Current Running Involvement</v-stepper-step>
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
                                 </v-card-text>
                              </v-card>
                           </v-stepper-content>
                           <v-stepper-step step="2" :completed="athleteProfile > 2" editable>What do you want to get out of the club:</v-stepper-step>
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
                                 </v-card-text>
                              </v-card>
                           </v-stepper-content>
                           <v-stepper-step step="3" :completed="athleteProfile > 3" editable>Experience/Ability Level:</v-stepper-step>
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
                                                   <v-radio label="4. Needs to get in shape!" value="Get_in_Shape"></v-radio>
                                                </v-radio-group>
                                             </v-flex>
                                          </v-flex>
                                       </v-layout>
                                    </v-container>
                                 </v-card-text>
                              </v-card>
                           </v-stepper-content>
                           <v-stepper-step step="4" :completed="athleteProfile > 4" editable>Competitiveness:</v-stepper-step>
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
                        <!--</v-card-text>-->
                        <!--</v-card>-->
                        <v-btn color="primary" @click.native="registerStep = 2">Next</v-btn>
                     </v-stepper-content>
                     <!-- ATHLETE INFORMATION SLIDE -->
                     <v-stepper-content step="2">
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
                                    :return-value.sync="athlete.dateOfReg"
                                    >
                                       <v-text-field
                                       slot="activator"
                                       label="Date of Reg."
                                       v-model="athlete.dateOfReg"
                                       prepend-icon="event"
                                       readonly
                                       required
                                       ></v-text-field>
                                       <v-date-picker v-model="athlete.dateOfReg" no-title scrollable>
                                          <v-spacer></v-spacer>
                                          <v-btn flat color="primary" @click="dateOfRegMenu = false">Cancel</v-btn>
                                          <v-btn flat color="primary" @click="$refs.menu.save(dateOfReg)">OK</v-btn>
                                       </v-date-picker>
                                    </v-menu>
                                 </v-flex>
                              </v-layout>
                              <v-layout row wrap class="ml-3">
                                 <v-flex xs12 sm4>
                                    <v-text-field
                                    label="Name Athlete Goes By"
                                    v-model="athlete.nameGoesBy"
                                    >
                                    </v-text-field>
                                 </v-flex>
                                 <v-flex xs12 sm4>
                                    <v-text-field
                                    label="Date of Birth"
                                    v-model="athlete.dob"
                                    mask="####-##-##"
                                    placeholder="YYYY-DD-MM"
                                    >
                                    </v-text-field>
                                 </v-flex>
                                 <v-flex xs12 sm3>
                                    <v-radio-group v-model="athlete.gender" :mandatory="false" row>
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
                                    <v-text-field label="Street Address" v-model="athlete.addressInfo.streetAddrLine1"></v-text-field>
                                    <v-text-field label="Street Address Line 2" v-model="athlete.addressInfo.streetAddrLine2"></v-text-field>
                                    <v-text-field label="City" v-model="athlete.addressInfo.city"></v-text-field>
                                    <v-select
                                    :items="states"
                                    v-model="athlete.addressInfo.state"
                                    label="State"
                                    autocomplete
                                    >
                                    </v-select>
                                    <v-text-field label="Postal / Zipcode" v-model="athlete.addressInfo.zipcode"></v-text-field>
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
                                    v-model="athlete.schoolSports"
                                    label="School Sports"
                                    multiple
                                    chips
                                    :items="schoolRunningSports"
                                    hint="If your sport is not present, list below."
                                    persistent-hint
                                    >
                                    </v-select>
                                 </v-flex>
                              </v-layout>
                              <!-- ATHLETE SCHOOL INFORMATION END -->
                           </v-container>
                        </v-card>
                        <v-btn color="primary" @click.native="registerStep = 1">Previous</v-btn>
                        <v-btn color="primary" @click.native="registerStep = 3">Next</v-btn>
                     </v-stepper-content>
                     <!-- PARENT INFORMATION SLIDE -->
                     <v-stepper-content step="3">
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
                                    v-model="athlete.parent_1.fullName"
                                    >
                                    </v-text-field>
                                    <div class="title mt-2 mb-2">Address Information:</div>
                                    <v-divider></v-divider>
                                    <v-switch label="Same Address as Athlete" v-model="athlete.parent_1.sameAddrAsAthlete"></v-switch>
                                    <v-text-field label="Street Address" v-model="athlete.parent_1.addressInfo.streetAddrLine1"></v-text-field>
                                    <v-text-field label="Street Address Line 2" v-model="athlete.parent_1.addressInfo.streetAddrLine2"></v-text-field>
                                    <v-text-field label="City" v-model="athlete.parent_1.addressInfo.city"></v-text-field>
                                    <v-select
                                    :items="states"
                                    v-model="athlete.parent_1.addressInfo.state"
                                    label="State"
                                    hint="Enter or select your state"
                                    autocomplete
                                    persistent-hint
                                    >
                                    </v-select>
                                    <v-text-field label="Postal / Zipcode" v-model="athlete.parent_1.addressInfo.zipcode"></v-text-field>

                                    <div class="title mt-3 mb-2">Contact Information:</div>
                                    <v-divider></v-divider>
                                    <v-text-field label="Email Address" v-model="athlete.parent_1.email" required></v-text-field>
                                    <v-text-field
                                    label="Mobile Phone"
                                    mask="(###) ###-####"
                                    v-model="athlete.parent_1.mobilePhone"
                                    placeholder="(###) ###-####"
                                    required
                                    >
                                    </v-text-field>
                                    <v-text-field
                                    label="Home Phone"
                                    mask="(###) ###-####"
                                    v-model="athlete.parent_1.homePhone"
                                    placeholder="(###) ###-####"
                                    >
                                    </v-text-field>
                                 </v-flex>
                                 <v-flex xs12 sm6 md6>
                                    <v-text-field
                                    label="Full Name"
                                    v-model="athlete.parent_2.fullName"
                                    >
                                    </v-text-field>
                                    <div class="title mt-2 mb-2">Address Information:</div>
                                    <v-divider></v-divider>
                                    <v-switch label="Same Address as Athlete" v-model="athlete.parent_2.sameAddrAsAthlete"></v-switch>
                                    <v-text-field label="Street Address" v-model="athlete.parent_2.addressInfo.streetAddrLine1"></v-text-field>
                                    <v-text-field label="Street Address Line 2" v-model="athlete.parent_2.addressInfo.streetAddrLine2"></v-text-field>
                                    <v-text-field label="City" v-model="athlete.parent_2.addressInfo.city"></v-text-field>
                                    <v-select
                                    :items="states"
                                    v-model="athlete.parent_2.addressInfo.state"
                                    label="State"
                                    hint="Enter or select your state"
                                    autocomplete
                                    persistent-hint
                                    >
                                    </v-select>
                                    <v-text-field label="Postal / Zipcode" v-model="athlete.parent_2.addressInfo.zipcode"></v-text-field>

                                    <div class="title mt-3 mb-2">Contact Information:</div>
                                    <v-divider></v-divider>
                                    <v-text-field label="Email Address" v-model="athlete.parent_2.email" required></v-text-field>
                                    <v-text-field
                                    label="Mobile Phone"
                                    mask="(###) ###-####"
                                    v-model="athlete.parent_2.mobilePhone"
                                    placeholder="(###) ###-####"
                                    required
                                    >
                                    </v-text-field>
                                    <v-text-field
                                    label="Home Phone"
                                    mask="(###) ###-####"
                                    v-model="athlete.parent_2.homePhone"
                                    placeholder="(###) ###-####"
                                    >
                                    </v-text-field>
                                 </v-flex>
                              </v-layout>
                           </v-container>
                        </v-card>
                        <v-btn color="primary" @click.native="registerStep = 2">Previous</v-btn>
                        <v-btn color="primary" @click.native="goToConfirmPage">Submit</v-btn>
                     </v-stepper-content>
                  </v-stepper-items>
               </v-stepper>
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
					nameGoesBy: '',
					gender: 'M',
					dob: null,
					addressInfo: {streetAddrLine1: '', streetAddrLine2: '', city: '', state: 'Texas', zipcode: ''},
					dateOfReg: null,
					schoolSports: [],
					parent_1: {
						fullName: '',
						sameAddrAsAthlete: true,
						addressInfo: {streetAddrLine1: '', streetAddrLine2: '', city: '', state: 'Texas', zipcode: ''},
                  email: '',
						mobilePhone: null,
						homePhone: null
					},
					parent_2: {
						fullName: '',
						sameAddrAsAthlete: true,
						addressInfo: {streetAddrLine1: '', streetAddrLine2: '', city: '', state: 'Texas', zipcode: ''},
				      email: '',
				      mobilePhone: null,
						homePhone: null
					},
				},
				schoolRunningSports: ['Track & Field', 'Cross Country', 'Other', 'None'],
				registerStep: 0,
				athleteProfile: 0,
				loading: false,
				dateOfRegMenu: false,
				states: [
					'Alabama', 'Alaska', 'American Samoa', 'Arizona',
					'Arkansas', 'California', 'Colorado', 'Connecticut',
					'Delaware', 'District of Columbia', 'Federated States of Micronesia',
					'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
					'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
					'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
					'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
					'Missouri', 'Montana', 'Nebraska', 'Nevada',
					'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
					'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
					'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
					'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
					'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
					'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
				]
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
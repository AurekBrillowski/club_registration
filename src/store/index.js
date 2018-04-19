import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		
		// This is the only time that the athlete will see the register page, however they can still update the information elsewhere in their profile.
		showRegisterPage: true,
		loading: false,
		// This is to show an error if the users username or password does not match, then we can set the error here.
		error: null,
		// This will be to clear the error once the user tries to log in again.
		clearError: '',
		userAuth: {
			isLoggedIn: {
				setLoadingToTrue: true
			},
			isLoggedOut: '',
		},
		
		// This data may not need to be in here since it may only be used once.
		registrationSpecific: {
			dateOfReg: '',
			isRegistrationCompleted: false
		},
		
		attendance: {},
		
		// This is something simple, however still needed.
		// This will just render a different title to let the athlete know what page they are on.
		appTitle: {},
		
		// When the athlete updates the days and times that suit them best for practices, it will then update their calendar.
		// Sending notifications that practice is cancelled for that day and update all the athletes calendar.
		// Maybe even send notifications appear on the athletes dashboard as they log in to tell them about practice cancellations or reschedules.
		scheduling: {
			calendar: {},
			weeklySchedule: {},
			schoolRacingSchedule: {},
		},
		
		// This data here will be used over multiple charts and data tables and whatever else.
		// Also below by getting their school name, we can compare their practice data to their school race data.
		// If we are are using filters for these, then it will definetely be needed because multiple components will need to react to that filter.
		// This is important: The users may want to update their PRs, or whatever the case may be and having the shared state will make that much easier.
		practiceData: {
			track: {
				fourHundreds: [],
				eightHundreds: [],
				sixteenHundreds: [],
				twentyFourHundreds: [],
			},
			trail: {},
			hills: {},
			distanceRuns: {}
		},
		// This data here is there so the athletes can compare their practice data to school race data.
		// They can also see how much or how little they improved.
		schoolData: {
			crossCountry: {},
			trackAndField: {},
		},
		
		athlete: {
			username: '',
			password: '',
			NYAL_Athlete_ID: '',
			
			runningInvolvement: [],
			athleteHopeToGet: [],
			experienceOrAbilityLevel: '',
			competitiveness: '',
			generalInfo: { firstName: '', lastName: '', nameGoesBy: '', dob: '', gender: null},
			addressInfo: { streetAddrLine1: '', streetAddrLine2: '', city: '', state: 'Texas', zipcode: '' },
			contactInfo: { email: '', phoneNumber: '', },
			schoolInfo: { schoolName: '', grade: '', schoolSports: [] },
			parentOne: {
				fullName: '',
				addressInfo:  { sameAsAthlete: true, streetAddrLine1: '', streetAddrLine2: '', city: '', state: 'Texas', zipcode: '' },
				contactInfo: { email: '', mobilePhone: null, homePhone: null }
			},
			parentTwo: {
				fullName: '',
				addressInfo: { sameAsAthlete: true, streetAddrLine1: '', streetAddrLine2: '', city: '', state: 'Texas', zipcode: '' },
				contactInfo: { email: '', mobilePhone: null, homePhone: null }
			}
		}
	}
})
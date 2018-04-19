import Vue from 'vue'
import Router from 'vue-router'

import UserDashboard from '@/views/Dashboard/UserDashboard'
import Home from '@/views/Home'
// import Calendar from '@/views/Scheduling/Calendar'
// import PracticeData from '@/views/Diagrams/PracticeData'
import About from '@/views/About'
import Contact from '@/views/Contact'
// import AccountSettings from '@/views/AccountSettings'
// import Login from '@/views/Auth/Login'
// import Logout from '@/views/Auth/Logout'
// import Signup from '@/views/Auth/Signup'
import Registration from '@/views/Registration/Registration'
// import RegistrationTest02 from '@/views/RegistrationTest02'
// import RegistrationTest03 from '@/views/RegistrationTest03'
// import VerticalStepperPractice from '@/views/VerticalStepperPractice'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		// May need to add the user id in the route here in the future.
		// { path: '/user/:id', component: UserDashboard,
		{ path: '/', component: UserDashboard,
			children: [
				{ path: 'home', component: Home, name: 'home' },
				// { path: 'calendar', component: Calendar, name: 'calendar' },
				// { path: 'scheduling', component: Scheduling, name: 'scheduling',
				// 	children: [
				// 		{ path: 'weekly-schedule', component: WeeklySchedule, name: 'weekly-schedule' },
				// 		{ path: 'calendar', component: Calendar, name: 'calendar' },
				// 	]},
				// { path: 'practice-data', component: PracticeData, name: 'practice-data' },
				{ path: 'about', component: About, name: 'about' },
				{ path: 'contact', component: Contact, name: 'contact' },
				// { path: 'account-settings', component: AccountSettings, name: 'account-settings' },
				// { path: 'logout', component: Logout, name: 'logout' },
				{ path: 'registration', component: Registration, name: 'registration' },
				// { path: 'registration-two', component: RegistrationTest02, name: 'registration-two' },
				// { path: 'registration-three', component: RegistrationTest03, name: 'registration-three' },
				// { path: 'vertical-stepper-practice', component: VerticalStepperPractice, name: 'vertical-stepper-practice' },
				// { path: 'signup', component: Signup, name: 'signup' },
				// { path: 'login', component: Login, name: 'login' },
			]
		},
		// {
		// 	path: '/login',
		// 	name: 'Login',
		// 	component: Login
		// },
		// {
		// 	path: '/signup',
		// 	name: 'Signup',
		// 	component: Signup
		// },
		// {
		// 	path: '/registration',
		// 	name: 'Registration',
		// 	component: Registration
		// }
	]
})

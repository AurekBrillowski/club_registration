<template>
   <v-app dark>
      <v-navigation-drawer
         clipped
         fixed
         v-model="drawer"
         :mini-variant.sync="mini"
         stateless
         app
      >
         <v-list dense>
            <v-list-tile avatar>
               <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Athlete Picture">
               </v-list-tile-avatar>
               <v-list-tile-content>
                  <v-list-tile-title class="title">{{ athleteNamePlaceholder }}</v-list-tile-title>
               </v-list-tile-content>
               <v-list-tile-action>
                  <v-btn icon @click.native.stop="mini = !mini"></v-btn>
               </v-list-tile-action>
            </v-list-tile>
         </v-list>
         <v-divider></v-divider>
         <v-list dense>
            <template v-for="item in items">
               <v-list-tile :href="item.href" :to="item.href">
                  <v-list-tile-action>
                     <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     {{ item.title }}
                  </v-list-tile-content>
               </v-list-tile>
            </template>
         </v-list>
      </v-navigation-drawer>
      <v-toolbar class="teal" fixed clipped-left app>
         <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
         <v-toolbar-title>
            {{ pageTitle }}
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <v-text-field label="Search" append-icon="search"></v-text-field>
      </v-toolbar>
      <v-content>
         <v-container fluid full-height>
            <v-fade-transition mode="out-in">
               <router-view></router-view>
            </v-fade-transition>
         </v-container>
      </v-content>
      <v-footer :fixed="fixed" app>
         <span>&copy; 2018</span>
      </v-footer>
   </v-app>
</template>

<script>
	export default {
	   data () {
		   return {
		      mini: false,
			   pageTitle: 'Home',
			   fixed: false,
			   athleteNamePlaceholder: 'John Doe',
			   drawer: true,
			   items: [
				   {title: 'Home', href: 'home', icon: 'home', router: true},
//			      {title: 'Calendar', href: 'calendar', icon: 'event', router: true},
//                   children: [
//	                   {title: 'Weekly Schedule', href: 'weekly-schedule', icon: '', router: true},
//	                   {title: 'Calendar', href: 'calendar', icon: 'event', router: true},
//                   ]},
//				   {title: 'Practice Data', href: 'practice-data', icon: 'insert_chart', router: true},
				   {title: 'About', href: 'about', icon: 'question_answer', router: true},
				   {title: 'Contact Coaches', href: 'contact', icon: 'call', router: true},
//				   {title: 'Account Settings', href: 'account-settings', icon: 'settings', router: true},
//				   {title: 'Logout', href: 'logout', icon: 'lock_outline', router: true},
				   {title: 'Registration', href: 'registration', icon: '', router: true},
//				   {title: 'Registration Test 02', href: 'registration-two', icon: '', router: true},
//				   {title: 'Registration Test 03', href: 'registration-three', icon: '', router: true},
//				   {title: 'Vertical Stepper Practice', href: 'vertical-stepper-practice', icon: '', router: true},
//				   {title: 'Signup', href: 'signup', icon: '', router: true},
//				   {title: 'Login', href: 'login', icon: '', router: true},
			   ]
		   }
	   },
   }
</script>
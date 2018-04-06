<template>
   <v-jumbotron>
      <v-container fill-height>
         <v-layout align-center>
            <v-flex>
               <h3 class="display-3">Welcome to your athlete dashboard!</h3>
               <span class="subheading">This dashboard will have everything you need to know about your progress, scheduling, and much more!</span>
               <v-divider class="my-3"></v-divider>
               <div class="title mb-3">
                  Click below if you want the full tour!
                  <div class="mt-1">
                     <small>(You can always come back to this later if needed.)</small>
                  </div>
               </div>
               <v-btn large color="primary" class="mx-0">Yes, please!</v-btn>
               <v-btn large color="primary" class="mx-0">Nah</v-btn>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
</template>

<script>
	export default {}
</script>
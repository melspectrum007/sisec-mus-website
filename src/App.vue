<template>
  <div>
    <section class="hero is-default is-bold">
    <template v-if="!embed">
     <div class="hero-head">
       <div class="container">
         <nav class="nav has-shadow">
           <div class="container">
             <div class="nav-left">
               <a class="nav-item is-brand" href="/">
                <img src="/favicon.png" alt="SISEC"><h1 class="title is-4">SiSEC MUS</h1>
               </a>
             </div>
             <div class="nav-right is-brand">
               <main-menu></main-menu>
             </div>
           </div>
         </nav>
       </div>
     </div>
   </template>
     <div v-bind:class="{ 'hero-body': !embed }">
       <div class="container">
         <router-view></router-view>
       </div>
     </div>
   </section>
   <footer class="footer" v-if="!embed">
   <div class="container">
     <div class="content has-text-centered">
       <p>
         <span><img src="./assets/logo_INRIA.png" alt="Inria" width="100px"></span>
         <span><img src="./assets/alabs_logo.svg" alt="audiolab" width="100px"></span>
       </p>
       <p>
         The website content
         is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
       </p>
     </div>
   </div>
  </footer>
</div>
</template>

<script>
import bulma from 'bulma/css/bulma.css';
import MainMenu from './Menu.vue'

export default {
  components: { MainMenu },
  computed: {
    embed: function() {
      if (this.$route.query.mode == "embed") {
        return true;
      } else {
        return false;
      }
    },
  }
}
</script>

<style>

.nav-left img {
  margin-right: 1em;
}
.nav-left {
  padding-left: 1em;
}
</style>

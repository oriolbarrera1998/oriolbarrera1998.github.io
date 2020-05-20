/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import router from './router'
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('sidebar', require('./components/sidebar.vue').default);
Vue.component('welcome', require('./components/welcome.vue').default);
Vue.component('whoiam', require('./components/whoiam.vue').default);
Vue.component('whatidid', require('./components/whatidid.vue').default);
Vue.component('whatido', require('./components/whatido.vue').default);
Vue.component('whatilldo', require('./components/whatilldo.vue').default);
Vue.component('getintouch', require('./components/getintouch.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    el: '#app',
    router,
  })
  
require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('video-chat', require('./components/VideoChat.vue').default);
const app = new Vue({
    el: '#app',
});

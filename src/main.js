import Vue from 'vue'
import App from './App.vue'
import './common/install';

new Vue({
    el: 'body > div',
    render: (h) => h(App)
})
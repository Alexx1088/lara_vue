import Vue from 'vue'

import PostComponent from "./components/PostComponent";

//import ExampleComponent from "./components/ExampleComponent";

require('bootstrap');

const app = new Vue({

    el: '#app',

    components: {
        PostComponent,
    }

})


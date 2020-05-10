import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#9652ff', // #1AC91B
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70'
    }
});

export default new Vuetify({});
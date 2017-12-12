import Vue from 'vue';
import common from '../sns/common';

require('../../css/sns/index.scss');

let demo = new Vue({
    el: "#demo",
    data: {
        text: 'hello world',
        lan: 'CNM'
    },
    methods: {
        backToTop: common.backToTop(),
        test(name, word) {
            common.testFunc(name, word)
        }
    },
    mounted() {
        this.test('cc', 'hh');
    }
});
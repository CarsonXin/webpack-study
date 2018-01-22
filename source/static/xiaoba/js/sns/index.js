import Vue from 'vue';
import common from '../sns/common';
import pageHeader from '../../../components/header.vue';

require('../../css/sns/index.scss');

let demo = new Vue({
    el: "#demo",
    components: {
        pageHeader
    },
    data: {
        text: 'hello world',
        lan: 'CN'
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
import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'


Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE",
    libraries: "places" 
  }
});
Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(App),
}).$mount('#app')

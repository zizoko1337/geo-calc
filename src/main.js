import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import PageTitle from './components/elements/PageTitle.vue'
import FormButton from './components/elements/FormButton.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)

app.use(router);

app.component('PageTitle', PageTitle)
app.component('FormButton', FormButton)

app.mount('#app');

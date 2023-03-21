import { createApp } from 'vue';
import App from './App.vue'

//css
import "./styles/index.css";

//ui components
import uiComponents from "./ui-components";

//router
import router from "./router.js";


const app = createApp(App);

//регистрируем все ui components
Object.values(uiComponents).forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')

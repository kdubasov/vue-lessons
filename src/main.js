import { createApp } from 'vue';
import App from './App.vue'

//css
import "./styles/index.css";

//ui components
import uiComponents from "./ui-components";


const app = createApp(App);

//регистрируем все ui components
Object.values(uiComponents).forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')

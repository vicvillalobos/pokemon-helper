import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './style.css'
import App from './App.vue'
import apolloClient from "./services/apollo/pokemon-client";

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
}).mount('#app')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    
    css: [
        '~/assets/css/main.css',
        '~/assets/sass/default.scss'
    ],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    vite: {
        css: {
            // css:['~/assets/sass/default.scss'],
            preprocessorOptions: {
                scss: {
                additionalData: '@use "@/assets/sass/_base.scss" as *;'
                }
            }
        }
    },
    // ssr: false,
    // loadingIndicator: {
    //     name: 'chasing-dots',
    //     color: 'purple',
    //     background: 'green'
    // },
    modules: [
        '@pinia/nuxt'
    ],
})
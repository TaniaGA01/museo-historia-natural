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
            preprocessorOptions: {
                scss: {
                additionalData: '@use "@/assets/sass/_base.scss" as *;'
                }
            }
        }
    },
    // ssr: false,
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/strapi'
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    }
})
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PowerShell Conference Europe',
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Welcome to the website for PowerShell Conference Europe. Meeting virtually in 2021.' },
      { property: 'og:url', content: 'https://psconf.eu'},
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'PowerShell Conference Europe' },
      { property: 'og:description', content: 'Welcome to the website for PowerShell Conference Europe. Meeting virtually in 2021.' },
      { property: 'og:image', content: 'https://psconf.eu/psconfeu-social-banner.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'psconf.eu' },
      { property: 'twitter:url', content: 'https://psconf.eu' },
      { name: 'twitter:title', content: 'PowerShell Conference Europe' },
      { name: 'twitter:description', content: 'Welcome to the website for PowerShell Conference Europe. Meeting virtually in 2021.' },
      { name: 'twitter:image', content: 'https://psconf.eu/psconfeu-social-banner.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono'
      }
    ]
  },

  server: {
    host: '0.0.0.0'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/google-gtag',
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap'
  ],

  'google-gtag': {
    id: 'UA-151321282-1',
    config: {
      anonymize_ip: true,
      send_page_view: false,
      linker: {
        domains: ['psconf.eu']
      }
    }
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false,
    componentPlugins: ['CarouselPlugin', 'LayoutPlugin', 'ImagePlugin', 'LinkPlugin', 'NavPlugin', 'NavbarPlugin', 'DropdownPlugin'],
    //components: ['BContainer', 'BRow', 'BCol', 'BCarousel', 'BImg', 'BLink' ,'BNav', 'BNavbar'],
    directivePlugins: [ 'VBToggle'],
    //directives: [ 'VBToggle']
  },

  sitemap: {
    hostname: 'https://psconf.eu',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

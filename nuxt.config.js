export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // 영화페이지에대한 정보는 수없이 많으므로 객체 데이터를 생성해 관리
  // 언제든지 바꾸고 서버측에서 사용해서 사용자에게 제공
  // nuxt에서는 별도의 html파일 대신 이런식으로 관리함
  // 수시로 바꿀수가 있다
  head: {
    title: 'movie-app-nuxt',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // hid: 'description'은 바꿀 수 있는 data를 넣는데 사용, 서버를 생성할때 바꿀 수 있음
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // 지금 써져있는건 기본설정
      // hid로 고유값을 찾아서 동적으로 각각의 링크마다 정보를 전달해줌
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
      // title은 링크로 보내주는 페이지의 이름, 서버사이트이름x
      { hid: 'og:title', property: 'og:title', content: 'Movie App / Search' },
      // 그 링크에 관한 설명
      { hid: 'og:description', property: 'og:description', content: 'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.' },
      { hid: 'og:image', property: 'og:image', content: 'https://heropy.blog/css/images/logo.png' },
      { hid: 'og:url', property: 'og:url', content: process.env.CLIENT_URL },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      // 데이터가 없는 정보는 boolean data로 분류됨, crossorigin은 data가 없음 -> 대체머임 그럼
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorgin: true},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  // @nuxtjs/style-resources
  styleResources: {
    scss: [
      '~/scss/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-runtime']  
      ]
    },
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },

  serverMiddleware: [
    {
      path: '/api/movie',
      // path: './netlify/function/movie', 와 같음
      handler: '~/server-middleware/movie.js'
    }
  ]
}

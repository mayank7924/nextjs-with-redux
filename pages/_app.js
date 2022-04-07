import { wrapper } from '../store/store'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)

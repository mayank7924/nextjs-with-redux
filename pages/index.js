import Page from '../components/Page'
import { incrementCounter } from '../store/counter/action'
import { wrapper } from '../store/store'

const Index = (props) => {
  return <Page title="Index Page" linkTo="/other" />
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(incrementCounter())
})

export default Index

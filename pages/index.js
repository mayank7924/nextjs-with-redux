import Page from '../components/Page'
import { incrementCounter } from '../store/counter/action'
import { wrapper } from '../store/store'

const Index = (props) => {
  console.log("AUTHOR", process.env.AUTHOR)
  // console.log("client side:", process.env.NEXT_PUBLIC_APP_NAME)
  return <Page title="Index Page" linkTo="/other" />
}

export const getServerSideProps = async (req, res) => {
  //fetch props
  // console.log("server side:",process.env.APP_NAME)
  console.log("AUTHOR", process.env.AUTHOR)
  console.log(req)
  const userDetails = await fetch(process.env.USER_ENDPOINT)
    .then( data => data.json())
    .then( user => user.data )
  // console.log(userDetails)
  return { props: {} };
};

export default Index

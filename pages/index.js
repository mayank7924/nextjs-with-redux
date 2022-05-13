import Page from '../components/Page'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
console.log(serverRuntimeConfig)
console.log(publicRuntimeConfig)

const Index = (props) => {
  return <Page title="Index Page" linkTo="/other" />
}

export const getServerSideProps = async () => {
  //fetch props
  const userDetails = await fetch(serverRuntimeConfig.userEndpoint)
    .then( data => data.json())
    .then( user => user.data )
  console.log(userDetails)
  return { props: {} };
};

export default Index

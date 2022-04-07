import Page from "../components/Page";
import { wrapper } from "../store/store";
import { incrementCounter } from "../store/counter/action";
import { addUser } from '../store/users/action';

const Other = (props) => {
  return <Page title="Other Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(incrementCounter());
  
  const response = await fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * (10) + 1)}`);
  const {data} = await response.json();
  store.dispatch(addUser(`${data.first_name} ${data.last_name}`))
});

export default Other;

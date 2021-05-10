import '../styles/reset.scss';
import NavBar from '../components/navbar/NavBar';

import '../mocks/browser';

const App = ({ Component, pageProps }) => (
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
);

export default App;

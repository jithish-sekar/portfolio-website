import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import HeaderComponent from './components/header';
import FooterPage from './components/footer';
import Main from './components/main';


const App = (Props) => {
  return (
    <div>
      <HeaderComponent history={Props.history} />
      <Main />
      <FooterPage />
    </div>

  )
}

export default withRouter(App);

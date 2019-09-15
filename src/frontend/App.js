import React, { Component } from 'react';
import { TERForm } from '@ter-form/form';
import { ToastContainer, toast } from 'react-toastify';

import '../localization';
import 'react-toastify/dist/ReactToastify.css';

import HomeScreen from './screens/Home';

TERForm.bootstrap();

export default class App extends Component {
  render() {
    return (
      <>
        <HomeScreen />
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
      </>
    );
  }
}

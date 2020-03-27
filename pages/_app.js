import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import store from '../redux/store.ts';

const App = props => {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Layout />
      <Component {...pageProps} />
    </Provider>
  );
};

const makeStore = () => store;

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withRedux(makeStore)(App);

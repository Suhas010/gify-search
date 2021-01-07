import React from 'react';
import 'antd/dist/antd.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '../../context';
import Header from '../Header';
import Footer from '../Footer';
import './app.scss';
import Search from '../Search';

export const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        component={() => (
          <ThemeProvider>
            <Header />
            <Search/>
            <Footer />
          </ThemeProvider>
        )}
      />
    </Switch>
  </Router>
);

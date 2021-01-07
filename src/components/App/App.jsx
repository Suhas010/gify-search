import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '../../context';
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import './app.scss';

export const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        component={() => (
          <ThemeProvider>
            <Header />
            <Footer />
          </ThemeProvider>
        )}
      />
    </Switch>
  </Router>
);

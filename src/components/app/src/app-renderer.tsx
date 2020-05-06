import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Experience } from 'components/experience';
import { Home } from 'components/home';
import { IAppRendererProps } from './app-interface';
import { Starfall } from 'components/starfall';
import { useTheme } from 'react-jss';
import styleResets from './style/app-style';

export const AppRenderer: React.FC<IAppRendererProps> = React.memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme = useTheme();
    styleResets(theme);

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Starfall />
            <Home
              toggleDebug={toggleDebug}
              toggleMagic={toggleMagic}
              toggleTheme={toggleTheme}
            />
            <Experience />
          </Route>
        </Switch>
      </Router>
    );
  }
);

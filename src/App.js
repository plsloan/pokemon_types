import 'antd/dist/antd.css';
import { Layout } from "antd";
import { createHashHistory } from 'history';
import React from "react";
import {
  HashRouter,
  Redirect,
  Route
} from "react-router-dom";

import "./App.css";
import { SideBar } from './sidebar/SideBar'
import { AppRoutes } from './utils';
import { Home } from './home/Home';
import { TypeMatchups } from './type-matchups/TypeMatchups';
import { TypeDetails } from './type-matchups/TypeDetails';


function App() {
  let history = createHashHistory();
  const { Content, Header } = Layout;

  return (
    <Layout className="App" hasSider>
      <HashRouter history={history}>
        <SideBar history={history} />

        <Content id='appContent'>
          <Header id='headerContainer'><h1 id='appTitle'>Test Package</h1></Header>

          {/* app content */}
          <div id='pageContent'>
            <Route path={AppRoutes.Home} component={Home} />
            <Route path={AppRoutes.TypeMatchups} exact component={TypeMatchups} />
            <Route path={`${AppRoutes.TypeMatchups}/*`} component={TypeDetails} />
            <Redirect from='*' to={AppRoutes.Home} />
          </div>
        </Content>
      </HashRouter>
    </Layout>
  );
}

export default App;

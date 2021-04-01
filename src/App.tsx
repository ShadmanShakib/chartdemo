import React from 'react';
import {Router} from '@reach/router'
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Recharts from './pages/rechats';
import LineCharts from './pages/apexchart'


function App() {

return(
  <React.Fragment>
    <Layout>
    <Router>
      <Home path='/'/>
      <Recharts path='/recharts'/>
      <LineCharts path='/linecharts'/>
    </Router>
    </Layout>
    
  </React.Fragment>
 
)
}

export default App;

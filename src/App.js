import React from 'react';
import './Style/main.css';

import {Layout} from "./Components"
import {CardsSection} from "./Sections"
const App = () => {
  return ( 
    <Layout>
      <CardsSection />
      <h1> App</h1>
    </Layout>
   );
}
 
export default App;
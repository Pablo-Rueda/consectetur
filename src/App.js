import React from 'react';
import './Style/main.css';

import {Layout} from "./Components"
import {CardsSection, CarrouselSection} from "./Sections"
const App = () => {
  return ( 
    <Layout>
      <CardsSection />
      <CarrouselSection />
      <h1> App</h1>
    </Layout>
   );
}
 
export default App;
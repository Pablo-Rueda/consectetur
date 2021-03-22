import React from 'react';
import './Style/main.css';

import {Layout} from "./Components"
import {CardsSection, CarrouselSection, InfoSection} from "./Sections"
const App = () => {
  return ( 
    <Layout>
      <CardsSection />
      <CarrouselSection />
      <InfoSection />
    </Layout>
   );
}
 
export default App;
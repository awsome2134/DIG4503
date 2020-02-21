import React from 'react';

import NameSearch from './components/NameSearch/';
import IdSearch from './components/IdSearch';

function App() {
  return (
    <div>
      <IdSearch />
      <NameSearch />
      <h2>Reporting</h2>
      <div id="reportingArea"></div>
    </div>
  );
}

export default App;

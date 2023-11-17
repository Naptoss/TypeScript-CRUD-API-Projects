import React from 'react';
import SideBar from './components/SideBar';
import Forms from './components/Forms';
import Content from './components/Content';
 
function App() {
  return (
    <div className="container">
      <SideBar />
      <main>
        <Forms />
        <Content />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Landing from "./components/Landing";

/*function App() {
	return (
		<React.Fragment>
			<Navbar/>
		</React.Fragment>
	);
} */
  function App() {
    return (
      <div>
        <Navbar />
        <Landing/>
        {/* Other components go here */}
      </div>
    );
  }

export default App;
import React from "./core/React.js";
// const App = React.createElement('div', { id: 'app' }, '🦋app',"🥹")
const App = <div id="app">🦋app🦋</div>
function AppOne() {
  return <div id="app">🦋app
  <div className="baby">🥰</div>
  </div> 
}
console.log(AppOne);
export default App
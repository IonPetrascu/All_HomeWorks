import React from "react";
import Tabs from "./Components/Tabs";

function App() {
  const contentText = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet mauris nec ipsum venenatis, a venenatis velit pellentesque. Fusce congue fermentum erat, sit amet egestas lacus dignissim a. Phasellus consectetur, orci nec facilisis ullamcorper, metus leo feugiat nunc, a malesuada ex dui nec quam. Duis non libero in lectus imperdiet auctor. Sed in lectus vel quam luctus laoreet. Vivamus auctor orci vitae felis tristique, vel dictum purus accumsan.'
    },
    {
      id: 2,
      text: 'Quisque bibendum velit eget turpis fermentum congue. Nullam posuere, libero eu tristique laoreet, nisi elit gravida odio, eu pharetra sem nisi nec risus. Vestibulum ac eleifend libero. Sed auctor quam id neque finibus bibendum. Curabitur eu elit justo. Nullam id felis eu velit fringilla pellentesque. Suspendisse potenti. Aliquam fringilla fermentum nulla vel facilisis.'
    },
    {
      id: 3,
      text: 'Etiam nec dolor orci. Vestibulum auctor justo vel quam hendrerit, vel blandit purus bibendum. Ut non augue sapien. Fusce vel magna sit amet urna ullamcorper ultricies vel nec orci. Nam eu augue et neque dapibus aliquam. Integer congue dapibus venenatis. Suspendisse potenti. Suspendisse potenti. Sed bibendum a sem eu blandit. Sed tristique nulla id ultricies vulputate.'
    }
  ]
  return (
    <div className="App">
      <Tabs content={contentText} />
    </div>
  );
}

export default App;

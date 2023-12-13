
import React from "react";
import './../styles/App.css';

const tabsData = [
  {titles: "Tab 1", contents: "This is the content for Tab 1."},
  {titles: "Tab 1", contents: "This is the content for Tab 2."},
  {titles: "Tab 1", contents: "This is the content for Tab 3."},
];

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabs} />

    </div>
  )
}

export default App

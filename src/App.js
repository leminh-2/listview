import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PullToRefresh from "react-pull-to-refresh";

//npm install react-infinite-scroll-component react-pull-to-refresh
function App() {
  const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 5);
  };
  
  const [items, setItems] = useState(Array.from({ length: 20 }, () => generateRandomString()));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    // a fake async api call
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 }, () => generateRandomString())));
    }, 500);
  };

  const handleRefresh = () => {
    return new Promise((resolve) => {
      // a fake async api call
      setTimeout(() => {
        setItems(Array.from({ length: 20 }, () => generateRandomString()));
        resolve();
      }, 500);
    });
  };

  

  return (
    <PullToRefresh onRefresh={handleRefresh} style={{ textAlign: "center" }}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              height: 30,
              border: "1px solid green",
              margin: 6,
              padding: 8,
            }}
          >
            div - #{index} - {item}
          </div>
        ))}
      </InfiniteScroll>
    </PullToRefresh>
  );
}

export default App;
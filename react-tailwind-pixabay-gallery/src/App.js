import React from "react";

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadows-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

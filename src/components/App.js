import { Routes,Route } from "react-router-dom";
import {Home,CreatePost} from './index'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create-post" element={<CreatePost/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

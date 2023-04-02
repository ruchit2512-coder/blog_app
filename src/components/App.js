import { Routes,Route } from "react-router-dom";
import {Home,CreatePost,PostDetail} from './index'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create-post" element={<CreatePost/>}></Route>
        <Route path="/post/:postId" element={<PostDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

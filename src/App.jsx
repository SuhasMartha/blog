import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />

      <Route path="/under-progress" element={<Blog />} />
      {/* Catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
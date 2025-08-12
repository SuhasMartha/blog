import { Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
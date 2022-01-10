import "./App.css";

import VideoGallery from "./pages/video_gallery";
import LandingPage from "./pages/landing_page";
function App() {
  return (
    <div>
      {/* main landing page */}
      <LandingPage />
      {/* video gallery page - showcasing user videos */}
      <VideoGallery />
      <div style={{ marginBottom: "400px" }}></div>
    </div>
  );
}

export default App;

import "./App.css";

// import VideoGallery from "./pages/video_gallery";
import HighlightsSection from "./sections/features_section";
import LandingPage from "./pages/landing_page";
// import MainPage from "./pages/main_page";
import Footer from "./components/Footer/footer";
import AboutSection from "./sections/about_section";
import VideoSection from "./sections/video_carousel";
function App() {
  return (
    <div>
      {/* main landing page */}
      {/* <MainPage /> */}
      <LandingPage />
      {/* video gallery page - showcasing user videos */}
      {/* <VideoGallery /> */}
      <div className="site-wrapper">
        <HighlightsSection />
        <AboutSection />
      </div>
      <div style={{ marginTop: "120px" }}></div>
      <VideoSection />
      <div style={{ marginBottom: "120px" }}></div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import SupportedBy from "./components/supportedby";
import DemoVideo from "./components/demovideo";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import "./App.css"; // General styles


function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      <Landing />
      <SupportedBy />
      <DemoVideo/>
      <Features/>
      <Testimonials/>
      <Footer/>

      {/* Other components will be added here */}
    </div>
  );
}

export default App;

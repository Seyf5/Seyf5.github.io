import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ScrollToTop from "@/components/site/ScrollToTop";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Journey from "@/pages/Journey";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function RoutedPages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="font-body">
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <main className="pt-20">
          <RoutedPages />
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#1e1f22",
              border: "1px solid #313338",
              color: "#f2f3f5",
            },
          }}
        />
      </HashRouter>
    </div>
  );
}

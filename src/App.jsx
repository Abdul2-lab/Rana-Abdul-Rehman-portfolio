import { ThemeProvider } from "./context/ThemeContext";
import { DataSaverProvider } from "./context/DataSaverContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import CursorSpotlight from "./components/CursorSpotlight";
import CommandPalette from "./components/CommandPalette";
import SectionDivider from "./components/SectionDivider";
import EasterEgg from "./components/EasterEgg";
import TabTitleFlasher from "./components/TabTitleFlasher";

function App() {
  return (
    <ThemeProvider>
      <DataSaverProvider>
        <ScrollProgress />
        <CursorSpotlight />
        <CommandPalette />
        <EasterEgg />
        <TabTitleFlasher />
        <Navbar />
        <main>
          <Hero />
          <SectionDivider className="bg-gradient-to-b from-[#0b1120] to-white dark:from-darkbg dark:to-darkbg" />
          <About />
          <SectionDivider className="bg-gradient-to-b from-white to-slate-50 dark:from-darkbg dark:to-darkcard2/40" />
          <Skills />
          <SectionDivider className="bg-gradient-to-b from-slate-50 to-white dark:from-darkcard2/40 dark:to-darkbg" />
          <Projects />
          <SectionDivider className="bg-gradient-to-b from-white to-slate-50 dark:from-darkbg dark:to-darkcard2/40" />
          <Experience />
          <SectionDivider className="bg-gradient-to-b from-slate-50 to-white dark:from-darkcard2/40 dark:to-darkbg" />
          <Certifications />
          <SectionDivider className="bg-gradient-to-b from-white to-slate-50 dark:from-darkbg dark:to-darkcard2/40" />
          <Contact />
          <SectionDivider className="bg-gradient-to-b from-slate-50 to-[#0b1120] dark:from-darkcard2/40 dark:to-black" />
        </main>
        <Footer />
        <ScrollToTop />
      </DataSaverProvider>
    </ThemeProvider>
  );
}

export default App;

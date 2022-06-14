import React from "react";
import { CssBaseline } from "@mui/material";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactForm from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <CssBaseline>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route
                            render={() => (
                                <h1 className="display-2">Wrong Page!</h1>
                            )}
                        />
                    </Routes>
                </main>
            </BrowserRouter>
            <Footer />
        </CssBaseline>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Agenda } from "./views/Agenda";
import { Footer } from "./component/footer";
import { ContactForm } from "./views/ContactForm";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Agenda />} />
                        <Route path="/contact-form" element={<ContactForm />} />
                        <Route path="/edit/:id" element={<ContactForm isEditing />} /> {/* Ruta para la edición de contacto */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);



import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WhatsAppFloatingButton from "../Contact/WhatsAppFloatingButton/WhatsAppFloatingButton";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MainRoot = () => {


    return (
        <div>
            <ScrollToTop />
            <Header />

            <div>
                <div>
                    <Outlet />

                    {/* Whatsapp */}
                    <WhatsAppFloatingButton />

                    <div className="px-4 container mx-auto">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainRoot;
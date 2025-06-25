import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WhatsAppFloatingButton from "../Contact/WhatsAppFloatingButton/WhatsAppFloatingButton";



const MainRoot = () => {
    return (
        <div className=" ">
            <Header></Header>
            <div>
               <div className="">
                  <Outlet></Outlet>
                  {/* Whatsapp */}
                  <WhatsAppFloatingButton />
                  <div className="px-4 container mx-auto">
                    <Footer></Footer>
                  </div>
                  
            </div> 
            </div>
            
          
        </div>
    );
};

export default MainRoot;
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div className="">
            {/* <div className="my-5 w-full mx-auto bg-purple-600 border-2 h-3/4 rounded-3xl absolute"> */}

            <div className="my-5 w-full mx-auto bg-[#9538E2] border-2 h-3/4 rounded-3xl absolute">

            </div>
            <header className="relative top-10">
                <nav className="w-10/12 mx-auto">
                    <Navbar className=""></Navbar>
                </nav>
            </header>

            <div className="">


                <main className="w-10/12 mx-auto">
                    <Outlet></Outlet>

                </main>
                <footer className="w-10/12 mx-auto">
                    <Footer></Footer>
                </footer>

            </div>

        </div>
    );
};

export default Root;
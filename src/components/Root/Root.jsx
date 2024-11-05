import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div className="">
            <div className="my-5 w-full mx-auto bg-purple-600 border-2 h-96 rounded-3xl absolute">


            </div>
            <header className="relative top-10 b-80 flex flex-col">
                <nav className="border-2 rounded-3xl w-10/12 mx-auto pb-20">
                    <Navbar className=""></Navbar>
                    <Banner></Banner>
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
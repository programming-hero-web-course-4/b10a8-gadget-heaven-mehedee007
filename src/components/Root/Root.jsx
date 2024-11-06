import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div className="">
            {/* <div className="my-5 w-full mx-auto bg-purple-600 border-2 h-3/4 rounded-3xl absolute"> */}

            <div className="bg-[#9538E2] m-4 rounded-3xl h-3/4">
                <Navbar></Navbar>

            </div>

            <div className="bg-gray-400 pb-24">


                <main className="w-10/12 mx-auto ">
                    <Outlet></Outlet>

                </main>


            </div>
            <Footer></Footer>


        </div>
    );
};

export default Root;
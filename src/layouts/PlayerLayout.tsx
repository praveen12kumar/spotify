import Navbar from "../components/organisms/navbar/Navbar";
import Sidebar from "../components/organisms/sidebar/Sidebar";
const  PlayerLayout = () => {
    return (
        <div className="w-screen h-dvh relative bg-black">

            {/*Header */}
            <div className="absolute top-0 left-0 w-full h-16">
                <Navbar/>
            </div>

            {/*Sidebar */}
                <div className="absolute top-16 left-0 w-64 h-[calc(100vh-11rem)]">
                    <Sidebar/>
                </div>
            {/*Main Player */}



            {/*Mini Player */}
            
            <div className="absolute bottom-0 left-0 w-full h-24">

            </div>
           
        </div>
    )
}


export default PlayerLayout;
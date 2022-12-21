import React from "react";
import { Route, Routes, Link,useNavigate  } from "react-router-dom"
import MyCalendar from "./Calendar";
import "../style/global.scss"
import AddEvents from "./AddEvents";
import UpdateEvent from "./UpdateEvent";

function App() {
  const btn1 = () => {
    // const windowFeatures = "left=100,top=100,width=320,height=320";
    const handle = window.open("https://anonytesting.com/hostrooms", "_self");
}
  // const navigate  = useNavigate();
  return (
    <>
    <nav className="navbar navbar-light bg-light">
     
      <div className="container-fluid align-items-center">
        <Link className="navbar-brand ms-2" to="/">
         <div style={{display:"flex",width:"200px",height:"100px"}}> <h3>Anony<img src="images/logo.png" style={{color: "red", height:"100px"}} /></h3>
          </div>
          <button style={{height:"50px",border:"none"}} onClick={btn1}>
            <img src="/images/logout1.png" alt="logout" />
            </button>
          {/* </button> */}
        </Link>
        <span className="navbar-brand mb-0 h2 "><Link className="nav-link pe-0 " to={"/events/add"}>Add Event</Link></span>
      </div>

    </nav>
    <Routes>
      <Route  path="/" exact element={<MyCalendar/>} />
      <Route path="/events/add" element={<AddEvents/>}/>
      <Route path="/event/:id/update" element={<UpdateEvent/>}/>
    </Routes>
    </>
  );
}



export default (App)
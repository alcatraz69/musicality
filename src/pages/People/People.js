import Navbar from "../../components/NavBar/Navbar";
import Leftbar from "../../components/LeftBar/Leftbar";
import Suggestions from "../../components/Suggestions/Suggestions";
import Rightbar from "../../components/RightBar/Rightbar";

// import "./People.css";
const People = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Leftbar />
        <Suggestions />
        <Rightbar />
      </div>
    </>
  );
};

export default People;

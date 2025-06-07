import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import OnlineClasses from './Components/OnlineClasses/OnlineClasses';
import OurCourses from './Components/OurCourses/OurCourses';
import StudentTestimonial from './Components/Student\'sTestimonial/StudentTestimonial';
import StudentsWork from './Components/StudentsWork/StudentsWork';

const App = () => {
  return (
    <div basename="/NIFA">
      <Navbar/>
      <Home/>
      <OnlineClasses/>
      <OurCourses/>
      <StudentsWork/>
      <StudentTestimonial/>
      <Footer/>
    </div>
  )
}

export default App;

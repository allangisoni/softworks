import logo from './logo.svg';
//import './App.css';

import {Navbar} from './Navbar.js';
import {Intro, AboutMe, TechStack, Experience, Projects, Contact, FooterSec, SocialMedia, ContactEmail} from './Sections.js';

function App() {
  return (
    <div className="App">

     <div className='pageContainer'> 
       <Navbar/>

       {Intro}
       {AboutMe}

       {TechStack}
       {Experience}
       {Projects}
       {Contact}
       {FooterSec}
       {SocialMedia}
       {ContactEmail}
   
       </div>
      
    </div>
  );
}

export default App;

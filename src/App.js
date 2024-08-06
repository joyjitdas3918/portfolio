import "./App.css";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
function App() {
  const [whoami, setWhoami]=useState("Software Developer");
  useEffect(()=>{
    setTimeout(()=>{
      if(whoami==="Software Developer") setWhoami("MERN Stack Developer");
      else if(whoami==="MERN Stack Developer") setWhoami("Application Developer");
      else if(whoami==="Application Developer") setWhoami("Machine Learning Enthusiast");
      else setWhoami("Software Developer");
    },1500)
  })
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#top">Joyjit Das</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#top">About</a>
        <AnchorLink className="nav-link" href="/skills">Skills</AnchorLink>
        <AnchorLink className="nav-link" href="/achievements">Achievements</AnchorLink>
        <AnchorLink className="nav-link" href="/projects">Projects</AnchorLink>
        <AnchorLink className="nav-link" href="/education">Education</AnchorLink>
        <AnchorLink className="nav-link" href="/contact">Contact</AnchorLink>
        
      </div>
    </div>
  </div>
</nav>
<section id='profile' className="marg">
  
  <div className="row" style={{margin: "auto", alignItems:"center"}}>
  <div className="col-md-6" key='1'>
    <div className="text-center">
    <img src="joyjit_photo-modified.png" className="image-profile" alt="..."/>
    </div>
    </div>
    <div className="col-md-6" key='2'>
    <div className="text-center">
      
    <h6> Hello. I'm</h6>
    <h1>Joyjit Das</h1>
    <h4>{whoami}</h4>
    <div className="column" style={{margin: "auto", alignItems:"center"}}>
    <button type="button" className="btn btn-outline-warning mx-2">Download Resume</button>
    
    <button type="button" className="btn btn-warning mx-2 ">Contact Me</button>

    </div>
    <br />
    <div className="column" style={{margin: "auto", alignItems:"center"}}>
    <a href="https://www.linkedin.com/in/joyjit-das-a380a1207/"><img src="linkedin.png" alt="My LinkedIn Profile" className="icon mx-2"/></a>
    <a href="https://github.com/joyjitdas3918/"><img src="github.png" alt="My Github Profile" className="icon mx-2"/></a>
    

    </div>

    </div>
    </div>
    
    
    
  </div>

</section>
<section id='skills' className="marg">
<br /><br /><br />
  <div className="container">
  <div className="text-center">
    <div className="row">
    <div className="col-md-6 my-2">
  <div className="article-container"><br/><h2>Skills</h2>
  <br/>
      <h3>Programming</h3><h4>C, C++, Java, Python</h4> 
      <br/>
      <h3>Frontend</h3><h4>JavaScript, React js, Redux, Flutter(Dart)</h4> 
      <br/><h3>Backend</h3><h4>Node.js, Express.js</h4> 
      <br/><h3>Database</h3><h4>mySql, MongoDB, Firebase</h4> 
      <br/><h3>Machine Learning</h3><h4>pandas, scikit-learn, keras</h4> <br/>
  </div>
  </div>
  <div className="col-md-6 my-2">
   <div className="row">
   <div className="col-md-4 my-2">
      <img src="icons8-python.gif" height={100} alt="Python"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-java.gif" height={100} alt="Java"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-javascript.gif" height={100} alt="JavaScript"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-react-native.gif" height={100} alt="React js"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-flutter-48.png" height={100} alt="Flutter"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-mongo-db-48.png" height={100} alt="MongoDB"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-nodejs-48.png" height={100} alt="Node.js"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-firebase-48.png" height={100} alt="Firebase"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="icons8-mysql-48.png" height={100} alt="MySQL"></img>
    </div>
    <div className="col-md-12 my-2">
      <img src="icons8-pandas-48.png" height={100} alt="pandas"></img>
    </div>
    
    
    


   </div>
  </div>
  
  </div>
  </div>
  </div>
</section>

<section id='achievements' className="marg">
<br /><br /><br />

<div className="row">
    <div className="col-md-6 my-2">
  <div className="achievement-container">
    <div className="text-center">
  <h2>Achievements</h2>
  <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Knight Badge Holder at Leetcode
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <h6>I have a peak rating of 2118.</h6>
        <a href="https://leetcode.com/u/joyjitdas3918/">Leetcode Profile</a>
        </div>
    </div>
    
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Expert at Codeforces
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <h6>I have a peak rating of 1619.</h6>
        <a href="https://codeforces.com/profile/joyjit_7">Codeforces Profile</a>
        </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        4 Star at Codechef
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <h6>I have a peak rating of 1966.</h6>
      <a href="https://www.codechef.com/users/griffin_codes">Codechef Profile</a>
      </div>
      </div>
  </div>
  </div>
  </div>

    
  
  </div>
  
</div>
</div>
</div>
<div className="col-md-6 my-2">
  <div className="row">
  <div className="col-md-4 my-2">
      <img src="knight.png" height={100} alt="Leetcode Knight Badge"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="codechef.png" height={100} alt="Codechef logo"></img>
    </div>
    <div className="col-md-4 my-2">
      <img src="codeforces.png" height={100} alt="Codeforces logo"></img>
    </div>
  </div>
</div>
</div>
</section>


<section id='projects' className="marg">
<br /><br /><br />

<div className="achievement-container">
  <div className="text-center">
  <h2>Projects</h2>
  </div>
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="5000">
    <div className="card">
  <img src="flutter.png"  className="card-img-top mx-7" alt="Smart Healthcare Disease Predictor App"/>
  <div className="card-body">
    <h5 className="card-title">Smart Healthcare Disease Predictor App</h5>
    <p className="card-text">A flutter mobile application which detects proneness of a person to have a specific disease based on their lifestyle and clinical metrics.</p>
    <a href="https://github.com/joyjitdas3918/Smart-Healthcare-Disease-Predictor-App" className="btn btn-primary">Github Link</a>
  </div>
</div>
    </div>
    <div className="carousel-item active" data-bs-interval="5000">
    <div className="card">
  <img src="flutter.png"  className="card-img-top mx-7" alt="Smart Healthcare Disease Predictor App"/>
  <div className="card-body">
    <h5 className="card-title">Smart Healthcare Disease Predictor App</h5>
    <p className="card-text">A flutter mobile application which detects proneness of a person to have a specific disease based on their lifestyle and clinical metrics.</p>
    <a href="https://github.com/joyjitdas3918/Smart-Healthcare-Disease-Predictor-App" className="btn btn-primary">Github Link</a>
  </div>
</div>
    </div>
    
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
</div>

</section>
<section id='education' className="marg">
<br /><br /><br />

<div className="achievement-container">
<div className="text-center">
  <h2>Education</h2>
  </div>
  </div>
  <div className="container">
      <div className="vl">
        
    <div className="mx-2">
  <br />
    <h3>2020-2024</h3>
    <h4>Bachelor in Technology</h4>
   
    <h5>Information Technology</h5>
   
    <h6>Maulana Abul Kalam Azad University Of Technology, West Bengal</h6>
    <br />
    
    <h6>C.G.P.A: 9.6</h6>
    <br /> <br /><br />
    <h3>2020</h3>
    <h4>ISC</h4>
   
    <h6>CISCE</h6>
   
    <h6>The Assembly Of God Church School, Park Street, Kolkata, West Bengal</h6>
    <br />
    <h6>94.75%</h6>
    <br /> <br /><br />
    <h3>2018</h3>
    <h4>ICSE</h4>
   
    <h5>CISCE</h5>
   
    <h6>The Assembly Of God Church School, Park Street, Kolkata, West Bengal</h6>
    <br />
    <h6>94.4%</h6>
    <br /><br />
    </div>
    </div>
    </div>
  
  </section>
  <footer id='contact'>
    <div className="text-center">
    <h4>Contact Me</h4>
    <div className="row" style={{margin:"auto"}}>
    <div className="col">
      <a href="tel:+918240358933"><img src="phone.png" height={100} alt="My Phone Number" className="icon"/></a>
      <h5>Phone</h5>
      </div>
      <div className="col">
      <a href="mailto:joyjitdas3918@gmail.com"><img src="mail.png" height={100} alt="My Email Address" className="icon"/></a>
      <h5>Mail</h5>
      </div>
      <div className="col">
      <a href="https://www.linkedin.com/in/joyjit-das-a380a1207/"><img src="linkedin-color.png" height={100} alt="My LinkedIn Profile" className="icon"/></a>
      <h5>LinkedIn</h5>
      </div>
    </div>
    
    </div>
    
  </footer>
</>
  );
}

export default App;

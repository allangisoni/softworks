import profileImg from "./allan_.jpg";
import Bootstrapimg from "./images/bootstrap.svg";
import Java from "./images/java.svg";
import JavaScript from "./images/javascript.svg";
import Cplusplus from "./images/cplusplus.svg";
import Mysql from "./images/mysql.svg";
import Php from "./images/php.svg";
import Python from "./images/python.svg";
import React from "./images/react.svg";

import GithubIcon from "./images/ic_github.png";
import LinkedInIcon from "./images/ic_linkedin.png";
import TwitterIcon from "./images/ic_twitter.png";
import Jquery from "./images/jquery.png";
import Wordpress from "./images/wordpress.png";
import Github from "./images/github.png";
import polarintegrated from "./images/polarintegrated.PNG";
import cymalex from "./images/cymalex.PNG";
import hms from "./images/eastway.PNG";

import {
  faExternalLinkAlt,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function openMailBox(){
  return window.location = 'mailto:allangisoni@gmail.com';
}

export const Intro = (
  <div className="container myCon">
    <div className="row">
      <div className="col-lg-0 col-md-0 col-sm-0"> </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="introDiv center">
          <h4 className="introName">Hello World! {" "}  I'm </h4>
          <h1 className="introH1"> Allan Gisoni.</h1>
          <h1 className="introH1SubText">
            {" "}
            A software engineer from Nairobi Kenya!
          </h1>{" "}
          <br />
          <div className="col-lg-7 col-md-7 col-sm-12" id="introcol">
            <p className="introText">
              Designing and developing intuitive software applications is what I
              enjoy doing.
            </p>

            <p className="introText">
              Started out with building simple websites later found myself
              working on complex, exciting and high end{" "}
              <span id="spanHighlight">software applications</span> with huge
              impact on people and business.
            </p>

            <p className="introText">
              Found some new love in{" "}
              <span id="spanHighlight">data science</span> recently.....and its
              blossoming😊. Enjoying the course work at{" "}
              <span id="spanHighlight">Datacamp</span> and working on some
              really awesome real life projects👨‍💻.
            </p>

            <br />

            <button type="button" className="btn btn-outline-success hireMe" onClick={openMailBox}>
              Contact Me!
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-0 col-md-0 col-sm-0"> </div>
    </div>
  </div>
);

export const AboutMe = (
  <div className="container about" id="About">
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-0"> </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="introDiv">
          <br />
          <br />
          <div className="headerSection">
            <h4 className="aboutMeHeader ">
              {" "}
              <span className="spanCount">01. </span>About Me{" "}
            </h4>{" "}
            <hr />
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12" id="introcol">
              <p className="introText">
                My journey as a software engineer over the last 5 years has been
                nothing but amazing.....
              </p>

              <p className="introText">
                With <span className="spanCount">20+</span> applications in
                production, I have curved a niche in software development space
                curating beautiful{" "}
                <span id="spanHighlight"> user experiences </span> for different
                clients.
              </p>

              <p className="introText">
                I enjoy using my{" "}
                <span className="spanCount">
                  attention to detail, agile experience
                </span>{" "}
                and
                <span className="spanCount"> analytical thinking</span> to
                tackle new challenges and bring my difference to the community
                in a positive way. Above all,{" "}
                <span className="spanCount">Empathy</span> and{" "}
                <span className="spanCount">Kindness</span> are values which are
                very dear to me....
              </p>

              <p className="introText">
                <strong>Current Focus:</strong> ⭐Machine Learning, ⭐React, ⭐PHP
                
              </p>

              <br />
              <br />
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12" id="introcol">
              <img src={profileImg} alt="" className="img-rounded " />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-0"> </div>
    </div>
  </div>
);

export const TechStack = (
  <div className="container technology" id="Technology Stack">
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-0"> </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="introDiv">
          <br />
          <br />
          <div className="headerSection">
            <h4 className="aboutMeHeader ">
              {" "}
              <span className="spanCount">02. </span>Technology Stack{" "}
            </h4>{" "}
            <hr />
          </div>

          <br />
          <br />
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12" id="introcol">
              <p className="introText">
                I am knowledgeable in the following technology stacks:
              </p>

              <img
                src={Bootstrapimg}
                alt="bootstrap"
                width="70px"
                height="70px"
                className="stackImg"
              />
              <img src={Java} alt="Java" width="70px" height="70px" className="stackImg"/>
              <img
                src={JavaScript}
                alt="Javascript"
                width="70px"
                height="70px"
                className="stackImg"
              />
              <img src={React} alt="React" width="70px" height="70px" className="stackImg" />
              <img src={Php} alt="PHP" width="70px" height="70px" className="stackImg"/>
              <img src={Python} alt="Python" width="70px" height="70px" className="stackImg"/>
              <img src={Mysql} alt="MySql" width="70px" height="70px"className="stackImg" />
              <img src={Jquery} alt="Jquery" width="70px" height="70px"className="stackImg" />
              <img src={Wordpress} alt="Wordpress" width="70px" height="70px"className="stackImg" />
           

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-0"> </div>
    </div>
  </div>
);

const workplaces = ["Royal Media", "SoftClans Techonology Limited"];

export const Experience = (
  <div className="container" id="Experience">
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-0"> </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="introDiv">
          <br />
          <br />
          <div className="headerSection">
            <h4 className="aboutMeHeader ">
              {" "}
              <span className="spanCount">03. </span>Where I have worked{" "}
            </h4>{" "}
            <hr />
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" id="introcol">
              <div id="workexperience" class="sectionClass">
                <div class="row ">
                  <div class="fullWidth eight columns">
                    <ul class="cbp_tmtimeline">
                      <li>
                        <div class="cbp_tmicon cbp_tmicon-phone">
                          <i class="faPra fa-briefcase"></i>
                        </div>
                        <div class="cbp_tmlabel wow fadeInRight animated">
                          <h3>Software Engineer</h3>
                          <div class="date">
                            <i class="fa fa-calendar"></i>February 2019 -
                            Present
                          </div>
                          <h4>
                            <i class="fa fa-flag"></i>{" "}
                            <span className="spanCount">BAT</span>, Kenya
                          </h4>

                          <p class="projectParagraph">
                            Designed, developed and tested a web application
                            that allows the capture of safety and quality risk
                            levels and effective risk mitigations which is key
                            in driving risk elimination
                          </p>
                          <p class="projectParagraph">
                            Developed power automate flows and apps that
                            simplify business operations leading to increased
                            productivity, team collaborations and $3400 monthly
                            savings on paper.
                          </p>

                          <p class="projectParagraph">
                            Testing of over 20 applications to ensure they meet
                            the specified quality standards and business needs
                            100% of the time.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="cbp_tmicon cbp_tmicon-screen">
                          <i class="faPra fa-briefcase"></i>
                        </div>
                        <div class="cbp_tmlabel wow fadeInRight animated">
                          <h3>Associate Software Developer</h3>
                          <h4>
                            <i class="fa fa-flag"></i>{" "}
                            <span className="spanCount">
                              Softclans Technologies Limited
                            </span>
                            , Kenya
                          </h4>
                          <div class="date">
                            <i class="fa fa-calendar"></i>August 2018 - February
                            2019
                          </div>
                          <p class="projectParagraph">
                            Collaborated with other software developer
                            associates to develop a project management system
                            which increased transparency and efficiency by{" "}
                            <strong> 75% </strong> in organization projects.
                          </p>
                          <p class="projectParagraph">
                            Worked with the lead software developer to design
                            and develop interactive dashboards and reports
                            across various functions that enabled managers to
                            drive agent engagement and motivation.
                          </p>
                        </div>
                      </li>

                      <li>
                        <div class="cbp_tmicon cbp_tmicon-screen">
                          <i class="faPra fa-briefcase"></i>
                        </div>
                        <div class="cbp_tmlabel wow fadeInRight animated">
                          <h3>User Experience Associate</h3>
                          <h4>
                            <i class="fa fa-flag"></i>{" "}
                            <span className="spanCount">
                              Olivine Technology Limited
                            </span>
                            , Kenya
                          </h4>
                          <div class="date">
                            <i class="fa fa-calendar"></i>October 2011 - August
                            2018
                          </div>
                          <p class="projectParagraph">
                            Contributed to the creation and implementation of a
                            Customer Relationship Management System which
                            reduced clients management issues by{" "}
                            <strong> 80% </strong>
                          </p>
                          <p class="projectParagraph">
                            Collaborated with other team members to create test
                            cases for the ASIM system which led to 95%
                            deployment success rate.
                          </p>
                        </div>
                      </li>

                      <li>
                        <div class="cbp_tmicon cbp_tmicon-screen">
                          <i class="faPra fa-briefcase"></i>
                        </div>
                        <div class="cbp_tmlabel wow fadeInRight animated">
                          <h3>ICT intern</h3>
                          <h4>
                            <i class="fa fa-flag"></i>{" "}
                            <span className="spanCount">
                              Royal Media Services Limited
                            </span>
                            , Kenya
                          </h4>
                          <div class="date">
                            <i class="fa fa-calendar"></i>May 2016 - August 2016
                          </div>
                          <p class="projectParagraph">
                            Assisted in resolving network issues across the
                            organization which led to improved user experience
                            and enabled the users to accomplish their tasks
                            effectively.
                          </p>
                          <p class="projectParagraph">
                            Installed and configured Active Directory on 120
                            workstations which made it easier to perform network
                            updates and assign different network resources to
                            the various users.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-0"> </div>
    </div>
  </div>
);

export const Projects = (
  <div className="container" id="Projects">
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-0"> </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="introDiv">
          <br />
          <br />
          <div className="headerSection">
            <h4 className="aboutMeHeader ">
              {" "}
              <span className="spanCount">03. </span>Some of my works{" "}
            </h4>{" "}
            <hr />
          </div>

          <br />
          <br />
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12" id="introcol">
              <div id="workexperience" class="sectionClass">
                <div class="row projectsRow ">
                  <img
                    src={hms}
                    alt="Polar Integrated"
                    className="project1"
                  />

                  <div className="projects1Div">
                    <p className="projectsTitle">Featured Project</p>
                    <h4 className="projectsTitle1">Hospital Management System</h4>
                    <div className="projectsCard1">
                      <p>
                        {" "}
                        Designed and developed an end to end cloud based hospital management system that allows users to run their 
                        core financial and operational processes
                      </p>
                    </div>

                    <div className="projectsText">
                      <p className="projectsTextp">React</p>
                      <p className="projectsTextp">HTML</p>
                      <p className="projectsTextp">CSS</p>
                      <p className="projectsTextp">Javascript</p>
                      <p className="projectsTextp">Bootstrap</p>
                    </div>

                    <div className="projectsLink">
                    
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                  </div>
                </div>

                <div class="row projectsRow ">
                  <div className="projects2Div">
                    <p className="projectsTitle2">Featured Project</p>
                    <h4 className="projectsTitle22">Cymalex</h4>
                    <div className="projectsCard2">
                      <p>
                        {" "}
                        Designed and developed a website for an electrical installation
                        company, Cymalex Lectricals Limited.
                      </p>
                    </div>

                    <div className="projectsText2">
                      <p className="projectsTextp">HTML</p>
                      <p className="projectsTextp">CSS</p>
                      <p className="projectsTextp">Javascript</p>
                      <p className="projectsTextp">Bootstrap</p>
                    </div>

                    <div className="projectsLink2">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                  </div>
                  <img
                    src={cymalex}
                    alt="Cymalex"
                    className="project2"
                  />
                </div>
                <div class="row projectsRow ">
                  <img
                    src={polarintegrated}
                    alt=""
                    className="project1"
                  />

                  <div className="projects1Div">
                    <p className="projectsTitle">Featured Project</p>
                    <h4 className="projectsTitle1">Polar Integrated</h4>
                    <div className="projectsCard1">
                      <p>
                        {" "}
                        Designed and developed a website for telecommunications
                        company, Polar Integrated
                      </p>
                    </div>

                    <div className="projectsText">
                      <p className="projectsTextp">HTML</p>
                      <p className="projectsTextp">CSS</p>
                      <p className="projectsTextp">Javascript</p>
                      <p className="projectsTextp">Bootstrap</p>
                    </div>

                    <div className="projectsLink">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>
                <h4 className="noteworthyh4">Other Noteworthy Projects</h4>
                <br />

                <div className="noteworthyCards">
                  <div className="card noteworthyCard1">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="icon1">
                            <FontAwesomeIcon icon={faFolderOpen} size="2x" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="icon2">
                            {" "}
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              size="1x"
                            />{" "}
                          </div>
                        </div>
                      </div>

                      <br />
                      <h5>Ben Talks</h5>
                      <br />
                      <p className="noteworthyp">
                     Motivational speaker website that serves as inspration platform to people from all walks of life. Be Inspired today!!
                      </p>

                      <br />
                      <br />
                      <p className="noteworthyp1">
                        {" "}
                      HTML CSS3 Bootstrap Jquery
                      </p>
                    </div>
                  </div>

                  <div className="card noteworthyCard1">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="icon1">
                            <FontAwesomeIcon icon={faFolderOpen} size="2x" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="icon2">
                            {" "}
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              size="1x"
                            />{" "}
                          </div>
                        </div>
                      </div>

                      <br />
                      <h5>MyDarasa App</h5>
                      <br />
                      <p className="noteworthyp">
                      Android app that allows you to get to know what happens in your child's school in real-time..
                      </p>

                      <br />
                      <br />
                      <p className="noteworthyp1">
                        {" "}
                        Java Android MySQL REST JSON ESPRESSO{" "}
                      </p>
                    </div>
                  </div>

                  <div className="card noteworthyCard1">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="icon1">
                            <FontAwesomeIcon icon={faFolderOpen} size="2x" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="icon2">
                            {" "}
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              size="1x"
                            />{" "}
                          </div>
                        </div>
                      </div>

                      <br />
                      <h5>Covid 19 Tracker</h5>
                      <br />
                      <p className="noteworthyp">
                       R powered Covid 19 real-time dashboard with key statistics and virus trends per region and  country.
                      </p>

                      <br />
                      <br />
                      <p className="noteworthyp1">
                        {" "}
                        R ShinyR{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-0"> </div>
    </div>
  </div>
);

export const Contact = (
  <div className="container " id="Contact">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="introDiv">
          <br />
          <br />
          <div className="headerSection5">
            <h4 className="aboutMeHeader5 ">
              {" "}
              <span className="spanCount">05. </span>Get in Touch{" "}
            </h4>{" "}
          </div>

          <br />
          <br />
          <div className="row rowContact ">
            <div className="col-md-12">
              <p className="contactp">
                My inbox is always open. Whether you have a question or just
                want to say hello, I'll try my best to get back to you! Feel
                free to mail me about any relevant job updates.{" "}
              </p>

              <br />
              <br />

              <button type="button" className="btn btn-outline-success hireMe" onClick={openMailBox}>
                Mail Me!
              </button>

              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-0"> </div>
    </div>
  </div>
);

export const FooterSec = (
  <footer>
    <p>
      {" "}
      Designed & Built by Brittany Chiang <br /> Revised by Allan Gisoni
    </p>
  </footer>
);

export const SocialMedia = (
  <div className="socialMedia">
    <img src={GithubIcon} className="socialIcons" />
    <img src={LinkedInIcon} className="socialIcons1" />
    <img src={TwitterIcon} className="socialIcons" />

    <hr />
  </div>
);

export const ContactEmail = (
  <div className="contactEmail">
    <p>Allangisoni@gmail.com</p>

    <hr />
  </div>
);

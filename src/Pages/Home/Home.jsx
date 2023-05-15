import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import Skill from '../../Components/Skill/Skill'
import Project from '../../Components/Project/Project'
import SocialBtn from '../../Components/SocialBtn/SocialBtn';



import { devSkills, desSkills, projects } from '../../data/data';

function Home(){



      return (
            <>
            <Header />
            <section id='home-hero'>
                  <div id='home-hero_content'>
                        <h1 className='heading-first'>HEY, I'M MARIA ROUDIER</h1>
                        <p className='text-centered'>A front-End JavaScript and React junior developer based in France</p>
                        <Button hash="#projects" text="PROJECTS" />
                  </div>
                  <div id='home-hero_socials'>
                        <SocialBtn />
                  </div>
            
            </section>
            <section id='about'>
                  <h2 className='heading-second'>ABOUT ME</h2>
                  <div className='about_content'>
                        <div className='about-content_block'>
                              <h3 className='heading-third'>Get to know me!</h3>
                              I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.
                        </div>
                        <div className='about-content_block'>
                              <h3 className='heading-third'>Developer Skills</h3>
                              <div className='skills'>
                                    { devSkills.map(skill => {
                                          return (
                                                <Skill text={skill}/>
                                          )
                                    })}
                                    
                              </div>
                              <h3 className='heading-third'>Design Skills</h3>
                              <div className='skills'>
                                    { desSkills.map(skill => {
                                          return (
                                                <Skill text={skill}/>
                                          )
                                    })}
                                    
                              </div>
                        </div>
                  </div>
                  <Button hash="#contact" text="CONTACT"/>
            </section>
            <section id='projects'>
                  <h2 className='heading-second'>PROJECTS</h2>
                  <div id='projects'>
                        { projects.map(project => {
                              console.log(project.pic)
                              // const setImage = () => {
                              //       switch() {
                              //             case ''
                              //       }
                              // }
                              return (
                                    
                                    <Project titre={project.name} description={project.description} image={project.pic}/>
                              )
                        })}
                  </div>
            </section>
            <section id='contact'>
                  <h2 className='heading-second'>CONTACT</h2>
                  <form>
                        <Button hash="" text="SUBMIT"/>
                  </form>
            </section>
            <Footer />
            </>
      )
}

export default Home;
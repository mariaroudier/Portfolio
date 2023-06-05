import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link, animateScroll as scroll } from "react-scroll";

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Skill from '../../Components/Skill/Skill'
import Project from '../../Components/Project/Project'
import SocialBtn from '../../Components/SocialBtn/SocialBtn';
import Vanta from '../../Components/Vanta/Vanta'

import { devSkills, desSkills, projects } from '../../data/data';

function Home(){
      return (
            <>
            <Header />
            <section id='home-hero' >
                  <Vanta />
                  <div id='home-hero_content'>
                        <h1 className='heading-first'>HEY, I'M MARIA ROUDIER</h1>
                        <p className='text-centered'>A front-End JavaScript and React junior developer based in France</p>
                        <div className='btn'>
                              <Link className='link' to="projects"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    PROJECTS
                              </Link>
                        </div>
                  </div>
                  <div id='home-hero_socials'>
                        <SocialBtn />
                  </div>
            </section>
            <section id='about'>
                  <h2 className='heading-second'>ABOUT ME</h2>
                  <span className='text-centered_small'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</span>
                  <div className='about_content'>
                        <div className='about-content_block'>
                              <div>
                                    <h3 className='heading-third'>Get to know me!</h3>
                                    <p className='sub'>I'm a Frontend Web junior Developer building the Front-end of Websites and Web Applications. Check out some of my work in the Projects section.
                                    <br/>
                                    <br/>
                                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                                    <br/>
                                    <br/>
                                    Feel free to Connect or Follow me on my Linkedin.
                                    </p>
                              </div>
                              <div className='btn'>
                                    <Link className='link' to="contact"
                                          activeClass="active"
                                          spy={false}
                                          smooth={true}
                                          offset={-70}
                                          duration={800}>
                                          CONTACT
                                    </Link>
                              </div>
                        </div>
                        <div className='about-content_block'>
                              <h3 className='heading-third'>Developer Skills</h3>
                              <div className='skills'>
                                    { devSkills.map(skill => {
                                          return (
                                                <Skill text={skill} key={skill}/>
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
            </section>
            <section id='projects'>
                  <h2 className='heading-second'>PROJECTS</h2>
                  <span className='text-centered_small'>Here you will find some of the personal and clients projects that I created with each project containing its own case study.</span>
                  <div id='projects-list'>
                        { projects.map(project => {
                              return (
                                    <>
                                          <Project title={project.name} description={project.description} image={project.cover} images={project.images} tools={project.tools} url={project.repo}/>
                                          {/* <div className='project-line'></div> */}
                                    </>
                              )
                        })}
                  </div>
            </section>
            <section id='contact'>
                  <div className='contact_content'>
                        <h2 className='heading-second'>CONTACT</h2>
                        <span className='text-centered'>Feel free to Contact me by</span>
                        <span className='text-centered_small'>mariaroudier@gmail.com</span>
                        <span className='text-centered_small'>+330774849422</span>
                  </div>
            </section>
            <Footer />
            </>
      )
}

export default Home;
import React, { useState } from 'react';

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import Skill from '../../Components/Skill/Skill'
import Project from '../../Components/Project/Project'
import SocialBtn from '../../Components/SocialBtn/SocialBtn';

function Home(){
      return (
            <>
            <Header />
            <section id='home-hero'>
                  <div id='home-hero_content'>
                        <h1>Hey, I'm Maria Roudier</h1>
                        A front-End JavaScript and React junior developer based in France
                        <Button hash="#projects" text="Projects" />
                  </div>
                  <div id='home-hero_socials'>
                        <SocialBtn img alt url/>
                  </div>
            
            </section>
            <section id='about'>
                  <h2>ABOUT ME</h2>
                  <div>
                        <div>
                        Get to know me!
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.
                        <Button hash="#contact" text="Contact"/>
                        </div>
                        <div>
                              Skills
                              <Skill text="HTML"/>
                        </div>
                  </div>
            </section>
            <section id='projects'>
                  <h2>PROJECTS</h2>
                  <Project titre="GoodFood" text="description" image=""/>
            </section>
            <section id='contact'>
                  <h2>CONTACT</h2>
                  <form>
                        <Button hash="" text="Submit"/>
                  </form>
            </section>
            <Footer />
            </>
      )
}

export default Home;
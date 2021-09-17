import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <div>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Bharath J</span>
              </p>
              <h2 className="about__heading">CSE, undergraduate at CMRIT</h2>
              <div className="about__info">
                <PText>
                  I am from Bangalore, Karnataka. I'm an undergraduate from CMRIT with 
                  an aggregate cgpa of 8.58. I'm am good at coding with Java,Python,C
                  and technical subjects which i'm interested more are DSA, OOPS, DBMS, UP, Cloud, AI and ML, 
                  etc.
                  <br /> <br />
                  I started developing websites and apps from my 3rd year of eengineering and i have always 
                  did my works with great zeal. I have also participated in hackathons concerning to the same.
                  Currently i'm working on improving myself more towards Data Science by doing the online courses and 
                  reading blogs.
                  <br />
                  <br />
                  I play Cricket and other sports to keep my mind fresh and to stay fit.
                  Some of my other qualities include good listening skills, team work, problem solving, 
                  good work ethics etc.  
                  My vision is to make the world a better place through the products and technologies.
                  I believe I have the capabilities to make the world a better place along with the right people. 
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['St. Philomena\'s English School, Sarjapura']}
              />
              <AboutInfoItem
                title="College"
                items={['Christ Junior College, Bangalore']}
              />
              <AboutInfoItem
                title="University"
                items={['CMR Institute Of Technology, Bangalore']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['MongoDB', 'MySQL', 'PHP']}
              />
              <AboutInfoItem
                title="AppDev"
                items={['Java', 'Kotlin', 'Flutter']}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['hkfdhk']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['sfaklgh ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['dskfhklds']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </div>
  );
}

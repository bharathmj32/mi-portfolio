import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Bharath J</h1>
          <PText>
            I am a computer science undergrad at CMRIT, working towards building skills in Data Science and Machine Learning. I'm  quite skilled in Web Development and Android App Development. I'm looking for internships and job opportunities related to software development.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navigation Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 9148333579',
                path: 'tel:+91 9148333579',
              },
              {
                title: 'bharathmj32@gmail.com',
                path: 'mailto:bharathmj32@gmail.com',
              },
              {
                title: 'Mugalur, Bangalore, Karnataka',
                path: 'https://goo.gl/maps/iZqycoScNMJFUWu47',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/luckybharath.aradhya',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/bharath-j-ab6700209',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/lucky_bharath_aradhya/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
             © Bharath J | 2021
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer >
          <a  href="https://twitter.com/asamaiya00">
            <FontAwesomeIcon style={{marginRight:"20px"}}
              color="#00acee"
              className="fa-2x"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </a> 
          <a href="https://github.com/asamaiya00/corona-tracker-global">
            <FontAwesomeIcon style={{marginRight:"20px"}}
              color="grey"
              className="fa-2x"
              icon={faGithub}
            ></FontAwesomeIcon>
          </a> 
          <a href="https://in.linkedin.com/in/animesh-samaiya-aa3166190">
            <FontAwesomeIcon 
              color="#0e76a0"
              className="fa-2x"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </a> 
        </footer>
    )
}

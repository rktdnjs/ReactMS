import {
    FooterDiv,
    FooterBig,
    FooterSmall,
} from './styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react'

function Footer() {
  return (
    <FooterDiv>
        <FontAwesomeIcon icon={faReact}/>
        <FooterBig>For React Study</FooterBig>
        <FooterSmall>2022 by MS</FooterSmall>
    </FooterDiv>
  )
}

export default React.memo(Footer);
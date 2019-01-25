import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

import telegram from '../../../static/icons/telegram.svg'
import dribbble from '../../../static/icons/dribbble.svg'
import instagram from '../../../static/icons/instagram.svg'
import behance from '../../../static/icons/behance.svg'
import twitter from '../../../static/icons/twitter.svg'

const StyledSocialBlock = styled.div`
  height:78px;
  padding-left:30px;
  position: relative;
  border: 1.5px solid #d5d6da;
  border-right: 0;
  border-radius: 6px 0 0 6px;
  top: 17px;
  a{
    margin-right:30px;
  }
  @media (max-width: 1015px) {
    margin-bottom:40px;
    margin-top:20px;
    display:flex;
    justify-content:center;
    position: relative;
    top: 0;
    padding: 50px;
    border: 0;
    width:400px;
  }
`

const StyledSocialIcon = styled.img`
  top:15px;
  padding: 5px;
  display: inline-block;
  width: 45px;
  height: 45px;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
    cursor:pointer;
  }
  @media (max-width: 1015px) {
    top: 0;
    width: 38px;
  height: 38px;
  }
`

const SocialBlock = () => {
  const social = [
    { url: 'https://instagram.com/peacebot', value: 'instagram' },
    { url: 'https://dribbble.com/peacebot', value: 'dribbble' },
    { url: 'https://www.behance.net/user/?username=peacebot', value: 'behance' },
    { url: 'https://twitter.com/peacebot_t', value: 'twitter' },
    { url: 'https://t.me/peacebot_t', value: 'telegram' },
  ]

  const SocialIcon = ({ link, icon }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocialIcon src={icon} />
      </a>
    )
  }

  return (
    <StyledSocialBlock>
      <SocialIcon link={'https://instagram.com/peacebot'} icon={instagram} />
      <SocialIcon link={'https://dribbble.com/peacebot'} icon={dribbble} />
      <SocialIcon link={'https://www.behance.net/user/?username=peacebot'} icon={behance} />
      <SocialIcon link={'https://twitter.com/peacebot_t'} icon={twitter} />
      <SocialIcon link={'https://t.me/peacebot_t'} icon={telegram} />
    </StyledSocialBlock>
  )
}

export default SocialBlock

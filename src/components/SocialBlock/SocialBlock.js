import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'
import Telegram from '../../assets/telegram.svg'

const StyledSocialBlock = styled.div`
  position: relative;
  top: 20px;
  @media (max-width: 1015px) {
    position: relative;
    top: 0;
    padding: 80px;
  }
`

const StyledSocialIcon = styled(SocialIcon)`
  .social-svg-icon {
    fill: white !important;
  }
`
const StyledTelegram = styled(Telegram)`
  padding: 5px;
  display: inline-block;
  width: 45px;
  height: 45px;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
`

const SocialBlock = () => {
  const social = [
    'https://instagram.com/peacebot',
    'https://dribbble.com/peacebot',
    'https://www.behance.net/user/?username=peacebot',
    'https://twitter.com/peacebot_t',
  ]

  const icons = social.map(url => (
    <StyledSocialIcon
      key={url}
      url={url}
      color="transparent"
      style={{ height: 75, width: 75 }}
    />
  ))

  const telegram = (
    <a
      href="https://t.me/peacebot_t
        
      "
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledTelegram />
    </a>
  )

  return (
    <StyledSocialBlock>
      {icons}
      {telegram}
    </StyledSocialBlock>
  )
}

export default SocialBlock

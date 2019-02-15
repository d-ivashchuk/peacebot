import React from 'react';
import styled from 'styled-components'

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.show ? '1' : '0')};
  z-index: ${props => (props.show ? '500' : '-1')};
  display: : ${props => (props.show ? 'block' : 'none')};
`

const Backdrop = ({ children, show }) => (
    <StyledBackdrop show={show}>
        {children}
    </StyledBackdrop>
)

export default Backdrop
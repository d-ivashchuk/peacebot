import React from 'react';
import styled from 'styled-components'

import cancel from '../../../static/icons/cancel.svg'

const Form = styled.form`
  position: fixed;
  z-index: 101;
  background-color: white;
  width: 50%;
  max-width: 800px;
  border-radius: 4px;
  padding: 30px;
  left: 25%;
  top:10px;
  box-sizing: border-box;
  transition: opacity 0.5s, display 0.3s;
  opacity: ${props => (props.show ? '1' : '0')};
  z-index: ${props => (props.show ? '500' : '-1')};
  display: : ${props => (props.show ? 'block' : 'none')};
  @media(max-width: 775px) {
  left: 5%;
  width:90%;
  }
  @media(max-width: 560px) {
    padding: 10px;
  }
  @media(max-height: 900px){
      position:absolute;
  }
*{
    font-weight:100;
    color:#2d3047;
}
`
const FormHeader = styled.h2`
padding:15px;
text-align:center;
`
const FormBody = styled.div`
padding:0 15px 0 15px;
`
const FormField = styled.p`
display:flex;
flex-direction:column;
textarea{
    font-family: inherit;
font-size: inherit;
    margin-top:8px;
    max-width:100%;
    min-height:100px;
    padding:10px;
    border-radius:6px;
    border: 2px solid #d5d6da;
    transition: border 0.3s;
    color:#2d3047;
    :focus{
        transition: border 0.3s;
        border: 2px solid #15cc79; 
    }
}
label{
    margin-left:10px;
}
input{
    margin-top:8px;
    padding:8px;
    border-radius:6px;
    color:#2d3047;
    border: 2px solid #d5d6da;
    transition: border 0.3s;
    :focus{
        transition: border 0.3s;
        border: 2px solid #15cc79; 
    }
}
`
const ButtonContainer = styled.div`
display:flex;
justify-content:center;
`
const FormButton = styled.button`
cursor:pointer;
height: 58px;
max-width:270px;
width:90%;
margin:20px auto 20px auto;

border-radius:6px;
border: 2px solid #15cc79; 
padding:10px 20px 10px 20px;
color:#15cc79;
transition:all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
&:hover{
    background-color:#15cc79;
    color:white;
    transition:all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1)
}
`

const GreenSpan = styled.span`
color:#15cc79;
`
const ThanksMessages = styled.div`
p{
    margin-top:20px;

}
`

const SubLabel = styled.label`
padding-top:5px;
color:#9698a3;
`

const CancelContainer = styled.div`
display:flex;
justify-content:flex-end;
`
const StyledCancel = styled.img`
width:20px;
cursor:pointer;
transition:all 0.3s;
margin:10px;
&:hover{
    transition:all 0.3s;
    transform:scale(1.2)
}
`

class SubmissionForm extends React.Component {
    render() {
        return (
            <Form show={this.props.show} name="contact" action="/success" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <CancelContainer><StyledCancel onClick={this.props.toggleForm} src={cancel} /></CancelContainer>
                <FormHeader>Let's get <GreenSpan>started</GreenSpan></FormHeader>
                <FormBody>
                    <p style={{ display: 'none' }}>
                        <label>Don’t fill this out if you're human:  <input name="bot-field" /></label>

                    </p>

                    <FormField>
                        <label>Your Name </label>
                        <input type="text" name="name" required />
                    </FormField>
                    <FormField>
                        <label>Email </label>
                        <input type="email" name="email" required />

                    </FormField>

                    <FormField>
                        <label>Objective </label>
                        <input type="objective" name="objective" required />
                        <SubLabel >E.G. Logo design</SubLabel>
                    </FormField>
                    <FormField>
                        <label>Additional info </label>
                        <textarea name="additionalInfo"></textarea>
                        <SubLabel>You can include here any info that will help me understand the project better. (E.g. present guidlines,sketches, thoughts, aims, whatever)</SubLabel>
                    </FormField>
                    <ButtonContainer>
                        <FormButton type="submit">Start Project</FormButton>
                    </ButtonContainer>
                    <ThanksMessages>
                        <p>I will process your request within three working days.</p>
                        <p>☀️ Have a nice day</p>
                    </ThanksMessages>
                    <div data-netlify-recaptcha="true"></div>
                    <input type="hidden" name="form-name" value="contact" />
                </FormBody>


            </Form>

        );
    }
}

export default SubmissionForm;

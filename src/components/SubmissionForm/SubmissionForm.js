import React from 'react';

class SubmissionForm extends React.Component {
    render() {
        return (
            <form name="contact" action="/success" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <p style={{ display: 'none' }}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>

                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>

                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <button type="submit">Send</button>
                </p>
                <input type="hidden" name="form-name" value="contact" />
            </form>

        );
    }
}

export default SubmissionForm;

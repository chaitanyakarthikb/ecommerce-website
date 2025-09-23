import styled from "styled-components";

 const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7596.683097435095!2d83.40982674128917!3d17.82261683256243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395a0c5d892201%3A0x2aa1f1ff66ed7ff0!2sThotlakonda%20Beach!5e0!3m2!1sen!2sin!4v1758521716097!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xjkaboyj" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off"/>
            <input type="email" placeholder="email" name="email" required autoComplete="off"/>
            <textarea name="message" cols={30} rows={10} required autoComplete="off" placeholder="Enter your message"></textarea>
            <input type="submit"  name="submit button" value={"Send"}/>



          </form>

        </div>

      </div>
    </Wrapper>
  );
};

export default Contact;

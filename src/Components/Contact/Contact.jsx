import '../Contact/Contact.css'
const Contact = () => {
  return (
    <>
      <div className='contact'>
        <form >
          <label htmlFor="username">UserName: </label>
          <input type="text" id='username' placeholder='Enter Username' required />
        </form>
      </div>
    </>
  );
};
export default Contact;

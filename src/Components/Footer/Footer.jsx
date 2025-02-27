import "../Footer/Footer.css";
const Footer = () => {
  const handlerInstagram = () => {
    let link = document.createElement("a");
    link.href = "https://www.instagram.com/";
    link.click();
  };
  const handleFacebook = () => {
    let link = document.createElement("a");
    link.href =
      "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F";
    link.click();
  };
  return (
    <>
      <div className="footer">
        <div className="footer-icons">
          <i
            class="fa-brands fa-instagram instagram"
            onClick={handlerInstagram}
          ></i>
          {/* <i class="fa-brands fa-twitter twitter" onClick={handleTwitter}></i> */}
          <i
            class="fa-brands fa-facebook facebook"
            onClick={handleFacebook}
          ></i>
          <i class="fa-brands fa-whatsapp whatsapp"></i>
          <i class="fa-brands fa-telegram telegram"></i>
        </div>
      </div>
    </>
  );
};
export default Footer;

const Footer = () => {
  return (
    <div className="Footer">
      <div className="flex-footer">
        <div className="moto-rental-footer">
          <h1>Moto Rental</h1>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <h4>(123) -456-789</h4>
          <h5>motorental@gmail.com</h5>
          <p>Design by XpeedStudio</p>
        </div>
        <div className="company-footer">
          <h1>Company</h1>
          <p>New York</p>
          <p>Careers</p>
          <p>Mobile</p>
          <p>Blog</p>
          <p>How we work</p>
        </div>
        <div className="working-footer">
          <h1>WORKING HOURS</h1>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="sub-footer">
          <h1>SUBSCRIPTION</h1>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input type="email" name="email" placeholder="Enter Email Address" />
          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

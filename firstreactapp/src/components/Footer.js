function Footer() {
    return (
        <footer>
        <div className="footer">
           <div className="container">
              <div className="row">
                 <div className="col-md-3 col-sm-6">
                    <div className="infoma text_align_left">
                       <h3>About</h3>
                       <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur </p>
                       <ul className="social_icon">
                          <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                          <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                          <li><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-md-3 col-sm-6">
                    <div className="infoma">
                       <h3>Adderess</h3>
                       <ul className="conta">
                          <li>Healing Center, oo W Street name, <br/>
                             Loram ipusum 
                          </li>
                          <li>(+71) 8522369417 <br/>(+71) 8522369417</li>
                          <li></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-md-3 pad_lrft col-sm-6">
                    <div className="infoma">
                       <h3>Links</h3>
                       <ul className="fullink">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="about.html">About</a></li>
                          <li><a href="shop.html">Shop</a></li>
                           <li><a href="quality.html">Quality</a></li>
                          <li><a href="contact.html">Contact</a></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-md-3 col-sm-6">
                    <div className="infoma">
                       <h3>Newsletter</h3>
                       <form className="form_subscri">
                          <div className="row">
                             {/* <div className="col-md-12">
                                <input className="newsl" placeholder="Your Name" type="text" name="Your Name"/>
                             </div>
                             <div className="col-md-12">
                                <input className="newsl" placeholder="Email" type="text" name="Email"/>
                             </div> */}
                             <div className="col-md-12">
                                <button className="subsci_btn">subscribe</button>
                             </div>
                          </div>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
           <div className="copyright">
              <div className="container">
                 <div className="row">
                    <div className="col-md-12">
                       <p>© 2020 All Rights Reserved.  <a href="https://html.design/"> Free html Templates</a></p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </footer>
    )
}

export default Footer;
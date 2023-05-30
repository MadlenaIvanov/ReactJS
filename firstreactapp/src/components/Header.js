export default function Header() {
  return (
    <header>
    <div className="menu_sitbar di_mr01">
       <div className="logo">     
          <a href="index.html"><img src="images/logo.png" alt="#"/></a>
       </div>
       <nav className="navigation navbar navbar-expand-md navbar-dark ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample05">
             <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                   <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="shop.html">shop</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="quality.html">quality</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
             </ul>
          </div>
       </nav>
    </div>
    <div className="header_full_banne">
       <div className="header">
          <div className="container-fluid">
             <div className="row d_flex">
                <div className=" col-md-2 col-sm-3 col logo_section di_mr0">
                   <div className="full">
                      <div className="center-desk">
                         <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt="#"/></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="col-md-8 col-sm-9 di_mr0">
                   <nav className="navigation navbar navbar-expand-md navbar-dark ">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarsExample04">
                         <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                               <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="shop.html">shop</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="quality.html">quality</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="contact.html">Contact Us</a>
                            </li>
                         </ul>
                      </div>
                   </nav>
                </div>
                <div className=" col-md-8 d_none">
                   <ul className="conta_top">
                      <li><i className="fa fa-phone" aria-hidden="true"></i> Call   + 01 1234567890</li>
                      <li> <i className="fa fa-envelope" aria-hidden="true"></i></li>
                   </ul>
                </div>
                <div className="col-md-4">
                   <ul className="email text_align_right">
                      <li className="d_none"><i className="fa fa-user" aria-hidden="true"></i></li>
                      <li className="d_none"><i className="fa fa-search" aria-hidden="true"></i></li>
                   </ul>
                </div>
             </div>
          </div>
       </div>

       <div className="full_bg">
          <div className="slider_main">
             <div className="container-fluid">
                <div className="row">
                   <div className="col-md-12">

                      <div id="carouselExampleIndicators" className="carousel slide">
                         <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                         </ol>
                         <div className="carousel-inner">

                            <div className="carousel-item active">
                               <div className="carousel-caption relative">
                                  <div className="row d_flex">
                                     <div  className="col-md-7">
                                        <div className="board">
                                           <h3>
                                              You can Get 
                                              Pure Hony Here
                                           </h3>
                                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                           <a className="read_more" href="contact.html">Contact  </a>
                                        </div>
                                     </div>
                                     <div className="col-md-5">
                                        <div className="banner_img">
                                           <figure><img className="img_responsive" alt="" src="images/banner_img.png"></img></figure>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>

                            <div className="carousel-item">
                               <div className="carousel-caption relative">
                                  <div className="row d_flex">
                                     <div  className="col-md-7">
                                        <div className="board">
                                           <h3>
                                              You can Get 
                                              Pure Hony Here
                                           </h3>
                                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                           <a className="read_more" href="contact.html">Contact  </a>
                                        </div>
                                     </div>
                                     <div className="col-md-5">
                                        <div className="banner_img">
                                           <figure><img className="img_responsive" alt="" src="images/banner_img.png"/></figure>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>

                            <div className="carousel-item">
                               <div className="carousel-caption relative">
                                  <div className="row d_flex">
                                     <div  className="col-md-7">
                                        <div className="board">
                                           <h3>
                                              You can Get 
                                              Pure Hony Here
                                           </h3>
                                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                           <a className="read_more" href="contact.html">Contact  </a>
                                        </div>
                                     </div>
                                     <div className="col-md-5">
                                        <div className="banner_img">
                                           <figure><img className="img_responsive" alt="" src="images/banner_img.png"/></figure>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>

                         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                         <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                         <span className="sr-only">Previous</span>
                         </a>
                         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                         <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                         <span className="sr-only">Next</span>
                         </a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </header>

  )
}
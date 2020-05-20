<template>
    <section class="twitter">
            <div class="content">
                  <h1 class="titleProject">
                              CONTACT ME
                        </h1>
                  <div class="card-deck">
                  <div class="card">
                  
                        <div class="icon"><i style="font-size: 36px" class="fab fa-twitter"></i></div>
                        <p class="title">TWITTER</p>
                        <p class="text">Click to see my personal Twitter account.</p>
                  
                  </div>
                  <div class="card">
                  
                        <div class="icon"><i style="font-size: 36px" class="fab fa-linkedin-in"></i></div>
                        <p class="title">LINKEDIN</p>
                        <p class="text">Click to see my personal and professional Linkedin.</p>
                  
                  </div>

                  <div class="card">
                  
                        <div class="icon"><i style="font-size: 36px" class="fas fa-mobile-alt"></i></div>
                        <p class="title">PHONE</p>
                        <p class="text">Contact me calling me.</p>
                  
                  </div>
                  <div class="card">
                        <div class="icon"><i style="font-size: 36px" class="fas fa-envelope"></i></div>
                        <p class="title">MAIL</p>
                        <p class="text">Contact me sending an email.</p>
                  </div>

                  </div>
                  <span>
                        <a id="btn" class="buttonSWOAT" data-toggle="modal" href="#modal">QUICK CONTACT</a>

                  </span>
            </div>
            <div class="modal " id="modal" role="dialog">
                  <div class="modal-dialog modal-dialog-centered modal-lg  modal1">
                        <div class="modal-content" style="background-color: black;">
                              <div class="modal-body">
                                    <h1 class="section-header">CONTACT</h1>
  
                                          <div class="contact-wrapper">
                                          
                                          
                                          <form class="form-horizontal" role="form" method="get" action="#">
                                                <div class="form-group">
                                                <div class="col-sm-12">
                                                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
                                                </div>
                                                </div>

                                                <div class="form-group">
                                                <div class="col-sm-12">
                                                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <div class="col-sm-12">
                                                <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                                                </div>
                                                </div> 
                                                <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                                <div class="button">
                                                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                                                </div>
                                                
                                                </button>
                                                
                                          </form>
                                          
                                                <div class="direct-contact-container">

                                                <ul class="contact-list">
                                                <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Barcelona</span></i></li>
                                                
                                                <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:659215152" title="Give me a call">659215152</a></span></i></li>
                                                
                                                <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:oriolbarrera1998@gmail.com" title="Send me an email">oriolbarrera1998@gmail</a></span></i></li>
                                                
                                                </ul>
                                                </div>
                                          </div>
                              </div>
                        </div>
                  </div>
            </div>

      </section>

   
</template>

<style>
.modal1 {
  width: 100%;
  overflow: hidden;
}
.section-header {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 50px;
  font: 300 60px 'Oswald', sans-serif;
  letter-spacing: 6px;
  color: #fff;
  margin-bottom: 25px;
}

.contact-wrapper {
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  max-width: 800px;
}

/* Begin Left Contact Page */
.form-horizontal {
  float: left;
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, textarea {
  max-width: 400px;
  background-color: #111;
  color: #fff;
  letter-spacing: 1px;
}

.send-button {
  margin-left: 15px;
  background: blue;
  margin-top: 15px;
  height: 34px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 300 14px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
  float: right;
  margin-top: 5px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 2.3rem;
  text-align: center;
  width: 100%;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  top: 0;
  left: -20px;
  display: inline-block;
  height: 70px;
  width: 70px;
  margin: 10px auto;
  line-height: 70px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #111;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.8); ;
}

/* Begin Media Queries*/
@media screen and (max-width: 760px) {
    #contact {
        height: 1000px;
    }
  .section-header {
    font-size: 65px;
  }
  .direct-contact-container, .form-horizontal {
    float: none;
    margin: 10px auto;
  }  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  #contact {
    height: 1200px;
    }
  .section-header{
    font-size: 50px;
  }
  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    max-width: 340px;
    margin: 0 auto;
  }
  
  .name, .email, textarea {
    width: 280px;
  } 
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
 
</style>

<script>

    export default {
		data: {

		}, 
		methods: 
		{
		}
	}
</script>


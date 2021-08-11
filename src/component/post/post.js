import React, { useEffect, useState } from 'react';

const Post = () => {
 

  // const [fade, setFade] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //    let mainImg = document.getElementById("main-img");
     
  //    if(!fade){
  //     mainImg.style.opacity = 0;
  //     setFade(true);
  //     console.log(fade);
  //    }
  //    else{
  //     mainImg.style.opacity = 1;
  //     setFade(false);
  //     console.log(fade);
  //    }
    
   
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);


  


    return(
        <section className="post-block">
                <div className="row">
                  <div className="col-md-6">
                     <div className="girl-img">
                       <img src="./images/girl-img.png" alt="img"  className="main-img"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                      <div className="content-section">
                          <h1>invest in<br />your<br /><b>future</b></h1>
                          <div className="coin-img-section">
                             <img src="./images/coin1-img.png" alt="img" className="coin1-img" />
                             <img src="./images/coin3-img.png" alt="img" className="coin3-img" />  
                             <img src="./images/coin2-img.png" alt="img" className="coin2-img" />
                          </div>
                          <div className="graph-section">
                             <img src="./images/graph-img.png" alt="img" className="graph-img" />
                          </div>
                          <div className="sub-content-section">
                          <h3>We help you grow your money</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever 
                              
                          </p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="bg-img-section">
                <img src="./images/website-img.png" alt="img" className="website-img"/>
                <img src="./images/left-spin-line.png" alt="img" className="left-spin-line" />
                <img src="./images/left-bottom-arrow-img.png" alt="img" className="left-bottom-arrow-img"/>
                <img src="./images/circle-img1.png" alt="img" className="circle-img1"/>
                <img src="./images/circle-img2.png" alt="img" className="circle-img2"/>
                <img src="./images/center-spin-line.png" alt="img" className="circle-spin-line"/>
                <img src="./images/circle-img3.png" alt="img" className="circle-img3"/>
                <img src="./images/right-spin-line.png" alt="img" className="right-spin-line"/>
              </div>
        </section>
    )
}

export default Post;
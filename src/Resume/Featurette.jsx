import React from 'react'
import Img1 from "./img/Resume.jpg"
function Featurette() {
  return (
    <div className='container mt-5 pt-5 m'>
      {/* first featurette */}
      <div className="row featurette">
        <div className="col-md-7 featurette-heading">
          <h3>Hai!!..</h3>
          <p> I am MUKESHKUMAR SELVARAJ.</p>
          <p>
            {" "}
            My native place 
            <span className=" bg-info">  icon</span>
            Gandarvakkotai,Pudukkottai Distick.
          </p>
          <p>
            {" "}
            My famly totaly 4 members include me. Father name is SELVARAJ.
            He is a Farmer. My mother name is VIJAYARANI.She is Queen of my
            house.My elder brother name is SAKTHIVEL.He is a employe.
          </p>
        </div>
        <div className='col-md-5 '>
          <img className='img-fluid featurette-img' src={Img1} alt="" />
        </div>
      </div>
      {/* second featurette  */}
      <div className="row featurette">
        <div className="col-md-7 order-md-2 featurette-heading">
          <p>
            I have completed M.Sc., and B.Sc., Computer Science from
            <a href="#" target="_blank">BHARATH Collage,Thanjaur</a>.
            <p> My school stadies is Goverment
              school,Gandarvakkotai.</p>
          </p>
          <p>

            I completed Front-End Devolaper course
            (HTML5, CSS, JavaScript, ReactJS) from <a className="#" target="_blank"> Besant Technolagy,Chennai.</a>
          </p>
        </div>
        <div className='col-md-5  order-md-1'>
          <img className='img-fluid featurette-img' src={Img1} alt="" />
        </div>
      </div>
      {/* third  featurette  */}
      <div className="row featurette ">
        <div className="col-md-7 featurette-heading order-md-1">
          <p>
            I have create a dinamec web site using ReactJS and Boostrap. I
            have use a Boostrap and semantic Ui library.
          </p>
        </div>
        <div className='col-md-5 order-md-2 '>
          <img className='img-fluid featurette-img' src={Img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featurette
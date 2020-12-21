/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { ArrowDownShort } from 'react-bootstrap-icons'
import * as Scroll from 'react-scroll';
import { Collapse, Button } from 'react-bootstrap';
import LandingBG from '../images/LandingBG.jpeg'

function Landing() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <div className={"landing"} style={{backgroundImage: `url(${LandingBG})`}}>
          <div className={"root"}>
          <Collapse in={checked} timeout={5000}>
            <div className={'container'}>
              <h1 className={"title"}>
                Welcome To
                <br />
                <span className={"Memes"} style={{color: 'rgb(234,125,83)'}}>
                  Memes
                </span>
                <span className={"."} style={{color: 'white'}}>
                  .
                </span>
                <span className={"io"}>
                  generator
                </span>
              </h1>
              <button class="btn btn-outline-light" size="sm" style={{borderRadius: "40%"}} onClick={() => { Scroll.animateScroll.scrollTo(window.innerHeight); }}>
                <ArrowDownShort
                  className={"go down"}
                />
              </button>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Landing;

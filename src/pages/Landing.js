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
                <span className={"Chimu"} style={{color: 'rgb(234,125,83)'}}>
                  Chimu
                </span>
                <span className={"."} style={{color: 'white'}}>
                  .
                </span>
                <span className={"Memes"} style={{color: '#2F4858'}}>
                  Memes
                </span>
                <span className={"."} style={{color: 'white'}}>
                  .
                </span>
                <span className={"io"}>
                  io
                </span>
              </h1>
              <Button variant="light" size="sm" style={{borderRadius: "50%"}}>
                <ArrowDownShort
                  className={"go down"}
                  onClick={() => { Scroll.animateScroll.scrollTo(window.innerHeight); }}
                />
              </Button>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Landing;

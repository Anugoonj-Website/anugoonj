import React from "react";
import "../styles/home.css";
import arman_malik from "../images/am3.png";
import arrow from "../images/arrow.gif";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const Home = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh " }}>
          <div className="home">
            <div className="home_inside">
              <div className="home_page_label">
                <h1 className="home_page_label_anugoonj">ANUGOONJ</h1>
              </div>
              <img
                src={arman_malik}
                alt="img"
                className="home_arman_malik_image"
              />

              <div className="home_arrow">
                <img src={arrow} alt="arrow" className="home_down_arrow" />
              </div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <h1>Guest Performance</h1>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <h1>Page2</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

<<<<<<< HEAD
                <div class="animation-area">
                {/* <h1 className='home_page_label_anugoonj'>About Us</h1>
                    <ul class="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> */}
                    <img src="https://tenor.com/view/dance-chicago-dance-crash-hip-hop-dance-tron-gif-14021039"/>
                    {/* <div class="tenor-gif-embed" data-postid="14021039" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/dance-chicago-dance-crash-hip-hop-dance-tron-gif-14021039">Dance Chicago Dance Crash GIF</a>from <a href="https://tenor.com/search/dance-gifs">Dance GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
                </div>

            </div>
        </div>
    );
}

export default Home
=======
export default Home;
>>>>>>> 4a6ea035a52b8404d0d435fff6acfc665754cdcc

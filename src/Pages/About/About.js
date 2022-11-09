import React from "react";
import img from "../../assets/images/about/about.jpeg.crdownload";
import img2 from "../../assets/images/about/about2.avif";

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content grid md:grid-cols-2 ">
          <img src={img} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">Welcome to my world!!!</h1>
            <p className="py-6">
              I am extremely pleased to welcome you into my world of Underwater
              Photography. I hope you will enjoy looking at the images I have
              created and that it will spark some emotion or thought process
              that will inspire you to make something yourself.
            </p>
            <h1 className="text-2xl font-bold">But, who I am?</h1>
            <p>
              My name is Marko and I am Serbian photographer (and many other
              things), currently living and working in Amsterdam, Netherlands.
              Photography and underwater explorations are my passion and hobby,
              while professionally I have other engagements. Next to photography
              and diving, I am also a runner, a snowboarder, both road and
              off-road motorcycle rider and a music lover. Photography is for me
              a way to express myself, be creative, share my stories,
              experiences and adventures and connect with other people. I am
              enjoying every frame, pixel and minute of it.
            </p>
          </div>
        </div>
      </div>

      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Underwater Photography</h1>
            <p className="py-6">
              On my photography journey, I was lucky to be able to connect
              photography with some other interests that I have. And this is how
              I got into Underwater Photography in the first place. My key
              interest is wide angle photography. My style seems to be "moody"
              so my photos tend to be a bit more dark, dramatic, atmospheric
              etc. I find inspiration in adventure heavy topics that require a
              lot of engagement and skills such as sharks, rays, dolphins,
              whales, giant schools of fish, amazing reefs and it's eco-systems,
              stunning marine life or just astonishing wrecks. Both in color and
              in black and white. I am still in the process of learning how to
              develop photographic ideas to convey what I am experiencing and
              then how to do it exactly. It is a journey that takes many steps.
              Hardest bit is to separate a good dive from a photography dive
              with the clear goal and mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

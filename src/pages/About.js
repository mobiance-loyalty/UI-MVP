import Pdf from '/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/files/mobiance-lightpaper.pdf';

const About = () => {
  return (
    <div style={{minHeight:'100vh'}}>
      <main role="main">
        <div className="jumbotron">
          <div className="col-sm-8 mx-auto">
            <h1>Mobiance</h1>
            <p className="lead">
              A perfect solution to hurdles of the loyalty programs can be
              brought about by Mobiance Token, which is a universal token for
              loyalty reward earning, giving, and converting. Mobiance is a
              rewards and loyalty solution built using blockchain and smart
              contract technology.
            </p>
            <p>
              {" "}
              <a
                className="btn btn-primary"
                href={Pdf}
                role="button"
              >
                Lightpaper &raquo;
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

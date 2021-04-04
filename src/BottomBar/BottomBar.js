import miniCover from "./MiniCover.png";
import heart from './heart.png';
import idk from './Idk.png';
function BottomBar() {
  return (
    <div
      className="text-white"
      style={{
        height: "15vh",
        minHeight: "15%",
        background: "#282828",
        overflow: "hidden",
      }}
    >
      <div className="text-left" style={{ paddingLeft: "2rem" }}>
        <div
          style={{
            display: "inline-block",
            transform: "translateY(-0.4rem)",
          }}
        >
          <img
            src={miniCover}
            alt="Playing Now"
            style={{ width: "4rem", maxWidth: "4rem" }}
          />
        </div>

        <div
          style={{
            display: "inline-block",
            marginTop: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h6 style={{ marginBottom: "0px" }}>One Step Beyond</h6>
          <p style={{ fontSize: "0.8rem" }}>Madness</p>
        </div>
        <div className="d-inline-block ml-4" style={{transform: "translateY(-0.6rem)"}}><img src={heart} alt="like" style={{width:"1rem"}} className="mr-3"/><img src={idk} alt="Idk" style={{width:"1rem"  }}/></div>
        
        <div style={{ display: "inline-block", marginLeft: "15rem" }}>
          <div style={{ marginLeft: "9.8rem", opacity: "0.5" }}>
            <i className="fas fa-step-backward"></i>
            <div className="d-inline mx-5" style={{ fontSize: "0.5rem" }}>
              <i
                className="fas fa-play-circle fa-4x"
                style={{ transform: "translateY(0.30rem)" }}
              ></i>
            </div>
            <i className="fas fa-step-forward"></i>
          </div>

          <div
            style={{
              cursor:"pointer",
              display: "inline-block",
              width: "30rem",
              height: "0.4rem",
              left: "calc(50%-30rem/2)",
              bottom: "1.5rem",
              background: "#FFFFFF",
              opacity: "0.2",
              borderRadius: "0.3rem",
              transform: "translateY(1rem)",
            }}
          >
            <div className="position-relative">
              <p
                style={{
                  position: "absolute",
                  left: "-3rem",
                  top: "-0.6rem",
                }}
              >
                00:00
              </p>
              <p
                style={{
                  position: "absolute",
                  right: "-3rem",
                  top: "-0.6rem",
                }}
              >
                2:18
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;

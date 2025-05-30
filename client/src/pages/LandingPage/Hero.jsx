import styles from "./styles/Hero.module.css";
import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHeading}>
        <div>
          <h1
            style={{ color: "#303404D", fontSize: "54px", fontWeight: "bold" }}
          >
            Grow Your Business Faster <br />
            with Hubly CRM
          </h1>
          <p style={{ color: "#303404D", fontSize: "16px" }}>
            Manage leads, automate workflows, and close deals effortlessly—all
            in one powerful platform.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link to="/signup">
            <button className={styles.button1}>Get Started </button>
          </Link>

          <button className={styles.button2}>
          <IoPlayCircleOutline style={{color:"#244779", fontSize:"20px" , marginRight:"10px" , }} />
            <span style={{color:"#244779", fontSize:"17px" , fontWeight:"500", paddingBottom:"25px"}}>Watch video</span>
            
          </button>
        </div>
      </div>

      <div className={styles.heroImg}>
        <img src="/images/heroImage.png" alt="" className={styles.mainImg} />
        <div className={styles.leftBottom}>
          <img
            src="/images/heroCalender.png"
            alt=""
            style={{
              width: "250px",
              height: "180px",
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div className={styles.rightBottom}>
          <img
            src="/images/heroGraph.png"
            alt=""
            style={{
              width: "212px",
              height: "132px",
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div className={styles.rightTop}>
          <img
            src="/images/heroComment.png"
            alt=""
            style={{
              width: "286px",
              height: "65px",
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;

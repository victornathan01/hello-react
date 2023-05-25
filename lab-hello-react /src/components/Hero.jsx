import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className = "nav">
        <img height={30} src={logo} />
        <img height={10} src={menu} />
      </div>
      <div className = "text">
        <h1>Say Hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja Developer
        </p>
      </div>

      <div>
        <button className = "btn">Awesome!</button>
      </div>
    </div>
  );
}

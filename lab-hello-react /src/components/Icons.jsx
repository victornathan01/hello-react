import declarative from "../assets/icon1.png";
import componentes from "../assets/icon2.png";
import singleWay from "../assets/icon3.png";
import jsx from "../assets/icon4.png";

export default function Icon() {
  return (
    <div className = "icons">
      <div>
        <img width={120} src={declarative} />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div>
        <img width={120} src={componentes} />
        <h2>Componentes</h2>
        <p>Build encapsulated componentes that manage their state.</p>
      </div>

      <div>
        <img width={120} src={singleWay} />
        <h2>Fingle-Way</h2>
        <p>A set of immutable values are passed to the componentes</p>
              </div>

      <div>
        <img width={120} src={jsx} />
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers</p>
      </div>
    </div>
  );
}

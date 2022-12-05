import { planets } from "./componentOne";
export function planetMap() {
  return (
    <div className="App">
      {planets.map((planet) => {
        if (planet.isGasPlanet) return <h1>{planet.name}</h1>;
      })}
    </div>
  );
}

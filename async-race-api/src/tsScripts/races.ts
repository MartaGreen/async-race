import { Car, Flag } from "../scripts/imagesRender.js";
import { createInput, cars_arr } from "../scripts/shared.js";

export const renderRace: (color: string, name: string, id: number) => void = (
  color: string,
  name: string,
  id: number,
) => {
  const car: Car = new Car(color, name, id);
  const raceTrackHTML: string =  `
    <div class='raceTrack raceTrack${id}'>
      ${car.renderCar()}
      ${new Flag().renderFlag()}
      <div class='carSettingsCont'>
        ${createInput("button", "raceBtn select", "select")}
        ${createInput("button", "raceBtn remove", "remove")}
        <h4 class='carTitle'>${name}</h4>
      </div>
      <div class='moveBtnCont'>
        ${createInput("button", "moveBtn start", "a")}
        ${createInput("button", "moveBtn stop notActiveMoveBtn", "b")}
      </div>
    </div>
  `;
  document.querySelector(".raceField").insertAdjacentHTML("beforeend", raceTrackHTML);
  cars_arr.push(car);
  return car;
};

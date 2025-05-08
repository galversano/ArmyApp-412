import Tabs from "../components/Tabs";
import "./Atroop.css";

export default function Atroop() {
  return (
    <section className="troop-container atroop-container">
      <h1>סוללה א</h1>
      <Tabs>
        <div className="section-1" title="כוחות">
          <div className="input-container">
            <label htmlFor="force" className="label">
              כוח:
            </label>
            <select name="force" id="force" className="input-field">
              <option value="" disabled>
                -- Choose a color --
              </option>
              <option value="חפק">חפק</option>
              <option value="מערבי">מערבי</option>
              <option value="מזרחי">מזרחי</option>
              <option value="יזומה">יזומה</option>
              <option value="כיתת כוננות">כיתת כוננות</option>
              
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="location" className="label">
              מיקום:
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="מיקום"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <label htmlFor="nightvision" className="label">
              צ' אמרל:
            </label>
            <select name="nightvision" id="nightvision" className="input-field">
              <option value="" disabled>
                -- Choose a color --
              </option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="binoculars" className="label">
              צ' משקפת:
            </label>
            <select name="binoculars" id="binoculars" className="input-field">
              <option value="" disabled>
                -- Choose a color --
              </option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="launcher" className="label">
              צ' מטול:
            </label>
            <select name="launcher" id="launcher" className="input-field">
              <option value="" disabled>
                -- Choose a color --
              </option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
          </div>
        </div>
        <div className="section-2" title="עמדות">
          <h2>this is section 2</h2>
        </div>
      </Tabs>
    </section>
  );
}

import Tabs from "../components/Tabs";

export default function Atroop() {
  return (
    <section className="troop-container atroop-container">
      <h1>סוללה א</h1>
      <Tabs>
        <div className="section-1" title="שמירות">
          <div className="commandor-name">
            <label htmlFor="name" className="label">
              שם מפקד:
            </label>
            <input type="text" name="name" id="name" placeholder="שם מפקד" />
          </div>
        </div>
        <div className="section-2" title="עמדות">
          <h1>this is section 2</h1>
        </div>
        <div className="section-3" title="סיורים">
          <h1>this is section 3</h1>
        </div>
      </Tabs>
    </section>
  );
}

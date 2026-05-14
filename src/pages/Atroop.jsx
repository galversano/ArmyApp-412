import { FaWhatsapp } from "react-icons/fa";
import "./Atroop.css";
import React from "react";

export default function Atroop() {
  function sendSection1WhatsApp(formData) {
    const data = Object.fromEntries(formData);
    const text = `סוללה א - כוחות:
  שם המפקד: ${data.name}
  כוח: ${data.force}
  צ' אמרל: ${data.nightvision}
  צ' משקפת: ${data.binoculars}
  צ' רינגו: ${data.ringo}
  צ' ליונט 1: ${data.lionnet}
  צ' ליונט 2: ${data.lionet2}
   גז: ${data.gas}
  הלם:${data.helem}
  תאורה: ${data.light}
  גומי:${data.rubber}`;

    window.open(`https://wa.me/972529027054?text=${encodeURIComponent(text)}`);
  }

  return (
    <section className="troop-container atroop-container">
      <h1>סוללה א</h1>
      <div className="section-1">
        <form action={sendSection1WhatsApp} className="section-1 form">
          <div className="input-container">
            <label htmlFor="name" className="label" title="שם מפקד">
              שם המפקד:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="שם המפקד"
              className="input-field"
              required
              title="שם מפקד"
            />
          </div>
          <div className="input-container">
            <label htmlFor="force" className="label" title="שם כוח">
              כוח:
            </label>
            <select
              name="force"
              id="force"
              className="input-field"
              required
              title="שם כוח"
            >
              <option value="" hidden>
                בחירת הכוח
              </option>
              <option value="כיתת כוננות">כיתת כוננות</option>
              <option value="סיור">סיור</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="nightvision" className="label" title="בחירת אמרל">
              צ' אמרל:
            </label>
            <select
              name="nightvision"
              title="בחירת אמרל"
              id="nightvision"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="61404">61404</option>
              <option value="111963">111963</option>
              <option value="2036639">2036639</option>
              <option value="941101">941101</option>
              <option value="112345">112345</option>
              <option value="אין אמרל">אין אמרל</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="binoculars" className="label" title="בחירת משקפת">
              צ' משקפת:
            </label>
            <select
              name="binoculars"
              id="binoculars"
              title="בחירת משקפת"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="971201146">971201146</option>
              <option value="97120032">97120032</option>
              <option value="98070383">98070383</option>
              <option value="97110796">97110796</option>
              <option value="97120032">97110796</option>
              <option value="אין משקפת">אין משקפת</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="ringo" className="label" title="בחירת רינגו">
              צ' רינגו:
            </label>
            <select
              name="ringo"
              id="ringo"
              title="בחירת רינגו"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="1195">1195</option>
              <option value="אין רינגו">אין רינגו</option>
            </select>
          </div>


          <div className="input-container">
            <label htmlFor="lionet" className="label" title="בחירת ליונט 1">
              צ' ליונט 1:
            </label>
            <select
              name="lionnet"
              id="lionnet"
              title="בחירת ליונט 1"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="2134">2134</option>
              <option value="1701">1701</option>
              <option value="אין ליונט">אין ליונט</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="lionet2" className="label" title="בחירת ליונט 2">
              צ' ליונט 2:
            </label>
            <select
              name="lionnet2"
              id="lionnet2"
              title="בחירת ליונט 2"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="2134">2134</option>
              <option value="1701">1701</option>
              <option value="אין ליונט">אין ליונט</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="gas" className="label" title="רימון גז">
              רימון גז:
            </label>
            <input
              type="text"
              name="gas"
              title="רימון גז"
              id="gas"
              placeholder=""
              className="input-field"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="helem" className="label">
              רימון הלם:
            </label>
            <input
              type="text"
              name="helem"
              id="helem"
              placeholder=""
              className="input-field"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="light" className="label" title="תאורה">
              תאורה:
            </label>
            <input
              type="text"
              title="תאורה"
              name="light"
              id="light"
              placeholder=""
              className="input-field"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="rubber" className="label" title="גומי">
              גומי:
            </label>
            <input
              type="text"
              name="rubber"
              title="גומי"
              id="rubber"
              placeholder=""
              className="input-field"
              required
            />
          </div>

          <button className="add-button">
            שלח בוואטסאפ
            <FaWhatsapp />
          </button>
        </form>
      </div>
    </section>
  );
}

import { FaWhatsapp } from "react-icons/fa";
import "./Atroop.css";
import React from "react";

export default function Atroop() {
  function sendSection1WhatsApp(formData) {
    const data = Object.fromEntries(formData);

    let text = `*סוללה א - כוחות:*\n`;
    if (data.name) text += `  *שם המפקד:* ${data.name}\n`;
    if (data.force) text += `  *כוח:* ${data.force}\n`;
    if (data.nightvision && data.nightvision !== "-----") text += `  *צ' אמרל:* ${data.nightvision}\n`;
    if (data.binoculars && data.binoculars !== "-----") text += `  *צ' משקפת:* ${data.binoculars}\n`;
    if (data.ringo && data.ringo !== "-----") text += `  *צ' רינגו:* ${data.ringo}\n`;
    if (data.lionnet && data.lionnet !== "-----") text += `  *צ' ליונט 1:* ${data.lionnet}\n`;
    if (data.lionet2 && data.lionet2 !== "-----") text += `  *צ' ליונט 2:* ${data.lionet2}\n`;
    if (data.mk && data.mk !== "-----") text += `  *צ' מ.ק:* ${data.mk}\n`;
    if (data.gas_maducha) text += `  *גז מדוכה:* ${data.gas_maducha}\n`;
    if (data.pctol_gas) text += `  *פצטול גז:* ${data.pctol_gas}\n`;
    if (data.helem) text += `  *הלם:* ${data.helem}\n`;
    if (data.light) text += `  *תאורה:* ${data.light}\n`;
    if (data.rubber) text += `  *גומי:* ${data.rubber}\n`;
    if (data.stretcher && data.stretcher !== "-----") text += `  *אלונקה:* ${data.stretcher}\n`;
    if (data.jerrycans && data.jerrycans !== "-----") text += `  *ג'ריקנים:* ${data.jerrycans}\n`;
    if (data.spikes && data.spikes !== "-----") text += `  *דוקרנים:* ${data.spikes}\n`;
    if (data.triangles && data.triangles !== "-----") text += `  *משולשי אזהרה:* ${data.triangles}\n`;
    if (data.blinkers && data.blinkers !== "-----") text += `  *נצנצים:* ${data.blinkers}\n`;
    if (data.alba_key && data.alba_key !== "-----") text += `  *מפתח שערים כסוף alba:* ${data.alba_key}\n`;
    if (data.pelled_key && data.pelled_key !== "-----") text += `  *מפתח שערים שחור pelled:* ${data.pelled_key}\n`;

    window.open(`https://wa.me/972529027054?text=${encodeURIComponent(text.trim())}`);
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
              <option value="08043928">08043928</option>
              <option value="02036341">02036341</option>
              <option value="111906">111906</option>
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
              <option value="09043995">09043995</option>
              <option value="09043842">09043842</option>
              <option value="09043331">09043331</option>
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
            <label htmlFor="mk" className="label" title="בחירת מ.ק">
              צ' מ.ק:
            </label>
            <select
              name="mk"
              id="mk"
              title="בחירת מ.ק"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="22494">22494</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="gas_maducha" className="label" title="גז מדוכה">
              גז מדוכה:
            </label>
            <input
              type="text"
              name="gas_maducha"
              title="גז מדוכה"
              id="gas_maducha"
              placeholder=""
              className="input-field"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="pctol_gas" className="label" title="פצטול גז">
              פצטול גז:
            </label>
            <input
              type="text"
              name="pctol_gas"
              title="פצטול גז"
              id="pctol_gas"
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

          <div className="input-container">
            <label htmlFor="stretcher" className="label" title="אלונקה">
              אלונקה:
            </label>
            <select
              name="stretcher"
              id="stretcher"
              title="אלונקה"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="יש">יש</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="jerrycans" className="label" title="ג'ריקנים">
              ג'ריקנים:
            </label>
            <select
              name="jerrycans"
              id="jerrycans"
              title="ג'ריקנים"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="spikes" className="label" title="דוקרנים">
              דוקרנים:
            </label>
            <select
              name="spikes"
              id="spikes"
              title="דוקרנים"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="triangles" className="label" title="משולשי אזהרה">
              משולשי אזהרה:
            </label>
            <select
              name="triangles"
              id="triangles"
              title="משולשי אזהרה"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="blinkers" className="label" title="נצנצים">
              נצנצים:
            </label>
            <select
              name="blinkers"
              id="blinkers"
              title="נצנצים"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="alba_key" className="label" title="מפתח שערים כסוף alba">
              מפתח שערים כסוף alba:
            </label>
            <select
              name="alba_key"
              id="alba_key"
              title="מפתח שערים כסוף alba"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="יש">יש</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="pelled_key" className="label" title="מפתח שערים שחור pelled">
              מפתח שערים שחור pelled:
            </label>
            <select
              name="pelled_key"
              id="pelled_key"
              title="מפתח שערים שחור pelled"
              className="input-field"
              required
            >
              <option value="" hidden>
                -----
              </option>
              <option value="יש">יש</option>
              <option value="אין">אין</option>
            </select>
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

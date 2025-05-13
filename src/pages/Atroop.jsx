import { FaWhatsapp } from "react-icons/fa";
import Shifts from "../components/Shifts";
import Tabs from "../components/Tabs";
import "./Atroop.css";
import React, { useState } from "react";

export default function Atroop() {
  const [commander, setCommander] = useState("");
  const [force, setForce] = useState("");
  const [location, setLocation] = useState("");
  const [nightvision, setNightvision] = useState("");
  const [binoculars, setBinoculars] = useState("");
  const [launcher, setLauncher] = useState("");

  const [positionName, setPositionName] = useState("");
  const [position, setPosition] = useState("");
  const [positionBinoculars, setPositionBinoculars] = useState("");
  const [positionNightvision, setPositionNightvision] = useState("");
  const [gas, setGas] = useState("");
  const [helem, setHelem] = useState("");
  const [teora, setTeora] = useState("");
  const [gomi, setGomi] = useState("");
  const [lionnet, setLionnet] = useState("");
  const [lionnet_1, setLioNnet] = useState("");

  const [dynamicValues, setDynamicValues] = useState({});

  const [dynamicInputs, setDynamicInputs] = useState([
    { name: "mikom_w", label: "מערבי:" },
    { name: "mikom_s", label: "מזרחי:" },
    { name: "mikom_h", label: "חפק:" },
    { name: "mikom_y", label: "חץ דרוך:" },
  ]);

  const handleAddInput = () => {
    const label = prompt("הכנס שם למיקום נוסף:");
    if (!label) return;

    const newIndex = dynamicInputs.length + 1;
    setDynamicInputs([
      ...dynamicInputs,
      {
        name: `extra_mikom_${newIndex}`,
        label: label,
      },
    ]);
  };

  const sendSection1WhatsApp = () => {
    const text = `סוללה א - כוחות:
  שם המפקד: ${commander}
  כוח: ${force}
  צ' אמרל: ${nightvision}
  צ' משקפת: ${binoculars}
  צ' מטול: ${launcher}
  צ' ליונט 1: ${lionnet}
  צ' ליונט 2: ${lionnet_1}
   גז: ${gas}
  הלם:${helem}
  תאורה: ${teora}
  גומי:${gomi}`;

    window.open(`https://wa.me/972545008614?text=${encodeURIComponent(text)}`);
  };

  const sendSection2WhatsApp = () => {
    const text = `סוללה א - עמדות:
  שם: ${positionName}
  עמדה: ${position}
  צ' משקפת: ${positionBinoculars}
  צ' אמרל: ${positionNightvision}`;

    window.open(`https://wa.me/972545008614?text=${encodeURIComponent(text)}`);
  };

  const sendSection3WhatsApp = () => {
    const dynamicText = dynamicInputs
      .map((input) => {
        const value = dynamicValues[input.name];
        const label = input.label.replace(/:$/, ""); // strip any colon just in case
        return value ? `${label}: ${value}` : `${label}:`;
      })
      .join("\n");

    const text = `מיקומי כוחות שכן :\n${dynamicText}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  return (
    <section className="troop-container atroop-container">
      <h1>סוללה א</h1>
      <Tabs>
        <div className="section-1" title="כוחות">
          <div className="input-container">
            <label htmlFor="name" className="label">
              שם המפקד:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="שם המפקד"
              className="input-field"
              value={commander}
              onChange={(e) => setCommander(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="force" className="label">
              כוח:
            </label>
            <select
              name="force"
              id="force"
              className="input-field"
              value={force}
              onChange={(e) => setForce(e.target.value)}
            >
              <option value="" disabled>
                בחירת הכוח
              </option>
              <option value="חפק">חפק</option>
              <option value="מערבי">מערבי</option>
              <option value="מזרחי">מזרחי</option>
              <option value="יזומה">יזומה</option>
              <option value="כיתת כוננות">כיתת כוננות</option>
            </select>
          </div>
          {/* <div className="input-container">
            <label htmlFor="location" className="label">
              מיקום:
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="מיקום"
              className="input-field"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div> */}
          <div className="input-container">
            <label htmlFor="nightvision" className="label">
              צ' אמרל:
            </label>
            <select
              name="nightvision"
              id="nightvision"
              className="input-field"
              value={nightvision}
              onChange={(e) => setNightvision(e.target.value)}
            >
              <option value="" disabled>
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
            <label htmlFor="binoculars" className="label">
              צ' משקפת:
            </label>
            <select
              name="binoculars"
              id="binoculars"
              className="input-field"
              value={binoculars}
              onChange={(e) => setBinoculars(e.target.value)}
            >
              <option value="" disabled>
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
            <label htmlFor="launcher" className="label">
              צ' מטול:
            </label>
            <select
              name="launcher"
              id="launcher"
              className="input-field"
              value={launcher}
              onChange={(e) => setLauncher(e.target.value)}
            >
              <option value="" disabled>
                -----
              </option>
              <option value="156642">156642</option>
              <option value="98439">98439</option>
              <option value="156642">156642</option>
              <option value="103018">103018</option>
              <option value="1272">1272</option>
              <option value="1275">1275</option>
              <option value="1861">1861</option>
              <option value="1033">1033</option>
              <option value="1096">1096</option>
              <option value="אין מטול">אין מטול</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="lionet" className="label">
              צ' ליונט 1:
            </label>
            <select
              name="lionnet"
              id="lionnet"
              className="input-field"
              value={lionnet}
              onChange={(e) => setLionnet(e.target.value)}
            >
              <option value="" disabled>
                -----
              </option>
              <option value="1814">1814</option>
              <option value="1142">1142</option>
              <option value="1657">1657</option>
              <option value="1861">1861</option>
              <option value="1375">1375</option>
              <option value="2568">2568</option>
              <option value="2571">2571</option>
              <option value="863">863</option>
              <option value="1826">1826</option>
              <option value="2599">2599</option>
              <option value="1120">1120</option>
              <option value="2561">2561</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="lionet" className="label">
              צ' ליונט 2:
            </label>
            <select
              name="lionnet"
              id="lionnet"
              className="input-field"
              value={lionnet_1}
              onChange={(e) => setLioNnet(e.target.value)}
            >
              <option value="" disabled>
                -----
              </option>
              <option value="1814">1814</option>
              <option value="1142">1142</option>
              <option value="1657">1657</option>
              <option value="1861">1861</option>
              <option value="1375">1375</option>
              <option value="2568">2568</option>
              <option value="2571">2571</option>
              <option value="863">863</option>
              <option value="1826">1826</option>
              <option value="2599">2599</option>
              <option value="1120">1120</option>
              <option value="2561">2561</option>
              <option value="אין">אין</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="name" className="label">
              רימון גז:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
              value={gas}
              onChange={(e) => setGas(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="name" className="label">
              רימון הלם:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
              value={helem}
              onChange={(e) => setHelem(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="name" className="label">
              תאורה:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
              value={teora}
              onChange={(e) => setTeora(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="name" className="label">
              גומי:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
              value={gomi}
              onChange={(e) => setGomi(e.target.value)}
            />
          </div>

          <button className="add-button" onClick={sendSection1WhatsApp}>
            שלח בוואטסאפ
            <FaWhatsapp />
          </button>
        </div>

        <div className="section-2" title="עמדות">
          <div className="input-container">
            <label htmlFor="name_shomer" className="label">
              שם:
            </label>
            <input
              type="text"
              name="name_shomer"
              id="name_shomer"
              placeholder="שם"
              className="input-field"
              value={positionName}
              onChange={(e) => setPositionName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="emda" className="label">
              עמדה:
            </label>
            <select
              name="emda"
              id="emda"
              className="input-field"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="" disabled>
                בחירת עמדה
              </option>
              <option value="תפוז">תפוז</option>
              <option value="פילבוקס מעבר">פילבוקס מעבר</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="launcher" className="label">
              צ' משקפת:
            </label>
            <select
              name="mishkefet"
              id="mishkefet"
              className="input-field"
              value={positionBinoculars}
              onChange={(e) => setPositionBinoculars(e.target.value)}
            >
              <option value="" disabled>
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
            <label htmlFor="nightvision" className="label">
              צ' אמרל:
            </label>
            <select
              name="nightvision"
              id="nightvision"
              className="input-field"
              value={positionNightvision}
              onChange={(e) => setPositionNightvision(e.target.value)}
            >
              <option value="" disabled>
                -----
              </option>
              <option value="61404">61404</option>
              <option value="111963">111963</option>
              <option value="20036639">20036639</option>
              <option value="941101">941101</option>
              <option value="112345">112345</option>
              <option value="אין אמרל">אין אמרל</option>
            </select>
          </div>

          <button className="add-button" onClick={sendSection2WhatsApp}>
            שלח בוואטסאפ
            <FaWhatsapp />
          </button>
        </div>
        {/* <div className="section-3" title="חמל">
          <div className="input-container">
            <label htmlFor="name" className="label">
              שם החמליסט:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="שם"
              className="input-field"
            />
          </div>

          <div className="input-container">
            <label htmlFor="mikom_w" className="label">
              מיקום מערבי:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
            />
          </div>

          <div className="input-container">
            <label htmlFor="mikom_s" className="label">
              מיקום מזרחי:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
            />
          </div>
          <div className="input-container">
            <label htmlFor="mikom_h" className="label">
              מיקום חפק:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
            />
          </div>

          <div className="input-container">
            <label htmlFor="mikom_y" className="label">
              מיקום
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="input-field"
            />
          </div>
        </div> */}
        <div className="section-3" title="מיקומים">
          {dynamicInputs.map((input, index) => (
            <div className="input-container-1" key={index}>
              <label className="label">{input.label}</label>
              <input
                type="text"
                name={input.name}
                placeholder=""
                className="input-field"
                value={dynamicValues[input.name] || ""}
                onChange={(e) =>
                  setDynamicValues({
                    ...dynamicValues,
                    [input.name]: e.target.value,
                  })
                }
              />
            </div>
          ))}

          <button type="button" onClick={handleAddInput} className="add-button">
            +
          </button>
          <button className="add-button" onClick={sendSection3WhatsApp}>
            שלח בוואטסאפ
            <FaWhatsapp />
          </button>
        </div>
        <div className="section-3" title="מפקדי משימות">
          <Shifts />
        </div>
      </Tabs>
    </section>
  );
}

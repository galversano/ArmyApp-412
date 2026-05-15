import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Hamal.css";

export default function Hamal() {
  function sendHamalWhatsApp(formData) {
    const data = Object.fromEntries(formData);
    
    let text = `*דיווח חמ"ל:*\n`;
    if (data.date) text += `*תאריך:* ${data.date}\n`;
    if (data.outgoing) text += `*יוצא:* ${data.outgoing}\n`;
    if (data.incoming) text += `*נכנס:* ${data.incoming}\n`;
    
    if (data.recent_events) text += `\n*אירועים אחרונים :*\n${data.recent_events}\n`;
    if (data.additional_forces) text += `\n*כוחות נוספים :*\n${data.additional_forces}\n`;
    if (data.logistics) text += `\n*עבודות ולוגיסטיקה בגזרה:*\n${data.logistics}\n`;
    if (data.intelligence) text += `\n*מודיעין והתרעות:*\n${data.intelligence}\n`;
    if (data.missions) text += `\n*משימות:*\n${data.missions}\n`;
    if (data.checkposts) text += `\n*צקפוסטים וצימודים במשמרת:*\n${data.checkposts}\n`;

    window.open(`https://wa.me/972529027054?text=${encodeURIComponent(text.trim())}`);
  }

  return (
    <section className="troop-container hamal-container">
      <h1>חמ"ל</h1>
      <form action={sendHamalWhatsApp} className="hamal-form">
        <div className="input-container">
          <label htmlFor="date" className="label">תאריך:</label>
          <input
            type="text"
            name="date"
            id="date"
            className="input-field"
            required
            defaultValue={new Date().toLocaleDateString("he-IL")}
            placeholder="הזן תאריך"
          />
        </div>
        <div className="input-container">
          <label htmlFor="outgoing" className="label">יוצא:</label>
          <input type="text" name="outgoing" id="outgoing" className="input-field" required placeholder="מי היוצא?" />
        </div>
        <div className="input-container">
          <label htmlFor="incoming" className="label">נכנס:</label>
          <input type="text" name="incoming" id="incoming" className="input-field" required placeholder="מי הנכנס?" />
        </div>

        <div className="input-container">
          <label htmlFor="recent_events" className="label">אירועים אחרונים גזרה:</label>
          <textarea name="recent_events" id="recent_events" className="textarea-field" placeholder="תאר אירועים..." />
        </div>



        <div className="input-container">
          <label htmlFor="additional_forces" className="label">כוחות נוספים בגזרה:</label>
          <textarea name="additional_forces" id="additional_forces" className="textarea-field" placeholder="פרט כוחות נוספים..." />
        </div>

        <div className="input-container">
          <label htmlFor="logistics" className="label">עבודות ולוגיסטיקה בגזרה:</label>
          <textarea name="logistics" id="logistics" className="textarea-field" placeholder="לוגיסטיקה ועבודה..." />
        </div>

        <div className="input-container">
          <label htmlFor="intelligence" className="label">מודיעין והתרעות:</label>
          <textarea name="intelligence" id="intelligence" className="textarea-field" placeholder="התרעות מודיעין..." />
        </div>

        <div className="input-container">
          <label htmlFor="missions" className="label">משימות:</label>
          <textarea name="missions" id="missions" className="textarea-field" placeholder="פירוט משימות..." />
        </div>

        <div className="input-container">
          <label htmlFor="checkposts" className="label">צקפוסטים וצימודים:</label>
          <textarea name="checkposts" id="checkposts" className="textarea-field" placeholder="צקפוסטים וצימודים..." />
        </div>

        <button className="add-button">
          שלח בוואטסאפ
          <FaWhatsapp />
        </button>
      </form>
    </section>
  );
}

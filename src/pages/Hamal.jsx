import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Hamal.css";

export default function Hamal() {
  function sendHamalWhatsApp(formData) {
    const data = Object.fromEntries(formData);
    const text = `דיווח חמ"ל:
תאריך: ${data.date}
יוצא: ${data.outgoing}
נכנס: ${data.incoming}

אירועים אחרונים :
${data.recent_events}

כוחות ומשימות:
${data.forces_missions}

כוחות נוספים :
${data.additional_forces}

עבודה ולוגסטיקה :
${data.logistics}

מודיעין והתרעות:
${data.intelligence}

משימות:
${data.missions}

צקפוסטים וצימודים במשמרת:
${data.checkposts}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
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
          <label htmlFor="forces_missions" className="label">כוחות ומשימות:</label>
          <textarea name="forces_missions" id="forces_missions" className="textarea-field" placeholder="פרט כוחות..." />
        </div>

        <div className="input-container">
          <label htmlFor="additional_forces" className="label">כוחות נוספים בגזרה:</label>
          <textarea name="additional_forces" id="additional_forces" className="textarea-field" placeholder="פרט כוחות נוספים..." />
        </div>

        <div className="input-container">
          <label htmlFor="logistics" className="label">עבודה ולוגסטיקה בגזרה:</label>
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

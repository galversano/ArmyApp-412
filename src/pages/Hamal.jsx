import React, { useState } from "react";
import { FaWhatsapp, FaPlus, FaTrash, FaPaste } from "react-icons/fa";
import "./Hamal.css";

export default function Hamal() {
  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("he-IL"),
    outgoing: "",
    incoming: "",
    shift: "",
    recent_events: "",
    additional_forces: "",
    logistics: "",
    intelligence: "",
    missions: ""
  });

  const [checkpostsList, setCheckpostsList] = useState([{ force: "", location: "", hours: "", pairings: "" }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addCheckpostRow = () => {
    setCheckpostsList([...checkpostsList, { force: "", location: "", hours: "", pairings: "" }]);
  };

  const removeCheckpostRow = (index) => {
    if (checkpostsList.length > 1) {
      const updated = checkpostsList.filter((_, i) => i !== index);
      setCheckpostsList(updated);
    } else {
      setCheckpostsList([{ force: "", location: "", hours: "", pairings: "" }]);
    }
  };

  const updateCheckpostRow = (index, field, value) => {
    const updated = [...checkpostsList];
    updated[index][field] = value;
    setCheckpostsList(updated);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (!text) return;

      const newFormData = { ...formData };
      let newCheckposts = [];

      // Extract single-line fields
      const extractLine = (label) => {
        const regex = new RegExp(`\\*${label}:\\*\\s*(.*)`);
        const match = text.match(regex);
        return match ? match[1].trim() : "";
      };

      newFormData.date = extractLine("תאריך") || newFormData.date;
      newFormData.outgoing = extractLine("יוצא");
      newFormData.incoming = extractLine("נכנס");
      newFormData.shift = extractLine("משמרת");

      // Extract multi-line fields
      const extractMultiline = (label) => {
        const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\*${escapedLabel}:\\*\\n([\\s\\S]*?)(?=\\n\\*|$)`);
        const match = text.match(regex);
        return match ? match[1].trim() : "";
      };

      newFormData.recent_events = extractMultiline("אירועים אחרונים ");
      newFormData.additional_forces = extractMultiline("כוחות נוספים ");
      newFormData.logistics = extractMultiline("עבודות ולוגיסטיקה בגזרה");
      newFormData.intelligence = extractMultiline("מודיעין והתרעות");
      newFormData.missions = extractMultiline("משימות");

      // Extract checkposts
      const checkpostsText = extractMultiline("צקפוסטים וצימודים במשמרת");
      if (checkpostsText) {
        const lines = checkpostsText.split('\n');
        newCheckposts = lines.map(line => {
          const parts = line.split(';');
          return {
            force: parts[0] || "",
            location: parts[1] || "",
            hours: parts[2] || "",
            pairings: parts[3] || ""
          };
        });
      }

      setFormData(newFormData);
      if (newCheckposts.length > 0) {
        setCheckpostsList(newCheckposts);
      }

      alert("הנתונים הודבקו בהצלחה!");
    } catch (error) {
      console.error("Failed to read clipboard text: ", error);
      alert("שגיאה בקריאת הנתונים מהלוח. אנא ודא שהעתקת טקסט תקין ושאישרת גישה ללוח.");
    }
  };

  function sendHamalWhatsApp(e) {
    e.preventDefault();
    const data = formData;
    
    let text = `*דיווח חמ"ל:*\n`;
    if (data.date) text += `*תאריך:* ${data.date}\n`;
    if (data.outgoing) text += `*יוצא:* ${data.outgoing}\n`;
    if (data.incoming) text += `*נכנס:* ${data.incoming}\n`;
    if (data.shift) text += `*משמרת:* ${data.shift}\n`;
    
    if (data.recent_events) text += `\n*אירועים אחרונים :*\n${data.recent_events}\n`;
    if (data.additional_forces) text += `\n*כוחות נוספים :*\n${data.additional_forces}\n`;
    if (data.logistics) text += `\n*עבודות ולוגיסטיקה בגזרה:*\n${data.logistics}\n`;
    if (data.intelligence) text += `\n*מודיעין והתרעות:*\n${data.intelligence}\n`;
    if (data.missions) text += `\n*משימות:*\n${data.missions}\n`;
    
    // Format checkposts subsection
    const formattedCheckposts = checkpostsList
      .filter(cp => cp.force || cp.location || cp.hours || cp.pairings)
      .map(cp => `${cp.force};${cp.location};${cp.hours};${cp.pairings}`)
      .join("\n");
      
    if (formattedCheckposts) {
      text += `\n*צקפוסטים וצימודים במשמרת:*\n${formattedCheckposts}\n`;
    }

    window.open(`https://wa.me/972529027054?text=${encodeURIComponent(text.trim())}`);
  }

  return (
    <section className="troop-container hamal-container">
      <div className="hamal-header">
        <h1>חמ"ל</h1>
        <button type="button" onClick={handlePaste} className="paste-btn" title="הדבק דיווח קודם">
          <FaPaste /> הדבק נתונים
        </button>
      </div>
      <form onSubmit={sendHamalWhatsApp} className="hamal-form">
        <div className="input-container">
          <label htmlFor="date" className="label">תאריך:</label>
          <input
            type="text"
            name="date"
            id="date"
            className="input-field"
            required
            value={formData.date}
            onChange={handleChange}
            placeholder="הזן תאריך"
          />
        </div>
        <div className="input-container">
          <label htmlFor="outgoing" className="label">יוצא:</label>
          <input type="text" name="outgoing" id="outgoing" className="input-field" required placeholder="מי היוצא?" value={formData.outgoing} onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="incoming" className="label">נכנס:</label>
          <input type="text" name="incoming" id="incoming" className="input-field" required placeholder="מי הנכנס?" value={formData.incoming} onChange={handleChange} />
        </div>

        <div className="input-container">
          <label htmlFor="shift" className="label">משמרת:</label>
          <select name="shift" id="shift" className="input-field" required value={formData.shift} onChange={handleChange}>
            <option value="" hidden>בחר משמרת</option>
            <option value="בוקר">בוקר</option>
            <option value="צהריים">צהריים</option>
            <option value="לילה">לילה</option>
            <option value="יומי">יומי</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="recent_events" className="label">אירועים אחרונים גזרה:</label>
          <textarea name="recent_events" id="recent_events" className="textarea-field" placeholder="תאר אירועים..." value={formData.recent_events} onChange={handleChange} />
        </div>

        <div className="input-container">
          <label htmlFor="additional_forces" className="label">כוחות נוספים בגזרה:</label>
          <textarea name="additional_forces" id="additional_forces" className="textarea-field" placeholder="פרט כוחות נוספים..." value={formData.additional_forces} onChange={handleChange} />
        </div>

        <div className="input-container">
          <label htmlFor="logistics" className="label">עבודות ולוגיסטיקה בגזרה:</label>
          <textarea name="logistics" id="logistics" className="textarea-field" placeholder="לוגיסטיקה ועבודה..." value={formData.logistics} onChange={handleChange} />
        </div>

        <div className="input-container">
          <label htmlFor="intelligence" className="label">מודיעין והתרעות:</label>
          <textarea name="intelligence" id="intelligence" className="textarea-field" placeholder="התרעות מודיעין..." value={formData.intelligence} onChange={handleChange} />
        </div>

        <div className="input-container">
          <label htmlFor="missions" className="label">משימות:</label>
          <textarea name="missions" id="missions" className="textarea-field" placeholder="פירוט משימות..." value={formData.missions} onChange={handleChange} />
        </div>

        <div className="checkposts-subsection">
          <h3>צקפוסטים וצימודים</h3>
          {checkpostsList.map((cp, index) => (
            <div key={index} className="checkpost-row">
              <input 
                type="text" 
                placeholder="כוח" 
                value={cp.force} 
                onChange={(e) => updateCheckpostRow(index, "force", e.target.value)} 
                className="checkpost-input"
              />
              <input 
                type="text" 
                placeholder="מיקום" 
                value={cp.location} 
                onChange={(e) => updateCheckpostRow(index, "location", e.target.value)} 
                className="checkpost-input"
              />
              <input 
                type="text" 
                placeholder="שעות" 
                value={cp.hours} 
                onChange={(e) => updateCheckpostRow(index, "hours", e.target.value)} 
                className="checkpost-input"
              />
              <input 
                type="text" 
                placeholder="צימודים" 
                value={cp.pairings} 
                onChange={(e) => updateCheckpostRow(index, "pairings", e.target.value)} 
                className="checkpost-input"
              />
              <button type="button" onClick={() => removeCheckpostRow(index)} className="delete-row-btn">
                <FaTrash />
              </button>
            </div>
          ))}
          <button type="button" onClick={addCheckpostRow} className="add-row-btn">
            <FaPlus /> הוסף שורה
          </button>
        </div>

        <button type="submit" className="add-button">
          שלח בוואטסאפ
          <FaWhatsapp />
        </button>
      </form>
    </section>
  );
}

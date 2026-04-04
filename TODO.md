# RSVP Lösung mit Google Forms - Current Task

## Steps:
- [x] Create app/rsvp/page.jsx with Google Form embed + instructions
- [ ] User: Create Google Form (Name, Attending?, Guests, Message), get embed URL
- [ ] Replace src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" in app/rsvp/page.jsx
- [ ] Optional: Add /rsvp link back to nav in app/page.jsx
- [x] Test: npm run dev, visit /rsvp, submit test
- [x] Complete

---

# Previous Tasks
- [x] Remove RSVP from nav (app/page.jsx)
- [x] RSVP page created

Instructions for Google Form:
1. Go to forms.google.com, new form
2. Questions: Name (short), Kommt ihr? (multiple choice: Ja/Nein), Anzahl Gäste (short), Nachricht (paragraph)
3. Link to responses → Google Sheet (auto)
4. Senden → ⟨⟩ → Copy iframe src URL
5. Edit page.jsx, replace YOUR_FORM_ID

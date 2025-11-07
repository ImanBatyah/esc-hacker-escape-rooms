# [Esc] Hacker Escape Rooms – mobilmeny

Detta repository innehåller min inlämningsuppgift där jag bygger en mobilanpassad meny till startsidan för [Esc] Hacker Escape Rooms.

## Struktur

Jag har löst uppgiften på två olika sätt enligt instruktionen:

- `variant-a-static-html/` – statisk HTML-version
- `variant-b-dom-api/` – JavaScript-version där menyn skapas med DOM API

## Variant A – statisk HTML

I `variant-a-static-html` ligger menyn (hamburgerknapp och overlay) direkt i HTML-filen (`index.html`).  
CSS (`styles.css`) styr layout, färger och animationer.  
JavaScript-filen `JS/app.js` används enbart till att öppna och stänga den befintliga menyn genom att lägga till och ta bort CSS-klasser.

På stora skärmar visas den vanliga horisontella menyn i headern.  
På små skärmar (under 720px) döljs den vanliga menyn, och en hamburgerknapp visas uppe till höger.  
När användaren klickar på knappen öppnas en fullskärmsmeny som täcker hela sidan.  
Menyn kan stängas genom att klicka på X, klicka utanför panelen eller trycka på Esc.

## Variant B – DOM API (JavaScript)

I `variant-b-dom-api` byggs hela mobilmenyn upp med JavaScript i filen `JS/menu.js`.  
Själva HTML-filen innehåller endast en plats för knappen (`<div id="menuMount"></div>`), men inga element för mobilmenyn.  
När sidan laddas skapar JavaScript:

- hamburgerknappen
- overlay-diven
- alla länkar i menyn
- "Book now"-knappen

På samma sätt som i Variant A visas menyn bara på små skärmar.  
Öppning och stängning fungerar likadant, men all struktur för menyn ligger i JavaScript istället för i HTML.

## Teknik

Båda versionerna använder:

- HTML5 för struktur
- CSS3 för layout, färger och responsiv design (media queries, flexbox, grid)
- JavaScript för att hantera öppning och stängning av mobilmenyn
- Git och GitHub för versionshantering
- GitHub Pages för publicering

## Sammanfattning

Denna uppgift visar två olika sätt att bygga en mobilanpassad meny:

- en statisk HTML-lösning
- en dynamisk lösning med DOM API i JavaScript

Båda följer designen från Figma och uppfyller kraven i uppgiftsbeskrivningen.
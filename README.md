# Street Bites - Publik Webbplats

Detta är den publika webbplatsen för Street Bites food truck. Webbplatsen är byggd som en statisk webbplats som konsumerar data från vår REST API för att visa meny, platser och företagsinformation.

## Länkar

- **Live Demo (publik webbplats):** [https://dt207g-moment5-2-publik-webbplats.netlify.app/](https://dt207g-moment5-2-publik-webbplats.netlify.app/)
- **GitHub Repository:** [https://github.com/ellenliden/dt208g_moment5_2.git](https://github.com/ellenliden/dt208g_moment5_2.git)
- **API (Backend):** [https://dt207g-moment5.onrender.com/](https://dt207g-moment5.onrender.com/)
- **Admin Dashboard:** [https://moment5-admin.netlify.app/](https://moment5-admin.netlify.app/)

## Funktioner

### **Hero-sektion med Slideshow**

- Automatisk slideshow (bildspel) mellan hamburgare och pommes frites
- Responsiv design med overlay-knappar på mobil
- Smooth animationer och transitions

### **Responsiv Navigation**

- Hamburger-meny för mobil och tablet
- Smooth scrolling mellan sektioner
- ESC-stöd för meny-stängning

### **Dynamisk Meny**

- Hämtar kategorier och maträtter från API
- Visar bilder, beskrivning, priser och allergener
- Uppdelat efter kategori

### **Platsinformation**

- Aktuella platser och öppettider
- Responsiv layout för alla enheter

### **Om oss-sektion**

- Företagsinformation
- Kontaktinformation

## Teknisk

- **HTML5** - Semantisk markup
- **CSS3** - Responsiv design med Flexbox och Grid
- **Vanilla JavaScript** - Interaktivitet och API-kommunikation
- **Fetch API** - Kommunikation med REST-webbtjänst

## Design och UX

### Grafisk Profil

- **Primär färg:** #017963 (grön)
- **Sekundär färg:** #FFC042 (gul)
- **Typografi:** Inter font family
- **Design:** Minimalistisk, trendig, modern (inspiration från Glovo)

### Responsiv Design

- **Mobile-first** approach
- **Breakpoints:** 768px (tablet), 480px (mobil)
- **Hamburger-meny** för mobil/tablet
- **Flexbox och Grid** för layout

## Installation och Setup

### Lokal utveckling

1. **Klona repository:**

```bash
git clone https://github.com/ellenliden/DT207G_moment5_2.git
cd DT207G_moment5_2
```

2. **Öppna i webbläsare:**

```bash
# Alternativ 1: Öppna direkt
open index.html

# Alternativ 2: Lokal server (rekommenderat för CORS)
npx serve .
```

### Deployment

#### Netlify

- **Build Command:** Lämnas tom
- **Publish Directory:** / (root)
- **Deploy:** kopplad till GitHub-repot

## API-integration

Webbplatsen konsumerar data från Street Bites REST API:

### Endpoints som används:

- `GET /api/menu/categories` - Hämtar meny-kategorier
- `GET /api/menu/items` - Hämtar alla maträtter
- `GET /api/locations` - Hämtar platsinformation

### API-konfiguration:

Uppdatera `API_BASE_URL` i `js/menu.js`:

```javascript
const API_BASE_URL = "https://dt207g-moment5.onrender.com";
```

### Admin-inloggning:

För att komma åt admin-dashboardet:

- **E-post:** test@streetbites.com
- **Lösenord:** test123

## JavaScript-funktionalitet

### StreetBitesApp (main.js)

- **Navigation:** Hamburger-meny med overlay
- **Slideshow:** Automatisk växling mellan bilder
- **Smooth scrolling:** Mjuk scrollning mellan sektioner
- **Responsiv design:** Anpassning för olika skärmstorlekar

### MenuManager (menu.js)

- **API-kommunikation:** Hämtar meny-data
- **Dynamisk rendering:** Skapar HTML från API-data
- **Kategorifiltrering:** Visar maträtter per kategori
- **Bildhantering:** Visar bilder från API

## Responsiv Design

### Desktop (>768px)

- Horisontell navigation
- Slideshow med bilder på sidorna
- Grid-layout för funktioner

### Tablet (≤768px)

- Hamburger-meny
- Vertikal layout för hero-sektion
- Anpassade storlekar för bilder

### Mobil (≤480px)

- Kompakt hamburger-meny
- Mindre bilder och text
- Touch-vänlig navigation

## CSS-funktioner

### Css

- **CSS Grid** för layout
- **Flexbox** för alignment
- **CSS Variables** för färger
- **Transitions** för animationer
- **Media queries** för responsivitet

### Animationer

- **Slideshow-fade** mellan bilder
- **Hover-effekter** på knappar och länkar
- **Smooth transitions** för navigation
- **Loading-states** för API-anrop

## Testning

### Lokal testning

1. Öppna `index.html` i webbläsare
2. Testa navigation och slideshow
3. Kontrollera responsiv design
4. Testa API-kommunikation (kräver lokal server för CORS)

### Browser-kompatibilitet

- **Chrome/Edge:** Fullt stöd
- **Firefox:** Fullt stöd
- **Safari:** Fullt stöd
- **Mobile browsers:** Fullt stöd

## Prestanda

### Optimeringar

- **Bildkomprimering:** PNG-bilder optimerade
- **CSS-minifiering:** Kompakt CSS-kod
- **JavaScript:** Effektiv DOM-manipulation
- **Lazy loading:** Bilder laddas vid behov

### Laddningstider

- **Initial load:** <2 sekunder
- **API-respons:** <1 sekund
- **Navigation:** Instant

## Framtida förbättringar

### Planerade funktioner

- **Beställningssystem:** Integration med orders API
- **Kontaktformulär:** E-postfunktionalitet kopplat till admin-sidan
- **Sökfunktion:** Sök i meny
- **PWA:** Progressive Web App-funktioner
- **Offline-stöd:** Service workers

## Kontakt

**Ellen Liden**

elli1807@student.miun.se

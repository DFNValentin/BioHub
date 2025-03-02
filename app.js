const app = Vue.createApp({
  data() {
    return {
      activeCategory: null,
      showAnswer: false, 
      currentFlashcardIndex: 0,  
      categories: [
        {
          id: 'circulatie',
          name: 'Sistemul Circulator',
          flashcards: [
            { question: 'Care sunt principalele componente ale sistemului circulator la mamifere?', answer: 'Inima, si vase de sange (arterele, venele și capilarele).' },
            { question: 'Ce rol au arterele?', answer: 'Arterele transportă sângele de la inimă către restul corpului.' },
            { question: 'Ce rol au venele?', answer: 'Venele transportă sângele înapoi la inimă.' },
            { question: 'Care este structura peretelui inimii?', answer: 'Peretele inimii este format din epicard, miocard și endocard.' },
            { question: 'Care este rolul capilarelor?', answer: 'Capilarele permit schimbul de substanțe și gaze respiratorii între sânge și țesuturi.' },
            { question: 'Care sunt cele două circuite principale ale circulației sângelui?', answer: 'Circulația sistemică (mare) și circulația pulmonară (mică).' },
            { question: 'De unde începe circulația sistemică?', answer: 'Circulația sistemică începe din ventriculul stâng.' },
            { question: 'Ce sânge transportă artera pulmonară?', answer: 'Artera pulmonară transportă sânge neoxigenat (cu CO2).' },
            { question: 'Care sunt camerele inimii și cu ce vase de sânge sau camere comunică fiecare?', answer: 'Atriul drept comunică cu venele cave și cu ventriculul drept; atriul stâng comunică cu venele pulmonare și cu ventriculul stâng; ventriculul drept comunică cu artera pulmonară; ventriculul stâng comunică cu artera aortă.' },
            { question: 'Ce se întâmplă în cazul infarctului miocardic?', answer: 'Se produce astuparea vaselor coronare cu un cheag de sânge, ducând la necrozarea țesutului miocardic.' },
            { question: 'Ce cauzează ateroscleroza?', answer: 'Infiltrarea pereților arterelor cu lipide și colesterol, cauzată de alimentația bogată în grăsimi și sedentarism.' }
          ]
        },

        { 
          id: 'circulatia_plante', 
          name: 'Circulația la Plante', 
          flashcards: [
            { question: 'Cum este absorbită apa la plante?', answer: 'Apa este absorbită la nivelul rădăcinilor prin osmoză.' },
            { question: 'Cum sunt absorbite sărurile minerale de către plante?', answer: 'Sărurile minerale sunt absorbite fie prin mecanism pasiv, independent de apă, fie prin mecanism activ, cu ajutorul pompelor ionice care consumă energie.' },
            { question: 'Ce formează apa și sărurile minerale în plante?', answer: 'Apa și sărurile minerale formează seva brută.' },
            { question: 'Care sunt principalele forțe implicate în circulația sevei brute?', answer: 'Presiunea radiculară și forța de susținere determinată de transpirație.' },
            { question: 'Ce rol joacă presiunea radiculară în circulația sevei brute?', answer: 'Presiunea radiculară acționează primăvara, înainte de apariția frunzelor, și este un mecanism activ.' },
            { question: 'Cum contribuie forța de susținere în circulația sevei brute?', answer: 'Forța de susținere acționează după apariția frunzelor și este un mecanism pasiv determinat de transpirație.' },
            { question: 'Ce este circulația sevei elaborate?', answer: 'Circulația sevei elaborate presupune transportul apei și substanțelor organice formate în frunze prin vasele liberiene.' },
            { question: 'Care este mecanismul implicat în circulația sevei elaborate?', answer: 'Circulația sevei elaborate se face prin mecanism activ în ambele sensuri.' },
            { question: 'Ce rol joacă transpirația în circulația sevei?', answer: 'Transpirația ajută la circulația sevei brute, susținând mișcarea apei prin planta.' },
            { question: 'Care este rolul vaselor conducătoare în circulația plantelor?', answer: 'Vasele conducătoare, precum xylemul și floemul, transportă apa și substanțele nutritive în planta.' }
          ]

        },
        { 
          id: 'respiratie', 
          name: 'Sistemul Respirator',
          flashcards: [
            { question: 'Ce include respirația la mamifere?', answer: 'Respirația la mamifere include schimbul de gaze între mediul intern și mediul extern, transportul gazelor respiratorii realizat de sânge și oxidoreducerile celulare (respirația celulară).' },
            { question: 'Din ce este format sistemul respirator?', answer: 'Sistemul respirator este format din căile respiratorii extrapulmonare și plămâni.' },
            { question: 'Care sunt principalele căi respiratorii extrapulmonare?', answer: 'Fosele nazale, faringele, laringele, traheea și bronhiile extrapulmonare.' },
            { question: 'Ce rol au fosele nazale în respirație?', answer: 'Fosele nazale sunt căptușite cu o mucoasă nazală și au funcție respiratorie în partea inferioară și olfactivă în partea superioară.' },
            { question: 'Ce este laringele?', answer: 'Laringele este un organ cartilaginos care conține coarde vocale și delimitează orificiul laringian (glota).' },
            { question: 'Ce funcție are traheea în sistemul respirator?', answer: 'Traheea filtrează aerul datorită mucoasei traheale care conține cili.' },
            { question: 'Care sunt plămânii și cum sunt organizați?', answer: 'Plămânii sunt situați în cavitatea toracică, împărțiți în lobi, segmente și lobuli. Fiecare lobul este format din acini pulmonari.' },
            { question: 'Ce este pleura și ce rol are?', answer: 'Pleura este o membrană seroasă care acoperă plămânii, având o foiță parietală în contact cu pereții toracici și o foiță viscerală care aderă la plămâni.' },
            { question: 'Care este structura arborelui bronșic?', answer: 'Arborele bronșic începe cu bronhiile principale și se termină cu acinii pulmonari, care sunt formați din alveole pulmonare.' },
            { question: 'Care este rolul alveolelor pulmonare?', answer: 'Alveolele pulmonare sunt suprafața de schimb pentru gaze, iar peretele lor este un epiteliu pavimentos unistratificat.' },
            { question: 'Ce este ventilația pulmonară?', answer: 'Ventilația pulmonară este procesul de inspirație și expirație prin care aerul pătrunde și iese din plămâni.' },
            { question: 'Ce se întâmplă în timpul inspirației?', answer: 'În inspirație, mușchii inspiratori se contractă, volumul cutiei toracice crește, iar presiunea intrapulmonară scade, determinând pătrunderea aerului în plămâni.' },
            { question: 'Ce se întâmplă în timpul expirației?', answer: 'Expirația este un proces pasiv, în care mușchii inspiratori se relaxează și volumul plămânilor scade, crescând presiunea intrapulmonară.' },
            { question: 'Care sunt bolile sistemului respirator la om?', answer: 'Bronșita, laringita, astmul bronșic, pneumonia și TBC-ul.' },
            { question: 'Ce este bronșita și ce o cauzează?', answer: 'Bronșita este inflamația mucoasei arborelui bronșic, cauzată de infecții bacteriene sau virale. Manifestările includ tuse profundă și expectorație galben-cenușie.' },
            { question: 'Ce este laringita și care sunt cauzele sale?', answer: 'Laringita este inflamația mucoasei laringelui, cauzată de răceli, infecții, rinite sau amigdalite, și se manifestă prin voce răgușită și senzație de arsuri în gât.' },
            { question: 'Ce este astmul bronșic și care sunt simptomele?', answer: 'Astmul bronșic este o boală caracterizată prin inflamarea bronhiilor și spasmul acestora, manifestându-se prin senzații de sufocare și crize nocturne.' },
            { question: 'Ce cauzează pneumonia și care sunt simptomele?', answer: 'Pneumonia este cauzată de microbi precum pneumococul și streptococul și se manifestă prin febră ridicată, tuse puternică și expectorație purulentă.' },
            { question: 'Ce este TBC-ul și care sunt simptomele?', answer: 'TBC-ul este o boală cauzată de bacilul Koch, care duce la distrugerea alveolelor pulmonare și se manifestă prin transpirații nocturne, slăbire și lipsă de apetit.' },
            { question: 'Ce măsuri de prevenire a bolilor respiratorii există?', answer: 'Asigurarea unor condiții bune ale aerului, călirea organismului, alimentație echilibrată, vaccinare și igienă corespunzătoare.' }
          ]

        },
        { 
          id: 'respiratia_plante', 
          name: 'Respirația la Plante', 
          flashcards: [
            { question: 'Ce este respirația celulară?', answer: 'Este procesul prin care la nivelul celulelor se produce oxidarea substanțelor organice pentru eliberarea energiei acumulate în acestea (producerea de ATP).' },
            { question: 'Care sunt tipurile de respirație?', answer: 'Respirația aerobă și respirația anaerobă.' },
            { question: 'Ce caracterizează respirația aerobă?', answer: 'Este oxidarea completă a substanțelor organice, folosind oxigenul molecular, cu producerea de CO2 și apă și eliberarea unei cantități mari de energie.' },
            { question: 'Ce caracterizează respirația anaerobă?', answer: 'Este oxidarea parțială a substanțelor organice în absența oxigenului, cu eliberarea unei cantități mici de energie.' },
            { question: 'Ce este fermentația?', answer: 'Fermentația este un tip de respirație anaerobă care are loc în absența oxigenului și produce cantități mici de energie.' },
            { question: 'Care sunt tipurile de fermentație?', answer: 'Fermentația alcoolică, fermentația lactică și fermentația acetică.' },
            { question: 'Ce este fermentația alcoolică?', answer: 'Este transformarea glucozei în alcool etilic și dioxid de carbon, întâlnită la drojdii.' },
            { question: 'Ce este fermentația lactică?', answer: 'Este transformarea glucozei în acid lactic, întâlnită la bacterii lactice.' },
            { question: 'Ce este fermentația acetică?', answer: 'Este transformarea alcoolului etilic în acid acetic în prezența oxigenului, produsă de bacterii acetice.' },
            { question: 'Ce rol joacă respirația la plante?', answer: 'Respirația se desfășoară la nivelul frunzelor, florilor și meristemelor active și presupune consumul de substanță organică, oxigen și producerea de CO2.' },
            { question: 'Care este ecuația chimică a respirației aerobe?', answer: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energie (675 kcal).' },
            { question: 'Care sunt produșii finali ai respirației anaerobe?', answer: 'Substanța organică B, CO2 și energie.' },
            { question: 'Care este energia eliberată în procesul de respirație anaerobă?', answer: '16-34 kcal.' },
            { question: 'Ce rol are ATP în respirație?', answer: 'ATP (adenozintrifosfat) este substanța care stochează și transportă energia eliberată în procesul de respirație.' },
            { question: 'Care este diferența dintre respirația aerobă și anaerobă?', answer: 'Respirația aerobă utilizează oxigen și produce o cantitate mare de energie, în timp ce respirația anaerobă are loc în absența oxigenului și produce o cantitate mai mică de energie.' },
            { question: 'Care este eficiența energetică a respirației aerobă față de anaerobă?', answer: 'Respirația aerobă este mult mai eficientă din punct de vedere energetic decât respirația anaerobă.' }
          ]

        },
        { 
          id: 'excretie', 
          name: 'Sistemul Excretor', 
          flashcards: [
            { question: 'Ce este excreția la mamifere?', answer: 'Excreția la mamifere include eliminarea produselor reziduale toxice rezultate din metabolism, prin căile urinare, tegumentare (transpirație) și pulmonare.' },
            { question: 'Care este rolul principal al sistemului excretor la mamifere?', answer: 'Eliminarea substanțelor toxice și menținerea echilibrului hidroelectrolitic.' },
            { question: 'Care sunt principalele componente ale sistemului excretor la mamifere?', answer: 'Rinichii, ureterele, vezica urinară și uretra.' },
            { question: 'Ce este rinichiul și care este rolul său?', answer: 'Rinichiul este un organ pereche situat în cavitatea abdominală care filtrează sângele și formează urina.' },
            { question: 'Ce sunt nefronii și care este funcția lor?', answer: 'Nefronii sunt unitățile structurale și funcționale ale rinichiului care realizează filtrarea, reabsorbția și secreția, formând urina finală.' },
            { question: 'Care este structura rinichiului?', answer: 'Rinichiul este format dintr-o capsulă fibroasă și parenchim renal, cu o zonă medulară și o zonă corticală.' },
            { question: 'Ce sunt ureterele și ce rol au?', answer: 'Ureterele sunt conducte care transportă urina de la rinichi la vezica urinară.' },
            { question: 'Ce rol are vezica urinară în sistemul excretor?', answer: 'Vezica urinară stochează urina înainte de eliminarea sa din organism.' },
            { question: 'Ce boli ale sistemului excretor sunt menționate în document?', answer: 'Litiaza urinară, insuficiența renală cronică.' },
            { question: 'Ce cauzează litiaza urinară și care sunt simptomele?', answer: 'Litiaza urinară este cauzată de tulburări de metabolism și dietă nesănătoasă. Simptomele includ formarea calculilor renali, dureri lombare și hemoragii.' },
            { question: 'Ce este insuficiența renală cronică și care sunt simptomele?', answer: 'Insuficiența renală cronică apare din cauza afecțiunilor renale și se manifestă prin încetinirea funcției rinichilor, oboseală, anemie și greață.' },
            { question: 'Cum se previn afecțiunile sistemului excretor?', answer: 'Prin alimentație echilibrată, igiena corectă a organelor excretoare, tratamente adecvate pentru infecții și evitarea abuzului de medicamente.' }
          ]

        },
        { 
          id: 'excretia_plante', 
          name: 'Excreția la Plante', 
          flashcards: [
            { question: 'Ce este excreția la plante?', answer: 'Excreția la plante se referă la eliminarea substanțelor care devin toxice sau sunt în exces în organismul plantelor.' },
            { question: 'Care sunt principalele căi de excreție la plante?', answer: 'Transpirația și gutația.' },
            { question: 'Ce este transpirația la plante?', answer: 'Transpirația este procesul de eliminare a apei sub formă de vapori prin stomate, cuticulă și lenticele.' },
            { question: 'Ce este gutația la plante?', answer: 'Gutația este procesul prin care plantele elimină excesul de apă sub formă de picături, prin structuri speciale numite hidatode.' },
            { question: 'Ce rol au stomatele în transpirația plantelor?', answer: 'Stomatele reglează eliminarea apei sub formă de vapori și permit schimburile gazoase esențiale pentru fotosinteză și respirație.' },
            { question: 'Ce este o stomată?', answer: 'Stomata este o structură specializată formată din două celule epidermice care reglează deschiderea și închiderea ostiolului, controlând astfel pierderea de apă și circulația gazelor.' },
            { question: 'Cum ajută transpirația la circulația apei în plantă?', answer: 'Transpirația favorizează ascensiunea sevei brute, aducând apă și minerale din rădăcini către frunze.' },
            { question: 'Care sunt structurile plantelor care participă la transpirație?', answer: 'Cuticula, stomatele și lenticelele.' },
            { question: 'Ce rol are transpirația în menținerea temperaturii plantelor?', answer: 'Transpirația previne supraincălzirea plantei, ajutând la răcirea acesteia prin evaporarea apei.' },
            { question: 'Care sunt beneficiile transpirației pentru plante?', answer: 'Transpirația ajută la menținerea echilibrului hidric, favorizează circulația gazelor (CO₂ și O₂) și sprijină ascensiunea sevei brute.' }
          ]
        },
        { 
          id: 'digestie', 
          name: 'Sistemul Digestiv', 
          flashcards: [

            { question: 'Care sunt componentele sistemului digestiv?', answer: 'Tubul digestiv și glandele anexe (glandele salivare, ficatul, pancreasul exocrin).' },

            { question: 'Care sunt cele două tipuri de digestie?', answer: 'Digestia intracelulară și digestia extracelulară.' },
            { question: 'Ce este digestia intracelulară?', answer: 'Este caracteristică protozoarelor, spongierilor, celenteratelor și unor celule animale. Se realizează prin fagocitoză și pinocitoză.' },
            { question: 'Ce este digestia extracelulară?', answer: 'Digestia extracelulară se desfășoară în interiorul unor cavități și cu ajutorul unor glande digestive.' },
          
            { question: 'Care sunt etapele digestiei la mamifere?', answer: 'Digestia se realizează prin transformări mecanice, fizice și chimice în tubul digestiv.' },
            { question: 'Ce rol are cavitatea bucală în digestie?', answer: 'În cavitatea bucală hrana suferă transformări mecanice și fizice cu ajutorul dinților, limbii și salivei.' },
            { question: 'Ce rol joacă stomacul în digestie?', answer: 'Stomacul depozitează alimentele și ajută la digestia gastrică prin acțiunea sucului gastric.' },
            { question: 'Care este funcția principală a intestinului subțire?', answer: 'Digestia finală și absorbția nutrimentelor.' },
            { question: 'Ce rol are ficatul în digestie?', answer: 'Ficatul produce bila, care emulsionază grăsimile și ajută la absorbția acestora.' },
            { question: 'Ce rol joacă pancreasul în procesul de digestie?', answer: 'Pancreasul secretă sucul pancreatic, care conține enzime esențiale pentru digestie.' },
          
            { question: 'Ce enzime sunt implicate în digestia chimică?', answer: 'Enzime glicolitice, lipolitice și proteolitice.' },
            { question: 'Care sunt tipurile de enzime implicate în digestie?', answer: 'Enzime glicolitice (pentru glucide), lipolitice (pentru lipide), proteolitice (pentru proteine).' },
            { question: 'Ce enzime sunt implicate în digestia glucidelor?', answer: 'Amilaza salivară (în cavitatea bucală) și amilaza pancreatică (în intestinul subțire).' },
            { question: 'Ce enzime sunt implicate în digestia lipidelor?', answer: 'Lipaza gastrică (în stomac) și lipaza pancreatică (în intestinul subțire).' },
            { question: 'Ce enzime sunt implicate în digestia proteinelor?', answer: 'Pepsina (în stomac), tripsina și chimotripsina (în intestinul subțire).' },

            { question: 'Unde acționează amilaza salivară?', answer: 'Amilaza salivară acționează în cavitatea bucală și descompune glucidele în maltoză.' },
            { question: 'Care este rolul lipazei pancreatice?', answer: 'Lipaza pancreatică emulsionază și hidrolizează grăsimile în acizi grași și glicerol în intestinul subțire.' },
            { question: 'Ce rol are pepsina în stomac?', answer: 'Pepsina este o enzimă proteolitică care hidrolizează proteinele în stomac, descompunându-le în peptide.' },
            { question: 'Ce tipuri de enzime se găsesc în sucul pancreatic?', answer: 'Enzime proteolitice (tripsina, chimotripsina, carboxipeptidaze), lipolitice (lipaza pancreatică) și glicolitice (amilaza pancreatică).' },
            { question: 'Care este rolul amilazei pancreatice?', answer: 'Amilaza pancreatică descompune amidonul în maltoză în intestinul subțire.' },

            { question: 'Ce este hepatita virală acută și cum se manifestă?', answer: 'Hepatita virală acută este cauzată de virusuri hepatice și se manifestă prin tulburări digestive și icter.' }
          ]


        },
        { 
          id: 'nutritie', 
          name: 'Nutriția', 
          flashcards: [
            { question: 'Ce este nutriția autotrofă?', answer: 'Nutriția autotrofă este procesul prin care organismele sintetizează substanțele organice proprii folosind surse de carbon anorganice, cum ar fi CO₂.' },
            { question: 'Care sunt cele două procese principale prin care se realizează nutriția autotrofă?', answer: 'Fotosinteza și chemosinteza.' },
            { question: 'Ce este nutriția heterotrofă?', answer: 'Nutriția heterotrofă este caracteristică organismelor care obțin substanțele organice din alte organisme, fie vii, fie moarte.' },
            { question: 'Care sunt principalele tipuri de nutriție heterotrofă?', answer: 'Saprofită, parazitară, mixotrofică și simbiontă.' },
            { question: 'Ce este nutriția saprofită?', answer: 'Nutriția saprofită este un tip de nutriție în care organismele obțin substanțele organice din resturi vegetale și animale moarte.' },
            { question: 'Ce este nutriția parazitară?', answer: 'Nutriția parazitară se realizează prin extragerea substanțelor organice din organisme vii pe care le parazitează.' },
            { question: 'Ce este nutriția simbiontă?', answer: 'Nutriția simbiontă, sau mutualismul, este relația dintre două organisme care beneficiază reciproc de pe urma asociării lor.' },
            { question: 'Ce este nutriția mixotrofică?', answer: 'Nutriția mixotrofică este caracteristică organismelor care pot realiza atât fotosinteza, cât și nutriția heterotrofă, în funcție de condițiile din mediu.' }
          ]
        }
      ]
    };
  },
  methods: {
    setActiveCategory(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      this.activeCategory = categoryId;
      this.flashcards = category.flashcards;
      this.currentFlashcardIndex = 0;  // Restabilim indexul flashcardului
      this.showAnswer = false;         // Ascundem răspunsul la început
    },
    backToMenu() {
      this.activeCategory = null;  // Resetează secțiunea activă pentru a reveni la meniul principal
      this.flashcards = [];
      this.currentFlashcardIndex = 0;
      this.showAnswer = false;
    },
    nextFlashcard() {
      if (this.currentFlashcardIndex < this.flashcards.length - 1) {
        this.currentFlashcardIndex++;
        this.showAnswer = false;  // Resetează răspunsul
      } else {
        this.currentFlashcardIndex = 0; // Poți seta să reîncepi la primul flashcard
      }
    }
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('https://dfnvalentin.github.io/BioHub/service-worker.js')
      .then((registration) => {
        console.log('Service Worker înregistrat cu succes:', registration);
      })
      .catch((error) => {
        console.log('Înregistrarea Service Worker a eșuat:', error);
      });
  });
}


app.mount('#app');

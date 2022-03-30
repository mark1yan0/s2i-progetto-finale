api:{
covid: 'https://rapidapi.com/api-sports/api/covid-193/',
news: 'https://newsapi.org/',
weatherAPI.com: 'https://rapidapi.com/weatherapi/api/weatherapi-com/'}

<h1>Start2Impact progetto final Front-End</h1>

<h2>Contenuti</h2>
<ol>
    <li><a href="#about">Riguardo il progetto</a></li>
    <li><a href="#built">Costruito con</a></li>
    <li><a href="#contact">Contatti</a></li>
</ol>

<h2 id="about">Riguardo il progetto</h2>
<p>Come da richiesta, questa è un'app che utilizza API RESTful esterne e salva dati il LocalStorage.</p>

<p>Io ho deciso di usare tre API diverse:</p>

<ul>
    <li><a href="https://newsapi.org/">News</a></li>
    <li><a href="https://rapidapi.com/api-sports/api/covid-193/">Covid</a></li>
    <li><a href="https://rapidapi.com/weatherapi/api/weatherapi-com/">Meteo</a></li>
</ul>

<p>Si tratta di un protale di notizie, nel quale è possible visializzare le notizie della giornata, le principali statistiche dei dati riguardanti la pandemia ed il meteo. Inoltre è possible eseguire ricerche per tutte e tre i tipi di contenuti.</p>

<h3>Autenticazione</h3>

<p>Appena si approda sul sito si nota che bisogna creare un account per accedere. Questo perchè ho voluto sperimentare con l'autenticazione di Firebase. Non ci sono validazioni specifiche quindi è sufficiente anche solo usare un'email fasulla. Sono consapevole che non è perfetto, con Firebase è possible infatti realizzare un buon flusso di autenticazione, ma penso che sarebbe andato oltre lo scopo della consegna.</p>

<h3>localStorage</h3>

<p>Sia le notizie, che la posizione per le previsioni del meteo possono essere salvate in localStorage</p>
<p>Per quanto riguarda la posizione all'utente verrà anche chiesto se vuole condividere la propria posizione, settandola come predefinita nel localStore in caso di espresso permesso dell'utente. Questa comunque può essere modificata.</p>

<h2 id="built">Costruito con</h2>
<p>L'app è stata costruita con React e le seguenti principali tecnologie:</p>
<ul>
    <li><a href="#router">React Router per il routing</li>
    <li><a href="#icons">React Icons</a> per le icone</li>
    <li><a href="#axios">Axios</a> per le chiamate alle API</li>
    <li><a href="#redux">Redux</a>, in particolare Redux Toolkit per lo state menagment</li>
    <li><a href="#firebase">Firebase</a> per autenticazione l'hosting dell'app</li>
    <li><a href="#tailwind">TailwindCSS</a></li>
    <li><a href="#custom-hooks">Custom Hooks</a></li>
    <li><a href="#features">React Features</a></li>
    <li><a href="#spring">React-Spring</a></li>
</ul>

<p>React Router, Icons, Axios sono librerie con cui ho già avuto esperienza e di cui ho parlato in altri progetti</p>

<h3 id='tailwind'><a href='https://tailwindcss.com/'>TailwindCSS</a></h3>
<p>TailwindCSS è una libreria per lo styling che, attraverso le proprie utility-classes, rende lo styling molto più spedito e soprattuto da una consistenza nel tema del progetto. Mi è piaciuto molto e sicuramente la riutilizzerò in futuro.</p>

<h3 id='redux'><a href=''>Redux e redux toolkit</a></h3>
<p>Grazie a questo progetto mi sono veramente scontrato ed ho preso mano con Redux. Dato che gli sviluppatori stessi della libreria indicano di usare redux toolkit ho deciso di seguire questo approccio. Devo dire che non mi trovo male e anche quando si tratta di state complessi (anche se qua non lo sono poi così tanto) aiuta molto.</p>

<h3 id='custom-hooks'>Custom Hooks</h3>
<p>Ho realizzato diversi custom hooks per facilitarmi alcune parti di codice come il fetching di news ecc.</p>

<h3 id='features'>React features</h3>
<p>Ho inoltre approfondito alcune features di React stesso. Una di questo è il lazy loading che, in combinazione con la componente Suspense, rende l'app più ottimizzata.
Ho inoltre utilizzato dei Portals per costruire le componenti Snackbar e Modals, in modo da non avere il murkup più complesso del necessario. 
</p>

<h3 id='spring'><a href='https://react-spring.io/'>React Spring</a></h3>
<p>Ho utilizzato la seguente libreria per creare delle animazioni basiche per i caricamenti. Voglio sicuramente approfondire l'argomento in futuro.
</p>

<h2 id="contact">Contact</h2>
<p>Markiyan Kmit - https://www.instagram.com/markkmit/ - business.kmit@gmail.com</p>

<p>Project Link: https://s2i-progetto-finale.firebaseapp.com/</p>

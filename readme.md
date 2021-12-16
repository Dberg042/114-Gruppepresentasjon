# UIA Fadder -IS114

Fadder-uka UIA er vår gruppe sitt forsøk på å lage en app som kan samle folk etter pandemien. Poenget med appen er å samle all informasjon når det kommer til arrangementer og sammenkomster i løpet av fadder uka ved UIA. Med appen vår, vil studenter ha mulighet til å logge seg inn ved bruken av feide, og bli vist alle de kommende arrangementer som blir enten arrangert av skolen og linjeforeningene, eller privatpersoner i faddergruppa. 

I IS-104 og IS.114 har vi fått samme oppgave om å lage en app/nettside som skal samle folk, men vi har brukt relativt forskjellige metoder på å designe appene. Vi startet med IS-104, hvor vi brukte et ux design tool som heter justinmind for å designe hvordan appen skal se ut og fungere. I IS-114 skulle vi lage en web basert versjon av applikasjonen, og vi har derfor dratt mye inspirasjon fra den originale IS-104 appen for å prøve å få til et slags samhold mellom de to produktene og en relativ lik opplevelse mellom de to.



# Kode Språk Brukt
Først og fremst for å lykkes med prosjekt, lærte vi Githup bruk som å lage “commits” og “pushe” kode til en branch. Ved bruk av Github skulle vi samarbeide med å planlegge koden til en slik nettside, i tillegg til å lære oss plattformen. Etterpå blir vi mer kjent med HTML og CCS i visitkort oppgaven. Gjennom "how vi roll oppgave" først vi begynnte kode javascript. Vi utviklet mer våre javascript kode ferdigheter med siste slutte oppgave. Vi lært disse gjennom forelesninger, og flere kilder slik at codeacademy, codepen, stackoverflow, linkedinlearning, W3Schools og Mozilla developer osv. Vi har tatt kurser men kanskje viktigste, vi lærte mer ved å prøving og feiling. Endelig finner vi løsning vi trenger, kanskje vi kunne bruke mer tid for å prøving og feiling hvis vi hadde gjort det på nytt nå.

## Kvalitet i Kode
Vi har gitt forstårlig navn for filer, classer og eksterne resurser. 
Vi har 2 main html file, en heter login.html som representer login page og andre index.html som er main page file. Vi han en stylesheet og 2 javascript filer. JS filer har god navgiving og det er helt klar å forstå kode funskjon. 
 
Vi brukte kommentarer for noen kode grupper der koden ikke er selvforklarende, forkesempel

## HTML
Vi brukte kommentar for noen HTML elementer for å gjøre enklere å forstå, hva den kode gjør i applikasjon.
Her ser vi help meny koden nedenfor. 
```html
    <!--her kan sendes spørsmål eller sende førespørsler -->  
    <div class="modal" id="help">  
     <div class="header">  
	     <div class="title">Hjelp</div>  
		     <button class="btn modal-btn" data-target="#help">x</button>  
     </div> 
     <div class="body">  
      Her kan du sende førespørsler om hjelp hvis det er nødvendig  
	     <form action="submit"></form>  
	     <textarea name="" id="" cols="30" rows="8"></textarea>  
	     <button class="fbutton" id="button" onclick="mySubmit()">Sent</button>  
	  </div>
     </div> 
```
## CCS
Vi brukte kommentar for css selector for å vise selektoren sin funkjon.
```css
    /*rediger profil bilde, input og knapp style*/  
    .profile-pic-div{  
      height: 150px;  
      width: 150px;  
      position: relative;  
      margin-top:  10px;  
      left: 50%;  
      transform: translate(-50%,-10%);  
      border-radius: 50%;  
      overflow: hidden;  
      border: 1px solid grey;  
    }  
      
    #photo{  
      height: 100%;  
      width: 100%;  
    }  
      
    #file{  
        display: none;  
    }  
      
    #uploadBtn{  
      height: 40px;  
      width: 100%;  
      position: absolute;  
      bottom: 0;  
      left: 50%;  
      transform: translateX(-50%);  
      text-align: center;  
      background: rgba(0, 0, 0, 0.7);  
      color: #dadada;  
      line-height: 30px;  
      font-family: sans-serif;  
      font-size: 15px;  
      cursor: pointer;  
      display: none;  
    }  
    textarea {  
      width: 100%;  
      height: 150px;  
      padding: 12px 20px;  
      box-sizing: border-box;  
      border: 2px solid #ccc;  
      border-radius: 4px;  
      background-color: #f8f8f8;  
      font-size: 16px;  
      resize: none;  
    }  
    .body .fbutton {  
      width: 100%;  
      height: 40px;  
      background: #00cde0;  
      color: white;  
      border: 2px solid #ccc;  
      border-radius: 4px;  
    }
```
## JS
Vi prøvde å kommentere js koder for å forklare hva selve koden gjør.
```javascript
    //hvis brukeren hover på img div  
      
    imgDiv.addEventListener('mouseenter', function(){  
        uploadBtn.style.display = "block";  
    });  
      
      // hvis vi hover ut fra img div  
      
    imgDiv.addEventListener('mouseleave', function(){  
        uploadBtn.style.display = "none";  
    });
```

## Formattering av koden 
Vi brukte god og forstårlig formatering for koden;
HTML
```html
    <div class="column" style="background-color:#B0DEE9;">  
     <div id="parent">  
	     <h2>Mine Arrangementer</h2>  
	     <br> 
     </div>
    </div>
```

CSS
```css
    .modal-btn {  
      background-color: transparent;  
      border: none;  
      font-size: 1.5rem;  
    }
```

JS
```javascript
    function menuToggle(){  
      const toggleMenu = document.querySelector('.menu');  
      toggleMenu.classList.toggle('active');  
      overlay.classList.add('active');  
    }
```

## Dubliserin av kode
Det finnes ingen dublisering av kode i prosjekt.

## Issues og Commits
Jeg vil gi eksempel for TODO og issues er den ;
https://github.com/Dberg042/114-Gruppepresentasjon/issues/13
Vi diskuterte i møtene hvordan vi kan løse et problem på hovedsiden. Da så vi at problemet kan løses med javascripts appenchild-metode. Vi har lagt dette til i Issues. Så, som et utviklerteam, jobbet vi med disse løsningene og prøvde forskjellige modeller og alternativer. We pulled or pushed when we uppdated models. Siden vi vanligvis jobber med koden i gruppeundervisninger, glemte vi å notere på github issues, dette skjønte vi like ved slutten av prosjektet. Vi lukket problemet ved å legge til funksjonen til modellen vi bygde.

Vi kan følge opp endringer ved å lese kommetarer i "commits"  for hver fil. Vi kan sammenligner utvikling av prosjekt. Vi skulle skrive mer detaljert kommetarer i "commits" og commits når vi gjør en viktig endring i prosjekt ved neste anledning 

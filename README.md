# Portfolio di Franco Aureli

Sito portfolio ufficiale dello scrittore Franco Aureli. Il progetto è pronto per essere versionato su GitHub e pubblicato su Netlify.

## Tecnologia

- Framework: Next.js 15, App Router
- Interfaccia: React 19
- Gestore pacchetti: pnpm
- Build di produzione: `pnpm build` (`next build`)
- Avvio locale della build: `pnpm start`
- Versione Node su Netlify: 20
- Cartella radice su Netlify: la radice del repository

Netlify riconosce automaticamente Next.js e utilizza il proprio adattatore OpenNext. Il file `netlify.toml` dichiara solamente il comando di build e la versione Node; non blocca manualmente una versione dell’adattatore.

## Avvio locale

Requisiti: Node.js 18 o successivo e pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Aprire `http://localhost:3000`.

Per verificare la build di produzione:

```bash
pnpm build
pnpm start
```

## Dove modificare i contenuti

I contenuti non sono inseriti direttamente nei componenti grafici:

- `content/site.js`: navigazione, hero, biografia, sezione contatti, footer e metadati SEO.
- `content/books.js`: titoli, sinossi, stato di pubblicazione, dettagli e percorsi delle copertine.
- `content/contact.js`: collegamento tra recapiti e variabili d’ambiente.
- `public/images/`: immagini e copertine pubbliche.

Per sostituire un’immagine, inserire il nuovo file in `public/images/` e aggiornare il relativo percorso in `content/books.js`. I percorsi pubblici iniziano con `/images/` e non contengono riferimenti al computer locale.

## Variabili d’ambiente

Copiare `.env.example` in `.env.local` per lo sviluppo. `.env.local` non deve essere caricato su GitHub.

| Variabile | Obbligatoria | Utilizzo |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Consigliata | URL canonico definitivo del sito. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Email pubblica mostrata nella sezione Contatti. Se vuota, resta “Contatti in arrivo”. |

Le variabili con prefisso `NEXT_PUBLIC_` sono pubbliche nel browser: non devono mai contenere password, token o chiavi private. Se in futuro serviranno credenziali riservate, usare variabili senza `NEXT_PUBLIC_` e leggerle esclusivamente nel codice server.

## Pubblicazione su GitHub

### Metodo più semplice: GitHub Desktop

1. Aprire GitHub Desktop e scegliere **File → Add Local Repository**.
2. Selezionare la cartella del progetto.
3. Fare clic su **Publish repository**.
4. Usare, per esempio, il nome `franco-aureli-portfolio`.
5. Scegliere se il repository deve essere pubblico o privato e confermare.

### Metodo da terminale

Creare su GitHub un repository vuoto, senza README, `.gitignore` o licenza. Poi, dalla cartella del progetto:

```bash
git remote add origin https://github.com/NOME-UTENTE/franco-aureli-portfolio.git
git push -u origin main
```

Il progetto può mantenere altri remote già configurati; Netlify userà il repository GitHub collegato.

## Collegamento del repository a Netlify

1. Accedere a `https://app.netlify.com` usando il proprio account GitHub.
2. Selezionare **Add new project → Import an existing project**.
3. Scegliere **GitHub** e autorizzare Netlify ad accedere al repository.
4. Selezionare `franco-aureli-portfolio`.
5. Controllare le impostazioni rilevate:
   - Branch di produzione: `main`
   - Base directory: lasciare vuota
   - Build command: `pnpm build`
   - Publish directory: lasciare quella rilevata automaticamente da Netlify per Next.js
6. In **Environment variables**, inserire:
   - `NEXT_PUBLIC_CONTACT_EMAIL`, se si desidera mostrare l’email;
   - `NEXT_PUBLIC_SITE_URL`, inizialmente omissibile e da impostare dopo il dominio definitivo.
7. Fare clic su **Deploy site**.

Ogni successivo push sul branch `main` produrrà automaticamente una nuova pubblicazione. Le pull request e gli altri branch possono generare Deploy Preview separate.

## Collegamento di un dominio personale

Prima verificare che il sito funzioni sul sottodominio temporaneo `*.netlify.app`, poi:

1. Nel progetto Netlify aprire **Domain management**.
2. Selezionare **Add a domain** o **Add custom domain**.
3. Inserire il dominio, per esempio `francoaureli.it`, e completare la verifica della proprietà se richiesta.
4. Scegliere uno dei metodi DNS mostrati da Netlify:
   - mantenere il DNS presso il registrar e aggiungere soltanto i record indicati da Netlify;
   - delegare l’intera zona a Netlify DNS cambiando i nameserver.
5. Aggiungere anche `www.francoaureli.it` e scegliere quale versione deve essere quella principale.
6. Attendere che Netlify confermi la configurazione DNS e attivi HTTPS.
7. Impostare `NEXT_PUBLIC_SITE_URL` con l’indirizzo definitivo in **Project configuration → Environment variables**.
8. Avviare un nuovo deployment da **Deploys → Trigger deploy** oppure effettuare un nuovo push su `main`.

Se il dominio gestisce già caselle email o altri servizi, non cambiare i nameserver senza prima copiare tutti i record DNS esistenti. In questo caso è generalmente più prudente mantenere il DNS presso il registrar e aggiungere solo i record indicati da Netlify.

## Controlli di sicurezza

- Nessuna password, chiave API o token è presente nel repository.
- I file `.env*` locali sono esclusi da Git, mentre `.env.example` è incluso come modello.
- I percorsi delle immagini sono relativi alla cartella `public` e funzionano su GitHub, Netlify e in locale.
- Le cartelle generate (`.next`, `dist`, `out`, `node_modules`) non vengono pubblicate su GitHub.
- La cartella locale `.netlify` è esclusa dal repository.

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inizio">Franco Aureli</a>
        <div className="links">
          <a href="#romanzi">Romanzi</a><a href="#autore">L’autore</a><a href="#contatti">Contatti</a>
        </div>
      </nav>

      <section className="hero" id="inizio">
        <div className="eyebrow">Scrittore di romanzi rosa</div>
        <h1>Storie d’amore.<br/><em>Senza scorciatoie.</em></h1>
        <p className="intro">Franco Aureli racconta incontri, distanze e seconde possibilità. Romanzi in cui i sentimenti hanno il tempo di diventare veri.</p>
        <a className="button" href="#romanzi">Scopri i romanzi <span>↓</span></a>
        <div className="line-art" aria-hidden="true"><span>F</span><i></i><span>A</span></div>
      </section>

      <section className="books" id="romanzi">
        <header className="section-head"><span>01 — I romanzi</span><h2>Due storie,<br/>un solo filo rosso.</h2></header>
        <article className="book first">
          <img className="cover-image" src="/images/le-chiavi-di-via-alloro.jpeg" alt="Copertina di Le chiavi di via Alloro" />
          <div className="book-copy"><span className="status">Romanzo d’esordio</span><h3>Le chiavi di<br/>via Alloro</h3><p>Un padre creduto morto. Una casa che custodisce un segreto. Un romantic suspense contemporaneo ambientato a Palermo, dove amore, memoria e verità si intrecciano.</p><span className="detail">Romantic suspense · Palermo</span></div>
        </article>
        <article className="book second">
          <div className="book-copy"><span className="status new">In arrivo · Agosto</span><h3>La ragazza<br/>del porto</h3><p>A Palermo, una podcaster torna per indagare sulla scomparsa mai risolta della sua migliore amica. Per scoprire la verità deve collaborare con l’uomo che potrebbe essere stato l’ultimo ad averla vista.</p><span className="detail">Romantic suspense · Prossima uscita</span></div>
          <img className="cover-image" src="/images/la-ragazza-del-porto.jpg" alt="Copertina di La ragazza del porto" />
        </article>
      </section>

      <section className="author" id="autore">
        <div className="portrait"><div className="monogram">FA</div><span>Ritratto dell’autore</span></div>
        <div className="bio"><span>02 — L’autore</span><h2>Franco<br/><em>Aureli</em></h2><p>Franco Aureli scrive romance contemporanei e romantic suspense dal forte respiro emotivo: storie in cui amore, memoria e pericolo si intrecciano tra segreti di famiglia, case da riportare alla luce e personaggi che imparano a scegliersi senza rinunciare a se stessi.</p><p>Nei suoi romanzi i luoghi non sono semplici sfondi, ma spazi vivi: città, porti, strade e case in cui il passato torna a chiedere verità.</p></div>
      </section>

      <section className="newsletter" id="contatti">
        <span>03 — Resta aggiornato</span><h2>Il prossimo capitolo<br/>arriva ad <em>agosto.</em></h2><p>Segui le novità su “La ragazza del porto” e i prossimi appuntamenti con Franco Aureli.</p>
        <a className="mail" href="mailto:contatti@francoaureli.it">Scrivi all’autore <Arrow /></a>
      </section>
      <footer><span>© 2026 Franco Aureli</span><span>Romanzi rosa, sentimenti veri.</span><a href="#inizio">Torna su ↑</a></footer>
    </main>
  );
}

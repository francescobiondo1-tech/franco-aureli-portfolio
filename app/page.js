import { books } from "../content/books";
import { contact } from "../content/contact";
import { siteContent } from "../content/site";

const Arrow = () => <span aria-hidden="true">↗</span>;

function BookCover({ book }) {
  return <img className="cover-image" src={book.image} alt={book.imageAlt} />;
}

function BookCopy({ book }) {
  return (
    <div className="book-copy">
      <span className={["status", book.statusClass].filter(Boolean).join(" ")}>{book.status}</span>
      <h3>{book.titleLines.map((line, index) => <span key={line}>{line}{index < book.titleLines.length - 1 && <br />}</span>)}</h3>
      <p>{book.description}</p>
      <span className="detail">{book.detail}</span>
    </div>
  );
}

export default function Home() {
  const { navigation, hero, booksSection, author, contactSection, footer } = siteContent;

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inizio">{navigation.brand}</a>
        <div className="links">
          {navigation.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
      </nav>

      <section className="hero" id="inizio">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}<br/><em>{hero.emphasizedTitle}</em></h1>
        <p className="intro">{hero.introduction}</p>
        <a className="button" href="#romanzi">{hero.buttonLabel} <span>↓</span></a>
        <div className="line-art" aria-hidden="true"><span>F</span><i></i><span>A</span></div>
      </section>

      <section className="books" id="romanzi">
        <header className="section-head">
          <span>{booksSection.label}</span>
          <h2>{booksSection.titleLines.map((line, index) => <span key={line}>{line}{index < booksSection.titleLines.length - 1 && <br />}</span>)}</h2>
        </header>
        {books.map((book) => (
          <article className={`book ${book.articleClass}`} key={book.id}>
            {book.imagePosition === "before" && <BookCover book={book} />}
            <BookCopy book={book} />
            {book.imagePosition === "after" && <BookCover book={book} />}
          </article>
        ))}
      </section>

      <section className="author" id="autore">
        <div className="portrait"><div className="monogram">{author.monogram}</div></div>
        <div className="bio">
          <span>{author.label}</span>
          <h2>{author.nameLines[0]}<br/><em>{author.nameLines[1]}</em></h2>
          {author.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="newsletter" id="contatti">
        <span>{contactSection.label}</span>
        <h2>{contactSection.title}<br/>{contactSection.titleContinuation} <em>{contactSection.emphasizedTitle}</em></h2>
        <p>{contactSection.description}</p>
        {contact.email ? (
          <a className="mail" href={`mailto:${contact.email}`}>{contact.email} <Arrow /></a>
        ) : (
          <span className="mail">{contactSection.pendingLabel} <Arrow /></span>
        )}
      </section>
      <footer><span>{footer.copyright}</span><span>{footer.tagline}</span><a href="#inizio">{footer.backToTop}</a></footer>
    </main>
  );
}

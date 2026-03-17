import SectionTitle from "../Common/SectionTitle";

const Impressum = () => {
  return (
    <section id="impressum" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="Impressum"
        paragraph="Impressum nach §5 TMG"
        center
        width="665px"
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Name / Firma: <strong>grundigDev - Marcel Grundig</strong> <br />
                Vertreten durch: <strong>Marcel Grundig</strong> <br />
                Anschrift: Benninghofer Str. 15, 44263 Dortmund, Deutschland <br />
                Telefon: +49 (0)1577 3682554 <br />
                E-Mail: <a href="mailto:grundigdev@gmail.com" className="text-blue-600 hover:underline">grundigdev@gmail.com</a> <br />
                Webseite: <a href="https://grundigdev.de" className="text-blue-600 hover:underline">grundigdev.de</a>
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Gewerbeanmeldung
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Anmeldung des Gewerbes bei der Ordnungsbehörde Versmold <br />
                Gemeindekennzahl: 05754048
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Marcel Grundig <br />
                Benninghofer Str. 15, 44263 Dortmund, Deutschland <br />
                E-Mail: <a href="mailto:grundigdev@gmail.com" className="text-blue-600 hover:underline">grundigdev@gmail.com</a>
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Haftungshinweis
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Datenschutzerklärung
              </h2>
              <p className="text-base font-medium text-body-color">
                Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
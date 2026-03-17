import SectionTitle from "../Common/SectionTitle";

const Nutzungsbedingungen = () => {
  return (
    <section id="nutzungsbedingungen" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="Nutzungsbedingungen"
        paragraph="Regelung von Urheber- und Nutzungsrechten"
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
                1. Geltungsbereich
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Diese Nutzungsbedingungen regeln die Rechte an den von Marcel Grundig erstellten Webseiten, WebApps und Hosting-Dienstleistungen.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                2. Urheberrechte
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Marcel Grundig bleibt Urheber aller erstellten Inhalte, Designs, Quellcodes und Programme. Eine Weitergabe oder Vervielfältigung durch den Kunden bedarf einer ausdrücklichen schriftlichen Zustimmung.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                3. Nutzungsrechte
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Nach vollständiger Bezahlung erhält der Kunde einfache, nicht ausschließliche, zeitlich unbeschränkte Nutzungsrechte an der erstellten Website oder WebApp für den vereinbarten Zweck. Eine Weitergabe an Dritte oder kommerzielle Nutzung außerhalb des vereinbarten Zwecks ist ohne Zustimmung von Marcel Grundig untersagt.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                4. Hosting
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Hosting-Dienstleistungen werden über externe Hoster erbracht. Der Kunde erhält Zugänge und Nutzungsrechte gemäß Vereinbarung. Marcel Grundig haftet nur für die ordnungsgemäße Bereitstellung der Zugangsdaten und die vertraglich vereinbarte Leistung, nicht für Störungen oder Ausfälle durch den Hoster.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                5. Gewährleistung & Haftung
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Gewährleistungsrechte richten sich nach den gesetzlichen Vorschriften. Marcel Grundig haftet für vorsätzliches und grob fahrlässiges Handeln. Für leichte Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten. Für Inhalte von Drittanbietern (z. B. Hoster, Plugins) wird keine Haftung übernommen.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                6. Änderungen der Nutzungsbedingungen
              </h2>
              <p className="text-base font-medium text-body-color">
                Marcel Grundig behält sich vor, diese Nutzungsbedingungen zu ändern. Für bereits erstellte Projekte gelten die bei Vertragsabschluss vereinbarten Bedingungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutzungsbedingungen;
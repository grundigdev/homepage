import SectionTitle from "../Common/SectionTitle";

const Datenschutz = () => {
  return (
    <section id="datenschutz" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="Datenschutzerklärung"
        paragraph="Datenschutzerklärung gemäß DSGVO"
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
                Verantwortliche Stelle
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Verantwortlich für die Datenverarbeitung im Sinne der DSGVO:
                <br />
                Marcel Grundig<br />
                Benninghofer Str. 15, 44263 Dortmund, Deutschland<br />
                E-Mail: <a href="mailto:grundigdev@gmail.com" className="text-blue-600 hover:underline">grundigdev@gmail.com</a>
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Wir verarbeiten personenbezogene Daten unserer Nutzer nur, soweit dies zur Bereitstellung einer funktionierenden Website sowie unserer Inhalte und Leistungen erforderlich ist.
                Personenbezogene Daten werden erhoben, wenn Sie uns diese freiwillig mitteilen, z. B. über Kontaktformulare oder E-Mail.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Nutzung von Cookies
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können die Installation von Cookies durch entsprechende Einstellungen Ihres Browsers verhindern; in diesem Fall können gegebenenfalls nicht alle Funktionen der Website genutzt werden.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Kontaktformular und E-Mail-Kontakt
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen senden, werden die von Ihnen angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Rechte der betroffenen Personen
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten,
                deren Berichtigung oder Löschung zu verlangen sowie der Verarbeitung zu widersprechen.
                Außerdem haben Sie das Recht auf Einschränkung der Verarbeitung, Datenübertragbarkeit und Beschwerde bei einer Aufsichtsbehörde.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Analyse-Tools
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Auf dieser Website werden keine Tracking- oder Analyse-Tools wie Google Analytics verwendet, es sei denn, dies wird explizit auf einzelnen Seiten angegeben.
                Für eingesetzte Dienste gelten die jeweiligen Datenschutzbestimmungen der Anbieter.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Externe Links
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="text-base font-medium text-body-color">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie stets aktuellen rechtlichen Anforderungen anzupassen oder um Änderungen unserer Leistungen umzusetzen.
                Für Ihren erneuten Besuch gilt die jeweils aktuelle Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
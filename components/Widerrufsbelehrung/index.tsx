import SectionTitle from "../Common/SectionTitle";

const Widerruf = () => {
  return (
    <section id="widerruf" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="Widerrufsbelehrung"
        paragraph="Widerrufsrecht für Verbraucher"
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
              <p className="mb-6 text-base font-medium text-body-color">
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Widerrufsfrist
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Marcel Grundig, Benninghofer Str. 15, 44263 Dortmund, Deutschland, E-Mail: <a href="mailto:grundigdev@gmail.com" className="text-blue-600 hover:underline">grundigdev@gmail.com</a>) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Folgen des Widerrufs
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Wenn Sie diesen Vertrag widerrufen, werden wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene Standardlieferung gewählt haben) unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
              </p>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Besondere Hinweise für digitale Inhalte
              </h2>
              <p className="text-base font-medium text-body-color">
                Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Lieferung digitaler Inhalte, die nicht auf einem körperlichen Datenträger geliefert werden, sobald Marcel Grundig mit der Ausführung des Vertrages begonnen hat und der Kunde ausdrücklich zugestimmt hat, dass Marcel Grundig mit der Ausführung vor Ablauf der Widerrufsfrist beginnt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widerruf;
export default function Home() {
  return (
    <main className="bg-blue-50 text-slate-900">

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-8 text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900">
            CapnoConnect
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Enabling safer and more efficient capnography
          </p>

          <a
            href="#what-we-do"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="px-8 py-24">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-bold text-slate-900">
            What We Do
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            CapnoConnect is developing a purpose-built adapter that facilitates
            the connection between CO<sub>2</sub> sampling lines and O<sub>2</sub>{" "}
            masks during procedural sedation, making the process safer, more
            efficient, and less wasteful.
          </p>

          {/* The Problem */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-blue-700">
              The Problem
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              During procedural sedation, clinicians connect capnography
              sampling lines to patients&apos; oxygen masks to monitor exhaled
              CO<sub>2</sub>. However, this connection is commonly improvised
              using an IV catheter — a device designed for vascular access
              rather than respiratory monitoring.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              This workaround creates unnecessary material waste and costs,
              while also requiring clinicians to manually modify the catheter
              before it can be used.
            </p>
          </div>

          {/* Our Solution */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-blue-700">
              Our Solution
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              CapnoConnect is a purpose-built adapter designed to connect a
              capnography machine&apos;s CO<sub>2</sub> sampling line directly
              to a patient&apos;s O<sub>2</sub> mask.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              By replacing the repurposed IV catheter with a dedicated
              connector, CapnoConnect aims to streamline clinical workflows,
              reduce material waste, and lower costs for healthcare facilities.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">

              <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-slate-900">
                  Cost-Effective
                </h4>

                <p className="mt-3 text-slate-600">
                  Designed as a low-cost alternative to using an IV catheter
                  as a makeshift connector.
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-slate-900">
                  Less Waste
                </h4>

                <p className="mt-3 text-slate-600">
                  Eliminates the need to discard unused IV catheter components
                  when creating a capnography connection.
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-slate-900">
                  Workflow-Focused
                </h4>

                <p className="mt-3 text-slate-600">
                  Designed to simplify the connection process and reduce
                  unnecessary manual preparation.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-blue-100/40 px-8 py-24">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Team
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Meet the people behind CapnoConnect.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Dr. Caitlin VanDeCappelle, MD, FRCPC
              </h3>

              <p className="mt-2 font-medium text-blue-700">
                Co-Founder
              </p>

              <p className="mt-4 text-slate-600">
                Staff Anesthesiologist, Hamilton Health Sciences; Assistant
                Professor, Anesthesia, McMaster University
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Eisha Arvikar, MSc (c), BHSc
              </h3>

              <p className="mt-2 font-medium text-blue-700">
                Co-Founder
              </p>

              <p className="mt-4 text-slate-600">
                Master&apos;s of Medicine Student, University of Alberta
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Ethan Ko, BHSc
              </h3>

              <p className="mt-2 font-medium text-blue-700">
                Co-Founder
              </p>

              <p className="mt-4 text-slate-600">
                Short biography goes here.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Olivia Parpura, BHSc
              </h3>

              <p className="mt-2 font-medium text-blue-700">
                Co-Founder
              </p>

              <p className="mt-4 text-slate-600">
                Research Coordinator, Hamilton Health Sciences
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Daniel Xie, MSc (c), BHSc
              </h3>

              <p className="mt-2 font-medium text-blue-700">
                Co-Founder
              </p>

              <p className="mt-4 text-slate-600">
                Master&apos;s of Health Research Methodology Student,
                McMaster University
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-slate-900 px-8 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Interested in CapnoConnect? We welcome clinical partnerships,
            industry collaborations, and opportunities to help advance
            CapnoConnect.
          </p>

          <a
            href="mailto:capnoconnect@gmail.com"
            className="mt-8 inline-block text-lg text-blue-300 underline transition hover:text-white"
          >
            Email: capnoconnect@gmail.com
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900 px-8 py-8 text-white">
        <div className="mx-auto max-w-5xl text-center text-sm text-slate-400">
          © 2026 CapnoConnect Inc. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
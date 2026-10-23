export default function Team() {
  return (
    <main className="min-h-screen bg-white px-8 py-24 text-black">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold">
          Our Team
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-600">
          Meet the people behind Capnoconnect.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Dr. Catilin VandeCappelle, MD, FRCPC
            </h2>

            <p className="mt-2 text-gray-500">
              Co-Founder
            </p>

            <p className="mt-4 text-gray-600">
              Staff anesthesiologist, Hamilton Health Sciences; Assistant Professor, Anesthesia, McMaster University
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Eisha Arvikar, MSc (c), BHSc
            </h2>

            <p className="mt-2 text-gray-500">
              Co-Founder
            </p>

            <p className="mt-4 text-gray-600">
              Master's of Medicine Student, University of Alberta
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Ethan Ko, BHSc
            </h2>

            <p className="mt-2 text-gray-500">
              Co-Founder
            </p>

            <p className="mt-4 text-gray-600">
              Short biography goes here.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Olivia Parpura, BHSc
            </h2>

            <p className="mt-2 text-gray-500">
              Co-Founder
            </p>

            <p className="mt-4 text-gray-600">
              Research Coordinator, Hamilton Health Sciences 
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Daniel Xie, MSc (c), BHSc
            </h2>

            <p className="mt-2 text-gray-500">
              Co-Founder
            </p>

            <p className="mt-4 text-gray-600">
              Master's of Health Research Methodology Student, McMaster University
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
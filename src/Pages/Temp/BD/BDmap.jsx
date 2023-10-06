import React from "react";

export const BDmap = () => {
  return (
    <>
      <section>
        <header className="pt-10 py-6">
          <h1 className="underline decoration-wavy underline-offset-4">Earthquake risks in Bangladesh</h1>
        </header>
          <section>
            <iframe
              aria-label="Map"
              src="https://datawrapper.dwcdn.net/QWJZr/1/"
              style={{ width: '100%', height: '900px', border: 'none' }}
            ></iframe>
          </section>
       
      </section>
    </>
  );
};


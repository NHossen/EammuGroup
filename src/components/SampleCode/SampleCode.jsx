import React, { useEffect } from 'react';

const SampleCode = () => {
  useEffect(() => {
    // 1. Tell the script to stay on THIS page for results
    const currentURL = window.location.origin + window.location.pathname;

    window.TPWL_CONFIGURATION = {
      resultsURL: currentURL, 
      currency: "AED",
      locale: "en",
      marker: "16273",
    };

    // 2. Load the Engine
    const mainScript = document.createElement('script');
    mainScript.src = "https://tpwidg.com/wl_web/main.js?wl_id=16273";
    mainScript.type = "module";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      document.body.removeChild(mainScript);
    };
  }, []);

  return (
    <div className="search-container">
      <h1>Book Your Flight</h1>

      {/* SEARCH BAR SECTION */}
      <div id="tpwl-search">
        {/* The engine puts the inputs (From/To/Date) here */}
      </div>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

      {/* RESULTS SECTION - DO NOT REMOVE THIS */}
      {/* Even if you don't have a "tickets page", the script needs this ID 
          on the CURRENT page to display the flights after a user clicks search. */}
      <div id="tpwl-tickets">
        {/* The engine will automatically fill this with flight cards 
            after the user clicks the search button. */}
      </div>

      <style>{`
        .search-container { max-width: 1100px; margin: 0 auto; padding: 20px; }
        #tpwl-search { min-height: 150px; }
        #tpwl-tickets { min-height: 500px; }
      `}</style>
    </div>
  );
};

export default SampleCode;
import React, { useEffect } from 'react';

const SampleCode = () => {
  useEffect(() => {
    // 1. Set the configuration for the White Label
    // We use window.location to ensure results stay on the current page
    const currentURL = window.location.origin + window.location.pathname;

    window.TPWL_CONFIGURATION = {
      resultsURL: currentURL, 
      currency: "BDT", // Currency matched to your portal settings
      locale: "en",
      marker: "719255",
    };

    // 2. Load the Search Engine script
    const mainScript = document.createElement('script');
    mainScript.src = "https://tpwidg.com/wl_web/main.js?wl_id=16273";
    mainScript.type = "module";
    mainScript.async = true;
    mainScript.id = "tpwl-engine";
    document.body.appendChild(mainScript);

    // Cleanup: Remove script when navigating away to prevent memory leaks
    return () => {
      const script = document.getElementById('tpwl-engine');
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flight-search-container">
      <style>{`
        .flight-search-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          min-height: 800px;
        }

        /* The Search Bar Box */
        #tpwl-search {
          width: 100%;
          min-height: 150px;
          margin-bottom: 20px;
        }

        /* The Results Box - Where the 'Searching' bar and tickets appear */
        #tpwl-tickets {
          width: 100%;
          min-height: 500px;
        }

        h1.search-title {
          text-align: center;
          margin-bottom: 30px;
          color: #004d40; /* EAMMU Green */
        }
      `}</style>

      <h1 className="search-title">Your Journey Begins Here</h1>

      {/* 1. This ID displays the search inputs */}
      <div id="tpwl-search"></div>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

      {/* 2. This ID displays the loading progress and flight results */}
      <div id="tpwl-tickets"></div>
    </div>
  );
};

export default SampleCode;
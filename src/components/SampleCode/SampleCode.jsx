import React, { useEffect } from 'react';
const SampleCode = () => {
  useEffect(() => {
    // 1. Set the Configuration for the Widget
    window.TPWL_CONFIGURATION = {
      resultsURL: "https://eammu.com",
      currency: "AED",
      locale: "en",
      marker: "16273",
    };

    // 2. Load the main Search Engine script
    const mainScript = document.createElement('script');
    mainScript.src = "https://tpwidg.com/wl_web/main.js?wl_id=16273";
    mainScript.type = "module";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    // 3. Load the Popular Destinations (Weedles) script
    const popularScript = document.createElement('script');
    popularScript.src = "https://tp.media/content?promo_id=4044&shmarker=16273&campaign_id=100&trs=1&target_host=eammu.com&locale=en&limit=6&powered_by=false&destination=DXB";
    popularScript.async = true;
    document.body.appendChild(popularScript);

    // Cleanup scripts when the component unmounts
    return () => {
      document.body.removeChild(mainScript);
      document.body.removeChild(popularScript);
    };
  }, []);

  return (
    <div className="eammu-container">
      <style>{`
        .eammu-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .search-header h1 {
          font-size: 32px;
          text-align: center;
          margin-bottom: 30px;
          color: #1a1a1a;
        }

        .section-title {
          font-size: 28px;
          font-weight: bold;
          margin: 40px 0 20px;
          text-align: center;
        }

        /* Essential IDs for Travelpayouts to mount the content */
        #tpwl-search, #tpwl-tickets {
          width: 100%;
          min-height: 150px;
          margin-bottom: 30px;
          background: #f9f9f9;
          border-radius: 8px;
        }

        .widget-grid {
          min-height: 200px;
        }
      `}</style>

      {/* SEARCH INPUT AREA */}
      <div className="search-header">
        <h1>Your journey begins here</h1>
        <div id="tpwl-search">
          {/* Widget injects here */}
        </div>
      </div>

      {/* SEARCH RESULTS AREA */}
      <div className="results-area">
        <div id="tpwl-tickets">
          {/* Tickets inject here after search */}
        </div>
      </div>

      {/* POPULAR DESTINATIONS AREA */}
      <div className="popular-destinations">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="widget-grid">
           {/* Destinations inject here */}
        </div>
      </div>
    </div>
  );
};

export default SampleCode;
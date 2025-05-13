import { useState, useEffect, useCallback } from "react";
import "./Shifts.css";
import phoneNumbers from "../phoneNumbers";

export default function Shifts() {
  const [shiftData, setShiftData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const API_KEY = "Your_api_key";
  const SPREADSHEET_ID = "your_spreadshhet_id";

  // Create a cache to prevent unnecessary requests
  const [dataCache, setDataCache] = useState({
    data: null,
    timestamp: null,
  });

  // Define minimum interval between requests (in milliseconds)
  const MIN_REQUEST_INTERVAL = 60 * 1000; // 1 minute
  const CACHE_DURATION = 4 * 60 * 1000; // 4 minutes

  let newShiftData = {};
  let grid;

  function checkTimeSlot(item, index) {
    // Get the current date and time
    const now = new Date();

    // Get the current hour (0-23) and minutes (0-59)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Define the time ranges (start inclusive, end exclusive)
    const isBetween3And7_hours = currentHour >= 3 && currentHour < 7; // 03:00 - 06:59
    const isBetween7And11_hours = currentHour >= 7 && currentHour < 11; // 07:00 - 10:59
    const isBetween11And15_hours = currentHour >= 11 && currentHour < 15; // 11:00 - 14:59
    const isBetween15And19_hours = currentHour >= 15 && currentHour < 19; // 15:00 - 18:59
    const isBetween19And23_hours = currentHour >= 19 && currentHour < 23; // 19:00 - 22:59
    // For 23:00 to 03:00 (next day), it's either hour 23 or hours 0, 1, 2
    const isBetween23And3_next_day_hours = currentHour >= 23 || currentHour < 3; // 23:00 - 02:59

    if (isBetween7And11_hours) {
      newShiftData[item] = grid[1][index];
    } else if (isBetween11And15_hours) {
      newShiftData[item] = grid[5][index];
    } else if (isBetween15And19_hours) {
      newShiftData[item] = grid[9][index];
    } else if (isBetween19And23_hours) {
      newShiftData[item] = grid[13][index];
    } else if (isBetween23And3_next_day_hours) {
      newShiftData[item] = grid[17][index];
    } else if (isBetween3And7_hours) {
      newShiftData[item] = grid[21][index];
    }
  }

  function checkSiyorTime(item, index) {
    // Get the current date and time
    const now = new Date();

    // Get the current hour (0-23) and minutes (0-59)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    // Define the time ranges (start inclusive, end exclusive)
    const isBetween7And15_hours = currentHour >= 7 && currentHour < 15; // 07:00 - 10:59
    const isBetween15And23_hours = currentHour >= 15 && currentHour < 23; // 15:00 - 18:59
    // For 23:00 to 03:00 (next day), it's either hour 23 or hours 0, 1, 2
    const isBetween23And7_next_day_hours = currentHour >= 23 || currentHour < 7; // 23:00 - 02:59

    if (isBetween7And15_hours) {
      newShiftData[item] = grid[1][index];
    } else if (isBetween15And23_hours) {
      newShiftData[item] = grid[9][index];
    } else if (isBetween23And7_next_day_hours) {
      newShiftData[item] = grid[17][index];
    }
  }

  function checkPilTime(item, index) {
    // Get the current date and time
    const now = new Date();

    // Get the current hour (0-23) and minutes (0-59)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Define the time ranges (start inclusive, end exclusive)
    const isBetween3And7_hours = currentHour >= 3 && currentHour < 7; // 03:00 - 06:59
    const isBetween7And11_hours = currentHour >= 7 && currentHour < 11; // 07:00 - 10:59
    const isBetween11And15_hours = currentHour >= 11 && currentHour < 15; // 11:00 - 14:59
    const isBetween15And19_hours = currentHour >= 15 && currentHour < 19; // 15:00 - 18:59
    const isBetween19And23_hours = currentHour >= 19 && currentHour < 23; // 19:00 - 22:59
    // For 23:00 to 03:00 (next day), it's either hour 23 or hours 0, 1, 2
    const isBetween23And3_next_day_hours = currentHour >= 23 || currentHour < 3; // 23:00 - 02:59

    if (isBetween7And11_hours) {
      if (!grid[1][index + 1]) {
        newShiftData[item] = grid[1][index];
      } else {
        newShiftData[item] = grid[1][index + 1];
      }
    } else if (isBetween11And15_hours) {
      if (!grid[5][index + 1]) {
        newShiftData[item] = grid[5][index];
      } else {
        newShiftData[item] = grid[5][index + 1];
      }
    } else if (isBetween15And19_hours) {
      if (!grid[9][index + 1]) {
        newShiftData[item] = grid[9][index];
      } else {
        newShiftData[item] = grid[9][index + 1];
      }
    } else if (isBetween19And23_hours) {
      if (!grid[13][index + 1]) {
        newShiftData[item] = grid[13][index];
      } else {
        newShiftData[item] = grid[13][index + 1];
      }
    } else if (isBetween23And3_next_day_hours) {
      if (!grid[5][index + 1]) {
        newShiftData[item] = grid[17][index];
      } else {
        newShiftData[item] = grid[17][index + 1];
      }
    } else if (isBetween3And7_hours) {
      if (!grid[5][index + 1]) {
        newShiftData[item] = grid[21][index];
      } else {
        newShiftData[item] = grid[21][index + 1];
      }
    }
  }

  // Use useCallback to prevent recreation of this function on each render
  const fetchShiftData = useCallback(
    async (forceRefresh = false) => {
      // Check if we should use cached data
      const now = Date.now();
      if (
        !forceRefresh &&
        dataCache.data &&
        dataCache.timestamp &&
        now - dataCache.timestamp < CACHE_DURATION
      ) {
        console.log(
          "Using cached data, last fetched:",
          new Date(dataCache.timestamp).toLocaleTimeString()
        );
        return;
      }

      // Check if we need to wait to avoid rate limiting
      if (lastUpdated && now - lastUpdated < MIN_REQUEST_INTERVAL) {
        console.log("Throttling requests, skipping fetch");
        return;
      }

      try {
        console.log("Fetching fresh data at:", new Date().toLocaleTimeString());
        setLoading(true);

        const sheetsApiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?ranges=shifts&includeGridData=true&fields=sheets(data(rowData(values(formattedValue))),merges)&key=${API_KEY}`;

        const response = await fetch(sheetsApiUrl);

        if (!response.ok) {
          if (response.status === 429) {
            console.error("Rate limit exceeded! Waiting before trying again.");
            throw new Error("Rate limit exceeded. Please try again later.");
          }

          const errorText = await response.text();
          throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();

        // Update cache timestamp
        setDataCache({
          data: result,
          timestamp: now,
        });

        // Set last updated time for rate limiting
        setLastUpdated(now);

        // Process the data
        if (result.sheets && result.sheets.length > 0) {
          const { data, merges } = result.sheets[0];

          if (!data || !data[0] || !data[0].rowData) {
            console.log("No data found in response");
            return;
          }

          const rowData = data[0].rowData ?? [];

          // 1. Set table size
          const numRows = rowData.length;
          const numCols = Math.max(
            ...rowData.map((r) => (r.values ? r.values.length : 0)),
            0
          );

          // 2. Create empty grid
          grid = Array(numRows)
            .fill()
            .map(() => Array(numCols).fill(""));

          // 3. Fill in existing values
          rowData.forEach((row, r) => {
            row.values?.forEach((cell, c) => {
              if (cell?.formattedValue !== undefined) {
                grid[r][c] = cell.formattedValue;
              }
            });
          });

          // 4. Process merges
          merges?.forEach((m) => {
            const baseVal = grid[m.startRowIndex][m.startColumnIndex];
            for (let r = m.startRowIndex; r < m.endRowIndex; r++) {
              for (let c = m.startColumnIndex; c < m.endColumnIndex; c++) {
                // Only if the cell is empty - to avoid overwriting other data
                if (grid[r][c] === "") grid[r][c] = baseVal;
              }
            }
          });

          // 5. Process headers
          const headers = grid[0];

          const pilItem = headers.findIndex((element) =>
            element.includes("פילבוקס מעבר")
          );
          checkPilTime(headers[pilItem], pilItem);

          headers.forEach((item, index) => {
            if (item && item.includes("יזומה")) {
              newShiftData[item] = grid[1][index];
            } else if (item && item.includes("סאלם")) {
              newShiftData[item] = grid[1][index];
            } else if (item && item.includes("קצין סוללה")) {
              newShiftData[item] = grid[1][index];
            } else if (item && item.includes('חפ"ק')) {
              newShiftData[item] = grid[1][index];
            } else if (item && item.includes("סיור")) {
              checkSiyorTime(item, index);
            } else if (
              item &&
              !item.includes("שעות") &&
              !item.includes("פילבוקס מעבר")
            ) {
              checkTimeSlot(item, index);
            }
          });

          // Update state once with all the data
          setShiftData(newShiftData);
        }
      } catch (error) {
        console.error("Error fetching sheet data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [dataCache, lastUpdated, API_KEY, SPREADSHEET_ID]
  );

  // Use empty dependency array for initial loading only
  useEffect(() => {
    // Initial fetch
    fetchShiftData(true);

    // Check for updates every 5 minutes
    const intervalId = setInterval(() => {
      fetchShiftData();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array!

  function sendMessage(person) {
    console.log(`sending message to ${person}`);
    phoneNumbers.find((elem) => {
      if (elem.name === person) {
        window.open(`https://wa.me/${elem.phoneNumber}`);
        return;
      }
    });
  }

  return (
    <div className="shifts-container">
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <div className="shift-data">
          {Object.keys(shiftData).length > 0 ? (
            <div className="commander-info">
              {Object.entries(shiftData).map(([key, value]) => (
                <div key={key} className="object-entry">
                  <p className="shift-commander">{key}:</p>
                  <p>{value}</p>
                  <button
                    className="add-button"
                    onClick={() => sendMessage(value)}
                  >
                    שלח וואטסאפ
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No shift data found</p>
          )}

          <div className="last-updated">
            {lastUpdated && (
              <p>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
            )}
            <button
              className="add-button"
              onClick={() => fetchShiftData(true)}
              disabled={loading}
            >
              Refresh Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

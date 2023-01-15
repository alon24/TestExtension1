import React, { useEffect, useState } from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import { getActiveTabURL } from "@src/utils";

const Popup = () => {
  const [emails, setEmails] = useState([]);
  const data = useState([]);

  useEffect(() => {}, []);

  const scrape = async () => {
    const tab = await getActiveTabURL();
    chrome.tabs.sendMessage(
      tab.id,
      {
        type: "SCRAPE_EMAIL",
        value: tab.url,
      },
      (d) => {
        setEmails(d.emails);
        console.log("got data from scraper", d);
      }
    );
  };

  return (
    <div className="App">
      <button onClick={scrape}>Scrape emails </button>
      {emails.length > 0 ? (
        <ul>
          {emails.map((email, i) => {
            return <li key={i}>{email}</li>;
          })}
        </ul>
      ) : (
        <h1>No emails here</h1>
      )}
    </div>
  );
};

export default Popup;

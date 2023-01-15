import { useEffect } from "react";
import { getActiveTabURL } from "@src/utils";

export default function App() {
  const scrapeEmails = async (url) => {
    //RegEx email parser

    const emailRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;

    //parse emails from the HTML code
    const emails = document.body.innerHTML.match(emailRegEx);
    const uniqueEmails = new Set(emails);
    console.log(uniqueEmails);
    return uniqueEmails;
  };

  const handleMessages = async (obj, sender, response) => {
    const { type, value } = obj;
    let emails;
    switch (type) {
      case "SCRAPE_EMAIL":
        emails = await scrapeEmails(value);
        response({ emails: [...emails] });
        break;
    }
  };

  useEffect(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      // console.log(`got message: ${type}, ${value}, ${videoId}`);

      handleMessages(obj, sender, response);
    });
  }, []);

  return <div className="content-view">content view</div>;
}

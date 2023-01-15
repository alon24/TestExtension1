import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
import { getActiveTabURL } from "@src/utils";
reloadOnUpdate("pages/background");

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  // const queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  // const [tab] = await chrome.tabs.query(queryOptions);
  const tab = await getActiveTabURL();

  // if (tab.id === tabId) {
  //   const queryParameters = tab.url.split("?")[1];
  //   const urlParameters = new URLSearchParams(queryParameters);
  //
  //   chrome.tabs.sendMessage(tabId, {
  //     type: "NEW",
  //     videoId: urlParameters.get("v"),
  //   });
  // }
});

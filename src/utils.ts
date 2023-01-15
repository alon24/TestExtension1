import Tab = chrome.tabs.Tab;

export async function getActiveTabURL(): Promise<Tab> {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  return tabs[0];
}

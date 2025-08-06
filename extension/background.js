chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'extractText' && message.tabId) {
    chrome.scripting.executeScript(
      {
        target: { tabId: message.tabId },
        func: () => document.body.innerText,
      },
      (results) => {
        const extracted = results?.[0]?.result || ''
        sendResponse({ text: extracted })
      }
    )

    // Must return true to keep the message channel open
    return true
  }
})

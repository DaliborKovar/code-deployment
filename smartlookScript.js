
export const trackingScript = (id) => `
window.smartlook ||
    (function (d) {
    var o = (smartlook = function () {
      o.api.push(arguments)
    }), h = d.getElementsByTagName('head')[0];
    var c = d.createElement('script');
    o.api = new Array();
    c.async = true;
    c.crossOrigin = 'anonymous';
    c.type = 'text/javascript';
    c.charset = 'utf-8';
    c.src = 'https://web-sdk.beta.smartlook.cloud/recorder.js';
    h.appendChild(c);
  })(document);
  smartlook('init', ${id}, {
    host: 'manager.beta.smartlook.cloud',
    loggingLevel: 1,
    forceSetupData: {
		recording: {
			disableApi: false,
			disableForms: false,
			maskEmails: false,
			maskNumbers: false,
			recordConsole: true,
			recordNetwork: true,
			signedDpa: true,
		},
		consent: {
			api: true,
			forms: true,
			ip: true,
		}
	}
  });
`
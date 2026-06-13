// Poki SDK Core - mock implementation (no tracking)
  window.PokiSDK = {
    init: function() { return Promise.resolve(); },
    gameLoadingStart: function() {},
    gameLoadingFinished: function() {},
    gameplayStart: function() {},
    gameplayStop: function() {},
    happyTime: function() {},
    rewardedBreak: function() { return Promise.resolve(false); },
    commercialBreak: function() { return Promise.resolve(); },
    shareableURL: function(params) { return Promise.resolve(window.location.href); },
    getURLParam: function(param) { return null; },
    captureError: function() {},
    displayAd: function() { return Promise.resolve(); },
  };
  
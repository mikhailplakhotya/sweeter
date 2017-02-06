/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["images/Thumbs.db","371123129b31cefc49d15f4c55b83953"],["images/content/Thumbs.db","5bc5c5e4f3c6da4892a15542f8e1adcb"],["images/content/address.gif","0a74746d11b52a13ed550f92c4d1b243"],["images/content/address.jpg","aba2e1a70fb2fe96e6a413dafff37dc1"],["images/content/footer/slide_1.gif","85e0174feb1952d6d7bef896902540a8"],["images/content/footer/slide_1.jpg","064dde9936b53f67350fdd9604e75b1c"],["images/content/footer/slide_2.gif","66dadeec0f60e11e98ec193aeea358bb"],["images/content/footer/slide_2.jpg","38404b7fc302db8284ac2052377a3f49"],["images/content/footer/slide_3.gif","1c2a06d1e3087db0b1126abf0cb9a163"],["images/content/footer/slide_3.jpg","eae4457fd27631ead9c77bea5c69aa0b"],["images/content/footer/slide_4.gif","f1e5394dfefc9855c2fd9fe18f6ec516"],["images/content/footer/slide_4.jpg","00704f8c0a9384d409b6fe27e63e30b3"],["images/content/photo/slide_1.gif","1610cda01ba7406fd31effff34f2223a"],["images/content/photo/slide_1.jpg","f7f0087346d68069f4e27f1a2430836e"],["images/content/photo/slide_2.gif","07f66fd6ff9168f044aa9c17d9a83c2a"],["images/content/photo/slide_2.jpg","34fb55439a8e58fb626f13db42838ccf"],["images/content/photo/slide_3.gif","ea0a62fdae683fdf6130acc850e18978"],["images/content/photo/slide_3.jpg","184a1836870ce97875c8f99d53bab7ff"],["images/content/photo/slide_4.gif","2c2598ca3be51228dfa8c3a4404abc1d"],["images/content/photo/slide_4.jpg","1209d6479669f5ac4f407ae8e6a590c7"],["images/content/shares/slide_1.gif","712828f72a34d781d24754e48b3b52c5"],["images/content/shares/slide_1.jpg","61ecda25282c1ef48610c948a314a060"],["images/content/shares/slide_2.gif","267ad66dc806414b67d72f4045fbe7a2"],["images/content/shares/slide_2.jpg","3cb8d538111c78e725c93ff19499b3c1"],["images/content/shares/slide_3.gif","e6b139eb46a270c13a2cee6a046a9641"],["images/content/shares/slide_3.jpg","01b3f1a62e4d49c17508211a94378626"],["images/content/shares/slide_4.gif","c6d8d5c5bfdc090161464b641aaa966c"],["images/content/shares/slide_4.jpg","a9aefb42e2c71e72c4eaa6f35fe116f3"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/head.png","1d87c180db7ae9aa49fc73690bff5a70"],["images/home.jpg","31dbc7393f3071b76f3c07278dbc8d8c"],["images/ico-marker.png","4fa848e38dbefd96af359263525b0f40"],["images/map-marker.gif","cfbc4ca00e15392bf71755c4cf105124"],["images/pocket.png","1f6681d9d388d247bb8e40d46edbf2db"],["images/svg/ico-fb.svg","2d7d3c4610960605688dff21ebe37d3c"],["images/svg/ico-insta.svg","326219dcec46b0ccae4435c554adb8be"],["images/svg/ico-vk.svg","c3ba33daba4bc30fa31abe4089a91a16"],["images/svg/logo.svg","522e53e744f116881b09527ef2dfc6d4"],["images/svg/sweeter.svg","8eb17573f55fd1d3f0d2a0a49e768c0a"],["images/touch/Thumbs.db","89f086032f889a0978fe66251c17a3e5"],["images/touch/apple-touch-icon.png","042cde2ba6fee5632f96cf9705fbff78"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","1f36a73aad1824f5fa2ce70120ef59ce"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","88d4d5acc19b0e282af9256d27043bb8"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/main.min.js","33f677590e25b306e01b95d42a409a87"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/main.css","720083cc78afd4fa6e30f8676a90d661"],["styles/vendor/swiper.min.css","b4c46f53852163500ff915070a4ba951"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});





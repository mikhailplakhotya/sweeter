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
var PrecacheConfig = [["images/Thumbs.db","0f65aee655c9a725ff4c38091820bfa0"],["images/content/Thumbs.db","38cf09b34f891da1e7b97296bad2d99e"],["images/content/address.gif","2173e7dbab8c38b201262328fa70dad8"],["images/content/address.jpg","4233dd0b634ba261d4164ee857ca5802"],["images/content/footer/Thumbs.db","d730b3bfb09454f09d0977b896751f74"],["images/content/footer/slide_1.gif","cfdf270cdee6606c7d29dc1add8844fc"],["images/content/footer/slide_1.jpg","240c702716213c781cc889822194ad43"],["images/content/footer/slide_2.gif","2bcf9fb7bd950bc26287f05d67ec34fa"],["images/content/footer/slide_2.jpg","485d52c4942cdc59110be50117fdaf26"],["images/content/footer/slide_3.gif","5b7e2b9a2de96965cb63e5fe77d4139e"],["images/content/footer/slide_3.jpg","c60328c57cf1560689241d3dc78a5376"],["images/content/footer/slide_4.gif","2a24794e422a3fe630f64c6d6f1b7c53"],["images/content/footer/slide_4.jpg","247b66a12c712076113b875f1b23dbe7"],["images/content/photo/Thumbs.db","355122f710cdb904f8d43a26fd8c917d"],["images/content/photo/slide_1.gif","2c86806ff1b700718ed06a120264a6c6"],["images/content/photo/slide_1.jpg","336999cba921ccf9d5d80fd3e75f73d8"],["images/content/photo/slide_2.gif","21be6d01673e079c6dff173cbe5eec55"],["images/content/photo/slide_2.jpg","4846754ac6f6603f6672199af2b35a43"],["images/content/photo/slide_3.gif","d60b8068c3524f85f56535b82b3a4877"],["images/content/photo/slide_3.jpg","f9c4f107d09a8e6154b8a17bc2e288ba"],["images/content/photo/slide_4.gif","7309c1d2e4f0ed3c665c84363e25ce63"],["images/content/photo/slide_4.jpg","821b673cd6f88e22a161cebe2023bc82"],["images/content/shares/Thumbs.db","9f6bdbce0d50ee10b440e30fdcebe3f5"],["images/content/shares/slide_1.gif","d9a07c7b295fe734c21b4ff515d7a0be"],["images/content/shares/slide_1.jpg","bd908fa96afc7f26291052cff9d6d725"],["images/content/shares/slide_2.gif","c8ebc71fcf167de3d4b538dbc2f25dd7"],["images/content/shares/slide_2.jpg","bfd6565db40cdaf6578ea49be9deda1d"],["images/content/shares/slide_3.gif","c9508bf653970d8c5764af81674029df"],["images/content/shares/slide_3.jpg","4dabf41376f421678ef748ca26f35eed"],["images/content/shares/slide_4.gif","c9e108a62abd551010a7ead3aaaf67cc"],["images/content/shares/slide_4.jpg","83d4601204827992c305e6e0eec23e0e"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/head.png","1d87c180db7ae9aa49fc73690bff5a70"],["images/home.jpg","7f0cc57cbfb36e7266acbc265d99cb1c"],["images/map-marker.gif","cfbc4ca00e15392bf71755c4cf105124"],["images/pocket.png","6548ca3abc49955daa52fd03cc5b2d26"],["images/svg/ico-fb.svg","4baad0a6e7fad6e17b792ebf546938cc"],["images/svg/ico-insta.svg","2f7845c4c26d5645313b29cf374edbd4"],["images/svg/ico-vk.svg","93e59c3d36fc25e7702826a3bfb5f2b6"],["images/svg/logo.png","dda1fd1d71a50e843d2d52b4bbbad3d4"],["images/svg/logo.svg","9ee73220a9cc75c92f721e7ce43e7805"],["images/svg/sweeter.svg","8fca5c2dd21a3ffed74b893c600804d3"],["images/touch/Thumbs.db","fe4e8502438c371895a8920e2fb5fd5c"],["images/touch/apple-touch-icon.png","0f260137f8d1789546af81db29445638"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","1208f20f91d7cf7a6dc6a85532389233"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","54d03f593be936a50146c0045eab9a3f"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/main.min.js","bbde501279d53254005901359a443b48"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/inline.css","14d6f1aa47b4c987896d2bb4f7db42a1"],["styles/main.css","feb4c0132f606c9797e82b709de4a0de"],["styles/vendor/swiper.min.css","b4c46f53852163500ff915070a4ba951"]];
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





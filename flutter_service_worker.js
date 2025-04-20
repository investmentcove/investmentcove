'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0ca8a16c0971bce3226d8b8675128965",
"assets/AssetManifest.bin.json": "c944b043485f57adb900393fdea3f240",
"assets/AssetManifest.json": "47bd6e7ad677a4e525c1bde804d3ab17",
"assets/assets/Backgrounds/background.png": "6dbc116b2d270f2723adf6a213b691fb",
"assets/assets/Backgrounds/background2.png": "5fe582affc275318137c65f157bb1e9a",
"assets/assets/Backgrounds/background5.webp": "2b84f4c613e7b82e832fd1149b59483a",
"assets/assets/Backgrounds/chart.jpg": "2ea2fcd6b2159fecbf569bac5f8adfcc",
"assets/assets/Backgrounds/cvcbackground.jpg": "384058723108a6fd712b2ea7d14e8b4a",
"assets/assets/Backgrounds/cvcguy.jpg": "bfe8ad2701cc4370434d25a407be7f2f",
"assets/assets/Backgrounds/cvcguy2.jpg": "9bd9d90d9a345bf332d1e658183d4b55",
"assets/assets/Backgrounds/cvclogo.jpg": "19087b7e4133017633debfe64bc246c5",
"assets/assets/Backgrounds/cvcstaff.jpg": "bd5f5c6d454b9984e1863ed0b6f89c49",
"assets/assets/Backgrounds/cvcwall.jpg": "ebcdc2439fdc35eb7be09777370cd939",
"assets/assets/Backgrounds/cvcwall2.jpg": "64db15bec666eaae20ff978700e785d6",
"assets/assets/Backgrounds/cvcwall3.jpg": "dc5eda4af474988a6cef20121aeaf310",
"assets/assets/Backgrounds/cvcwall4.jpg": "5a1e4ab2d4262bd3f738557e71be293e",
"assets/assets/Backgrounds/logo.jpg": "572faaa1f041ee486c25a9f4ee5ecfd0",
"assets/assets/icons/Bitcoin.png": "b7d58a9f48a5460a277544ea3361bc1d",
"assets/assets/icons/BitcoinCash.png": "053a28e72f3223ed086ca73ce9caecd2",
"assets/assets/icons/chart.jpg": "2ea2fcd6b2159fecbf569bac5f8adfcc",
"assets/assets/icons/cvclogo.jpg": "19087b7e4133017633debfe64bc246c5",
"assets/assets/icons/DOGE.png": "e596c8c071005a2579b3b602e6af5d5c",
"assets/assets/icons/Ethereum.png": "0879552e044ddd1866a4e974efa5ff54",
"assets/assets/icons/iclogo.png": "45c37ea5d116c22c1b7cb71ba0a510c2",
"assets/assets/icons/logos.png": "0eae3f147b49d0d4ce6dd729eab1e1f4",
"assets/assets/icons/OBO.png": "498cb3b3b81bba33da12d9bef0861851",
"assets/assets/icons/professional1.jpg": "d0790f746ad803d35dbbb85c8cf8dbf9",
"assets/assets/icons/professional2.png": "63f8a046802cea75476d6fd875ce09e0",
"assets/assets/icons/professional3.jpg": "ecec921d1240d09ec68b270cd1602cd7",
"assets/assets/icons/SOL.png": "0d8e9a185773da474955639b5fc82808",
"assets/assets/icons/STELLAR.png": "aaf5f5ac89abd4dbc6c0d8d657071ac8",
"assets/assets/icons/USDT.png": "a440d4b512f4d2b9b63d3ab8818fc9e3",
"assets/assets/icons/verified.png": "e04f337891c8d48162867023a27dc10d",
"assets/assets/icons/XRP.png": "b848ca58f9c34bf2044c327122ec7477",
"assets/assets/icons/ZELLE.png": "f3f58670cc4890350c786e7c0838b216",
"assets/assets/svg/Finance-amico.svg": "1fc4ab32c41b28e12734a3f7abcd60d8",
"assets/assets/svg/financial-trajectory.svg": "18e732a8cb63814b11b0819572d12259",
"assets/assets/svg/gifsplash.gif": "80f7590624d16934ff2c1e65f04437aa",
"assets/assets/svg/gtm-framework.svg": "6c908e2a698698d9ad24d27c602eaa75",
"assets/assets/svg/j-curve.svg": "bf3b4a27504d0ae548fb94552be3df26",
"assets/assets/svg/Slices.gif": "164d12c6b33ab49d871e3888a0ef11dd",
"assets/assets/svg/world.svg": "604d3391d8d237c606299e9359a9e000",
"assets/assets/svg/world_map.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "38bafeadacc980f273593fef5c8eb208",
"assets/NOTICES": "cf144c3ce8c0bef4a075e3364546c5a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "45c37ea5d116c22c1b7cb71ba0a510c2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5f99925c312e42b082a8fc3683142423",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1fa34b1448db63a6ae7dbabd103d82ec",
"/": "1fa34b1448db63a6ae7dbabd103d82ec",
"main.dart.js": "7fa6c3f60c1ffa7e84760a10d21119be",
"manifest.json": "9bc7a1b7f0d8ddaf9fd92c67ee6d8837",
"version.json": "81960aeb54a7e44318b588be9bd5e341"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

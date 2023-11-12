'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c92775c01eb7c99233ec3e54ac5dbf5",
"assets/AssetManifest.json": "1d00d2be9cb8a5a2cfe5efb0bce12813",
"assets/assets/images/AIR_joystick_bg600.png": "bbb31f25172f1abc258ce5ea452c3c42",
"assets/assets/images/AIR_joystick_stick320.png": "9256642323291c40720b641824814784",
"assets/assets/images/AIR_joystick_stick600.png": "5049b59f7b1e92d00c00cfa0773431f0",
"assets/assets/images/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Free/Menu/Buttons/Achievements.png": "b9bb58144606336efcd4862d35482f47",
"assets/assets/images/Free/Menu/Buttons/Back.png": "661cfd0fdba294a951eb63c556684a64",
"assets/assets/images/Free/Menu/Buttons/Close.png": "5c3a207383c5642288b01d314855a42a",
"assets/assets/images/Free/Menu/Buttons/Leaderboard.png": "e3854b8ad5633b1f8017d08b7a783047",
"assets/assets/images/Free/Menu/Buttons/Levels.png": "5364f08108b6f75ff31b5b7c84f9789a",
"assets/assets/images/Free/Menu/Buttons/Next.png": "2f75777c57c36c83c6140bbd7b97a5e1",
"assets/assets/images/Free/Menu/Buttons/Play.png": "23f2b2a41eb467518bbfef795d876dc8",
"assets/assets/images/Free/Menu/Buttons/Previous.png": "c63a3a14721d926b03801f38b81b66a6",
"assets/assets/images/Free/Menu/Buttons/Restart.png": "45fe1343f546485e8e288b122467f2fd",
"assets/assets/images/Free/Menu/Buttons/Settings.png": "a56908d71e428647c51e73af372739ab",
"assets/assets/images/Free/Menu/Buttons/Volume.png": "60060aab64ff40a0a996820f64a308b3",
"assets/assets/images/Free/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/tiles/Free/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/tiles/lvl01.tmx": "029f2f511b156385d33df43b1f527ca2",
"assets/assets/tiles/run.tiled-project": "f569bfd3353c5a0faa26a765cae42f0d",
"assets/assets/tiles/run.tiled-session": "8367c9cf885a0f15924e35d6adecfde0",
"assets/assets/tiles/tileset1.tsx": "cc76f9f940dd596f3b76c2b280e19c4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e8b35212c80c18d63a6fce395e0e4ba8",
"assets/NOTICES": "8f77907802f44a7140607fc7a3e8e7b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/res/catatbeli.png": "3549221509716bf2897e4878d1ca835b",
"assets/res/css.png": "551a37777ff283f2edcdad91d7dd90b4",
"assets/res/fb.png": "06d16c393c97761e6934c70bb894c97a",
"assets/res/flutter.png": "8bf421b57acfd5c5e3c2aba9842c8211",
"assets/res/github.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/res/html.png": "c4073163b4fcb409a4d2399c92b2f993",
"assets/res/ig.png": "d3ad6941a83da2baa2eaf9d144722dc0",
"assets/res/jquery.png": "0a7bb30d5a8333c886facf4bbdcb88e3",
"assets/res/linkedin.png": "13ca5714fcb4860d220eae9af1ea1ad4",
"assets/res/ordermakan.png": "2e3d62b61debb5d9566270ad779bc666",
"assets/res/php.png": "5150ecd80df9cf4d559a0f4793dd5ecd",
"assets/res/pp.jpg": "b6aacc620196291b24e4bd600b252936",
"assets/res/rive/ani.riv": "d8e0f7c2ed8df076f44c037eddf39560",
"assets/res/rive/bg1.riv": "d374b224217ad613b42a3ff205be6e11",
"assets/res/rive/bg2.riv": "4b2883003a3ed848738485163f879a89",
"assets/res/rive/firstpage.riv": "1f1479f3eb1d040faaa4a49bf264bdf6",
"assets/res/sql.png": "5b20ddb286d4e32be5dbf8e445d94b35",
"assets/res/twitter.png": "807719ae2cf01f2f84b8e9bc65e458a7",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"igembed.html": "05a8872c65bd219eb860767648a5c4d4",
"index.html": "e87abf46f9cca8ad64b510c8953d9cb9",
"/": "e87abf46f9cca8ad64b510c8953d9cb9",
"main.dart.js": "664adf1af625fc0ba834d627c1f74229",
"manifest.json": "512ea4e64f3423e86b960993d82e807c",
"version.json": "b40098959ccb05e436f1066c2d39e244"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

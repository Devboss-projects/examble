'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "625ee78bf3ee56ce982f4b2a42ea106a",
"assets/AssetManifest.json": "60f5fc2f352fba92c206397c21a1f922",
"assets/assets/images/archive.png": "d8a4ada216bdd766d6cca8695174cca5",
"assets/assets/images/boss.png": "051ed50f58375b69bea4e2fc75f2a72e",
"assets/assets/images/command/alias.png": "d00e7385abbb0d19d939be00918b99dc",
"assets/assets/images/command/cal.png": "f0e82f7cf33a4c6e3718483ddb121773",
"assets/assets/images/command/cat.png": "089cefc6472991619551b63ea8ff5c4e",
"assets/assets/images/command/cd.png": "59a4039b1f230321cd0053940bf7f472",
"assets/assets/images/command/chmod.png": "89f830e8aa7d5ba3c1b6414960f453fa",
"assets/assets/images/command/chown.png": "7aa05af1922e1ee95f431f12ba1ae043",
"assets/assets/images/command/clear.png": "a546f2c631ba4aeb6035f9c3f6cde531",
"assets/assets/images/command/cmp.png": "292d15d239884248f92b01958aea862c",
"assets/assets/images/command/comm.png": "01df984e85198d4e9ded98d9ee8f4021",
"assets/assets/images/command/cp.png": "cc02defca75b5a3c22a55aa091a4df5a",
"assets/assets/images/command/dd.png": "beed1fa5209c1f75df7d4f8ab5f32e03",
"assets/assets/images/command/df.png": "b008861f9f89dc90141b98afbd99f3d1",
"assets/assets/images/command/diff.png": "7477f9c786cdad57221f74bb66a7e02d",
"assets/assets/images/command/echo.png": "f2d4b8fb5adacb2913a46d162d4da9f5",
"assets/assets/images/command/grep.png": "45c82d815d5ac18676ac288c7695cfdc",
"assets/assets/images/command/head.png": "df6cab924aa300920f12d490879e5d44",
"assets/assets/images/command/ifconfig.png": "8ea5f54143de0d50bbd22c4fe9b7799c",
"assets/assets/images/command/iptables.png": "1237791dfea07c1c48cb5f92bc0dd8c3",
"assets/assets/images/command/kill.png": "a9f1275b3ae3a2c72838d3365e2ac1b7",
"assets/assets/images/command/killall.png": "c702c7cec9c693cd86389f79c79fdc89",
"assets/assets/images/command/ln.png": "42b0deb6d2625cc38431bb716cbbafb3",
"assets/assets/images/command/ls.png": "4dd1f606781ed250cba9c94898da954d",
"assets/assets/images/command/mkdir.png": "597aef058637416eea352fafca047cbb",
"assets/assets/images/command/mount.png": "5699fb3a8c6d90a4d2aafd19cc6e92b0",
"assets/assets/images/command/mv.png": "5d0fac1266cf349c994b524fdd7bd2b0",
"assets/assets/images/command/passwd.png": "8dcac558920bd723c7f1aff8bbe378d2",
"assets/assets/images/command/ps.png": "d9be90ae2b49fec7f5ff1172c4519fe2",
"assets/assets/images/command/pwd.png": "370f03465b9c950d584f6e50a81c6b13",
"assets/assets/images/command/rm.png": "a62e656012d9cf04d95ec90191697e23",
"assets/assets/images/command/service.png": "9acdb2ab87c50225addacdf34a1587f1",
"assets/assets/images/command/sort.png": "ce773236c3712ad7b20356c00be3e494",
"assets/assets/images/command/sudo.png": "e5e1d02edd629962479b682887f3cd0f",
"assets/assets/images/command/tail.png": "b32138a995b2ccb674ed9a3016227462",
"assets/assets/images/command/tar.png": "11a82cf481eff55651e45daf92f830dd",
"assets/assets/images/command/top.png": "edeaa3927b93a473f918dd98a56caafa",
"assets/assets/images/command/touch.png": "3ed31cec7af28c609c55065b12fbbad0",
"assets/assets/images/command/traceroute.png": "72c3a8f3ec7d3e2ee357e527a39995b4",
"assets/assets/images/command/ufw.png": "0d7c3af540c82e60f3fee2ab16551248",
"assets/assets/images/command/uname.png": "a919575fdf979640a1c6519cabc55466",
"assets/assets/images/command/unzip.png": "8153bafdbf70b4dbf39108a82e34a7fc",
"assets/assets/images/command/useradd.png": "235401c9f474a3d598fed74fd6e2cb1f",
"assets/assets/images/command/wget.png": "f218b2f5df62cea5b209f241d8fb7ceb",
"assets/assets/images/command/whatis.png": "f508498783da41dc75c537750e40dda6",
"assets/assets/images/command/whereis.png": "426bd82c5d5d4a8d8843612eacbef672",
"assets/assets/images/command/whoami.png": "08c5047eb65e12ce9c0f0a6e7d7e9c32",
"assets/assets/images/command/zip.png": "8d41524ae65e83891e0d3ffa975db1e0",
"assets/assets/images/dbs.png": "5a2ae3f9021b507e0d74ecd8038f6783",
"assets/assets/images/devbossym.png": "b0f1b4b2896333ab6c5c9e5b6012fdbf",
"assets/assets/images/dollar.png": "7c3e93ee91fc5953211702a90ae1885f",
"assets/assets/images/introduction-visual.png": "9c0b0b93cd33f286d55147b1873890b7",
"assets/assets/images/linux.png": "3569b94d228c124ce9f51fd3ae858b7a",
"assets/assets/images/notebook_kali.jpg": "19d0dc53aa2380272e45b689b83fe032",
"assets/assets/images/package.png": "ef9bc7490fe662a01f426215133d240d",
"assets/assets/images/svgs/aircrack-ng.svg": "dc10538b3029bc4836629d1488ddf607",
"assets/assets/images/svgs/burp.svg": "78ed0910199882afb0d30e4249308915",
"assets/assets/images/svgs/crackmapexec.svg": "dee7bf8d1755ec33e9ece9e7fbd1826f",
"assets/assets/images/svgs/empire.svg": "3c3016c431284ada4cb5e29640acb1f3",
"assets/assets/images/svgs/ffuf.svg": "69bbdf88a3268a852d92afc54b9592c4",
"assets/assets/images/svgs/hydra.svg": "222731453ce456201dc30146917cfef2",
"assets/assets/images/svgs/john.svg": "e05ce2ef105bea1125d063cc43c073d3",
"assets/assets/images/svgs/maltego.svg": "32daadd8b4e2c1c3a1940fc0a4151265",
"assets/assets/images/svgs/metasploit.svg": "893cb3959a58dadb23e005424d7c8c21",
"assets/assets/images/svgs/nmap.svg": "918188b1f2adeb464de1db354343ff20",
"assets/assets/images/svgs/notebook.svg": "2718149ecea0cf2e7a33242309669b60",
"assets/assets/images/svgs/responder.svg": "c796417d1c5987d2aa0a6800f2d7045d",
"assets/assets/images/svgs/sqlmap.svg": "e2233dfdfd63f677bfa3a0ec0333a3b8",
"assets/assets/images/svgs/starkiller.svg": "be8dbe32a431f1757d4a8a16adbea1d3",
"assets/assets/images/svgs/wireshark.svg": "f952d63c9738033e4555451a629b8dbe",
"assets/assets/json/command.json": "bf11bfb7ae3598c7cd7a762ded929809",
"assets/assets/json/commands.json": "8995603941116a4cad830c0c651bc843",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e946cad6e3bb2ddec23ebf67dc8ec2ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49770caa94e907c86d7086fce31ec8c7",
"/": "49770caa94e907c86d7086fce31ec8c7",
"main.dart.js": "c60ef3d616d14941f8e1cc15482f96cf",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"version.json": "980547175e325fe622a3362b84d55b6a"};
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

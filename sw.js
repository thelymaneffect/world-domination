/* Globe Quest moved to /globe-quest/. This replaces the old offline helper at /world-domination/:
   it removes itself and sends any open game window to the new address. Saved games are kept. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    await self.clients.claim();
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://thelymaneffect.github.io/globe-quest/').catch(() => {});
  })());
});

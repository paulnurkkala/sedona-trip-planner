// ==========================================
// SEDONA TRIP MAP — app.js
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // Initial center: between basecamp (FR525) and Sedona town
  const SEDONA_CENTER = [34.875, -111.83];
  const INITIAL_ZOOM = 12;

  const map = L.map('map', {
    center: SEDONA_CENTER,
    zoom: INITIAL_ZOOM,
    zoomControl: true,
    scrollWheelZoom: true,
    minZoom: 10,
    maxZoom: 19
  });

  // GOOGLE SATELLITE tiles (hybrid: imagery + labels)
  // Using Google's tile server with the 's,h' layers for satellite + hybrid labels
  const googleSatHybrid = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    {
      attribution: '&copy; Google',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }
  );

  const googleSatPure = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    {
      attribution: '&copy; Google',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }
  );

  const googleTerrain = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    {
      attribution: '&copy; Google',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }
  );

  // Default: hybrid satellite (imagery + place labels)
  googleSatHybrid.addTo(map);

  // Layer switcher
  L.control.layers(
    {
      'Satellite (Hybrid)': googleSatHybrid,
      'Satellite (Pure)':   googleSatPure,
      'Terrain':            googleTerrain
    },
    null,
    { position: 'topright', collapsed: true }
  ).addTo(map);

  // ==========================================
  // CUSTOM PIN ICON FACTORY
  // ==========================================
  function makeIcon(category) {
    const cat = CATEGORIES[category];
    const color = cat ? cat.color : '#666';
    const icon = cat ? cat.icon : '•';
    const isBasecamp = category === 'basecamp';
    const klass = isBasecamp ? 'pin-marker pin-marker--basecamp' : 'pin-marker';
    const size = isBasecamp ? 44 : 36;

    return L.divIcon({
      className: 'sedona-pin',
      html: `<div class="${klass}" style="background:${color}"><div class="pin-marker__inner">${icon}</div></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size + 6]
    });
  }

  // ==========================================
  // PLACE ALL PINS
  // ==========================================
  const markers = {};
  PINS.forEach(pin => {
    const marker = L.marker([pin.lat, pin.lng], {
      icon: makeIcon(pin.category),
      title: pin.name
    }).addTo(map);

    const popupHtml = `
      <div class="popup-short">${CATEGORIES[pin.category].label}</div>
      <strong>${pin.name}</strong>
      ${pin.distance ? `<div style="font-size: 0.85rem; color: #6b4423; margin-bottom: 0.4rem;">${pin.distance}${pin.difficulty ? ' · ' + pin.difficulty : ''}</div>` : ''}
      ${pin.fromBasecamp ? `<div class="popup-basecamp">⛺ ${pin.fromBasecamp}</div>` : ''}
      <div style="font-size: 0.9rem; line-height: 1.4; color: #2b1810; margin-bottom: 0.5rem;">${pin.short || ''}</div>
      <a class="popup-btn" href="#" data-pin-id="${pin.id}">Open details →</a>
    `;
    marker.bindPopup(popupHtml, { maxWidth: 280 });

    marker.on('popupopen', () => {
      const btn = document.querySelector(`a.popup-btn[data-pin-id="${pin.id}"]`);
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(pin);
          map.closePopup();
        });
      }
    });

    markers[pin.id] = marker;
  });

  // Fit map to all pins
  const bounds = L.latLngBounds(PINS.map(p => [p.lat, p.lng]));
  map.fitBounds(bounds, { padding: [50, 50] });

  // ==========================================
  // MODAL
  // ==========================================
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = modal.querySelector('.modal__close');
  const modalBackdrop = modal.querySelector('.modal__backdrop');

  function openModal(pin) {
    const cat = CATEGORIES[pin.category];

    const metaItems = [];
    if (pin.difficulty) metaItems.push(`<span>◆ ${pin.difficulty}</span>`);
    if (pin.distance)   metaItems.push(`<span>↔ ${pin.distance}</span>`);
    metaItems.push(`<span>⊕ ${pin.lat.toFixed(4)}, ${pin.lng.toFixed(4)}</span>`);

    const basecampBanner = pin.fromBasecamp
      ? `<div class="modal__basecamp">⛺ ${pin.fromBasecamp}</div>`
      : '';

    const tipsHtml = (pin.tips && pin.tips.length) ? `
      <div class="modal__tips">
        <div class="modal__tips-title">Field Notes</div>
        <ul>${pin.tips.map(t => `<li>· ${t}</li>`).join('')}</ul>
      </div>
    ` : '';

    const videoHtml = pin.youtube ? `
      <span class="modal__video-label">▶ POV / Trail Video${pin.youtubeTitle ? ' · ' + pin.youtubeTitle : ''}</span>
      <div class="modal__video">
        <iframe src="${pin.youtube}" title="${pin.name} video" allowfullscreen loading="lazy"></iframe>
      </div>
    ` : '';

    const linksHtml = (pin.links && pin.links.length) ? `
      <div class="modal__links">
        ${pin.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}
        <a href="https://www.google.com/maps/dir/?api=1&destination=${pin.lat},${pin.lng}" target="_blank" rel="noopener">Directions ↗</a>
      </div>
    ` : '';

    modalContent.innerHTML = `
      <div class="modal__cat" style="background:${cat.color}">${cat.icon} ${cat.label}</div>
      <h2 class="modal__title">${pin.name}</h2>
      <div class="modal__meta">${metaItems.join('')}</div>
      ${basecampBanner}
      <div class="modal__desc">${pin.description}</div>
      ${tipsHtml}
      ${videoHtml}
      ${linksHtml}
    `;

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Stop video by clearing iframe
    const iframe = modalContent.querySelector('iframe');
    if (iframe) iframe.src = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // ==========================================
  // LEGEND CLICK → filter to category
  // ==========================================
  document.querySelectorAll('.legend__item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const cat = item.dataset.cat;
      const catPins = PINS.filter(p => p.category === cat);
      if (catPins.length === 0) return;
      if (catPins.length === 1) {
        const p = catPins[0];
        map.setView([p.lat, p.lng], 14);
        markers[p.id].openPopup();
      } else {
        const b = L.latLngBounds(catPins.map(p => [p.lat, p.lng]));
        map.fitBounds(b, { padding: [80, 80] });
      }
      // Scroll back up to the map
      document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});

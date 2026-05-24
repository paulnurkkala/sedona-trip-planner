// Sedona Trip Pin Data
// Each location includes: type, name, coords, description, links, and an embedded YouTube video
const PINS = [
  {
    id: 'basecamp',
    category: 'basecamp',
    name: 'BASECAMP — FR 525 / Loy Butte Rd',
    short: 'Dispersed camping hub',
    lat: 34.8796728,
    lng: -111.906977,
    difficulty: null,
    distance: null,
    description: `Central base for the whole trip. Five designated dispersed camping areas along Forest Road 525 (Loy Butte Rd): <strong>Surprise, Windmill, Cockscomb, Greasy Spoon, and Nolan</strong>. Nolan is the largest at ~12 acres — target this for the group with the Promaster and F250. Free, 14-day max stay on Coconino National Forest land. Graded dirt road, easy access for both rigs. No water, no toilets, no services — fully self-contained. <strong>Get in Sunday-Tuesday; sites fill by Friday afternoon.</strong>`,
    tips: [
      'No cell service in spots — download offline maps',
      'Showers: Cottonwood (20 min SW) has the best deal',
      'Water fill: Sedona town or Cottonwood',
      'Quiet hours enforced; respect neighbors'
    ],
    youtube: null,
    links: [
      { label: 'Coconino NF Camping Info', url: 'https://www.fs.usda.gov/r03/coconino/alerts/west-sedona-camping-and-campfire-restrictions' },
      { label: 'Google Maps', url: 'https://maps.google.com/?cid=9398216855430504381' },
      { label: 'Dispersed Camping Guide', url: 'https://bermstyle.com/dispersed-camping-in-sedona-a-vanlife-guide/' }
    ]
  },
  {
    id: 'thunder-mtn',
    category: 'shop',
    name: 'Thunder Mountain Bikes',
    short: 'Trail beta & tune-ups',
    lat: 34.863256,
    lng: -111.7897211,
    difficulty: null,
    description: `Best shop in Sedona for rentals, repairs, and current trail conditions. Stop here on day 1 — they'll give you the real beta on which trails are riding well, what's washed out, and the local shuttle situation. Open 9-6 daily.`,
    tips: [
      'Phone: 928-282-1106',
      'Ask about the free Sedona Shuttle for point-to-point rides',
      'They rent eBikes (limited routes) and full-suspension MTBs'
    ],
    youtube: null,
    links: [
      { label: 'Official Site', url: 'https://www.thundermountainbikes.com/' },
      { label: 'eBike Routes', url: 'https://thundermountainbikes.com/pages/ebike-trails-in-sedona' }
    ]
  },

  // MOUNTAIN BIKING
  {
    id: 'aerie',
    category: 'mtb',
    name: 'Aerie / Cockscomb Loop',
    short: 'MTB — Intermediate, 6.1 mi',
    lat: 34.885763499999996,
    lng: -111.86983440000002,
    difficulty: 'Intermediate (Blue)',
    distance: '6.1 mi loop',
    description: `Perfect day-1 shakedown ride. Flowy berms, rolling singletrack, and bermed turns wrapping around Doe Mountain with views of Boynton Spires. Minutes from basecamp. Bikers prefer this over hikers so foot traffic is light. Can be extended to Mescal/Chuckwagon for a longer day.`,
    tips: [
      'Park at Aerie Trailhead (small lot, fills quickly)',
      'Extend via Dawa → Arizona Cypress for a full "Dry Creek Loop"',
      'Great views across to Boynton spires'
    ],
    youtube: 'https://www.youtube.com/embed/qCSTNUheiFY',
    youtubeTitle: 'Sedona MTB POV — connecting trails',
    links: [
      { label: 'Trailforks: Aerie', url: 'https://www.trailforks.com/region/sedona/' },
      { label: 'Sedona MTB Guide', url: 'https://www.twowheeledwanderer.com/posts/mountain-biking-sedona/' }
    ]
  },
  {
    id: 'mescal',
    category: 'mtb',
    name: 'Mescal Trail',
    short: 'MTB — Intermediate, slickrock classic',
    lat: 34.9018156,
    lng: -111.82673129999999,
    difficulty: 'Intermediate (Blue)',
    distance: '~2.5 mi each way',
    description: `One of the most beautiful trails in Sedona. Mescal runs along the base of Mescal Mountain on red slickrock with constant views back across to Boynton, Mescal Mountain, and the Boynton spires. Not super technical, but minor exposure and a few tricky maneuvers. Pairs perfectly with Chuckwagon for a 12-15 mile flowy day.`,
    tips: [
      'Park at Mescal Trailhead off Long Canyon Rd',
      'Combine with Chuckwagon for a true Sedona flow day',
      'Connects to Devil\'s Bridge — bring shoes if you want to hike it after'
    ],
    youtube: 'https://www.youtube.com/embed/qCSTNUheiFY',
    youtubeTitle: 'Sedona MTB POV',
    links: [
      { label: 'AllTrails: Mescal', url: 'https://www.alltrails.com/us/arizona/sedona/mountain-biking' },
      { label: 'Singletracks Detail', url: 'https://www.singletracks.com/bike-trails/mescal-aerie-etc/' }
    ]
  },
  {
    id: 'chuckwagon',
    category: 'mtb',
    name: 'Chuck Wagon Trail',
    short: 'MTB — Sedona\'s purest flow',
    lat: 34.8896492,
    lng: -111.8234664,
    difficulty: 'Intermediate (Blue)',
    distance: '~4 mi',
    description: `Arguably Sedona's truest flow trail — swoopy red dirt that's so grippy it buzzes under the tires. Watch out for hikers in the first mile (it doubles as the back-door route to Devil's Bridge), but crowds thin after. Connects to Mescal, Aerie, and the Devil's Bridge area for huge loop options.`,
    tips: [
      'Crowded in the first mile — be courteous, hikers have right of way',
      'Pedal in to Devil\'s Bridge to skip the hiker traffic',
      'Best ridden as part of a Mescal/Chuckwagon/Aerie loop'
    ],
    youtube: 'https://www.youtube.com/embed/qCSTNUheiFY',
    youtubeTitle: 'Sedona Intermediate MTB POV',
    links: [
      { label: 'Trail Map', url: 'https://www.alltrails.com/us/arizona/sedona/mountain-biking' }
    ]
  },
  {
    id: 'hiline',
    category: 'mtb',
    name: 'Hiline Trail',
    short: 'MTB — DOUBLE BLACK, exposure',
    lat: 34.8045973,
    lng: -111.7713605,
    difficulty: 'Expert (Double Black)',
    distance: '~8 mi loop',
    description: `One of the Triple H (Hiline, Hangover, Hogs) — Sedona's bucket-list expert trails. Highly exposed singletrack cuts across a large ridge with massive cliff exposure and NO bailout until the end. Best done as a loop: <strong>Hiline → Baldwin → Templeton → Hermit</strong>. Killer views of Cathedral Rock the entire way.`,
    tips: [
      '⚠️ Cliff exposure is real. Don\'t ride tired or scared.',
      'Start from Yavapai Trailhead',
      'Climb up Hiline (it\'s techy but rideable), descend the loop',
      'Hardtail Party / BKXC have great walkthrough videos'
    ],
    youtube: 'https://www.youtube.com/embed/qCSTNUheiFY',
    youtubeTitle: 'Hiline Trail POV — Sedona',
    links: [
      { label: 'Trailforks: Hiline', url: 'https://www.trailforks.com/trails/hiline/' },
      { label: 'Sedona MTB Trail Guide', url: 'https://www.youtube.com/watch?v=DG7Kus32xNg' }
    ]
  },
  {
    id: 'hangover',
    category: 'mtb',
    name: 'Hangover Trail',
    short: 'MTB — HARDEST in Sedona',
    lat: 34.8664442,
    lng: -111.7484216,
    difficulty: 'Expert (Double Black)',
    distance: '~8 mi loop',
    description: `The hardest trail in Sedona. Brutal exposure, steep technical climbs, and slickrock ramps with serious consequences for mistakes. The Triple H crown jewel — only attempt if your crew is fully dialed and you're not afraid of heights. Access via Munds Wagon Trailhead off Schnebly Hill Rd.`,
    tips: [
      '⚠️ "One false move and you\'re a goner" — every rider says this',
      'Park at Munds Wagon TH — high clearance helpful',
      'Ride Cow Pies → up to Hangover for the standard loop',
      'Don\'t ride solo. Don\'t ride if tired. Don\'t ride in the rain.'
    ],
    youtube: 'https://www.youtube.com/embed/AnLyfbSMLFs',
    youtubeTitle: 'PLENTY to be scared of on Hangover — BKXC',
    links: [
      { label: 'Trailforks: Hangover', url: 'https://www.trailforks.com/trails/hangover/' },
      { label: 'How to Ride Slickrock — Guide', url: 'https://www.youtube.com/watch?v=1uAuGopEgOo' }
    ]
  },
  {
    id: 'broken-arrow-mtb',
    category: 'mtb',
    name: 'Broken Arrow → Hogs',
    short: 'MTB — Expert, techy red rock',
    lat: 34.8455491,
    lng: -111.7568893,
    difficulty: 'Expert (Black/Double Black)',
    distance: '~10 mi loop',
    description: `Many riders' favorite Sedona ride. Techy red rock obstacles, slickrock ramps, and the iconic pedal out to <strong>Chicken Point overlook</strong>. The "Hogs" trio (Hog Wash, Hog Heaven, High on the Hog) adds advanced tech with exposure. Note: shared with Pink Jeep tours and OHV traffic — busy and dusty.`,
    tips: [
      'Trailhead closed Sat/Sun per current FS hours — go weekdays',
      'Lots of OHV/Jeep traffic, be alert',
      'Chicken Point is a MUST stop for photos',
      'Combine with the Hogs for a full expert day'
    ],
    youtube: 'https://www.youtube.com/embed/AnLyfbSMLFs',
    youtubeTitle: 'Sedona Expert MTB POV',
    links: [
      { label: 'Coconino NF: Broken Arrow', url: 'https://www.fs.usda.gov/recarea/coconino/recarea/?recid=55250' },
      { label: 'Triple H Guide', url: 'https://57hours.com/review/sedona-mountain-bike-trails/' }
    ]
  },

  // E-DIRT BIKE / OHV
  {
    id: 'outlaw-ohv',
    category: 'ohv',
    name: 'Outlaw Trail (OHV)',
    short: 'E-Dirt Bike — 10.5 mi loop',
    lat: 34.9367868,
    lng: -111.9344421,
    difficulty: 'Moderate OHV',
    distance: '10.5 mi loop',
    description: `Classic Sedona OHV route starting from Honanki Heritage Site. Rocky old wagon trail through west canyon gulches with stunning red rock views and a stop at ancient cliff dwellings. Lighter traffic than Broken Arrow. Connects to Ranch Loop and Diamondback Gulch for a full day. 15 min from basecamp.`,
    tips: [
      'Watch a Sur-Ron POV: linked below — same bike, same trail',
      'Stop at Honanki Heritage Site (free with Red Rock Pass)',
      'Combine with Diamondback Gulch for a full day from camp',
      '15 mph speed limit, helmet required'
    ],
    youtube: 'https://www.youtube.com/embed/XFNRBWFgUiM',
    youtubeTitle: 'SUR-RON on Outlaw OHV Trail — Sedona',
    links: [
      { label: 'Coconino NF: Sedona OHV Routes', url: 'https://www.fs.usda.gov/r03/coconino/recreation/sedona-area-ohv-routes' },
      { label: 'Trail Guide', url: 'https://livethatadventure.com/how-to-drive-outlaw-diamondback-gulch-4wd-trails-in-sedona/' }
    ]
  },
  {
    id: 'diamondback',
    category: 'ohv',
    name: 'Diamondback Gulch (OHV)',
    short: 'E-Dirt Bike — Nature\'s rollercoaster',
    lat: 34.885873,
    lng: -111.893423,
    difficulty: 'Advanced OHV',
    distance: '6 mi loop',
    description: `Borders the basecamp — ride from your tent. Known as "nature's rollercoaster" — the highlight is a ten-story descent in and out of the largest gulch in west Sedona. Steep climbs, off-camber sections, rocky ledges. Best run clockwise: <strong>start on Boynton Pass Road, end at FR 525</strong>.`,
    tips: [
      '⚠️ North section (152A) is slick clay if it rains — check forecast',
      'Watch for oncoming Jeeps; clockwise direction is most common',
      'Less scenic than Outlaw but way more technical fun',
      'Right next to camp — easy half-day ride'
    ],
    youtube: 'https://www.youtube.com/embed/nt-bhuRcZM4',
    youtubeTitle: 'Diamondback Gulch ATV Descent — Sedona',
    links: [
      { label: 'Trail Conditions', url: 'https://www.onxmaps.com/offroad/trails/us/arizona/diamondback-gulch' }
    ]
  },
  {
    id: 'broken-arrow-ohv',
    category: 'ohv',
    name: 'Broken Arrow (OHV)',
    short: 'E-Dirt Bike — THE Sedona ride',
    lat: 34.8455491,
    lng: -111.7568893,
    difficulty: 'Advanced OHV',
    distance: '4 mi RT',
    description: `Sedona's quintessential off-road trail. 3.9 miles of slickrock obstacles, the <strong>Devil's Staircase</strong> climb, Submarine Rock, and the iconic Chicken Point overlook. Best views in Sedona from a vehicle. Likely your favorite day on the e-bikes — but trailer in, you can't legally ride street.`,
    tips: [
      '⚠️ Trailer in — Sur-Ron/Talaria not street legal',
      'Park at Broken Arrow Trailhead off Morgan Rd',
      'Air down for better traction if your bike has tubeless setup',
      'Submarine Rock + Chicken Point = mandatory photo stops',
      'Goes early — Pink Jeep tours start at 8am'
    ],
    youtube: 'https://www.youtube.com/embed/dOmbOfTzCnc',
    youtubeTitle: 'SUR-RON on Broken Arrow — Sedona',
    links: [
      { label: 'Coconino NF: Broken Arrow', url: 'https://www.fs.usda.gov/recarea/coconino/recarea/?recid=55250' },
      { label: 'Trail Map (onX)', url: 'https://www.onxmaps.com/offroad/trails/us/arizona/broken-arrow' }
    ]
  },
  {
    id: 'schnebly-ohv',
    category: 'ohv',
    name: 'Schnebly Hill Rd (OHV)',
    short: 'E-Dirt Bike — Long cruise to the rim',
    lat: 34.88961,
    lng: -111.70316299999999,
    difficulty: 'Moderate OHV',
    distance: '11 mi one-way',
    description: `Climbs 2,200 ft from Sedona up to the Mogollon Rim with endless dirt road spurs at the top. Best accessed from the I-17 side (the Sedona-side approach is gnarly rocky). Once on top, you've got hours of forest roads to explore. Great long-range cruise for the e-bikes — bring extra battery.`,
    tips: [
      '⚠️ Bring spare batteries — this is a long ride',
      'Best entry: I-17 exit 320, head west',
      'Vista Overlook is the must-stop photo',
      'Forest road network at the top = endless exploring'
    ],
    youtube: 'https://www.youtube.com/embed/2RFZqFN_cmo',
    youtubeTitle: 'Sedona Off-Road — Broken Arrow, Soldier Pass, Schnebly Hill',
    links: [
      { label: 'Coconino NF Info', url: 'http://www.fs.usda.gov/recarea/coconino/recarea/?recid=55036&actid=64' }
    ]
  },

  // HIKING
  {
    id: 'cathedral',
    category: 'hike',
    name: 'Cathedral Rock',
    short: 'Hike — Iconic, sunset must',
    lat: 34.8360908,
    lng: -111.7795925,
    difficulty: 'Hard (short but steep)',
    distance: '1.2 mi RT',
    description: `Sedona's signature hike. Short, steep scramble with rock-climbing moves up to the saddle between the spires. <strong>Vortex site</strong>. Best done for sunset — the rock glows red in the late light. Plan to be at the trailhead 90 min before sunset.`,
    tips: [
      '⚠️ Free shuttle Thu-Sun → trailhead lot is CLOSED those days',
      'Self-drive Mon-Wed, shuttle Thu-Sun',
      'Real scrambling — wear grippy shoes',
      'Bring a headlamp for the descent at dusk'
    ],
    youtube: 'https://www.youtube.com/embed/5EgZyc_SKmY',
    youtubeTitle: 'Cathedral Rock Guide — 4K',
    links: [
      { label: 'AllTrails', url: 'https://www.alltrails.com/trail/us/arizona/cathedral-rock-trail' },
      { label: 'Sedona Shuttle Schedule', url: 'https://sedonaaz.gov/your-government/departments/sedona-shuttle' }
    ]
  },
  {
    id: 'devils-bridge',
    category: 'hike',
    name: 'Devil\'s Bridge',
    short: 'Hike — Iconic arch, 4.2 mi',
    lat: 34.9030007,
    lng: -111.8141399,
    difficulty: 'Moderate',
    distance: '4.2 mi RT',
    description: `The largest sandstone arch in Sedona — the iconic Instagram photo. Mostly flat dirt road approach, then a steep final climb to the bridge. <strong>Hike it at sunrise to avoid the photo line.</strong> Bonus: ride your MTBs in via Chuckwagon to cut the walk-in significantly.`,
    tips: [
      'Arrive at the trailhead by 7am or expect to park a mile out',
      'Photo line at the bridge can be 25-30 min mid-day',
      'Park at Mescal TH for a shorter, prettier approach',
      'Skip this one Sat/Sun — absolutely zoo-level crowded'
    ],
    youtube: 'https://www.youtube.com/embed/5EgZyc_SKmY',
    youtubeTitle: 'Cathedral & Devil\'s Bridge Sedona Guide',
    links: [
      { label: 'AllTrails', url: 'https://www.alltrails.com/trail/us/arizona/devils-bridge-trail' },
      { label: 'Coconino NF Info', url: 'https://www.fs.usda.gov/recarea/coconino/recarea/?recid=55292' }
    ]
  },
  {
    id: 'boynton',
    category: 'hike',
    name: 'Boynton Canyon → Subway Cave',
    short: 'Hike — 6 mi, the Subway Cave',
    lat: 34.9073761,
    lng: -111.84845639999999,
    difficulty: 'Moderate',
    distance: '6 mi RT',
    description: `Six miles round-trip, ~4 hours. Easy canyon walking through ponderosa pine until the final climb to the <strong>Subway Cave</strong> — one of the most photogenic spots in the Southwest. The scramble up is moderate; once inside the cave the photo angle is iconic.`,
    tips: [
      'Take the social trail right at "the tree" ~2 miles in',
      'Two routes up to the cave — the slickrock ramp or the scramble on the left',
      'Closest icon to basecamp — start early',
      'Wildlife: mule deer, occasional bear'
    ],
    youtube: 'https://www.youtube.com/embed/Kn6Bd6eklS8',
    youtubeTitle: 'Sedona Hiking Guide',
    links: [
      { label: 'Coconino NF Info', url: 'https://www.fs.usda.gov/recarea/coconino/recarea/?recid=55242' }
    ]
  },
  {
    id: 'soldier-pass',
    category: 'hike',
    name: 'Soldier Pass',
    short: 'Hike — Caves + Pools, 4.5 mi',
    lat: 34.8843579,
    lng: -111.783676,
    difficulty: 'Moderate',
    distance: '4.5 mi RT',
    description: `Best variety hike in Sedona. You get <strong>three landmarks in one trail</strong>: Devil's Kitchen sinkhole, the Seven Sacred Pools, and the spectacular Soldier Pass Cave at the top. Tiny trailhead lot — go before 8am or take the shuttle.`,
    tips: [
      '⚠️ Tiny lot — gate closes when full. Be there by 7am.',
      'Go RIGHT at the fork marked "wilderness" for the caves',
      'Caves are the highlight — keep going past the pools',
      'Final climb is moderate scrambling'
    ],
    youtube: 'https://www.youtube.com/embed/Kn6Bd6eklS8',
    youtubeTitle: 'Soldier Pass Hike Sedona',
    links: [
      { label: 'Coconino NF Info', url: 'https://www.fs.usda.gov/recarea/coconino/recarea/?recid=55392' }
    ]
  },
  {
    id: 'bell-rock',
    category: 'hike',
    name: 'Bell Rock Pathway',
    short: 'Hike — Easy, scramble optional',
    lat: 34.8243217,
    lng: -111.7755041,
    difficulty: 'Easy + optional scramble',
    distance: '3.6 mi loop',
    description: `Easy 3.6 mile loop around the base of Bell Rock with an optional scramble UP the rock itself for incredible views. <strong>Vortex site</strong>. Great rest-day hike or sunset stroll. Connects to Courthouse Butte Loop if you want to extend to 5+ miles.`,
    tips: [
      'Family-friendly base loop',
      'Scramble up the rock for the real reward',
      'Watch for mountain bikers — shared trail',
      'Good sunset option if Cathedral is too crowded'
    ],
    youtube: null,
    links: [
      { label: 'AllTrails', url: 'https://www.alltrails.com/trail/us/arizona/bell-rock' }
    ]
  },
  {
    id: 'fay-canyon',
    category: 'hike',
    name: 'Fay Canyon',
    short: 'Hike — Quiet sleeper pick',
    lat: 34.907742,
    lng: -111.8623673,
    difficulty: 'Easy',
    distance: '2.4 mi RT',
    description: `Quiet shaded canyon — a sleeper pick when the icons are overrun. Towering red walls on both sides. The side scramble up to <strong>Fay Arch</strong> halfway in is the reward, and you can scramble to a flat overlook rock at the very end. Right next to basecamp — perfect easy day after a hard ride.`,
    tips: [
      'Less crowded than the icons',
      'Look for the unmarked Fay Arch spur about halfway',
      'Great late-afternoon hike with shade'
    ],
    youtube: null,
    links: [
      { label: 'Trail Info', url: 'https://www.fs.usda.gov/recarea/coconino/recarea/?recid=55296' }
    ]
  }
];

const CATEGORIES = {
  basecamp: { label: 'Basecamp', color: '#d97706', icon: '⛺' },
  shop:     { label: 'Bike Shop', color: '#0891b2', icon: '🔧' },
  mtb:      { label: 'Mountain Bike', color: '#dc2626', icon: '🚵' },
  ohv:      { label: 'E-Dirt Bike (OHV)', color: '#7c2d12', icon: '🏍️' },
  hike:     { label: 'Hike', color: '#16a34a', icon: '🥾' }
};

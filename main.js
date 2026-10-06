/* ==========================================================================
   SAAS Adventures — shared site script (index.html + farmhouse.html)
   Plain vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. SITE CONFIG — edit these values
     ------------------------------------------------------------------------ */
  var CONFIG = {
    bookingWhatsApp: "917799882182",          // all booking messages go here
    generalWhatsApp: "919347760620",          // general enquiries
    social: {
      // TODO: replace "#" with real profile URLs
      instagram: "#",
      facebook: "#",
      youtube: "#",
      whatsapp: "https://wa.me/917799882182"
    }
  };

  /* ------------------------------------------------------------------------
     2. EXPLORE INDIA — categories and destination data
        Distances are approximate road km from Hyderabad.
     ------------------------------------------------------------------------ */
  var IMG = {
    devotional: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    mountains: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    coastline: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    wildlife: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    countryside: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  };

  var CATEGORIES = [
    {
      id: "devotional",
      title: "Devotional / Spiritual Journeys",
      short: "Devotional",
      tagline: "Temple Trails • Pilgrimage Tours • Spiritual Retreats",
      strip: "Temple Trails • Pilgrimage Tours • Spiritual Retreats • Divine Experiences • Blessed Memories",
      intro: "India is home to some of the world's most revered spiritual destinations. From the divine blessings of Yadadri, Srisailam, Tirupati, and Shirdi to the sacred shrines of Kashi, Rameswaram, Jagannath Puri, and Kedarnath, every journey offers an opportunity for faith, reflection, and discovery. With SAAS Adventures, travel comfortably by motorhome or enjoy peaceful nature stays while exploring India's rich spiritual heritage at your own pace.",
      bands: [["Nearby", 0, 300], ["Weekend Spiritual Getaways", 300, 700], ["Pan-India Pilgrimages", 700, Infinity]],
      data: [
        ["Yadadri Lakshmi Narasimha Swamy Temple", "Telangana", 65],
        ["Vemulawada Rajanna Temple", "Telangana", 150],
        ["Kondagattu Anjaneya Swamy Temple", "Telangana", 180],
        ["Basara Saraswati Temple", "Telangana", 210],
        ["Bhadrachalam Sri Rama Temple", "Telangana", 310],
        ["Srisailam Mallikarjuna Jyotirlinga", "Andhra Pradesh", 215],
        ["Mantralayam Raghavendra Swamy Temple", "Andhra Pradesh", 260],
        ["Kanaka Durga Temple, Vijayawada", "Andhra Pradesh", 275],
        ["Yaganti Temple", "Andhra Pradesh", 330],
        ["Ahobilam Narasimha Swamy Temple", "Andhra Pradesh", 360],
        ["Sri Kalahasti Temple", "Andhra Pradesh", 530],
        ["Tirumala Tirupati Temple", "Andhra Pradesh", 560],
        ["Annavaram Satyanarayana Swamy Temple", "Andhra Pradesh", 700],
        ["Gokarna Mahabaleshwar Temple", "Karnataka", 620],
        ["Murudeshwar Temple", "Karnataka", 670],
        ["Kukke Subramanya Temple", "Karnataka", 780],
        ["Sringeri Sharada Peetham", "Karnataka", 790],
        ["Dharmasthala Temple", "Karnataka", 850],
        ["Udupi Krishna Temple", "Karnataka", 880],
        ["Arunachaleswara Temple, Tiruvannamalai", "Tamil Nadu", 650],
        ["Meenakshi Temple, Madurai", "Tamil Nadu", 1050],
        ["Rameswaram Temple", "Tamil Nadu", 1250],
        ["Guruvayur Temple", "Kerala", 1050],
        ["Sabarimala Temple", "Kerala", 1150],
        ["Padmanabhaswamy Temple", "Kerala", 1300],
        ["Pandharpur Vitthal Temple", "Maharashtra", 410],
        ["Shirdi Sai Baba Temple", "Maharashtra", 600],
        ["Bhimashankar Jyotirlinga", "Maharashtra", 620],
        ["Trimbakeshwar Jyotirlinga", "Maharashtra", 720],
        ["Somnath Jyotirlinga", "Gujarat", 1400],
        ["Dwarkadhish Temple", "Gujarat", 1650],
        ["Jagannath Temple, Puri", "Odisha", 1050],
        ["Kashi Vishwanath Temple, Varanasi", "Uttar Pradesh", 1250],
        ["Ayodhya Ram Mandir", "Uttar Pradesh", 1350],
        ["Badrinath Temple", "Uttarakhand", 1800, "1,800+"],
        ["Kedarnath Temple", "Uttarakhand", 1850, "1,850+"]
      ]
    },
    {
      id: "mountains",
      title: "Mountain Escapes",
      short: "Mountains",
      tagline: "Breathe Higher. Explore Farther.",
      intro: "From the lush green valleys of Araku and Lambasingi to the misty hills of Coorg, Ooty, Munnar, and Chikmagalur, discover India's most breathtaking mountain destinations at your own pace. Wake up to cool mountain air, winding roads, spectacular viewpoints, waterfalls, forests, and unforgettable sunrises. Whether you're seeking adventure, relaxation, photography, trekking, or simply a peaceful escape into nature, SAAS Adventures brings the mountains closer than ever.",
      bands: [["Day Trips", 0, 150], ["Weekend Escapes", 150, 500], ["Long Weekend Getaways", 500, 800], ["Bucket-List Adventures", 800, Infinity]],
      data: [
        ["Ananthagiri Hills", "Telangana", 80],
        ["Laknavaram Hills & Lake", "Telangana", 220],
        ["Bogatha Valley & Hills", "Telangana", 330],
        ["Nallamala Hills (Srisailam Region)", "Andhra Pradesh", 215],
        ["Maredumilli Forest Hills", "Andhra Pradesh", 450],
        ["Horsley Hills", "Andhra Pradesh", 530],
        ["Lambasingi (Andhra's Kashmir)", "Andhra Pradesh", 620],
        ["Araku Valley", "Andhra Pradesh", 700],
        ["Yelagiri Hills", "Tamil Nadu", 700],
        ["Yercaud Hills", "Tamil Nadu", 850],
        ["Kolli Hills", "Tamil Nadu", 900],
        ["Coonoor", "Tamil Nadu", 930],
        ["Ooty (Nilgiri Hills)", "Tamil Nadu", 950],
        ["Kodaikanal", "Tamil Nadu", 1050],
        ["Nandi Hills", "Karnataka", 620],
        ["Chikmagalur", "Karnataka", 700],
        ["Mullayanagiri Peak", "Karnataka", 720],
        ["BR Hills", "Karnataka", 760],
        ["Coorg (Kodagu)", "Karnataka", 820],
        ["Kudremukh", "Karnataka", 820],
        ["Wayanad", "Kerala", 950],
        ["Munnar", "Kerala", 1150],
        ["Vagamon", "Kerala", 1180],
        ["Ponmudi Hills", "Kerala", 1250],
        ["Mahabaleshwar", "Maharashtra", 560],
        ["Lonavala & Khandala", "Maharashtra", 650],
        ["Matheran", "Maharashtra", 700],
        ["Saputara", "Gujarat", 950]
      ]
    },
    {
      id: "coastline",
      title: "Coastline",
      short: "Coastline",
      tagline: "Sun, Sand & Scenic Coastal Drives",
      intro: "From the pristine beaches of Suryalanka and Visakhapatnam to the golden shores of Goa, Gokarna, and Kerala, discover India's stunning coastline at your own pace. Drive along scenic coastal roads, unwind on peaceful beaches, witness breathtaking sunsets, savor local seafood, and wake up to the soothing sound of waves. Whether you're looking for relaxation, adventure, water sports, or a romantic getaway, every coastal journey offers a unique experience.",
      bands: [["Weekend Coastal Escapes", 0, 500], ["Long Weekend Getaways", 500, 800], ["Bucket-List Coastal Adventures", 800, Infinity]],
      data: [
        ["Suryalanka Beach (Bapatla)", "Andhra Pradesh", 320],
        ["Vodarevu Beach", "Andhra Pradesh", 340],
        ["Machilipatnam Beach", "Andhra Pradesh", 360],
        ["Manginapudi Beach", "Andhra Pradesh", 370],
        ["Ramapuram Beach", "Andhra Pradesh", 450],
        ["Kakinada Beach", "Andhra Pradesh", 500],
        ["Coringa Mangrove Forest", "Andhra Pradesh", 520],
        ["Uppada Beach", "Andhra Pradesh", 530],
        ["Antarvedi Beach", "Andhra Pradesh", 600],
        ["Yarada Beach", "Andhra Pradesh", 620],
        ["Lawson's Bay Beach", "Andhra Pradesh", 625],
        ["Rushikonda Beach", "Andhra Pradesh", 630],
        ["RK Beach, Visakhapatnam", "Andhra Pradesh", 630],
        ["Bheemili Beach", "Andhra Pradesh", 650],
        ["Marina Beach, Chennai", "Tamil Nadu", 630],
        ["Mahabalipuram Beach", "Tamil Nadu", 680],
        ["Rameswaram Coast", "Tamil Nadu", 1250],
        ["Dhanushkodi Beach", "Tamil Nadu", 1280],
        ["Baga Beach", "Goa", 670],
        ["Calangute Beach", "Goa", 680],
        ["Candolim Beach", "Goa", 680],
        ["Palolem Beach", "Goa", 720],
        ["Agonda Beach", "Goa", 730],
        ["Gokarna Beaches", "Karnataka", 620],
        ["Murudeshwar Beach", "Karnataka", 670],
        ["Karwar Beach", "Karnataka", 740],
        ["Udupi & Malpe Beach", "Karnataka", 880],
        ["Marari Beach", "Kerala", 1150],
        ["Kovalam Beach", "Kerala", 1300],
        ["Varkala Beach", "Kerala", 1320],
        ["Gopalpur Beach", "Odisha", 850],
        ["Puri Beach", "Odisha", 1050],
        ["Chandrabhaga Beach", "Odisha", 1080]
      ]
    },
    {
      id: "wildlife",
      title: "Forest & Wildlife Adventures",
      short: "Forest & Wildlife",
      tagline: "Into the Wild, Close to Nature",
      intro: "Escape the city and immerse yourself in India's breathtaking forests, wildlife sanctuaries, and tiger reserves. From the dense forests of Amrabad, Kawal, and Papikondalu to the renowned wildlife destinations of Kabini, Bandipur, Periyar, and Kanha, every journey offers an unforgettable encounter with nature. Spot majestic tigers, leopards, elephants, deer, exotic birds, and diverse wildlife while exploring some of India's most pristine natural habitats.",
      bands: [["Nature Escapes", 0, 250], ["Weekend Wildlife Getaways", 250, 600], ["Bucket-List Safaris", 600, Infinity]],
      data: [
        ["Pocharam Wildlife Sanctuary", "Telangana", 110],
        ["Pakhal Wildlife Sanctuary", "Telangana", 210],
        ["Amrabad Tiger Reserve", "Telangana", 220],
        ["Eturnagaram Wildlife Sanctuary", "Telangana", 250],
        ["Kawal Tiger Reserve", "Telangana", 260],
        ["Kinnerasani Wildlife Sanctuary", "Telangana", 320],
        ["Nagarjunasagar–Srisailam Tiger Reserve", "Andhra Pradesh", 215],
        ["Rollapadu Wildlife Sanctuary", "Andhra Pradesh", 230],
        ["Sri Lankamalleswara Wildlife Sanctuary", "Andhra Pradesh", 370],
        ["Papikondalu National Park", "Andhra Pradesh", 420],
        ["Coringa Wildlife Sanctuary", "Andhra Pradesh", 520],
        ["Bannerghatta National Park", "Karnataka", 580],
        ["Dandeli Wildlife Sanctuary", "Karnataka", 620],
        ["Bhadra Wildlife Sanctuary", "Karnataka", 700],
        ["Bandipur Tiger Reserve", "Karnataka", 820],
        ["Nagarhole National Park", "Karnataka", 850],
        ["Kabini Wildlife Reserve", "Karnataka", 860],
        ["Tadoba-Andhari Tiger Reserve", "Maharashtra", 500],
        ["Pench National Park", "Maharashtra", 620],
        ["Melghat Tiger Reserve", "Maharashtra", 650],
        ["Sanjay Gandhi National Park", "Maharashtra", 700],
        ["Mudumalai Tiger Reserve", "Tamil Nadu", 920],
        ["Anamalai Tiger Reserve", "Tamil Nadu", 1050],
        ["Wayanad Wildlife Sanctuary", "Kerala", 950],
        ["Silent Valley National Park", "Kerala", 1000],
        ["Periyar Tiger Reserve (Thekkady)", "Kerala", 1100],
        ["Simlipal Tiger Reserve", "Odisha", 1150],
        ["Kanha National Park", "Madhya Pradesh", 850]
      ]
    },
    {
      id: "countryside",
      title: "Countryside, Lakes & Caves",
      short: "Countryside & Caves",
      tagline: "Where Serenity Meets the Open Road",
      intro: "Escape the rush of city life and discover the peaceful charm of India's countryside. From the tranquil waters of Nagarjuna Sagar, Laknavaram Lake, and Pakhal Lake to the scenic landscapes surrounding Singur, Kinnerasani, and Banasura Sagar, every destination offers a refreshing blend of nature, relaxation, and adventure. Whether you're looking for a quiet lakeside retreat, a scenic picnic spot, a photography getaway, or a peaceful weekend surrounded by nature, these destinations provide the perfect escape.",
      tabs: [
        {
          id: "lakes", label: "Lakes & Dams",
          bands: [["Day Trips", 0, 150], ["Weekend Escapes", 150, 350], ["Bucket-List Countryside", 350, Infinity]],
          data: [
            ["Singur Dam & Reservoir", "Telangana", 90],
            ["Pocharam Reservoir", "Telangana", 110],
            ["Nagarjuna Sagar Dam", "Telangana", 165],
            ["Nizam Sagar Dam", "Telangana", 170],
            ["Lower Manair Dam", "Telangana", 170],
            ["Pakhal Lake", "Telangana", 210],
            ["Sriram Sagar Project (SRSP)", "Telangana", 220],
            ["Laknavaram Lake", "Telangana", 220],
            ["Ramappa Lake", "Telangana", 220],
            ["Kadem Dam", "Telangana", 280],
            ["Kinnerasani Reservoir", "Telangana", 320],
            ["Pulichintala Dam", "Andhra Pradesh", 250],
            ["Polavaram Reservoir Region", "Andhra Pradesh", 380],
            ["Dowleswaram Barrage", "Andhra Pradesh", 450],
            ["Somasila Reservoir", "Andhra Pradesh", 520],
            ["Tungabhadra Dam", "Karnataka", 380],
            ["Krishna Raja Sagar (KRS) Dam", "Karnataka", 720],
            ["Mettur Dam", "Tamil Nadu", 850],
            ["Banasura Sagar Dam", "Kerala", 950],
            ["Idukki Dam", "Kerala", 1100]
          ]
        },
        {
          id: "caves", label: "Caves & Heritage",
          bands: [["Weekend Cave Escapes", 0, 350], ["Heritage & Adventure", 350, 700], ["Bucket-List Caves", 700, Infinity]],
          circuits: ["Ancient Buddhist Cave Circuits", "Western Ghats Cave Trails"],
          data: [
            ["Pandavula Gutta Caves", "Telangana", 220],
            ["Pandavula Caves, Adilabad", "Telangana", 300],
            ["Akkamahadevi Caves (Srisailam)", "Andhra Pradesh", 240],
            ["Undavalli Caves", "Andhra Pradesh", 275],
            ["Mogalarajapuram Caves", "Andhra Pradesh", 280],
            ["Belum Caves", "Andhra Pradesh", 320],
            ["Yaganti Caves", "Andhra Pradesh", 330],
            ["Bhairavakona Caves", "Andhra Pradesh", 420],
            ["Borra Caves", "Andhra Pradesh", 700],
            ["Badami Cave Temples", "Karnataka", 420],
            ["Aihole Cave Temples", "Karnataka", 440],
            ["Ajanta Caves", "Maharashtra", 560],
            ["Ellora Caves", "Maharashtra", 600],
            ["Karla Caves", "Maharashtra", 650],
            ["Bhaja Caves", "Maharashtra", 650],
            ["Kanheri Caves", "Maharashtra", 700],
            ["Elephanta Caves", "Maharashtra", 710],
            ["Udayagiri & Khandagiri Caves", "Odisha", 1000]
          ]
        }
      ]
    }
  ];

  /* Flatten into one array of { name, state, km, kmLabel, category, sub, band } */
  function bandFor(bands, km) {
    for (var i = 0; i < bands.length; i++) {
      // upper bound exclusive, except the last band
      if (km >= bands[i][1] && (km < bands[i][2] || i === bands.length - 1)) return bands[i][0];
    }
    return bands[bands.length - 1][0];
  }
  var DESTINATIONS = [];
  CATEGORIES.forEach(function (c) {
    var groups = c.tabs ? c.tabs : [{ id: null, bands: c.bands, data: c.data }];
    groups.forEach(function (g) {
      g.data.forEach(function (d) {
        DESTINATIONS.push({
          name: d[0], state: d[1], km: d[2],
          kmLabel: d[3] || d[2].toLocaleString("en-IN"),
          category: c.id, sub: g.id, band: bandFor(g.bands, d[2])
        });
      });
    });
  });
  function catById(id) { for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i]; return null; }
  function countFor(id) { return DESTINATIONS.filter(function (d) { return d.category === id; }).length; }

  /* Expose for debugging / reuse */
  window.SAAS = { CONFIG: CONFIG, CATEGORIES: CATEGORIES, DESTINATIONS: DESTINATIONS };

  /* ------------------------------------------------------------------------
     3. Helpers
     ------------------------------------------------------------------------ */
  var ICON_CLOSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  function esc(s) { return String(s).replace(/[&<>"']/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* Dialog helpers: native <dialog> gives top-layer + inert background + Esc.
     We add: backdrop-click close, body scroll lock, and focus return. */
  var returnFocus = new WeakMap();
  function openDialog(dlg, opener) {
    if (!dlg) return;
    var target = opener || document.activeElement;
    // Opened from inside another (now closing) dialog → return focus to that dialog's opener
    var parentDlg = target && target.closest ? target.closest("dialog") : null;
    if (parentDlg && parentDlg !== dlg && returnFocus.get(parentDlg)) target = returnFocus.get(parentDlg);
    returnFocus.set(dlg, target);
    if (!dlg.open) dlg.showModal();
    document.body.classList.add("dialog-open");
    var first = dlg.querySelector("[data-autofocus]") || dlg.querySelector(".sheet-close");
    if (first) first.focus();
  }
  function closeDialog(dlg) { if (dlg && dlg.open) dlg.close(); }
  function wireDialog(dlg) {
    dlg.addEventListener("click", function (e) { if (e.target === dlg) closeDialog(dlg); }); // backdrop
    dlg.addEventListener("close", function () {
      if (document.querySelector("dialog[open]")) return; // another dialog took over
      document.body.classList.remove("dialog-open");
      var el = returnFocus.get(dlg);
      if (el && typeof el.focus === "function" && document.contains(el)) el.focus();
    });
    $all("[data-close]", dlg).forEach(function (b) { b.addEventListener("click", function () { closeDialog(dlg); }); });
  }

  /* ------------------------------------------------------------------------
     4. WhatsApp message builder
     ------------------------------------------------------------------------ */
  var TYPE_LABEL = { motorhome: "Motorhome / Caravan", farmhouse: "Farmhouse Stay", custom: "Customized Adventure Trip" };
  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function nightsBetween(a, b) {
    if (!a || !b) return 0;
    return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
  }

  /**
   * buildWhatsAppMessage(data) → plain-text message
   * data: { type, vehicle, farmhouse, name, phone, start, end, adults, children, pickup, destination, notes }
   */
  function buildWhatsAppMessage(data) {
    var lines = ["Hi SAAS Adventures! 👋 I'd like to book:"];
    var type = TYPE_LABEL[data.type] || "Enquiry";
    if (data.type === "motorhome" && data.vehicle) type = "Motorhome – " + data.vehicle;
    if (data.type === "farmhouse" && data.farmhouse) type = "Farmhouse Stay – " + data.farmhouse;
    lines.push("• Type: " + type);
    lines.push("• Name: " + data.name + " | Phone: " + data.phone);
    var dates = fmtDate(data.start);
    if (data.end) {
      var n = nightsBetween(data.start, data.end);
      dates += " → " + fmtDate(data.end) + (n > 0 ? " (" + n + " night" + (n === 1 ? "" : "s") + ")" : "");
    }
    lines.push("• Dates: " + dates);
    var g = [];
    if (+data.adults) g.push(data.adults + " adult" + (+data.adults === 1 ? "" : "s"));
    if (+data.children) g.push(data.children + " child" + (+data.children === 1 ? "" : "ren"));
    if (g.length) lines.push("• Guests: " + g.join(", "));
    if (data.type !== "farmhouse" && data.pickup) lines.push("• Pickup: " + data.pickup);
    if (data.type !== "farmhouse" && data.destination) lines.push("• Destination: " + data.destination);
    if (data.notes) lines.push("• Notes: " + data.notes.replace(/\s+/g, " ").trim());
    lines.push("Please share availability and pricing.");
    return lines.join("\n");
  }
  function whatsappURL(number, text) { return "https://wa.me/" + number + "?text=" + encodeURIComponent(text); }
  window.SAAS.buildWhatsAppMessage = buildWhatsAppMessage;

  /* ------------------------------------------------------------------------
     5. Booking modal (injected so both pages share it)
     ------------------------------------------------------------------------ */
  var bookingHTML =
    '<dialog class="sheet narrow" id="bookingModal" aria-labelledby="bookTitle">' +
    '<div class="sheet-scroll">' +
    '<div class="book-head" style="position:relative">' +
    '<button type="button" class="sheet-close" data-close aria-label="Close booking form">' + ICON_CLOSE + '</button>' +
    '<span class="eyebrow">Plan Your Journey</span>' +
    '<h2 id="bookTitle">Start Your Adventure</h2>' +
    '<p>Fill in a few details. We\'ll open WhatsApp with your request ready to send.</p>' +
    '</div>' +
    '<form class="book-form" id="bookForm" novalidate>' +
    '<fieldset class="field full"><legend>Booking type</legend><div class="seg">' +
    '<label><input type="radio" name="type" value="motorhome" checked data-autofocus><span>Motorhome / Caravan</span></label>' +
    '<label><input type="radio" name="type" value="farmhouse"><span>Farmhouse Stay</span></label>' +
    '<label><input type="radio" name="type" value="custom"><span>Customized Trip</span></label>' +
    '</div></fieldset>' +
    '<fieldset class="field full" data-show="motorhome"><legend>Vehicle option</legend><div class="seg">' +
    '<label><input type="radio" name="vehicle" value="Up to 6 Pax" checked><span>Up to 6 Pax</span></label>' +
    '<label><input type="radio" name="vehicle" value="Up to 9 Pax"><span>Up to 9 Pax</span></label>' +
    '</div></fieldset>' +
    '<div class="field full" data-show="farmhouse"><label for="bkFarm">Farmhouse</label><input id="bkFarm" name="farmhouse" type="text" placeholder="e.g., SAAS Farm Stay, Chevella" autocomplete="off"></div>' +
    '<div class="field"><label for="bkName">Full name <span class="req">*</span></label><input id="bkName" name="name" type="text" autocomplete="name" required><span class="err">Please enter your name.</span></div>' +
    '<div class="field"><label for="bkPhone">Phone number <span class="req">*</span></label><input id="bkPhone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="10-digit mobile" required><span class="err">Please enter a valid phone number.</span></div>' +
    '<div class="field"><label for="bkStart">Start date <span class="req">*</span></label><input id="bkStart" name="start" type="date" required><span class="err">Please choose a start date (today or later).</span></div>' +
    '<div class="field"><label for="bkEnd">End date</label><input id="bkEnd" name="end" type="date"><span class="err">End date must be after the start date.</span></div>' +
    '<div class="field full"><label>Guests</label><div class="guest-pair">' +
    '<div class="field"><label for="bkAdults" style="font-weight:600;color:rgba(38,34,28,.65)">Adults</label><input id="bkAdults" name="adults" type="number" min="1" max="20" value="2"></div>' +
    '<div class="field"><label for="bkKids" style="font-weight:600;color:rgba(38,34,28,.65)">Children</label><input id="bkKids" name="children" type="number" min="0" max="20" value="0"></div>' +
    '</div></div>' +
    '<div class="field" data-show="motorhome custom"><label for="bkPickup">Pickup city</label><input id="bkPickup" name="pickup" type="text" value="Hyderabad"></div>' +
    '<div class="field" data-show="motorhome custom"><label for="bkDest">Destination(s) of interest</label><input id="bkDest" name="destination" type="text" placeholder="e.g., Araku Valley"></div>' +
    '<div class="field full"><label for="bkNotes">Special requests <span style="font-weight:500;color:rgba(38,34,28,.5)">(optional)</span></label><textarea id="bkNotes" name="notes" placeholder="Anything we should know?"></textarea></div>' +
    '<div class="book-actions">' +
    '<button type="submit" class="btn btn-primary"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15.1 3.6 13.6 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.3-8.4 8.3z"/></svg>Send on WhatsApp</button>' +
    '<small>Opens WhatsApp with your message to +91 77998 82182. Nothing is sent until you tap send.</small>' +
    '</div>' +
    '</form></div></dialog>';

  function initBooking() {
    document.body.insertAdjacentHTML("beforeend", bookingHTML);
    var dlg = $("#bookingModal"), form = $("#bookForm");
    wireDialog(dlg);

    var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    var todayISO = today.toISOString().slice(0, 10);
    form.start.min = todayISO; form.end.min = todayISO;
    form.start.addEventListener("change", function () { form.end.min = form.start.value || todayISO; });

    function applyType() {
      var t = form.querySelector('input[name="type"]:checked').value;
      $all("[data-show]", form).forEach(function (el) {
        el.hidden = el.getAttribute("data-show").split(" ").indexOf(t) === -1;
      });
      $("#bookTitle").textContent = t === "farmhouse" ? "Book Your Farm Stay" : t === "custom" ? "Plan a Custom Trip" : "Book Your Motorhome";
    }
    $all('input[name="type"]', form).forEach(function (r) { r.addEventListener("change", applyType); });

    function setInvalid(input, bad) { input.closest(".field").classList.toggle("invalid", bad); input.setAttribute("aria-invalid", bad ? "true" : "false"); }
    $all("input", form).forEach(function (i) { i.addEventListener("input", function () { setInvalid(i, false); }); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true, firstBad = null;
      function check(input, bad) { setInvalid(input, bad); if (bad) { ok = false; firstBad = firstBad || input; } }
      check(form.name, !form.name.value.trim());
      check(form.phone, form.phone.value.replace(/\D/g, "").length < 10);
      check(form.start, !form.start.value || form.start.value < todayISO);
      check(form.end, !!form.end.value && !!form.start.value && form.end.value < form.start.value);
      if (!ok) { firstBad.focus(); return; }

      var data = {
        type: form.querySelector('input[name="type"]:checked').value,
        vehicle: (form.querySelector('input[name="vehicle"]:checked') || {}).value,
        farmhouse: form.farmhouse.value.trim(),
        name: form.name.value.trim(), phone: form.phone.value.trim(),
        start: form.start.value, end: form.end.value,
        adults: form.adults.value, children: form.children.value,
        pickup: form.pickup.value.trim(), destination: form.destination.value.trim(),
        notes: form.notes.value.trim()
      };
      var url = whatsappURL(CONFIG.bookingWhatsApp, buildWhatsAppMessage(data));
      var win = window.open(url, "_blank", "noopener");
      if (!win) window.location.href = url; // popup blocked → same tab
      closeDialog(dlg);
    });

    /* Public opener */
    window.SAAS.openBooking = function (opts, opener) {
      opts = opts || {};
      var t = opts.type || "motorhome";
      form.querySelector('input[name="type"][value="' + t + '"]').checked = true;
      if (opts.vehicle) { var v = form.querySelector('input[name="vehicle"][value="' + opts.vehicle + '"]'); if (v) v.checked = true; }
      form.farmhouse.value = opts.farmhouse || form.farmhouse.value;
      if (opts.destination !== undefined) form.destination.value = opts.destination;
      applyType();
      $all(".field.invalid", form).forEach(function (f) { f.classList.remove("invalid"); });
      openDialog(dlg, opener);
    };

    /* Any element with data-book opens the modal.
       data-book="motorhome|farmhouse|custom", data-vehicle, data-farmhouse, data-destination */
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-book]");
      if (!btn) return;
      e.preventDefault();
      window.SAAS.openBooking({
        type: btn.getAttribute("data-book") || "motorhome",
        vehicle: btn.getAttribute("data-vehicle"),
        farmhouse: btn.getAttribute("data-farmhouse"),
        destination: btn.hasAttribute("data-destination") ? btn.getAttribute("data-destination") : undefined
      }, btn);
    });
  }

  /* ------------------------------------------------------------------------
     6. Explore India popups (index only — needs #explore)
     ------------------------------------------------------------------------ */
  function initExplore() {
    var popHTML =
      '<dialog class="sheet" id="explorePop" aria-labelledby="popTitle">' +
      '<button type="button" class="sheet-close" data-close aria-label="Close">' + ICON_CLOSE + '</button>' +
      '<div class="sheet-scroll"><div class="pop-hero"><img alt="" id="popImg"><div class="pop-hero-text"><span class="eyebrow">Explore India</span><h2 id="popTitle"></h2><p id="popTag"></p></div></div>' +
      '<div class="pop-body"><p class="pop-intro" id="popIntro"></p><p class="pop-strip" id="popStrip"></p>' +
      '<div class="pop-tabs" id="popTabs" role="tablist" hidden></div>' +
      '<div class="pop-controls"><div class="chips" id="popChips" role="group" aria-label="Filter by distance"></div>' +
      '<div class="select-wrap"><label class="sr-only" for="popState" style="position:absolute;left:-9999px">Filter by state</label><select id="popState"></select></div></div>' +
      '<p class="result-count" id="popCount" aria-live="polite"></p><div id="popList"></div></div></div>' +
      '<div class="pop-foot"><p>Ready to see it for yourself?</p><button type="button" class="btn btn-primary" id="popBook">Book a motorhome for this journey</button></div>' +
      '</dialog>' +
      '<dialog class="sheet" id="statePop" aria-labelledby="stateTitle">' +
      '<button type="button" class="sheet-close" data-close aria-label="Close">' + ICON_CLOSE + '</button>' +
      '<div class="sheet-scroll"><div class="pop-body" style="padding-top:2.2rem"><span class="eyebrow">State-wise Locations</span><h2 id="stateTitle" style="font-size:clamp(1.6rem,3.4vw,2.2rem);color:var(--forest)">Browse Every Destination by State</h2>' +
      '<p class="pop-intro" style="margin-top:.6rem">All distances are approximate road kilometres from Hyderabad.</p>' +
      '<div class="state-acc" id="stateAcc" style="margin-top:1.4rem"></div></div></div></dialog>';
    document.body.insertAdjacentHTML("beforeend", popHTML);

    var pop = $("#explorePop"), statePop = $("#statePop");
    wireDialog(pop); wireDialog(statePop);
    var state = { cat: null, tab: null, band: "All", st: "All" };

    function currentGroup() {
      var c = catById(state.cat);
      if (c.tabs) { for (var i = 0; i < c.tabs.length; i++) if (c.tabs[i].id === state.tab) return c.tabs[i]; return c.tabs[0]; }
      return c;
    }
    function rowHTML(d, showCat) {
      var c = catById(d.category);
      return '<div class="dest-row"><div class="dest-row-name">' + esc(d.name) +
        (showCat ? ' <span class="cat-tag"> | ' + esc(c.short) + '</span>' : '<small>' + esc(d.state) + '</small>') +
        '</div><span class="km-badge">≈ ' + d.kmLabel + ' km <span>from Hyderabad</span></span>' +
        '<button type="button" class="plan-btn" data-book="custom" data-destination="' + esc(d.name + " (" + c.short + ")") + '">Plan this trip</button></div>';
    }
    function render() {
      var c = catById(state.cat), g = currentGroup();
      var pool = DESTINATIONS.filter(function (d) { return d.category === c.id && (!c.tabs || d.sub === g.id); });
      // chips
      var chips = '<button type="button" class="chip" data-band="All" aria-pressed="' + (state.band === "All") + '">All</button>';
      g.bands.forEach(function (b) {
        var label = b[0] + " (" + (b[2] === Infinity ? b[1] + "+ km" : b[1] + "–" + b[2] + " km") + ")";
        chips += '<button type="button" class="chip" data-band="' + esc(b[0]) + '" aria-pressed="' + (state.band === b[0]) + '">' + esc(label) + '</button>';
      });
      (g.circuits || []).forEach(function (ci) {
        chips += '<button type="button" class="chip circuit" data-book="custom" data-destination="' + esc(ci) + '">★ ' + esc(ci) + '</button>';
      });
      $("#popChips").innerHTML = chips;
      // states
      var states = [];
      pool.forEach(function (d) { if (states.indexOf(d.state) === -1) states.push(d.state); });
      if (states.indexOf(state.st) === -1) state.st = "All";
      $("#popState").innerHTML = '<option value="All">All states</option>' + states.map(function (s) { return '<option' + (s === state.st ? " selected" : "") + '>' + esc(s) + '</option>'; }).join("");
      // list
      var list = pool.filter(function (d) { return (state.band === "All" || d.band === state.band) && (state.st === "All" || d.state === state.st); });
      var byState = {};
      list.forEach(function (d) { (byState[d.state] = byState[d.state] || []).push(d); });
      var order = Object.keys(byState).sort(function (a, b) {
        return Math.min.apply(null, byState[a].map(function (d) { return d.km; })) - Math.min.apply(null, byState[b].map(function (d) { return d.km; }));
      });
      $("#popCount").textContent = list.length + " destination" + (list.length === 1 ? "" : "s");
      $("#popList").innerHTML = order.length ? order.map(function (s) {
        return '<div class="state-group"><h3>' + esc(s) + '</h3><div class="dest-rows">' +
          byState[s].sort(function (a, b) { return a.km - b.km; }).map(function (d) { return rowHTML(d, false); }).join("") + '</div></div>';
      }).join("") : '<p class="empty-note">No destinations match these filters.</p>';
    }
    function openCat(id, opener) {
      var c = catById(id); if (!c) return;
      state.cat = id; state.band = "All"; state.st = "All"; state.tab = c.tabs ? c.tabs[0].id : null;
      var img = $("#popImg");
      img.onerror = function () { img.style.display = "none"; }; img.style.display = ""; img.src = IMG[id];
      $("#popTitle").textContent = c.title;
      $("#popTag").textContent = c.tagline;
      $("#popIntro").textContent = c.intro;
      $("#popStrip").textContent = c.strip || ""; $("#popStrip").hidden = !c.strip;
      var tabs = $("#popTabs");
      if (c.tabs) {
        tabs.hidden = false;
        tabs.innerHTML = c.tabs.map(function (t, i) { return '<button type="button" class="pop-tab" role="tab" data-tab="' + t.id + '" aria-selected="' + (i === 0) + '">' + esc(t.label) + '</button>'; }).join("");
      } else { tabs.hidden = true; tabs.innerHTML = ""; }
      $("#popBook").setAttribute("data-destination", c.short);
      render();
      pop.querySelector(".sheet-scroll").scrollTop = 0;
      openDialog(pop, opener);
    }
    $("#popChips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-band]"); if (!b) return;
      state.band = b.getAttribute("data-band"); render();
    });
    $("#popState").addEventListener("change", function (e) { state.st = e.target.value; render(); });
    $("#popTabs").addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]"); if (!b) return;
      state.tab = b.getAttribute("data-tab"); state.band = "All"; state.st = "All";
      $all(".pop-tab", pop).forEach(function (t) { t.setAttribute("aria-selected", t === b ? "true" : "false"); });
      render();
    });
    $("#popBook").addEventListener("click", function () {
      var dest = this.getAttribute("data-destination");
      closeDialog(pop);
      window.SAAS.openBooking({ type: "motorhome", destination: dest });
    });
    // When a "Plan this trip" inside a popup opens booking, close the popup first.
    [pop, statePop].forEach(function (d) {
      d.addEventListener("click", function (e) { if (e.target.closest("[data-book]")) closeDialog(d); }, true);
    });

    // State browser
    function renderStates() {
      var byState = {};
      DESTINATIONS.forEach(function (d) { (byState[d.state] = byState[d.state] || []).push(d); });
      var order = Object.keys(byState).sort(function (a, b) { return byState[b].length - byState[a].length; });
      $("#stateAcc").innerHTML = order.map(function (s, i) {
        return '<details' + (i === 0 ? " open" : "") + '><summary>' + esc(s) + '<span>' + byState[s].length + ' places</span></summary><div class="dest-rows">' +
          byState[s].sort(function (a, b) { return a.km - b.km; }).map(function (d) { return rowHTML(d, true); }).join("") + '</div></details>';
      }).join("");
    }
    renderStates();

    // Fill counts on cards and wire openers
    $all("[data-cat-count]").forEach(function (el) { el.textContent = countFor(el.getAttribute("data-cat-count")); });
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-open-cat]");
      if (b) { e.preventDefault(); openCat(b.getAttribute("data-open-cat"), b); return; }
      var s = e.target.closest("[data-open-states]");
      if (s) { e.preventDefault(); openDialog(statePop, s); }
    });

    // Deep link: index.html#explore-mountains
    function fromHash() {
      var m = location.hash.match(/^#explore-(\w+)$/);
      if (m && catById(m[1])) {
        var sec = document.getElementById("explore");
        if (sec) sec.scrollIntoView();
        openCat(m[1]);
      } else if (location.hash === "#explore-states") { openDialog(statePop); }
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  }

  /* ------------------------------------------------------------------------
     7. Social links + mobile toggle
     ------------------------------------------------------------------------ */
  function initSocial() {
    $all("[data-social]").forEach(function (a) {
      var url = CONFIG.social[a.getAttribute("data-social")];
      if (url) a.setAttribute("href", url);
    });
    var bar = $(".social-bar"), tog = $(".social-toggle");
    if (bar && tog) {
      tog.addEventListener("click", function () {
        var open = bar.classList.toggle("open");
        tog.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. Header, mobile nav, active link, reveal (from v1)
     ------------------------------------------------------------------------ */
  function initChrome() {
    var header = $("#siteHeader");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

    var hamburger = $("#hamburgerBtn"), mobileNav = $("#mobileNav");
    function closeMenu() { hamburger.setAttribute("aria-expanded", "false"); hamburger.setAttribute("aria-label", "Open menu"); mobileNav.classList.remove("open"); document.body.classList.remove("menu-open"); }
    function openMenu() { hamburger.setAttribute("aria-expanded", "true"); hamburger.setAttribute("aria-label", "Close menu"); mobileNav.classList.add("open"); document.body.classList.add("menu-open"); }
    hamburger.addEventListener("click", function () { hamburger.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu(); });
    $all("a, button", mobileNav).forEach(function (l) { l.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

    var sections = $all("main section[id]"), navLinks = $all(".main-nav a[href^='#']");
    function setActive() {
      var pos = window.scrollY + 140, cur = null;
      sections.forEach(function (s) { if (s.offsetTop <= pos) cur = s.id; });
      navLinks.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + cur); });
    }
    if (navLinks.length) { setActive(); window.addEventListener("scroll", setActive, { passive: true }); }

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els = $all(".reveal");
    if ("IntersectionObserver" in window && !reduced) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      els.forEach(function (el) { io.observe(el); });
    } else { els.forEach(function (el) { el.classList.add("in"); }); }
  }

  /* ------------------------------------------------------------------------
     9. Boot
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initChrome();
    initSocial();
    initBooking();
    if (document.getElementById("explore")) initExplore();
    else {
      // Other pages: footer explore links go to index popups
      $all("[data-open-cat]").forEach(function (b) { b.addEventListener("click", function () { location.href = "index.html#explore-" + b.getAttribute("data-open-cat"); }); });
    }
    document.dispatchEvent(new CustomEvent("saas:ready"));
  });
})();

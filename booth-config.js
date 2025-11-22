/* ===========================================================
     BOOTH DATA CONFIGURATION
     Edit this section to change booth status, prices, or names.
     ===========================================================
*/

// Default settings for booth types
const defaults = {
  regular: { price: "Rp 50.000.000", status: "AVAILABLE" },
  umkm: { price: "Price to Be Announce", status: "AVAILABLE" },
};

// Specific Booth Data (Overrides defaults)
// Keys: "1"-"26" for regular, "UMKM 1"-"UMKM 5" for UMKM
const boothData = {
  // --- BOOKED BOOTHS ---
  12: { status: "BOOKED", name: "PT. Fahrenheit" },
  22: { status: "BOOKED", name: "MindRay" },
  23: { status: "BOOKED", name: "Fresenius" },

  // Cara mengisi:
  //"10": { status: "AVAILABLE", price: "Rp 6.000.000", name: "Premium Corner" },
  //"UMKM 1": { status: "BOOKED", name: "Kopi Kenangan" }
};

/* =========================================================== */

/* ===========================================================
     BOOTH DATA CONFIGURATION
     Edit this section to change booth status, prices, or names.
     ===========================================================
*/

// Default settings for booth types
const defaults = {
  regular: { price: "Rp 80.000.000", status: "AVAILABLE" },
  umkm: { price: "Price to Be Announce", status: "AVAILABLE" },
};

// Specific Booth Data (Overrides defaults)
// Keys: "1"-"26" for regular, "UMKM 1"-"UMKM 5" for UMKM
/*
-1. Fresenius&WS Nutrisi Booth No 22
-- 2. ⁠Fahrenhet booth no  12 
-- 3. Hopsi  booth No 2
4. Madesa. Booth 
-- 5. Ethica booth 15
-- 6. Mindray booth no 20/21
7. ⁠Baxter WS CRRT 
-- 8. DEXA booth no 1 
-- 9. Transmedik/Jafron booth no 23
*/
const boothData = {
  // --- BOOKED BOOTHS ---
  1: { status: "BOOKED", name: "PT. Dexa Medica" },
  2: { status: "BOOKED", name: "PT. Hospi Niaga Utama" },
  4: { status: "BOOKED", name: "PT. Madesa Sejahtera Utama" },
  12: { status: "BOOKED", name: "Fahrenheit Indonesia" },
  15: { status: "BOOKED", name: "PT. ETHICA Industri Farmasi" },
  20: { status: "BOOKED", name: "PT. Mindray Medical Indonesia" },
  21: { status: "BOOKED", name: "PT. Mindray Medical Indonesia" },
  22: { status: "BOOKED", name: "Fresnesius" },
  23: { status: "BOOKED", name: "PT. Transmedic Indonesia" },
  // Cara mengisi:
  //"10": { status: "AVAILABLE", price: "Rp 6.000.000", name: "Premium Corner" },
  //"UMKM 1": { status: "BOOKED", name: "Kopi Kenangan" }
};

/* =========================================================== */

window.onload = function() {
    tabContent.innerHTML = homeTabContent
};

function logout(){
    window.location.href = "/logout"
}

function login(){
    window.location.href = "/auth"
}

function admin(){
    window.location.href = "/admin"
}

const homeTab = document.getElementById("home");
const kitsTab = document.getElementById("kits");
const equipmentTab = document.getElementById("equipment");
const attachmentsTab = document.getElementById("attachments");
const weaponryTab = document.getElementById("weaponry");
const consumablesTab = document.getElementById("consumables")
const itemsTab = document.getElementById("items");

let tabContent = document.getElementById("tab-content");
let playerCountLabel = document.getElementById("player-count");

function fetchPlayerCount(){
    fetch("localhost/api").then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        playerCountLabel.innerText = data["player"]["playersOnline"]
        console.log("[TI] Player count updated.")
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
setInterval(fetchPlayerCount, 85000)

let homeTabContent = `
    <h2>PATCH 0.8.0</h2>
    <h3>Key Features</h4>
    <li>Quest 3 Visual Upgrade</li>
    <li>Eastwood DLC</li>
    <li>New Weapons</li>
    <li>In-game Squad Chat</li>
    <li>Water jug to water your plants</li>
    <h3>New Features</h4>
    <li>Added Eastwood DLC (Rebel, El Dorado, Rowdy, Peace Maker, Gambler Hat)</li>
    <li>Added New Weapons (Raging Hunter, Colt 1883, Marlin 1894)</li>
    <li>Added Wipe Reward (Golden Luty)</li>
    <li>Added Doors to Island of Tabor (<b>v1 - Improvements coming this fall</b>)</li>
    <li>Added a Water Jug (You can now water your plants easily.)</li>
    <li>Added In-game Squad Chat (Green Light = Proximity and Squad, Yellow Light = Squad Only, <br>Red Light = Muted)</li>
    <li>Added a Toggle for the Hologram Attachments on Guns when Grabbing a Weapon and an Attachment</li>
    <li>Replaced the Hunter with the Tikka T3 (Also Changed the Hunter Mission to be any Bolt Actions)</li>
    <li>Improved Materials on Quest 3 (<b>Quest 3 Graphics Improvement</b>)</li>
    <li>Improved Meta Quest 2 and Quest 3 FPS (Now runs at 90FPS with AppSW instead of 72)</li>
    <h3>Bug Fixes & Improvements</h3>
    <li>Fixed an issue where the XM250 would get stuck in the kiosk</li>
    <li>Fixed an issue where players would not extract with their gear</li>
    <li>Fixed a visual duplication issue with brass</li>
    <li>Fixed AKM rail not fitting on the Bizon</li>
    <li>Fixed blood decals showing even if the shot was blocked by the armor</li>
    <li>Fixed muzzle flash showing with silencers</li>
    <li>Improved Bolt Action logic to make it easier to stay on target while chambering another bullet</li>
    <li>Improved throwing on Meta Quest</li>
    <li>Improved zeroing on sights (Sights now automatically zero in to 100m -> Was previously 50m at a fixed angle)</li>
    <li>Improved Noob queue (level 0-5) to avoid exploits</li>
    <li>Improved visibility on Island of Tabor and Matka Miest (Reduced Fog)</li>
    <li>Improved the ammo pouch interaction (Bullets don't go back in accidentally)</li>
    <h3>Map Fixes</h3>
    <h4>Bunker</h4>
    <li>Improved lighting on gun walls</li>
    <li>Disabled fade-in fade-out in the bunker</li>
    <h4>Island of Tabor</h4>
    <li>Improved some objects position to not be floating above ground</li>
    <h4>Matka Miest</h4>
    <li>Removed water splash sound when walking in blood</li>
    <h4>Silo</h4>
    <li>Fixed a physical exploit in Silo</li>
    <h4>Tutorial level</h4>
    <li>Improved performance</li>
`
let kitsTabContent = `
    <center>
        <button class="kit-button">Low-Tier Kit</button>
        <button class="kit-button">Mid-Tier Kit</button>
        <button class="kit-button">High-Tier Kit</button>
    </center>`
let equipmentTabContent = `
    <button onclick="helmets()" class="subbutton" style="float: left; margin-right: 10px;" id="helmets">Helmets</button>
    <button onclick="nvgs()" class="subbutton" style="float: left; margin-right: 10px;" id="nvgs">NVGs & Masks</button>
    <button onclick="chestrigs()" class="subbutton" style="float: left; margin-right: 10px;" id="chestrigs">Chest Rigs</button>
    <button onclick="modules()" class="subbutton" style="float: left; margin-right: 10px;" id="pouches">Pouches</button>
    <button onclick="backpacks()" class="subbutton" style="float: left; margin-right: 10px;" id="backpacks">Backpacks</button>
    <button onclick="uniqueequipment()" class="subbutton" style="float: left; margin-right: 10px;" id="backpacks">Unique Equipment</button>
    <div style="display: block;" id="tab-content-equipment"></div>
`   
let attachmentsTabContent = `
    <button onclick="suppressors()" class="subbutton" style="float: left; margin-right: 10px;" id="suppressors">Suppressors</button>
    <button onclick="rails()" class="subbutton" style="float: left; margin-right: 10px;" id="rails">Rails</button>
    <button onclick="lasers()" class="subbutton" style="float: left; margin-right: 10px;" id="lasers">Lasers & Lights</button>
    <button onclick="scopes()" class="subbutton" style="float: left; margin-right: 10px;" id="scopes">Scopes</button>
    <button onclick="reflexsights()" class="subbutton" style="float: left; margin-right: 10px;" id="reflexsights">Reflex Sights</button>
    <button onclick="foregrips()" class="subbutton" style="float: left; margin-right: 10px;" id="foregrips">Foregrips</button>
    <button onclick="riflemag()" class="subbutton" style="float: left; margin-right: 10px;" id="riflemag">Rifle Magazines</button>
    <button onclick="smgmag()" class="subbutton" style="float: left; margin-right: 10px;" id="smgmag">SMG Magazines</button>
    <button onclick="pistolmag()" class="subbutton" style="float: left; margin-right: 10px;" id="pistolmag">Pistol Magazines</button>
    <button onclick="boltmag()" class="subbutton" style="float: left; margin-right: 10px;" id="boltmag">Bolt-Action Magazines</button>
    <button onclick="snipermag()" class="subbutton" style="float: left; margin-right: 10px;" id="snipermag">Sniper Magazines</button>
    <button onclick="shotgunmag()" class="subbutton" style="float: left; margin-right: 10px;" id="shotgunmag">Shotgun Magazines</button>
    <button onclick="lmgmag()" class="subbutton" style="float: left; margin-right: 10px;" id="lmgmag">LMG Magazines</button>
    <div style="display: block;" id="tab-content-attachments"></div>
`
let weaponryTabContent = `
    <button onclick="rifles()" class="subbutton" style="float: left; margin-right: 10px;" id="rifles">Assault Rifles</button>
    <button onclick="smgs()" class="subbutton" style="float: left; margin-right: 10px;" id="smgs">SMGS</button>
    <button onclick="pistols()" class="subbutton" style="float: left; margin-right: 10px;" id="pistols">Pistols</button>
    <button onclick="boltactionrifles()" class="subbutton" style="float: left; margin-right: 10px;" id="boltactionrifles">Bolt-Action Rifles</button>
    <button onclick="sniperrifles()" class="subbutton" style="float: left; margin-right: 10px;" id="sniperrifles">Sniper Rifles</button>
    <button onclick="shotguns()" class="subbutton" style="float: left; margin-right: 10px;" id="shotguns">Shotguns</button>
    <button onclick="lmgs()" class="subbutton" style="float: left; margin-right: 10px;" id="lmgs">LMGS</button>
    <button onclick="melee()" class="subbutton" style="float: left; margin-right: 10px;" id="melee">Melee</button>
    <button onclick="throwables()" class="subbutton" style="float: left; margin-right: 10px;" id="throwables">Throwables</button>
    <button onclick="uniqueweapons()" class="subbutton" style="float: left; margin-right: 10px;" id="uniqueweapons">Unique Weapons</button><br>
    <div style="display: block;" id="tab-content-weaponry"></div>
`
let consumablesTabContent = `
    <button onclick="food()" class="subbutton" style="float: left; margin-right: 10px;" id="rifles">Food</button>
    <button onclick="drink()" class="subbutton" style="float: left; margin-right: 10px;" id="smgs">Drink</button>
    <button onclick="healing()" class="subbutton" style="float: left; margin-right: 10px;" id="smgs">Healing</button>
    <div style="display: block;" id="tab-content-consumables"></div>
`
let itemsTabContent = `
    <button onclick="regular()" class="subbutton" style="float: left; margin-right: 10px;" id="regular">Regular</button>
    <button onclick="static()" class="subbutton" style="float: left; margin-right: 10px;" id="static">Static</button>
    <div style="display: block;" id="tab-content-items"></div>
`

// [CONSUMABLES SECTION]
let foodContent = `<br><br>
    <button class="item-button">Choco Bar</button>
    <button class="item-button">Cat Food</button>
    <button class="item-button">One Shot Stick</button>
    <button class="item-button">Gulash Can</button>
    <button class="item-button">Herring Fillets</button>
    <button class="item-button">Muesli Bar</button>
    <button class="item-button">Tangerines Can</button>
    <button class="item-button">Noodles with Tomatoes Can</button>
    <button class="item-button">Peach Can</button>
    <button class="item-button">Fish Curry</button>
    <button class="item-button">Anchovies Can</button>
    <button class="item-button">Ravioli Can</button>
    <button class="item-button">Beans Can</button>
    <button class="item-button">Mixed Fruit Cocktail</button>
`
let drinkContent= `<br><br>
    <button class="item-button">Water Bottle</button>
    <button class="item-button">Thermos</button>
    <button class="item-button">Cantine</button>
    <button class="item-button">Glytch Skill Issue Drink</button>
`
let healingContent = `<br><br>
    <button class="item-button">Bandage</button>
    <button class="item-button">NRS</button>
`
// [ITEMS SECTION]
let regitemsContent = `<br><br>
    <button class="item-button">Camera Lens</button>
    <button class="item-button">Capacitors</button>
    <button class="item-button">CPU</button>
    <button class="item-button">Electronic Wallet</button>
    <button class="item-button">Fishing Rod</button>
    <button class="item-button">GPU</button>
    <button class="item-button">Hack Tool</button>
    <button class="item-button">Journal</button>
    <button class="item-button">Junk Gauge</button>
    <button class="item-button">Junk Phone</button>
    <button class="item-button">Junk RAM</button>
    <button class="item-button">Junk Spark Plug</button>
    <button class="item-button">Junk USB Charger</button>
    <button class="item-button">Koruna Money Stack</button>
    <button class="item-button">Nail Pile</button>
    <button class="item-button">Nuts and Bolts</button>
    <button class="item-button">PC Fan</button>
    <button class="item-button">Power Bank</button>
    <button class="item-button">Power Supply</button>
    <button class="item-button">Rope</button>
    <button class="item-button">Scrap Metal</button>
    <button class="item-button">SSD</button>
    <button class="item-button">Tackle Box</button>
    <button class="item-button">Tape Measure</button>
    <button class="item-button">Toilet Paper</button>
    <button class="item-button">USB Stick</button>
    <button class="item-button">Walkie Talkie</button>
    <button class="item-button">Water Filter</button>
    <button class="item-button">Wire Spool</button>
`

let statitemsContent = `<br><br>
    <button class="item-button">Car Battery</button>
    <button class="item-button">Flight Recorder</button>
    <button class="item-button">Gas Can</button>
    <button class="item-button">Mahina</button>
    <button class="item-button">Yorick's Skull</button>
    <button class="item-button">Viper's Sauce</button>
    <button class="item-button">Twiejk Cheese</button>
    <button class="item-button">Ranger Handbook</button>
    <button class="item-button">TimelessVR Pocket Watch</button>
    <button class="item-button">RageSaq Saber</button>
`

// [ATTACHMENTS SECTION]
let suppressorsContent = `<br><br><br>
    <button style="font-size: 12px;" class="item-button">Ghost M Pistol Suppressor</button>
    <button class="item-button">Nomad Assault Rifle Suppressor</button>
    <button class="item-button">Sandman K-Bolt Action Suppressor</button>
    <button class="item-button">Sierra LMG Suppressor</button>
    <button class="item-button">Wolfman 5 SMG Suppressor</button>
    <button class="item-button">Wolverine C Assualt Rifle Suppressor</button>
    <button class="item-button">Osprey Pistol Suppressor</button>
    <button class="item-button">Salvo Shotgun Suppressor</button>
    <button class="item-button">Barrett Suppressor</button>
`
let railsContent = `<br><br><br>
    <button class="item-button">AK Side Rail</button>
    <button class="item-button">Canted Right Rail</button>
`
let lasersContent = `<br><br><br>
    <button class="item-button">LS321G</button>
    <button class="item-button">M952v</button>
`
let scopesContent = `<br><br><br>
    <button class="item-button">ACOG</button>
    <button class="item-button">Smith</button>
    <button class="item-button">NightForce</button>
`   
let reflexsightsContent = `<br><br><br>
    <button class="item-button">EO-Tech 2X-4X Magnifier</button>
    <button class="item-button">EXPS3</button>
    <button class="item-button">EO-Tech Flex Mini</button>
    <button class="item-button">RMR Sight</button>
    <button class="item-button">PK-06</button>
    <button class="item-button">Kobra</button>
    <button class="item-button">OKP-7</button>
`
let foregripsContent = `<br><br><br>
    <button class="item-button">Combat</button>
    <button class="item-button">Fortis Shift</button>
    <button class="item-button">FSG</button>
    <button class="item-button">Halo Mini</button>
    <button class="item-button">KRISS</button>
    <button class="item-button">Zenit RK Angled</button>
    <button class="item-button">Zenit RK-6</button>
`
let riflemagContent = `<br><br><br>
    <button class="item-button">AK74 Magazine 30rnd</button>
    <button class="item-button">AK5C Magazine 30rnd</button>
    <button class="item-button">AKM Magazine 30rnd</button>
    <button class="item-button">AKM Drum 75rnd</button>
    <button class="item-button">Aug Magazine 30rnd</button>
    <button class="item-button">ASVAL Magazine 20rnd</button>
    <button class="item-button">G3A3 Magazine 20rnd</button>
    <button class="item-button">G3A3 Magazine 30rnd</button>
    <button class="item-button">G36K Magazine 30rnd</button>
    <button class="item-button">G36K Magazine 45rnd</button>
    <button class="item-button">M1A SASS Magazine 20rnd</button>
    <button class="item-button">M1A SASS Drum 50rnd</button>
    <button class="item-button">SCAR-L Magazine 20rnd</button>
    <button class="item-button">SG552 Magazine 30rnd</button>
    <button class="item-button">SKS Magazine 30rnd</button>
    <button class="item-button">SKS Drum 75rnd</button>
    <button class="item-button">STANAG Magazine 30rnd</button>
    <button class="item-button">STANAG Drum 60rnd</button>
    <button class="item-button">Stoner63 Drum 150rnd</button>
    <button class="item-button">VSS Magazine 10rnd</button>
    <button class="item-button">VSS Magazine 30rnd</button>
`
let smgmagContent = `<br><br><br>
    <button class="item-button">Agram Magazine 30rnd</button>
    <button class="item-button">Bizon Magazine 64rnd</button>
    <button class="item-button">CX8 Magazine 30rnd</button>
    <button class="item-button">Luty Magazine 16rnd</button>
    <button class="item-button">Mac 10 Magazine 30rnd</button>
    <button class="item-button">MAT-49 Magazine 32rnd</button>
    <button class="item-button">MP5 Magazine 30rnd</button>
    <button class="item-button">MP7 Magazine 40rnd</button>
    <button class="item-button">MP7 Drum 75rnd</button>
    <button class="item-button">MP9 Magazine 30rnd</button>
    <button class="item-button">MP40 Magazine 32rnd</button>
    <button class="item-button">P90 Magazine 50rnd</button>
    <button class="item-button">PPSH Drum 71rnd</button>
    <button class="item-button">Thompson Magazine 30rnd</button>
    <button class="item-button">Thompson Drum 100rnd</button>
    <button class="item-button">UMP Magazine 25rnd></button>
    <button class="item-button">Vector 9mm Magazine 30rnd</button>
    <button class="item-button">Vector 9mm Drum 50rnd</button>
    <button class="item-button">Vector 10mm Magazine 30rnd</button>
    <button class="item-button">Vector 10mm Drum 50rnd</button>
`
let pistolmagContent = `<br><br><br>
    <button class="item-button">C1911 Magazine 8rnd</button>
    <button class="item-button">Desert Eagle Magazine 7rnd</button>
    <button class="item-button">FN-57 Magazine 20rnd</button>
    <button class="item-button">FN-57 Magazine 30rnd</button>
    <button class="item-button">Glock17 Magazine 17rnd</button>
    <button class="item-button">Makarov Magazine 9rnd</button>
    <button class="item-button">Ruger Magazine ??rnd</button>
    <button class="item-button">Tokarev Magazine 8rnd</button>
    <button class="item-button">USP Magazine 12rnd</button>
`
let boltmagContent = `<br><br><br>
    <button class="item-button">AWM Magazine 5rnd</button>
    <button class="item-button">Tikka T3 Magazine 4rnd</button>
`
let snipermagContent = `<br><br><br>
    <button class="item-button">Barrett Magazine 5rnd</button>
    <button class="item-button">Dragunov Magazine 10rnd</button>
    <button class="item-button">Dragunov Magazine 15rnd</button>
`
let shotgunmagContent = `<br><br><br>
    <button class="item-button">Saiga Magazine 5rnd</button>
    <button class="item-button">Saige Drum 20rnd</button>
`
let lmgmagContent = `<br><br><br>
    <button class="item-button">BAR Magazine 20rnd</button>
`

// [EQUIPMENT SECTION]
let helmetsContent = `<br><br>
    <button class="item-button">SPH-5</button>
    <button class="item-button">SSH-68</button>
    <button class="item-button">6B47</button>
    <button class="item-button">ATE</button>
    <button class="item-button">C1300</button>
    <button class="item-button">Devtac Ronin</button>
    <button class="item-button">ALTYN</button>
    <button class="item-button">Helmet Mich</button>
    <button class="item-button">KRTEK Mask</button>
    <button class="item-button">Fish Cultist Mask</button>
`
let nvgsContent = `<br><br>
    <button class="item-button">PVS7</button>
    <button class="item-button">NVG21</button>
    <button class="item-button">GPNVG18</button>
    <button class="item-button">ALTYN Face Mask</button>
`
let chestrigsContent = `<br><br>
    <button class="item-button">A22</button>
    <button class="item-button">LBAV</button>
    <button class="item-button">JPC2</button>
    <button class="item-button">VestB</button>
    <button class="item-button">6B102</button>
    <button class="item-button">6B43</button>
    <button class="item-button">R61</button>
`
let modulesContent = `<br><br>
    <button style="font-size: 13px;" class="item-button">Primary Ammo Module</button>
    <button style="font-size: 13px;" class="item-button">Secondary Ammo Module</button>
    <button class="item-button">Utility Module</button>
    <button class="item-button">Knife Module</button>
    <button class="item-button">Ammo Pouch</button>
`
let backpacksContent = `<br><br>
    <button class="item-button">Sling Backpack</button>
    <button class="item-button">Adventure Backpack</button>
    <button class="item-button">Gear Tech G4</button>
    <button class="item-button">Ragnar Backpack</button>
`
let uniqueEquipmentContent = `<br><br>
    <button class="item-button">UWU ALTYN</button>
    <button class="item-button">UWU ALTYN Face Mask</button>
    <button class="item-button">UWU Backpack</button>
`

// [WEAPONRY SECTION]
let riflesContent = `<br>
    <button id="ak109alpha" class="item-button">AK-109 Alpha</button>
    <button class="item-button">AK5C</button>
    <button class="item-button">AK-74</button>
    <button class="item-button">AKM</button>
    <button class="item-button">AKS74-U</button>
    <button class="item-button">ASVAL</button>
    <button class="item-button">Aug A1</button>
    <button class="item-button">Famas-G2</button>
    <button class="item-button">HK G36K</button>
    <button class="item-button">G3A3</button>
    <button class="item-button">L85A2</button>
    <button class="item-button">Colt-M16A2</button>
    <button class="item-button">M1A SASS</button>
    <button class="item-button">M4 Carbine</button>
    <button class="item-button">SCAR-L</button>
    <button class="item-button">SG552</button>
    <button class="item-button">SKS Model 1968</button>
    <button class="item-button">SKS Tapco</button>
    <button class="item-button">Stoner 63</button>
    <button class="item-button">VSS</button>
`
let smgsContent = `<br>
    <button class="item-button">Agram 2000</button>
    <button class="item-button">CX8 Storm</button>
    <button class="item-button">Kriss Vector 9mm</button>
    <button class="item-button">Kriss Vector 10mm</button>
    <button class="item-button">Luty</button>
    <button class="item-button">Mac 10</button>
    <button class="item-button">MAT-49</button>
    <button class="item-button">HK-MP5</button>
    <button class="item-button">HK-MP7</button>
    <button class="item-button">MP9</button>
    <button class="item-button">MP40</button>
    <button class="item-button">FN-P90</button>
    <button class="item-button">PP-19 Bizon</button>
    <button class="item-button">PPSH Model 1945</button>
    <button style="font-size: 13px;" class="item-button">M1A1 Thompson Model 1928</button>
    <button class="item-button">HK-UMP45</button>
`
let pistolsContent = `<br>
    <button class="item-button">C1911</button>
    <button class="item-button">Desert Eagle</button>
    <button class="item-button">FN-57</button>
    <button class="item-button">Glock 17</button>
    <button class="item-button">HK-USP45</button>
    <button class="item-button">Makarov "PM"</button>
    <button class="item-button">Ruger MK4</button>
    <button class="item-button">Tokarev TT-33</button>
`
let boltactionriflesContent = `<br>
    <button class="item-button">AWM</button>
    <button class="item-button">M19O3 Springfield</button>
    <button class="item-button">Mosin Nagant</button>
    <button class="item-button">Tikka T3</button>
`
let sniperriflesContent = `<br>
    <button class="item-button">Barrett M107A1</button>
    <button class="item-button">Dragnouv "SVD"</button>
`
let shotgunsContent = `<br>
    <button class="item-button">Saiga 12</button>
`
let lmgsContent = `<br>
    <button class="item-button">BAR</button>
    <button class="item-button">XM250</button>
`
let meleeContent = `<br>
    <button class="item-button">PentagonFX</button>
    <button class="item-button">Pillar</button>
    <button class="item-button">SealFX Foe</button>
    <button class="item-button">SealFX Tanto</button>
`
let throwablesContent = `<br>
    <button class="item-button">M18 Smoke</button>
    <button class="item-button">RDG2 Smoke</button>
    <button class="item-button">M67 Frag</button>
    <button class="item-button">RGO Frag</button>
    <button class="item-button">RGD5 Frag</button>
    <button class="item-button">URG86 Frag</button>
    <button class="item-button">M84 Flashbang</button>
`
let uniqueweaponsContent = `<br>
    <p><b style="font-size: 30px; margin-top: 15px;">DLC Weapons</b></p>
    <p><b style="font-size: 25px;">Founding Fathers</b></p>
    <button style="font-size: 12px;" class="item-button2">AK-109 Alpha Founding Fathers Edition</button><br><br>
    <p><b style="display: block; font-size: 25px;">Nuclear Night</b></p>
    <button style="font-size: 13px;" class="item-button2">M4 Carbine Nuclear Night</button><br><br>
    <p><b style="font-size: 25px;">UWU</b></p>
    <button class="item-button2">UWU AKM</button>
    <button class="item-button2">UWU MP9</button>
    <button class="item-button2">UWU C1911</button>
    <button class="item-button2">UWU Glock 17</button><br><br>
    <p><b style="font-size: 25px;">One Shot</b></p>
    <button style="font-size: 12px;" class="item-button2">M4 Carbine One Shot Energy</button><br><br>
    <p><b style="font-size: 25px;">Eastwood</b></p>
    <button class="item-button2">Rowdy</button>
    <button class="item-button2">Peacemaker</button>
    <button class="item-button2">Rebel</button>
    <button class="item-button2">El Dorado</button><br><br>
    <p><b style="font-size: 25px;">Taran Tactical</b></p>
    <button class="item-button2">JW MPX</button>
    <button class="item-button2">JW 2011</button>
    <button class="item-button2">JW G34</button>
    <button class="item-button2">JW Benelli M2</button>
    <button class="item-button2">JW Wakizashi</button><br><br>
    <p><b style="font-size: 30px; margin-top: 15px;">Wipe Rewards</b></p>
    <button class="item-button2">AK74 "Gold"</button>
    <button class="item-button2">Mac11 "Gold"</button>
    <button class="item-button2">Luty "Gold"</button>  
    <button class="item-button2">Spoon "Gold"</button><br><br>
    <p><b style="font-size: 30px; margin-top: 15px;">Event</b></p>
    <button class="item-button2">GOTY Desert Eagle</button><br><br>
    <p><b style="font-size: 30px; margin-top: 15px;">Boss Drops</b></p>
    <button class="item-button2">SKS "Auto"</button>
    <button class="item-button2">UMP Fin Reaper</button>
    <button style="font-size: 15px;" class="item-button2">Tokarev "Gold" TT-33</button>
    
    `

function regular(){
    let tabContentItems = document.getElementById("tab-content-items");
    tabContentItems.innerHTML = regitemsContent
}

function static(){
    let tabContentItems = document.getElementById("tab-content-items");
    tabContentItems.innerHTML = statitemsContent
}

function food(){
    let tabContentConsumables = document.getElementById("tab-content-consumables");
    tabContentConsumables.innerHTML = foodContent
}
function drink(){
    let tabContentConsumables = document.getElementById("tab-content-consumables");
    tabContentConsumables.innerHTML = drinkContent
}
function healing(){
    let tabContentConsumables = document.getElementById("tab-content-consumables");
    tabContentConsumables.innerHTML = healingContent
}

function suppressors(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = suppressorsContent
};

function rails(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = railsContent
};

function lasers(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = lasersContent
};
function scopes(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = scopesContent
};
function reflexsights(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = reflexsightsContent
};
function foregrips(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = foregripsContent
};
function riflemag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = riflemagContent
};
function smgmag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = smgmagContent
};
function pistolmag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = pistolmagContent
};
function boltmag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = boltmagContent
};
function snipermag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = snipermagContent
};
function shotgunmag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = shotgunmagContent
};
function lmgmag(){
    let tabContentEquipment = document.getElementById("tab-content-attachments");
    tabContentEquipment.innerHTML = lmgmagContent
};


function helmets(){
    let tabContentEquipment = document.getElementById("tab-content-equipment");
    tabContentEquipment.innerHTML = helmetsContent
};

function nvgs(){
    let tabContentEquipment = document.getElementById("tab-content-equipment");
    tabContentEquipment.innerHTML = nvgsContent
};

function chestrigs(){
    let tabContentEquipment = document.getElementById("tab-content-equipment");
    tabContentEquipment.innerHTML = chestrigsContent
};

function modules(){
    let tabContentEquipment = document.getElementById("tab-content-equipment");
    tabContentEquipment.innerHTML = modulesContent
};

function backpacks(){
    let tabContentEquipment = document.getElementById("tab-content-equipment");
    tabContentEquipment.innerHTML = backpacksContent
};

function uniqueequipment(){
    let tabContentEquipment = document.getElementById("tab-content-equipment");
    tabContentEquipment.innerHTML = uniqueEquipmentContent
}



function rifles(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = riflesContent

    ak109alpha.addEventListener("click", function(){
        tabContentWeaponry.innerHTML = `<br>
        <div class="infobox"><center>
        <img style="margin-top: 5px; border-radius: 5px;" src="/weapons/ak109alpha.webp">
        <p>AK-109 Alpha<p>
        </center></div>
        <div class="infobox" style="height: 88px;"></div>
        <div class="infobox" style="height: 88px; margin-top: 12.5px;"></div>
        `
    })
};

function smgs(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = smgsContent
};

function pistols(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = pistolsContent
};

function boltactionrifles(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = boltactionriflesContent
};

function sniperrifles(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = sniperriflesContent
};

function shotguns(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = shotgunsContent
};

function lmgs(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = lmgsContent
};

function melee(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = meleeContent  
};

function throwables(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = throwablesContent
};

function uniqueweapons(){
    let tabContentWeaponry = document.getElementById("tab-content-weaponry");
    tabContentWeaponry.innerHTML = uniqueweaponsContent
};



const wipeTimer = document.getElementById("statbox").style
const playerCount = document.getElementById("statbox2").style
const containerBox = document.getElementById("box").style
const divider = document.getElementById("divider").style
const header = document.getElementById("header").style

homeTab.addEventListener("click", function(){
    window.title = "Tabor Index / Home"; 
    tabContent.innerHTML = homeTabContent; 
    wipeTimer.display = "block";
    playerCount.display = "block";
    containerBox.width = "1000px"
    header.width = "1000px"
    divider.width = "975px";
});

kitsTab.addEventListener("click", function(){ 
    window.title = "Tabor Index / Kits"; 
    tabContent.innerHTML = kitsTabContent; 
    wipeTimer.display = "none";
    playerCount.display = "none";
    containerBox.width = "1432px";
    header.width = "1432px"
    divider.width = "1407px";
});

equipmentTab.addEventListener("click", function(){ 
    window.title = "Tabor Index / Equipment"; 
    tabContent.innerHTML = equipmentTabContent; 
    wipeTimer.display = "none";
    playerCount.display = "none";
    containerBox.width = "1432px";
    header.width = "1432px"
    divider.width = "1407px";
});

attachmentsTab.addEventListener("click", function(){ 
    window.title = "Tabor Index / Attachments"; 
    tabContent.innerHTML = attachmentsTabContent; 
    wipeTimer.display = "none";
    playerCount.display = "none";
    containerBox.width = "1432px";
    header.width = "1432px"
    divider.width = "1407px";
});

weaponryTab.addEventListener("click", function(){ 
    window.title = "Tabor Index / Weaponry"; 
    tabContent.innerHTML = weaponryTabContent; 
    wipeTimer.display = "none";
    playerCount.display = "none";
    containerBox.width = "1432px";
    header.width = "1432px"
    divider.width = "1407px";
});

consumablesTab.addEventListener("click", function(){ 
    window.title = "Tabor Index / Consumables"; 
    tabContent.innerHTML = consumablesTabContent; 
    wipeTimer.display = "none";
    playerCount.display = "none";
    containerBox.width = "1432px";
    header.width = "1432px"
    divider.width = "1407px";
});

itemsTab.addEventListener("click", function(){ 
    window.title = "Tabor Index / Items"; 
    tabContent.innerHTML = itemsTabContent; 
    wipeTimer.display = "none";
    playerCount.display = "none";
    containerBox.width = "1432px";
    header.width = "1432px"
    divider.width = "1407px";
});
// =========================================================
// GLOBAL SUPPLIERS - STOREFRONT & CART LOGIC
// =========================================================
// QUICK EDIT GUIDE:
// 1) Change product names/prices/images in `products` below.
// 2) Add/remove products by copying an object in the same section.
// 3) Change manager/contact copy in index.html where marked EDITABLE.
// 4) Spiritual gemstone benefits are written as traditional beliefs, not medical claims.

const IMG = {
    chakra7bracelet: 'https://images.unsplash.com/photo-1611591475824-28784869c3a3?auto=format&fit=crop&w=900&q=80',
    chakRA7bracelet2: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    pearl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    gemstone: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    ruby: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80',
    jet: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=80',
    jewelry: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80',
    jewelry2: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    jewelry3: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=80',
    jewelry4: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    jewelry5: 'https://images.unsplash.com/photo-1611591475824-28784869c3a3?auto=format&fit=crop&w=900&q=80',
    bracelet: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    bracelet2: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80'
};

const rashiData = [
    { id:'aries', name:'Aries / मेष', stone:'Ruby / Coral', belief:'Traditionally associated with courage, initiative and vitality.', image:IMG.ruby },
    { id:'taurus', name:'Taurus / वृष', stone:'Diamond / White stone', belief:'Traditionally associated with harmony, refinement and steadiness.', image:IMG.jewelry },
    { id:'gemini', name:'Gemini / मिथुन', stone:'Emerald / Panna', belief:'Traditionally associated with communication, learning and trade.', image:IMG.gemstone },
    { id:'cancer', name:'Cancer / कर्कट', stone:'Pearl / Moti', belief:'Traditionally associated with calmness, intuition and emotional balance.', image:IMG.pearl },
    { id:'leo', name:'Leo / सिंह', stone:'Ruby / Manik', belief:'Traditionally associated with confidence, leadership and vitality.', image:IMG.ruby },
    { id:'virgo', name:'Virgo / कन्या', stone:'Emerald / Panna', belief:'Traditionally associated with clarity, learning and communication.', image:IMG.gemstone },
    { id:'libra', name:'Libra / तुला', stone:'Diamond / White stone', belief:'Traditionally associated with balance, relationships and elegance.', image:IMG.jewelry2 },
    { id:'scorpio', name:'Scorpio / वृश्चिक', stone:'Coral / Muga', belief:'Traditionally associated with drive, courage and protective symbolism.', image:IMG.bracelet2 },
    { id:'sagittarius', name:'Sagittarius / धनु', stone:'Yellow Sapphire / Pukhraj', belief:'Traditionally associated with wisdom, optimism and prosperity.', image:IMG.jewelry3 },
    { id:'capricorn', name:'Capricorn / मकर', stone:'Blue Sapphire / Neelam', belief:'Traditionally associated with discipline, focus and responsibility.', image:IMG.jet },
    { id:'aquarius', name:'Aquarius / कुम्भ', stone:'Amethyst / Blue stones', belief:'Traditionally associated with focus, reflection and originality.', image:IMG.bracelet },
    { id:'pisces', name:'Pisces / मीन', stone:'Yellow Sapphire / Pearl', belief:'Traditionally associated with wisdom, compassion and spiritual reflection.', image:IMG.pearl }
];

// Product Inventory Dataset — EDITABLE: prices are sample Wholeale and Retail/display prices.
const products = [
    // Bracelets: 8 mm + 10 mm
    {id:1,name:'7 Chakra Bracelet 8 mm',category:'Bracelets',subCategory:'8 mm',price:900,image:IMG.chakra7bracelet,description:'Multi-stone bead bracelet for everyday styling; traditionally associated with chakra symbolism.'},
    {id:2,name:'7 Chakra Bracelet 10 mm',category:'Bracelets',subCategory:'10 mm',price:1200,image:IMG.chakRA7bracelet2,description:'Larger 10 mm bead profile with a bold gemstone look.'},
    {id:3,name:'Dhanyog Bracelet 8 mm',category:'Bracelets',subCategory:'8 mm',price:750,image:IMG.gemstone,description:'Traditional prosperity-themed gemstone bracelet concept.'},
    {id:4,name:'Dhanyog Bracelet 10 mm',category:'Bracelets',subCategory:'10 mm',price:950,image:IMG.jewelry,description:'10 mm bead version designed for a statement finish.'},
    {id:5,name:'Rashi Bracelet 8 mm',category:'Bracelets',subCategory:'8 mm',price:800,image:IMG.ruby,description:'Rashi-inspired bracelet; select a sign below to preview its reference image.'},
    {id:6,name:'Rashi Bracelet 10 mm',category:'Bracelets',subCategory:'10 mm',price:1000,image:IMG.gemstone,description:'10 mm Rashi-inspired bracelet with selectable sign references.'},

    // Coated pearls 3–10 mm
    ...[3,4,5,6,7,8,9,10].map((mm, i)=>({id:20+i,name:`Coated Pearl Moti ${mm} mm`,category:'Pearls / Moti',subCategory:'Coated Pearl',price:350+i*40,image:IMG.pearl,description:`Coated pearl beads, ${mm} mm size. Wholeale and Retail display listing; finish and strand length can be confirmed before order.`})),
    ...[3,4,5,6,7,8,9,10].map((mm, i)=>({id:40+i,name:`Triple-Coated Japanese Pearl ${mm} mm`,category:'Pearls / Moti',subCategory:'Japanese Pearl',price:450+i*50,image:IMG.pearl,description:`Triple-coated Japanese-style pearl beads, ${mm} mm. Ask for current stock, colour and strand length.`})),
    {id:60,name:'Freshwater Pearl Classic String',category:'Pearls / Moti',subCategory:'Freshwater Pearl',price:2200,image:IMG.pearl,description:'Natural freshwater pearl reference strand with soft lustre.'},
    {id:61,name:'Freshwater Pearl White Oval',category:'Pearls / Moti',subCategory:'Freshwater Pearl',price:2500,image:IMG.jewelry,description:'Freshwater pearl strand with organic oval shapes.'},
    {id:62,name:'Freshwater Pearl Mixed Lustre',category:'Pearls / Moti',subCategory:'Freshwater Pearl',price:2800,image:IMG.jewelry2,description:'Mixed-lustre freshwater pearl reference strand.'},
    {id:63,name:'Freshwater Pearl Premium Round',category:'Pearls / Moti',subCategory:'Freshwater Pearl',price:3200,image:IMG.pearl,description:'Round freshwater pearl reference strand for premium mala designs.'},
    {id:64,name:'Freshwater Pearl Layer Pair',category:'Pearls / Moti',subCategory:'Freshwater Pearl',price:3800,image:IMG.jewelry3,description:'Paired freshwater pearl strands for layered styling.'},
    {id:65,name:'Freshwater Pearl Statement Strand',category:'Pearls / Moti',subCategory:'Freshwater Pearl',price:4200,image:IMG.jewelry4,description:'Statement freshwater pearl strand with a fuller visual profile.'},

    // Layer malas
    {id:70,name:'Ruby Layer Set Mala',category:'Layer Malas',subCategory:'Ruby',price:6500,image:IMG.ruby,description:'Layered ruby-inspired mala reference set with a rich red tone.'},
    {id:71,name:'Moti Layer Set',category:'Layer Malas',subCategory:'Pearl',price:5200,image:IMG.pearl,description:'Layered pearl mala set for classic festive and bridal styling.'},
    {id:72,name:'Panna Layer Set',category:'Layer Malas',subCategory:'Emerald',price:6800,image:IMG.gemstone,description:'Green emerald-inspired layered mala reference set.'},
    {id:73,name:'CZ Mala Layer Set',category:'Layer Malas',subCategory:'CZ',price:4600,image:IMG.jewelry,description:'CZ-style layered mala reference set with sparkle-forward styling.'},
    {id:74,name:'Mixed Stone Layer Mala',category:'Layer Malas',subCategory:'Mixed Stone',price:4900,image:IMG.bracelet2,description:'Mixed gemstone bead layered mala for contemporary wear.'},
    {id:75,name:'Jet & Pearl Layer Mala',category:'Layer Malas',subCategory:'Jet + Pearl',price:4300,image:IMG.jet,description:'Black jet and pearl-inspired layered mala combination.'},

    // Rashi Ratna
    {id:80,name:'Natural Ruby / Manik',category:'Rashi Ratna',subCategory:'Ruby',price:12000,image:IMG.ruby,description:'Ruby reference stone. Traditional belief associates it with confidence, leadership and vitality.'},
    {id:81,name:'Emerald / Panna',category:'Rashi Ratna',subCategory:'Emerald',price:18000,image:IMG.gemstone,description:'Emerald reference stone. Traditionally associated with communication, learning and trade.'},
    {id:82,name:'Pearl / Moti',category:'Rashi Ratna',subCategory:'Pearl',price:4500,image:IMG.pearl,description:'Pearl reference stone. Traditionally associated with calmness and intuition.'},
    {id:83,name:'Red Coral / Muga',category:'Rashi Ratna',subCategory:'Coral',price:8500,image:IMG.bracelet2,description:'Red coral reference. Traditionally associated with courage and drive.'},
    {id:84,name:'Yellow Sapphire / Pukhraj',category:'Rashi Ratna',subCategory:'Yellow Sapphire',price:16000,image:IMG.jewelry3,description:'Yellow sapphire reference. Traditionally associated with wisdom and prosperity.'},
    {id:85,name:'Blue Sapphire / Neelam',category:'Rashi Ratna',subCategory:'Blue Sapphire',price:22000,image:IMG.jet,description:'Blue sapphire reference. Traditionally associated with discipline and focus.'},
    {id:86,name:'Hessonite / Gomed',category:'Rashi Ratna',subCategory:'Hessonite',price:9000,image:IMG.jewelry2,description:'Hessonite reference. Traditional astrology associates it with focus and steadiness.'},
    {id:87,name:'Cat’s Eye / Lahsunia',category:'Rashi Ratna',subCategory:'Cat’s Eye',price:10500,image:IMG.jewelry4,description:'Cat’s eye reference. Traditional astrology associates it with protection and insight.'},
    {id:88,name:'Diamond / Heera Reference',category:'Rashi Ratna',subCategory:'Diamond',price:25000,image:IMG.jewelry,description:'Diamond reference. Traditionally associated with refinement, relationships and luxury.'},

    // Muga mala
    {id:90,name:'Classic Muga Mala',category:'Muga Mala',subCategory:'Red Coral',price:5200,image:IMG.bracelet2,description:'Red coral-inspired mala reference for traditional styling.'},
    {id:91,name:'Muga Gold-Tone Layer',category:'Muga Mala',subCategory:'Red Coral',price:6200,image:IMG.jewelry3,description:'Layered red coral-inspired mala with gold-tone accents.'},
    {id:92,name:'Muga Bead Statement Mala',category:'Muga Mala',subCategory:'Red Coral',price:7200,image:IMG.ruby,description:'Statement red coral-inspired bead mala.'},
    {id:93,name:'Muga + Moti Combo Mala',category:'Muga Mala',subCategory:'Coral + Pearl',price:6800,image:IMG.pearl,description:'Red coral and pearl-inspired mixed mala.'},
    {id:94,name:'Muga Wholeale and Retail Strand',category:'Muga Mala',subCategory:'Red Coral',price:3900,image:IMG.gemstone,description:'Wholeale and Retail strand reference for custom mala making.'},

    // Panchadhatu rings
    ...[
      ['Classic Panchadhatu Ring',1200,IMG.jewelry],['Lion Motif Panchadhatu Ring',1400,IMG.jewelry2],['Adjustable Panchadhatu Ring',1500,IMG.jewelry3],['Slim Panchadhatu Ring',1000,IMG.jewelry4],['Wide Panchadhatu Ring',1600,IMG.jewelry5],['Traditional Panchadhatu Ring',1700,IMG.jewelry],['Openwork Panchadhatu Ring',1550,IMG.jewelry2],['Heritage Panchadhatu Ring',1800,IMG.jewelry3],['Minimal Panchadhatu Ring',1100,IMG.jewelry4],['Unisex Panchadhatu Ring',1350,IMG.jewelry5],['Silver-Finish Panchadhatu Ring',1650,IMG.jewelry],['Statement Panchadhatu Ring',1900,IMG.jewelry2]
    ].map((p,i)=>({id:110+i,name:p[0],category:'Panchadhatu Rings',subCategory:'Ring',price:p[1],image:p[2],description:'Traditional five-metal jewellery reference. Panchadhatu is a cultural craft tradition; alloy composition can vary by maker.'})),

    // Panchadhatu lockets & bala
    {id:130,name:'Panchadhatu Om Locket',category:'Panchadhatu',subCategory:'Locket',price:1800,image:IMG.jewelry,description:'Traditional five-metal locket reference with symbolic styling.'},
    {id:131,name:'Panchadhatu Shiva Locket',category:'Panchadhatu',subCategory:'Locket',price:1900,image:IMG.jewelry2,description:'Traditional devotional locket reference.'},
    {id:132,name:'Panchadhatu Ganesh Locket',category:'Panchadhatu',subCategory:'Locket',price:2000,image:IMG.jewelry3,description:'Traditional Ganesh locket reference.'},
    {id:133,name:'Panchadhatu Heritage Locket',category:'Panchadhatu',subCategory:'Locket',price:1750,image:IMG.jewelry4,description:'Classic heritage locket reference.'},
    {id:134,name:'Panchadhatu Bala Classic',category:'Panchadhatu',subCategory:'Bala',price:3000,image:IMG.jewelry5,description:'Traditional panchadhatu bala reference; size and finish can be confirmed before order.'},
    {id:135,name:'Panchadhatu Bala Lion Motif',category:'Panchadhatu',subCategory:'Bala',price:3300,image:IMG.jewelry,description:'Lion-motif traditional bala reference.'},

    // Jade chura
    {id:140,name:'Natural Jade Chura 2-2',category:'Jade Chura',subCategory:'Natural',price:2800,image:IMG.gemstone,description:'Natural jade chura reference. Size notation: 2-2.'},
    {id:141,name:'Natural Jade Chura 2-4',category:'Jade Chura',subCategory:'Natural',price:2900,image:IMG.gemstone,description:'Natural jade chura reference. Size notation: 2-4.'},
    {id:142,name:'Natural Jade Chura 2-6',category:'Jade Chura',subCategory:'Natural',price:3000,image:IMG.gemstone,description:'Natural jade chura reference. Size notation: 2-6.'},
    {id:143,name:'Natural Jade Chura 2-8',category:'Jade Chura',subCategory:'Natural',price:3100,image:IMG.gemstone,description:'Natural jade chura reference. Size notation: 2-8.'},
    {id:144,name:'Natural Jade Chura 2-10',category:'Jade Chura',subCategory:'Natural',price:3200,image:IMG.gemstone,description:'Natural jade chura reference. Size notation: 2-10.'},
    {id:145,name:'Synthetic Jade Chura 2-2',category:'Jade Chura',subCategory:'Synthetic',price:850,image:IMG.bracelet,description:'Synthetic jade chura reference. Size notation: 2-2.'},
    {id:146,name:'Synthetic Jade Chura 2-4',category:'Jade Chura',subCategory:'Synthetic',price:900,image:IMG.bracelet,description:'Synthetic jade chura reference. Size notation: 2-4.'},
    {id:147,name:'Synthetic Jade Chura 2-6',category:'Jade Chura',subCategory:'Synthetic',price:950,image:IMG.bracelet,description:'Synthetic jade chura reference. Size notation: 2-6.'},
    {id:148,name:'Synthetic Jade Chura 2-8',category:'Jade Chura',subCategory:'Synthetic',price:1000,image:IMG.bracelet,description:'Synthetic jade chura reference. Size notation: 2-8.'},
    {id:149,name:'Synthetic Jade Chura 2-10',category:'Jade Chura',subCategory:'Synthetic',price:1050,image:IMG.bracelet,description:'Synthetic jade chura reference. Size notation: 2-10.'},

    // Sale section: requested display price 100 vs original 150
    ...Array.from({length:8},(_,i)=>({id:160+i,name:['7 Chakra Mini Bracelet','Moti Accent Bracelet','Jet Bead Bracelet','Mixed Stone Bracelet','Pearl Accent Mala','Mini Muga Strand','CZ Accent Mala','Panchadhatu Mini Ring'][i],category:'Sale',subCategory:'NPR 100 Sale',price:100,originalPrice:150,image:[IMG.bracelet,IMG.pearl,IMG.jet,IMG.gemstone,IMG.jewelry,IMG.bracelet2,IMG.jewelry2,IMG.jewelry3][i],description:'Limited sale display. Original reference price NPR 150; sale display NPR 100. Confirm current stock before ordering.'}))
];

let cart = [];
let currentCategory = 'All';
let currentRashi = rashiData[0];

function money(value){ return `NPR ${Number(value).toLocaleString()}`; }

function productCard(product){
    const sale = product.originalPrice;
    return `
      <article class="glass-card product-card rounded-xl overflow-hidden flex flex-col group">
        <button class="product-image-wrap" onclick="openProductModal(${product.id})" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <span class="product-badge">${product.category}</span>
          ${sale ? `<span class="sale-badge">SALE</span>` : ''}
        </button>
        <div class="p-4 flex flex-col flex-grow">
          <div class="text-[10px] uppercase tracking-widest text-gold/80 mb-2">${product.subCategory || ''}</div>
          <h3 class="font-luxury text-base text-white font-semibold leading-snug">${product.name}</h3>
          <p class="text-xs text-gray-400 font-light line-clamp-2 mt-2">${product.description}</p>
          <div class="pt-4 mt-auto border-t border-zinc-800 mt-4 flex items-end justify-between gap-3">
            <div>
              <span class="text-[9px] text-zinc-500 block uppercase">Wholeale and Retail display</span>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-gold font-mono font-bold text-sm">${money(product.price)}</span>
                ${sale ? `<span class="text-[10px] text-zinc-500 line-through">${money(product.originalPrice)}</span>` : ''}
              </div>
            </div>
            <div class="flex gap-1">
              <button onclick="openProductModal(${product.id})" class="icon-btn" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
              <button onclick="addToCart(${product.id})" class="add-btn"><i class="fa-solid fa-cart-plus mr-1"></i>Add</button>
            </div>
          </div>
        </div>
      </article>`;
}

function renderProducts(items = products){
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = items.length ? items.map(productCard).join('') : `<div class="empty-state">No matching products yet. Try another category or search term.</div>`;
    const count = document.getElementById('product-count');
    if(count) count.textContent = `${items.length} items shown`;
}

function applyFilters(){
    const search = (document.getElementById('product-search')?.value || '').toLowerCase().trim();
    let items = currentCategory === 'All' ? products : products.filter(p => p.category === currentCategory || (currentCategory==='Pearls' && p.category==='Pearls / Moti'));
    if(search) items = items.filter(p => `${p.name} ${p.category} ${p.subCategory} ${p.description}`.toLowerCase().includes(search));
    renderProducts(items);
}

function filterStorefront(category){
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.category===category));
    applyFilters();
}

function addToCart(productId){
    const item = products.find(p=>p.id===productId); if(!item) return;
    const existing = cart.find(c=>c.id===productId);
    if(existing) existing.quantity += 1; else cart.push({...item, quantity:1});
    updateCartUI(); toggleCartModal(true);
}

function removeFromCart(productId){ cart = cart.filter(item=>item.id!==productId); updateCartUI(); }
function updateQuantity(productId, delta){
    const item = cart.find(c=>c.id===productId); if(!item) return;
    item.quantity += delta; if(item.quantity<=0) cart=cart.filter(c=>c.id!==productId); updateCartUI();
}

function updateCartUI(){
    const count = cart.reduce((sum,i)=>sum+i.quantity,0);
    const total = cart.reduce((sum,i)=>sum+i.price*i.quantity,0);
    const badge=document.getElementById('cart-count'); if(badge){badge.textContent=count; badge.classList.toggle('hidden',count===0);}
    const items=document.getElementById('cart-items');
    if(items) items.innerHTML = cart.length ? cart.map(item=>`<div class="cart-row"><img src="${item.image}" alt="${item.name}"><div class="flex-grow"><h4>${item.name}</h4><p>${money(item.price)} × ${item.quantity}</p><div class="qty"><button onclick="updateQuantity(${item.id},-1)">−</button><span>${item.quantity}</span><button onclick="updateQuantity(${item.id},1)">+</button></div></div><button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button></div>`).join('') : `<p class="text-gray-400 text-xs text-center py-10">Your bag is currently empty.</p>`;
    const totalEl=document.getElementById('cart-total'); if(totalEl) totalEl.textContent=money(total);
}

function toggleCartModal(show){
    const drawer=document.getElementById('cart-drawer'); if(!drawer) return;
    if(show){drawer.classList.remove('hidden'); requestAnimationFrame(()=>drawer.classList.remove('translate-x-full'));}
    else {drawer.classList.add('translate-x-full'); setTimeout(()=>drawer.classList.add('hidden'),300);}
}

function dispatchCartCheckout(){
    if(!cart.length){alert('Your shopping bag is empty!');return;}
    let message='Namaste Global Suppliers! I would like to place an order:\n\n'; let total=0;
    cart.forEach((item,i)=>{const itemTotal=item.price*item.quantity; total+=itemTotal; message+=`${i+1}. ${item.name} (x${item.quantity}) - NPR ${itemTotal.toLocaleString()}\n`;});
    message+=`\n*Total Subtotal: NPR ${total.toLocaleString()}*\nPlease confirm availability, sizes and delivery options.`;
    window.open(`https://wa.me/9779819169972?text=${encodeURIComponent(message)}`,'_blank');
}

function openProductModal(productId){
    const p=products.find(x=>x.id===productId); if(!p) return;
    const modal=document.getElementById('product-modal'); if(!modal) return;
    modal.querySelector('[data-modal-image]').src=p.image;
    modal.querySelector('[data-modal-image]').alt=p.name;
    modal.querySelector('[data-modal-category]').textContent=p.category;
    modal.querySelector('[data-modal-title]').textContent=p.name;
    modal.querySelector('[data-modal-description]').textContent=p.description;
    modal.querySelector('[data-modal-price]').textContent=money(p.price);
    const old=modal.querySelector('[data-modal-old]'); old.textContent=p.originalPrice?money(p.originalPrice):''; old.classList.toggle('hidden',!p.originalPrice);
    modal.querySelector('[data-modal-add]').onclick=()=>{addToCart(p.id);closeProductModal();};
    modal.classList.remove('hidden'); document.body.classList.add('modal-open');
}
function closeProductModal(){document.getElementById('product-modal')?.classList.add('hidden');document.body.classList.remove('modal-open');}

function renderRashiSelector(){
    const tabs=document.getElementById('rashi-tabs'); if(!tabs) return;
    tabs.innerHTML=rashiData.map(r=>`<button class="rashi-tab ${r.id===currentRashi.id?'active':''}" onclick="selectRashi('${r.id}')">${r.name}</button>`).join('');
    updateRashiPreview();
}
function selectRashi(id){ currentRashi=rashiData.find(r=>r.id===id)||rashiData[0]; renderRashiSelector(); }
function updateRashiPreview(){
    const r=currentRashi;
    const img=document.getElementById('rashi-preview-image'); if(img){img.src=r.image;img.alt=`${r.name} bracelet reference`}
    const name=document.getElementById('rashi-preview-name'); if(name) name.textContent=r.name;
    const stone=document.getElementById('rashi-preview-stone'); if(stone) stone.textContent=r.stone;
    const belief=document.getElementById('rashi-preview-belief'); if(belief) belief.textContent=r.belief;
}

// ==========================================================
// LOGO INTRO — plays once per browser session (sessionStorage),
// then fades out and unmounts.
// ==========================================================
function initLogoIntro(){
    const intro = document.getElementById('logo-intro');
    if(!intro) return;
    if(sessionStorage.getItem('gs_intro_played')){
        intro.remove();
        document.body.classList.remove('intro-active');
        return;
    }
    sessionStorage.setItem('gs_intro_played','1');
    setTimeout(()=>{
        intro.classList.add('intro-hidden');
        document.body.classList.remove('intro-active');
        setTimeout(()=>intro.remove(), 550);
    }, 2600);
}

// ==========================================================
// HERO CAROUSEL — auto-rotating slides with crossfade + staggered
// text-in (handled in CSS via .active), gold dot indicators,
// pause on hover, manual advance via indicator click.
// ==========================================================
let heroSlideIndex = 0;
let heroTimer = null;
function initHeroCarousel(){
    const root = document.getElementById('hero-carousel');
    if(!root) return;
    const slides = Array.from(root.querySelectorAll('.hero-slide'));
    const indicatorsWrap = document.getElementById('hero-indicators');
    if(!slides.length || !indicatorsWrap) return;

    indicatorsWrap.innerHTML = slides.map((_,i)=>`<button aria-label="Go to slide ${i+1}" data-i="${i}" class="${i===0?'active':''}"></button>`).join('');
    const dots = Array.from(indicatorsWrap.querySelectorAll('button'));

    function showSlide(i){
        heroSlideIndex = (i + slides.length) % slides.length;
        slides.forEach((s,idx)=>s.classList.toggle('active', idx===heroSlideIndex));
        dots.forEach((d,idx)=>d.classList.toggle('active', idx===heroSlideIndex));
    }
    function next(){ showSlide(heroSlideIndex+1); }
    function startAutoplay(){ stopAutoplay(); heroTimer = setInterval(next, 5500); }
    function stopAutoplay(){ if(heroTimer) clearInterval(heroTimer); }

    dots.forEach(d=>d.addEventListener('click',()=>{ showSlide(parseInt(d.dataset.i,10)); startAutoplay(); }));
    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);

    showSlide(0);
    startAutoplay();
}

// ==========================================================
// NAV SCROLL STATE — transparent over hero, solid once scrolled.
// ==========================================================
function initNavScroll(){
    const nav = document.getElementById('site-nav');
    if(!nav) return;
    function update(){ nav.classList.toggle('nav-scrolled', window.scrollY > 60); }
    window.addEventListener('scroll', update, { passive:true });
    update();
}

function initReveal(){
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

function initVideoCards(){
    document.querySelectorAll('video').forEach(video=>{
        video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()})});
    });
}

document.addEventListener('DOMContentLoaded',()=>{
    initLogoIntro();
    initHeroCarousel();
    initNavScroll();
    renderProducts();
    renderRashiSelector();
    updateCartUI();
    initReveal();
    initVideoCards();
    document.getElementById('product-search')?.addEventListener('input',applyFilters);
    document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeProductModal));
    document.getElementById('product-modal')?.addEventListener('click',e=>{if(e.target.id==='product-modal')closeProductModal()});
});
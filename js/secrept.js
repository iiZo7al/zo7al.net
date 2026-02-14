window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hide');
    }, 2500);
});

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}
createStars();

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const ip = 'mc.zo7al.net';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(ip).then(() => {
            showNotification();
        });
    } else {
        const temp = document.createElement('input');
        temp.value = ip;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showNotification();
    }
});

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const storeTabs = document.querySelectorAll('.store-tab-btn');
const storeContents = document.querySelectorAll('.store-content');

storeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        
        storeTabs.forEach(t => t.classList.remove('active'));
        storeContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(`${tabId}Content`).classList.add('active');
        
        const content = document.getElementById(`${tabId}Content`);
        content.style.animation = 'none';
        setTimeout(() => {
            content.style.animation = 'fadeIn 0.5s ease forwards';
        }, 10);
    });
});

const rankData = {
    'five-plus': {
        name: 'Five+',
        price: '$30',
        color: '#8A2BE2',
        image: 'assest/image/logo.png',
        features: [
      'Higher priority in the TAB list',
      '15x Player Vaults',
      'Sell up to 15 items in Auction House',
      'Priority Server Access',
      '10x Player Warps',
      'Fly in Main Lobby',
      'Colored Chat Messages',
      'Colored Signs',
      'Melon, Five & Five+ Crowns (All Variants)',
      'View Last Death Location',
      'Bypass RTP Cooldown',
      'Glow Effect (All Colors)',
      'No Warmup for /back, /tpa, /warp, /home',
      'Access to /dispose, /nick, /pweather, /recipe',
      '15x Homes (/sethome)',
      'Access to /workbench, /colors, /condense',
      'Access to /ender, /ext, /feed, /ptime, /heal',
      'Access to /kit lord (12h cooldown)'
        ],
        survival: [
      'Higher priority in the TAB list',
      '15x Player Vaults',
      'Sell up to 15 items in Auction House',
      'Priority Server Access',
      '10x Player Warps',
      'Fly in Main Lobby',
      'Colored Chat Messages',
      'Colored Signs',
      'Melon, Five & Five+ Crowns (All Variants)',
      'View Last Death Location',
      'Bypass RTP Cooldown',
      'Glow Effect (All Colors)',
      'No Warmup for /back, /tpa, /warp, /home',
      'Access to /dispose, /nick, /pweather, /recipe',
      '15x Homes (/sethome)',
      'Access to /workbench, /colors, /condense',
      'Access to /ender, /ext, /feed, /ptime, /heal',
      'Access to /kit lord (12h cooldown)'
        ],
        practices: [
            'Soon',

        ]
    },
    'five': {
        name: 'Five',
        price: '$20',
        color: '#9400D3',
        image: 'assest/image/logo.png',
        features: [
      'Higher priority in the TAB list',
      '10x Player Vaults',
      'Sell up to 10 items in Auction House',
      'Priority Server Access',
      '5x Player Warps',
      'Fly in Main Lobby',
      'Colored Chat Messages',
      'Colored Signs',
      'Melon & Five Crowns (All Variants)',
      'View Last Death Location',
      'Bypass RTP Cooldown',
      'Access to /dispose, /nick, /pweather, /recipe',
      '10x Homes (/sethome)',
      'Access to /workbench, /colors, /condense',
      'Access to /ender, /ext, /feed, /ptime',
      'Access to /kit lord (2-day cooldown)'
        ],
        survival: [
      'Higher priority in the TAB list',
      '10x Player Vaults',
      'Sell up to 10 items in Auction House',
      'Priority Server Access',
      '5x Player Warps',
      'Fly in Main Lobby',
      'Colored Chat Messages',
      'Colored Signs',
      'Melon & Five Crowns (All Variants)',
      'View Last Death Location',
      'Bypass RTP Cooldown',
      'Access to /dispose, /nick, /pweather, /recipe',
      '10x Homes (/sethome)',
      'Access to /workbench, /colors, /condense',
      'Access to /ender, /ext, /feed, /ptime',
      'Access to /kit lord (2-day cooldown)'
        ],
        practices: [
            'Soon',

        ]
    },
    'melon': {
        name: 'Melon',
        price: '$10',
        color: '#4B0082',
        image: 'assest/image/logo.png',
        features: [
      'Higher priority in the TAB list',
      '4x Player Vaults',
      'Sell up to 5 items in Auction House',
      'Priority Server Access',
      '3x Player Warps',
      'Fly in Main Lobby',
      'Access to /dispose, /nick, /pweather, /recipe',
      '4x Homes (/sethome)',
      'Access to /workbench',
      'Access to /kit lord (7-day cooldown)'
        ],
        survival: [
         'Higher priority in the TAB list',
      '4x Player Vaults',
      'Sell up to 5 items in Auction House',
      'Priority Server Access',
      '3x Player Warps',
      'Fly in Main Lobby',
      'Access to /dispose, /nick, /pweather, /recipe',
      '4x Homes (/sethome)',
      'Access to /workbench',
      'Access to /kit lord (7-day cooldown)'
        ],
        practices: [
            'Soon',
        ]
    }
};

const modal = document.getElementById('rankModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalIcon = document.getElementById('modalIcon');
const modalHeader = document.getElementById('modalHeader');
const featuresList = document.getElementById('featuresList');
const survivalList = document.getElementById('survivalList');
const practicesList = document.getElementById('practicesList');
const modalBuy = document.getElementById('modalBuy');

document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const rank = button.dataset.rank;
        const data = rankData[rank];
        
        modalTitle.textContent = data.name;
        modalPrice.innerHTML = `${data.price} <span>USD</span>`;
        modalIcon.innerHTML = `<img src="${data.image}" alt="${data.name} Rank">`;
        modalHeader.style.background = `linear-gradient(135deg, ${data.color}20 0%, transparent 100%)`;
        
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        survivalList.innerHTML = '';
        data.survival.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            survivalList.appendChild(li);
        });
        
        practicesList.innerHTML = '';
        data.practices.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            practicesList.appendChild(li);
        });
        
        let buyLink = 'https://store.fivehood.club';
        if (rank === 'five-plus') buyLink = 'https://store.fivehood.club/checkout/packages/add/7219801/single';
        if (rank === 'five') buyLink = 'https://store.fivehood.club/checkout/packages/add/7219802/single';
        if (rank === 'melon') buyLink = 'https://store.fivehood.club/checkout/packages/add/7219803/single';
        modalBuy.href = buyLink;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`${tab}Tab`).classList.add('active');
    });
});

function optimizeImages() {
    document.querySelectorAll('.rank-real-image').forEach(img => {
        if (img.complete) {
            adjustImage(img);
        } else {
            img.addEventListener('load', () => adjustImage(img));
        }
    });
}

function adjustImage(img) {
    const container = img.closest('.image-placeholder');
    if (container) {
        img.style.objectFit = 'contain';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '180px';
    }
}

document.addEventListener('DOMContentLoaded', optimizeImages);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.1}s`;
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.vote-card, .reward-card, .step-card, .news-card, .rank-card, .package-card, .key-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    observer.observe(card);
});

const style = document.createElement('style');
style.textContent = `
    .vote-card.animate-in,
    .reward-card.animate-in,
    .step-card.animate-in,
    .news-card.animate-in,
    .rank-card.animate-in,
    .package-card.animate-in,
    .key-card.animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    optimizeImages();
});

document.querySelectorAll('.package-card, .key-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 30px 60px rgba(138, 43, 226, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 30px 60px rgba(138, 43, 226, 0.2)';
    });
});

window.addEventListener('resize', optimizeImages);
// =========================
// Store Countdown (ADD ONLY)
// =========================
// غيّر التاريخ هنا لوقت افتتاح المتجر
const storeOpenDate = new Date("2026-03-01T20:00:00").getTime();

function scPad(n){ return String(n).padStart(2, "0"); }

function updateStoreCountdown(){
  const dEl = document.getElementById("scDays");
  const hEl = document.getElementById("scHours");
  const mEl = document.getElementById("scMinutes");
  const sEl = document.getElementById("scSeconds");

  // إذا القسم مو موجود (احتياط)
  if(!dEl || !hEl || !mEl || !sEl) return;

  const now = Date.now();
  const diff = storeOpenDate - now;

  if(diff <= 0){
    dEl.textContent = "00";
    hEl.textContent = "00";
    mEl.textContent = "00";
    sEl.textContent = "00";
    return;
  }

  const total = Math.floor(diff / 1000);
  const days = Math.floor(total / (3600*24));
  const hours = Math.floor((total % (3600*24)) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  dEl.textContent = scPad(days);
  hEl.textContent = scPad(hours);
  mEl.textContent = scPad(minutes);
  sEl.textContent = scPad(seconds);
}

setInterval(updateStoreCountdown, 1000);
updateStoreCountdown();

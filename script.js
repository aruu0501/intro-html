// ===== Stars Background Animation =====
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

// ===== Constellation Star Click Navigation =====
document.querySelectorAll('.constellation-star').forEach(star => {
    star.addEventListener('click', () => {
        const section = star.getAttribute('data-section');
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Letter Content Data =====
const letterContents = {
    '1': {
        title: 'I\'m Sorry 💌',
        content: `
            <p>Mujhse galti hui. Tum hurt hui. Main sun raha hoon—bina defend kiye.</p>
            <p>Maine tumhari feelings ko priority nahi di jab deni chahiye thi. Maine assumptions banayi instead of asking. Maine tumhe akela feel karaya jab main paas hona chahiye tha.</p>
            <p><strong>Main truly sorry hoon.</strong></p>
            <p>Yeh sirf words nahi hain—main chahta hoon ki tum dekho mere actions me. Main change karne ko ready hoon, kyunki tum deserve karti ho better.</p>
        `
    },
    '2': {
        title: 'What I Love About You 💝',
        content: `
            <ul>
                <li><strong>Tumhari hasi ka timing:</strong> Jab tum hansti ho, duniya thoda bright ho jaati hai.</li>
                <li><strong>Chai pe tumhara 'bas thoda aur':</strong> Cute habit jo kabhi boring nahi hoti.</li>
                <li><strong>Jab tum serious hoti ho:</strong> Tumhari aankhon ka focus, dedication—inspiring hai.</li>
                <li><strong>Tumhara caring nature:</strong> Choti-choti baaton me bhi tum care karti ho.</li>
                <li><strong>Tumhara honesty:</strong> Tum straight baat karti ho, and that's rare and beautiful.</li>
            </ul>
            <p>Yeh sirf 5 cheezein hain. List bahut lambi hai. ❤️</p>
        `
    },
    '3': {
        title: 'What I Learned 🌱',
        content: `
            <ul>
                <li><strong>Listen first, react later:</strong> Maine seekha ki sunn-na respond karne se zyada important hai.</li>
                <li><strong>Space matters:</strong> Kabhi-kabhi paas hone ka matlab physically paas hona nahi—emotionally available hona hai.</li>
                <li><strong>Assumptions hurt:</strong> Jab main assume karta hoon instead of asking, galtiyan hoti hain.</li>
            </ul>
            <p>Yeh lessons maine sirf padhe nahi—experience kiye hain. Aur ab main inhe apply karna chahta hoon.</p>
        `
    },

    '4': {
        title: 'My Promises 🤝',
        content: `
            <ul>
                <li><strong>Har jhagde ke baad 10-min cool-off:</strong> Phir calm talk—no late-night emotional texts.</li>
                <li><strong>Saturday ko 20 min phone-free listening:</strong> Sirf tum, sirf main, sirf baatein.</li>
                <li><strong>Weekly check-in:</strong> "Kaise ho? Kya chahiye?" Simple question, important answer.</li>
                <li><strong>Accountability:</strong> Agar main galat hoon, main accept karunga—no excuses.</li>
            </ul>
            <p>Yeh promises realistic hain, measurable hain, aur main inhe keep karunga.</p>
        `
    },
    '5': {
        title: 'Future Mini-Plans ✨',
        content: `
            <ul>
                <li><strong>Coffee walk next weekend:</strong> Bas walk karna, baat karna, enjoy karna.</li>
                <li><strong>Movie night (tumhari choice):</strong> Popcorn, blanket, aur no phone rule.</li>
                <li><strong>Cook-night ghar pe:</strong> Main chef banunga (ya try karunga 😅), tum judge.</li>
                <li><strong>Monthly surprise:</strong> Chhoti-chhoti cheezein jo tumhe smile de.</li>
            </ul>
            <p>Future me excitement chahiye, stability chahiye—main dono dena chahta hoon.</p>
        `
    },
    '6': {
        title: 'Wish Jar 💫',
        content: `
            <p><em>Har hafte ek nayi wish, tumhare liye:</em></p>
            <ul>
                <li>Week 1: "Tumhara har din peaceful ho"</li>
                <li>Week 2: "Tumhe woh success mile jo tum deserve karti ho"</li>
                <li>Week 3: "Tumhari smile kabhi kam na ho"</li>
                <li>Week 4: "Hum dono ka bond aur strong bane"</li>
            </ul>
            <p>Main har week yahan ek nayi wish add karunga—ek month tak. Tumhare liye, hamesha.</p>
        `
    }
};

// ===== Letter Modal Logic =====
const letterModal = document.getElementById('letterModal');
const letterContent = document.getElementById('letterContent');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.letter-envelope').forEach(envelope => {
    envelope.addEventListener('click', () => {
        const letterId = envelope.getAttribute('data-letter');
        const content = letterContents[letterId];
        
        letterContent.innerHTML = `
            <h3>${content.title}</h3>
            ${content.content}
        `;
        
        letterModal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    letterModal.classList.remove('active');
});

letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) {
        letterModal.classList.remove('active');
    }
});


// ===== Secret Button - Random Compliments =====
const compliments = [
    "Tumhari smile meri favorite hai ✨",
    "Tum amazing ho, seriously 💝",
    "Tumhare saath waqt best waqt hai ⏰",
    "Tumhari aankhein sab kuch keh deti hain 👀",
    "Tum special ho, kabhi mat bhoolna 🌟",
    "Tumhara hona mere liye blessing hai 🙏",
    "Tum jitna socho usse zyada important ho 💫",
    "Tumhari presence everything change kar deti hai 🌈",
    "Tum jo bhi ho, perfect ho ❤️",
    "Tumhare bina incomplete feel hota hai 🧩"
];

const secretButton = document.getElementById('secretButton');
const complimentText = document.getElementById('compliment');

secretButton.addEventListener('click', () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentText.textContent = randomCompliment;
    complimentText.style.animation = 'none';
    setTimeout(() => {
        complimentText.style.animation = 'fadeIn 0.5s';
    }, 10);
});

// ===== Schedule Modal Logic =====
const scheduleModal = document.getElementById('scheduleModal');
const scheduleBtn = document.getElementById('scheduleBtn');
const scheduleClose = document.getElementById('scheduleClose');
const scheduleForm = document.getElementById('scheduleForm');

scheduleBtn.addEventListener('click', () => {
    scheduleModal.classList.add('active');
});

scheduleClose.addEventListener('click', () => {
    scheduleModal.classList.remove('active');
});

scheduleModal.addEventListener('click', (e) => {
    if (e.target === scheduleModal) {
        scheduleModal.classList.remove('active');
    }
});

scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('scheduleDate').value;
    const time = document.getElementById('scheduleTime').value;
    const note = document.getElementById('scheduleNote').value;
    
    // You can send this data to your backend or WhatsApp
    alert(`Thank you! Main ${date} ko ${time} pe ready rahunga. ${note ? 'Tumhara note: ' + note : ''}`);
    scheduleModal.classList.remove('active');
    scheduleForm.reset();
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Initialize Stars on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

// ===== Scroll Animation for Timeline Cards =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-card, .gallery-item, .letter-envelope').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

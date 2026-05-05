function openLetter() {
    const envelope = document.querySelector(".envelope");
    const letter = document.getElementById("letter");

    // تأثير فتح الظرف
    envelope.classList.add("open");

    setTimeout(() => {
        envelope.style.display = "none";
        letter.style.display = "block";

        // ✍️ نص الرسالة
        const message = `
كل سنه وانتي طيبه يا حبيبة قلبي و كل سنه واحنا مع بعض
بتمنى ليكي سنه سعيده ومحققه فيها كل امنياتك و مع كل اللي بيحبوكي
انا بحبك وهتفضلي اقرب حد ليا مهما اتغيرت الظروف 
انا حاولت افرحك بالحاجه البسيطه دي يارب تكون عجبتك
🫶🏻كل سنه وانتي معايا يا كاتي
        `;

        // تشغيل تأثير الكتابة
        typeWriter(message, "messageText", 100);

    }, 600);
}

let voiceAudio = new Audio("voice.mp3");
let songAudio = new Audio("song.mp3");

let voicePlaying = false;
let songPlaying = false;

// 🎙️ الصوت الأول
function toggleVoice() {
    if (!voicePlaying) {
        voiceAudio.currentTime = 0;
        voiceAudio.play();
        voicePlaying = true;
    } else {
        voiceAudio.pause();
        voiceAudio.currentTime = 0;
        voicePlaying = false;
    }
}

// 🎶 الصوت التاني
function toggleSong() {
    if (!songPlaying) {
        songAudio.currentTime = 0;
        songAudio.play();
        songPlaying = true;
    } else {
        songAudio.pause();
        songAudio.currentTime = 0;
        songPlaying = false;
    }
}

// فتح الفيديو
function openVideo() {
    document.getElementById("videoPopup").style.display = "flex";
}

// إغلاق الفيديو
function closeVideo() {
    document.getElementById("videoPopup").style.display = "none";
}

function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

const kittyImages = [
    "kity1.png",
    "kity2.png",
    "kity3.png",
    "kity4.png",
    "kity5.png"
];

function createKitty() {
    const container = document.querySelector(".kitty-bg");
    if (!container) return;

    const img = document.createElement("img");

    // صورة عشوائية
    img.src = kittyImages[Math.floor(Math.random() * kittyImages.length)];
    img.classList.add("kitty-sticker");

    // 📍 مكان عشوائي (مع مساحة أمان)
    img.style.top = Math.random() * 85 + "vh";
    img.style.left = Math.random() * 85 + "vw";

    // 🔥 حجم عشوائي قوي
    const size = 30 + Math.random() * 90; // 30px → 120px
    img.style.width = size + "px";

    // 🎬 العمق: الكبير أبطأ / الصغير أسرع
    const duration = 3 + (120 - size) / 20; 
    img.style.animationDuration = duration + "s";

    container.appendChild(img);

    // حذف بعد ما يخلص
    setTimeout(() => {
        img.remove();
    }, duration * 1000);
}

// توليد مستمر
setInterval(createKitty, 500);
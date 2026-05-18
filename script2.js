function openLetter() {

    const envelope = document.querySelector(".envelope");

    const letter = document.getElementById("letter");

    const secondCard = document.getElementById("secondCard");

    // تأثير فتح الظرف
    envelope.classList.add("open");

    setTimeout(() => {

        envelope.style.display = "none";

        // إظهار الكاردين
        letter.style.display = "block";

        if (secondCard) {
            secondCard.style.display = "block";
        }

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

    // لو الأغنية شغالة يقفلها
    songAudio.pause();
    songAudio.currentTime = 0;
    songPlaying = false;

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

    // لو الريكورد شغال يقفله
    voiceAudio.pause();
    voiceAudio.currentTime = 0;
    voicePlaying = false;

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

    // وقف الفيديو عند القفل
    const video = document.getElementById("videoPlayer");

    video.pause();

    video.currentTime = 0;
}


// ✍️ تأثير الكتابة
function typeWriter(text, elementId, speed = 50) {

    let i = 0;

    const element = document.getElementById(elementId);

    element.innerHTML = "";

    function typing() {

        if (i < text.length) {

            // يحافظ على الـ line breaks
            if (text.charAt(i) === "\n") {

                element.innerHTML += "<br>";

            } else {

                element.innerHTML += text.charAt(i);
            }

            i++;

            setTimeout(typing, speed);
        }
    }

    typing();
}


// 🐱 صور الكيتي
const kittyImages = [
    "kity1.png",
    "kity2.png",
    "kity3.png",
    "kity4.png",
    "kity5.png"
];


// ✨ إنشاء كيتي حوالين الكارد
function createKitty() {

    const container = document.querySelector(".kitty-bg");

    const card = document.querySelector(".letter");

    if (!container || !card) return;

    const img = document.createElement("img");

    // صورة عشوائية
    img.src = kittyImages[Math.floor(Math.random() * kittyImages.length)];

    img.classList.add("kitty-sticker");

    const rect = card.getBoundingClientRect();

    const offset = 70;

    const side = Math.floor(Math.random() * 4);

    let x, y;

    // حوالين الكارد
    if (side === 0) {

        // فوق
        x = rect.left + Math.random() * rect.width;
        y = rect.top - offset;

    } else if (side === 1) {

        // تحت
        x = rect.left + Math.random() * rect.width;
        y = rect.bottom + offset;

    } else if (side === 2) {

        // شمال
        x = rect.left - offset;
        y = rect.top + Math.random() * rect.height;

    } else {

        // يمين
        x = rect.right + offset;
        y = rect.top + Math.random() * rect.height;
    }

    img.style.position = "fixed";

    img.style.left = x + "px";

    img.style.top = y + "px";

    // 🔥 حجم عشوائي
    const size = 30 + Math.random() * 90;

    img.style.width = size + "px";

    // 🎬 السرعة
    const duration = 3 + (120 - size) / 20;

    img.style.animationDuration = duration + "s";

    container.appendChild(img);

    // حذف بعد الانتهاء
    setTimeout(() => {

        img.remove();

    }, duration * 1000);
}


// تشغيل مستمر
setInterval(createKitty, 500);

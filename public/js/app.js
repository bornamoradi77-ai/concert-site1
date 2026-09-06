// ===============================
// Concert data
// ===============================

const concerts = [

    {
        id: 1,
        title: "کنسرت بزرگ آرش",
        artist: "آرش",
        city: "تهران",
        date: "۲۵ شهریور ۱۴۰۵",
        time: "۲۰:۳۰",
        price: "۸۵۰,۰۰۰ تومان",
        image: "images/arash.jpg"
    },

    {
        id: 2,
        title: "شبی با موسیقی پاپ",
        artist: "سامان جلیلی",
        city: "تهران",
        date: "۲۸ شهریور ۱۴۰۵",
        time: "۲۱:۰۰",
        price: "۷۵۰,۰۰۰ تومان",
        image: "images/saman.jpg"
    },

    {
        id: 3,
        title: "Live Music Night",
        artist: "رضا بهرام",
        city: "کرج",
        date: "۳ مهر ۱۴۰۵",
        time: "۲۰:۰۰",
        price: "۹۵۰,۰۰۰ تومان",
        image: "images/bahram.jpg"
    },

    {
        id: 4,
        title: "شب خاطره‌ها",
        artist: "محمد رضا گلزار",
        city: "تهران",
        date: "۱۰ مهر ۱۴۰۵",
        time: "۲۱:۳۰",
        price: "۶۵۰,۰۰۰ تومان",
        image: "images/golzar.jpg"
    },

    {
        id: 5,
        title: "کنسرت تابستانی",
        artist: "محسن یگانه",
        city: "شیراز",
        date: "۱۵ مهر ۱۴۰۵",
        time: "۲۰:۳۰",
        price: "۱,۰۰۰,۰۰۰ تومان",
        image: "images/mohsen-yeganeh.jpg"
    },

    {
        id: 6,
        title: "جشن موسیقی",
        artist: "گرشا رضایی",
        city: "اصفهان",
        date: "۲۰ مهر ۱۴۰۵",
        time: "۲۱:۰۰",
        price: "۷۰۰,۰۰۰ تومان",
        image: "images/garsha.jpg"
    },

    // ===============================
    // Rock
    // ===============================

    {
        id: 7,
        title: "Nirvana Live Experience",
        artist: "Nirvana",
        city: "تهران",
        date: "۲۵ مهر ۱۴۰۵",
        time: "۲۰:۳۰",
        price: "۹۰۰,۰۰۰ تومان",
        image: "images/nirvana.jpg"
    },

    {
        id: 8,
        title: "AC/DC Rock Night",
        artist: "AC/DC",
        city: "تهران",
        date: "۲۸ مهر ۱۴۰۵",
        time: "۲۱:۰۰",
        price: "۹۵۰,۰۰۰ تومان",
        image: "images/ACDC.jpg"
    },

    // ===============================
    // Traditional
    // ===============================

    {
        id: 9,
        title: "شب موسیقی سنتی",
        artist: "حسین عیسی ملکی",
        city: "شیراز",
        date: "۳۰ مهر ۱۴۰۵",
        time: "۱۹:۳۰",
        price: "۶۰۰,۰۰۰ تومان",
        image: "images/hos.jpg"
    },

    {
        id: 10,
        title: "محسن چاوشی Live",
        artist: "محسن چاوشی",
        city: "تهران",
        date: "۵ آبان ۱۴۰۵",
        time: "۲۰:۳۰",
        price: "۸۵۰,۰۰۰ تومان",
        image: "images/chaw.jpg"
    },

    // ===============================
    // Electronic
    // ===============================

    {
        id: 11,
        title: "DJ Reza Electronic Night",
        artist: "DJ reza",
        city: "تهران",
        date: "۱۰ آبان ۱۴۰۵",
        time: "۲۱:۳۰",
        price: "۷۵۰,۰۰۰ تومان",
        image: "images/djrez.jpg"
    },

    {
        id: 12,
        title: "DJ Jamshid Live",
        artist: "DJ jamshid",
        city: "اصفهان",
        date: "۱۵ آبان ۱۴۰۵",
        time: "۲۱:۰۰",
        price: "۷۰۰,۰۰۰ تومان",
        image: "images/djjam.jpg"
    }

];


// ===============================
// Artists
// ===============================

const artists = {

    pop: [

        {
            name: "آرش",
            image: "images/arash.jpg"
        },

        {
            name: "محسن یگانه",
            image: "images/mohsen-yeganeh.jpg"
        },

        {
            name: "رضا بهرام",
            image: "images/bahram.jpg"
        },

        {
            name: "محمد رضا گلزار",
            image: "images/golzar.jpg"
        },

        {
            name: "گرشا رضایی",
            image: "images/garsha.jpg"
        },

        {
            name: "سامان جلیلی",
            image: "images/saman.jpg"
        }

    ],


    rock: [

        {
            name: "Nirvana",
            image: "images/nirvana.jpg"
        },

        {
            name: "AC/DC",
            image: "images/ACDC.jpg"
        }

    ],


    traditional: [

        {
            name: "حسین عیسی ملکی",
            image: "images/hos.jpg"
        },

        {
            name: "محسن چاوشی",
            image: "images/chaw.jpg"
        }

    ],


    electronic: [

        {
            name: "DJ reza",
            image: "images/djrez.jpg"
        },

        {
            name: "DJ jamshid",
            image: "images/djjam.jpg"
        }

    ]

};


// ===============================
// Toast
// ===============================

function showToast(message) {

    let toast =
        document.querySelector(".toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// ===============================
// Concert cards
// ===============================

function createConcertCard(concert) {

    return `

        <div class="concert-card">

            <div class="concert-image">

                <img
                    src="${concert.image}"
                    alt="${concert.title}"
                >

                <span class="badge">
                    بلیت موجود است
                </span>

            </div>


            <div class="concert-info">

                <h3>
                    ${concert.title}
                </h3>


                <div class="artist">
                    🎤 ${concert.artist}
                </div>


                <div class="concert-meta">

                    <span>
                        📅 ${concert.date}
                    </span>

                    <span>
                        📍 ${concert.city}
                    </span>

                </div>


                <div class="concert-meta">

                    <span>
                        ⏰ ${concert.time}
                    </span>

                    <span class="price">
                        ${concert.price}
                    </span>

                </div>


                <a
                    href="concert.html?id=${concert.id}"
                    class="btn btn-primary"
                >
                    مشاهده و خرید
                </a>

            </div>

        </div>

    `;
}


// ===============================
// Homepage concerts
// ===============================

const concertContainer =
    document.getElementById("concertContainer");

if (concertContainer) {

    concertContainer.innerHTML =
        concerts.map(createConcertCard).join("");

}


// ===============================
// Search
// ===============================

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const value =
            searchInput.value.trim().toLowerCase();


        const filtered =
            concerts.filter(c =>

                c.title.toLowerCase().includes(value) ||

                c.artist.toLowerCase().includes(value) ||

                c.city.toLowerCase().includes(value)

            );


        concertContainer.innerHTML =

            filtered.length

                ? filtered.map(createConcertCard).join("")

                : `

                    <div
                        style="
                            grid-column:1/-1;
                            text-align:center;
                            padding:50px;
                        "
                    >
                        😕 کنسرتی پیدا نشد.
                    </div>

                `;

    });

}


// ===============================
// Concert detail
// ===============================

const detailContainer =
    document.getElementById("concertDetail");

if (detailContainer) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(params.get("id")) || 1;


    const concert =
        concerts.find(c => c.id === id)
        || concerts[0];


    detailContainer.innerHTML = `

        <div class="detail-card">

            <div class="detail-banner">

                <img
                    src="${concert.image}"
                    alt="${concert.title}"
                >

            </div>


            <div class="detail-content">

                <h1>
                    ${concert.title}
                </h1>


                <p class="artist">
                    🎤 ${concert.artist}
                </p>


                <div class="detail-grid">

                    <div class="info-box">

                        <strong>
                            📅 تاریخ
                        </strong>

                        ${concert.date}

                    </div>


                    <div class="info-box">

                        <strong>
                            ⏰ ساعت
                        </strong>

                        ${concert.time}

                    </div>


                    <div class="info-box">

                        <strong>
                            📍 شهر
                        </strong>

                        ${concert.city}

                    </div>


                    <div class="info-box">

                        <strong>
                            💰 قیمت بلیت
                        </strong>

                        ${concert.price}

                    </div>

                </div>


                <h2>
                    انتخاب صندلی
                </h2>


                <p
                    style="
                        margin-top:10px;
                        color:#64748b;
                    "
                >
                    صندلی‌های خاکستری فروخته شده هستند.
                </p>


                <div
                    class="seats"
                    id="seats"
                ></div>


                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        gap:20px;
                    "
                >

                    <div>

                        <strong>
                            تعداد انتخاب شده:
                        </strong>

                        <span id="selectedCount">
                            ۰
                        </span>

                    </div>


                    <button
                        class="btn btn-primary"
                        id="continuePayment"
                    >
                        ادامه و پرداخت
                    </button>

                </div>

            </div>

        </div>

    `;


    const seatsContainer =
        document.getElementById("seats");


    const selectedCount =
        document.getElementById("selectedCount");


    const soldSeats =
        [3, 7, 12, 19, 25, 30, 35];


    for (let i = 1; i <= 40; i++) {

        const button =
            document.createElement("button");


        button.className = "seat";

        button.textContent = i;


        if (soldSeats.includes(i)) {

            button.classList.add("sold");

            button.disabled = true;

        } else {

            button.addEventListener(
                "click",
                () => {

                    button.classList.toggle(
                        "selected"
                    );


                    const selected =
                        document.querySelectorAll(
                            ".seat.selected"
                        );


                    selectedCount.textContent =
                        selected.length.toLocaleString(
                            "fa-IR"
                        );

                }
            );

        }


        seatsContainer.appendChild(button);

    }


    document
        .getElementById("continuePayment")
        .addEventListener("click", () => {

            const selected =
                document.querySelectorAll(
                    ".seat.selected"
                );


            if (selected.length === 0) {

                showToast(
                    "لطفاً حداقل یک صندلی انتخاب کنید."
                );

                return;
            }


            const seats =
                [...selected].map(
                    s => s.textContent
                );


            localStorage.setItem(
                "selectedSeats",
                JSON.stringify(seats)
            );


            localStorage.setItem(
                "concert",
                JSON.stringify(concert)
            );


            window.location.href =
                "payment.html";

        });

}


// ===============================
// Login
// ===============================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async e => {

            e.preventDefault();


            const button =
                loginForm.querySelector("button");


            button.textContent =
                "در حال ورود...";


            button.disabled = true;


            const response =
                await fetch(
                    "/api/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            email:
                                document
                                    .getElementById("email")
                                    .value
                        })
                    }
                );


            const data =
                await response.json();


            setTimeout(() => {

                alert(data.message);

                window.location.href =
                    "index.html";

            }, 600);

        }
    );

}


// ===============================
// Register
// ===============================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async e => {

            e.preventDefault();


            const password =
                document
                    .getElementById("password")
                    .value;


            const confirm =
                document
                    .getElementById("confirmPassword")
                    .value;


            if (password !== confirm) {

                showToast(
                    "رمز عبور و تکرار آن یکسان نیست."
                );

                return;
            }


            const response =
                await fetch(
                    "/api/register",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            name:
                                document
                                    .getElementById("name")
                                    .value,

                            email:
                                document
                                    .getElementById("email")
                                    .value

                        })

                    }
                );


            const data =
                await response.json();


            alert(data.message);


            window.location.href =
                "login.html";

        }
    );

}


// ===============================
// Payment
// ===============================

const paymentForm =
    document.getElementById("paymentForm");

if (paymentForm) {

    const concert =
        JSON.parse(
            localStorage.getItem("concert")
        );


    const seats =
        JSON.parse(
            localStorage.getItem("selectedSeats")
        ) || [];


    const summary =
        document.getElementById("orderSummary");


    if (concert) {

        summary.innerHTML = `

            <h3>
                ${concert.title}
            </h3>


            <p style="margin-top:10px">
                🎤 ${concert.artist}
            </p>


            <p style="margin-top:10px">
                📅 ${concert.date}
            </p>


            <p style="margin-top:10px">
                🪑 صندلی‌ها:
                ${seats.join("، ")}
            </p>


            <p style="margin-top:10px">
                💰 مبلغ:
                ${concert.price}
            </p>

        `;

    }


    paymentForm.addEventListener(
        "submit",
        async e => {

            e.preventDefault();


            const button =
                paymentForm.querySelector("button");


            button.textContent =
                "در حال پردازش...";


            button.disabled = true;


            const response =
                await fetch(
                    "/api/payment",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            demo: true
                        })
                    }
                );


            const data =
                await response.json();


            paymentForm.style.display =
                "none";


            document
                .getElementById("successBox")
                .innerHTML = `

                <div class="success">

                    <div class="success-icon">
                        ✅
                    </div>


                    <h2>
                        خرید با موفقیت انجام شد!
                    </h2>


                    <p
                        style="
                            margin-top:15px;
                            color:#64748b;
                        "
                    >
                        این خرید کاملاً نمایشی است.
                    </p>


                    <div class="tracking">

                        کد پیگیری:

                        <strong>
                            ${data.trackingCode}
                        </strong>

                    </div>


                    <a
                        href="index.html"
                        class="btn btn-primary"
                    >
                        بازگشت به صفحه اصلی
                    </a>

                </div>

            `;

        }
    );

}


// ===============================
// Category pages
// ===============================

const artistContainer =
    document.getElementById("artistContainer");


if (artistContainer) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const type =
        params.get("type") || "pop";


    const categoryNames = {

        pop: {

            title:
                "خواننده‌های پاپ 🎤",

            description:
                "محبوب‌ترین خواننده‌های موسیقی پاپ"

        },


        rock: {

            title:
                "راک 🎸",

            description:
                "خواننده‌ها و گروه‌های موسیقی راک"

        },


        traditional: {

            title:
                "موسیقی سنتی 🎻",

            description:
                "هنرمندان موسیقی سنتی ایرانی"

        },


        electronic: {

            title:
                "الکترونیک 🎧",

            description:
                "هنرمندان موسیقی الکترونیک و DJ"

        }

    };


    const info =
        categoryNames[type]
        || categoryNames.pop;


    document
        .getElementById("categoryTitle")
        .textContent =
        info.title;


    document
        .getElementById("categoryDescription")
        .textContent =
        info.description;


    const selectedArtists =
        artists[type] || [];


    // ===============================
    // اتصال هر خواننده به کنسرت خودش
    // ===============================

    const artistConcertMap = {

        "آرش": 1,

        "سامان جلیلی": 2,

        "رضا بهرام": 3,

        "محمد رضا گلزار": 4,

        "محسن یگانه": 5,

        "گرشا رضایی": 6,

        "Nirvana": 7,

        "AC/DC": 8,

        "حسین عیسی ملکی": 9,

        "محسن چاوشی": 10,

        "DJ reza": 11,

        "DJ jamshid": 12

    };


    if (selectedArtists.length === 0) {

        artistContainer.innerHTML = `

            <div class="empty-category">

                <h2>
                    😕 هنوز خواننده‌ای اضافه نشده
                </h2>


                <p>
                    هنرمندی برای این بخش وجود ندارد.
                </p>

            </div>

        `;

    } else {

        artistContainer.innerHTML =

            selectedArtists
                .map(artist => {

                    const concertId =
                        artistConcertMap[
                            artist.name
                        ];


                    const concert =
                        concerts.find(
                            c => c.id === concertId
                        );


                    // اگر کنسرت پیدا شد
                    if (concert) {

                        return `

                            <div class="artist-card">

                                <div class="artist-image">

                                    <img
                                        src="${artist.image}"
                                        alt="${artist.name}"
                                    >

                                </div>


                                <div class="artist-content">

                                    <span class="artist-tag">
                                        Artist
                                    </span>


                                    <h2>
                                        ${artist.name}
                                    </h2>


                                    <p>
                                        ${concert.title}
                                    </p>


                                    <p
                                        style="
                                            margin-top:8px;
                                        "
                                    >

                                        📅 ${concert.date}

                                        <br>

                                        📍 ${concert.city}

                                        <br>

                                        ⏰ ${concert.time}

                                    </p>


                                    <p
                                        class="price"
                                        style="
                                            margin-top:10px;
                                        "
                                    >

                                        💰 ${concert.price}

                                    </p>


                                    <a
                                        href="concert.html?id=${concert.id}"
                                        class="btn btn-primary"
                                        style="
                                            display:inline-block;
                                            margin-top:15px;
                                        "
                                    >
                                        🎟️ مشاهده و خرید بلیت
                                    </a>

                                </div>

                            </div>

                        `;

                    }


                    // اگر به هر دلیلی کنسرت پیدا نشد
                    return `

                        <div class="artist-card">

                            <div class="artist-image">

                                <img
                                    src="${artist.image}"
                                    alt="${artist.name}"
                                >

                            </div>


                            <div class="artist-content">

                                <span class="artist-tag">
                                    Artist
                                </span>


                                <h2>
                                    ${artist.name}
                                </h2>


                                <p>
                                    برای این هنرمند هنوز
                                    کنسرتی تعریف نشده است.
                                </p>

                            </div>

                        </div>

                    `;

                })
                .join("");

    }

}
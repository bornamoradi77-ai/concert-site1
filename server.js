const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API نمایشی برای ورود
app.post("/api/login", (req, res) => {
    res.json({
        success: true,
        message: "ورود نمایشی با موفقیت انجام شد."
    });
});

// API نمایشی برای ثبت نام
app.post("/api/register", (req, res) => {
    res.json({
        success: true,
        message: "ثبت‌نام نمایشی با موفقیت انجام شد."
    });
});

// API نمایشی پرداخت
app.post("/api/payment", (req, res) => {
    const trackingCode =
        "DEMO-" +
        Math.floor(100000 + Math.random() * 900000);

    res.json({
        success: true,
        trackingCode,
        message: "پرداخت نمایشی با موفقیت انجام شد."
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
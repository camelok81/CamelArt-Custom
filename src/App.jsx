import React, { useState } from "react";

const PHONE = "+48 452 074 780";
const ADDRESS = "Syreny 14/Hala 16, 01-132 Warszawa";

const translations = {
  pl: {
    hero: "Spawanie aluminium & lakierowanie moto/auto",
    about: "Precyzyjne naprawy i custom – motocykle, samochody, felgi.",
    contact: "Skontaktuj się z nami",
    gallery: "Galeria prac",
  },
  ru: {
    hero: "Сварка алюминия и покраска мото/авто техники",
    about: "Точный ремонт и кастомизация – мотоциклы, автомобили, диски.",
    contact: "Свяжитесь с нами",
    gallery: "Галерея работ",
  },
  en: {
    hero: "Aluminum welding & painting for moto/auto",
    about: "Precision repairs and custom work – motorcycles, cars, rims.",
    contact: "Contact us",
    gallery: "Gallery",
  },
};

export default function App() {
  const [lang, setLang] = useState("pl");
  const [page, setPage] = useState("home");

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-orange-400 mb-4">
        CamelArt Custom
      </h1>

      {/* Навигация */}
      <div className="flex gap-2 mb-6">
        <button
          className={px-3 py-1 rounded \${page === "home" ? "bg-orange-500" : "bg-gray-700"}}
          onClick={() => setPage("home")}
        >
          Home
        </button>
        <button
          className={px-3 py-1 rounded \${page === "gallery" ? "bg-orange-500" : "bg-gray-700"}}
          onClick={() => setPage("gallery")}
        >
          {t.gallery}
        </button>
      </div>

      {/* Переключение языков */}
      <div className="flex gap-2 mb-6">
        {["pl", "ru", "en"].map((l) => (
          <button
            key={l}
            className={px-3 py-1 rounded \${lang === l ? "bg-orange-500" : "bg-gray-700"}}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Домашняя страница */}
      {page === "home" && (
        <>
          <h2 className="text-2xl mb-2">{t.hero}</h2>
          <p className="text-lg text-gray-300 mb-6">{t.about}</p>

          <div className="bg-gray-800 rounded-xl p-4 shadow-md">
            <h3 className="text-xl mb-2">{t.contact}</h3>
            <p>📍 {ADDRESS}</p>
            <p>📞 {PHONE}</p>
          </div>
        </>
      )}

      {/* Галерея */}
      {page === "gallery" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/bike1.jpg" alt="Custom Bike" className="rounded-xl shadow-md" />
          <img src="/images/car1.jpg" alt="Custom Car" className="rounded-xl shadow-md" />
          <img src="/images/rim1.jpg" alt="Custom Rim" className="rounded-xl shadow-md" />
        </div>
      )}
    </div>
  );
}

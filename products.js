/*
  ملف التعديل السهل لموقع luvzah
  1) غيّر رقم واتساب إلى رقمك مع مفتاح الدولة، أرقام فقط بدون + أو مسافات.
  2) عدّل أسماء المنتجات وأسعارها ووصفها.
  3) ضع رابط الصورة مكان image. يمكنك استخدام صورة مرفوعة داخل مجلد images.
*/

const SITE_CONFIG = {
  whatsappNumber: "", // مثال: "9665XXXXXXXX"
  whatsappMessage: "مرحباً، أرغب بالاستفسار والطلب من luvzah."
};

const CATEGORIES = ["الكل", "كوكيز كلاسيك", "كوكيز محشية", "بوكسات"];

const PRODUCTS = [
  {
    name: "Classic Chocolate Chip",
    nameAr: "كوكيز الشوكولاتة الكلاسيكي",
    description: "كوكيز غني بقطع الشوكولاتة",
    price: 18,
    category: "كوكيز كلاسيك",
    tag: "الأكثر طلباً",
    image: "ChatGPT_Image_2026_8_21_03_13_43.webp"
  },
  {
    name: "Nutella Chocolate",
    nameAr: "شوكولاتة النوتيلا",
    description: "لعشاق النوتيلا بكل تفاصيلها",
    price: 20,
    category: "كوكيز كلاسيك",
    tag: "",
    image: "7881cc70-477b-4f5f-b5b9-f179973f914d-removebg-preview.png"
  },
  {
    name: "S'mores cookie Dream",
    nameAr: "كوكيز سمورز",
    description: "نكهة المارشميلو الغنية",
    price: 20,
    category: "كوكيز محشية",
    tag: "مميز",
    image: "ChatGPT_Image_2026_8_21_03_11_57.webp"
  },
  {
    name: "Cookies & Cream",
    nameAr: "كوكيز كريمة وبسكويت",
    description: "مزيج ناعم بطعم غني",
    price: 20,
    category: "كوكيز كلاسيك",
    tag: "",
    image: "ChatGPT_Image_2026_8_21_03_07_47.webp"
  },
  {
    name: "Stuffed Cookie",
    nameAr: "كوكيز محشي",
    description: "قلب كريمي داخل كوكيز طري",
    price: 22,
    category: "كوكيز محشية",
    tag: "جديد",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Luvzah Box",
    nameAr: "بوكس لوفزة",
    description: "تشكيلة مختارة للمشاركة",
    price: 75,
    category: "بوكسات",
    tag: "",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85"
  }
];

const grid = document.getElementById("productGrid");
const categoriesEl = document.getElementById("categories");

function renderCategories(active = "الكل") {
  categoriesEl.innerHTML = "";
  CATEGORIES.forEach(category => {
    const button = document.createElement("button");
    button.className = `category-chip${category === active ? " active" : ""}`;
    button.textContent = category;
    button.type = "button";
    button.addEventListener("click", () => {
      renderCategories(category);
      renderProducts(category);
    });
    categoriesEl.appendChild(button);
  });
}

function renderProducts(category = "الكل") {
  const products = category === "الكل" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  grid.innerHTML = "";
  if (!products.length) {
    grid.innerHTML = '<p class="empty-state">لا توجد منتجات في هذا التصنيف حالياً.</p>';
    return;
  }
  products.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image;
    image.alt = product.nameAr || product.name;
    image.loading = "lazy";
    image.onerror = () => { image.style.opacity = ".2"; };
    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";
    imageWrap.appendChild(image);
    if (product.tag) {
      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = product.tag;
      imageWrap.appendChild(tag);
    }
    const info = document.createElement("div");
    info.className = "product-info";
    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = product.nameAr || product.name;
    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description || "";
    const bottom = document.createElement("div");
    bottom.className = "product-bottom";
    const price = document.createElement("span");
    price.className = "product-price";
    price.innerHTML = `${Number(product.price).toLocaleString("ar-SA")} <small>ر.س</small>`;
    const english = document.createElement("span");
    english.className = "product-english";
    english.textContent = product.name || "";
    bottom.append(price, english);
    info.append(name, description, bottom);
    card.append(imageWrap, info);
    grid.appendChild(card);
  });
}

const waLink = document.getElementById("whatsappLink");
const phoneHint = document.getElementById("phoneHint");
const phone = (SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
if (phone) {
  waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage || "")}`;
  phoneHint.textContent = "نستقبل طلباتكم واستفساراتكم بكل حب.";
} else {
  waLink.href = "#";
  waLink.addEventListener("click", event => {
    event.preventDefault();
    alert("أضف رقم واتساب في ملف products.js لتفعيل رابط التواصل.");
  });
}

const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
toggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(opened));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
renderCategories();
renderProducts();

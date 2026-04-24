🛒 Cartify – E-commerce Web App

Cartify is a simple and modern e-commerce web app that I built using React and TypeScript. The goal of this project was to understand how real-world shopping apps work — from authentication to cart management and performance optimization.

Instead of just building a UI, I focused on making it functional and scalable.


🚀 What this project does

* Users can log in using API-based authentication
* Browse products fetched from a live API
* Add products to cart
* Increase/decrease quantity directly from UI
* Remove items from cart
* Cart data stays saved even after refresh
* Products load dynamically using infinite scroll

🧠 Why I built this

I wanted to practice:

* Real-world state management
* Handling API data properly
* Managing global state (cart + auth)
* Optimizing performance when dealing with large data


🛠️ Tech Stack

1. Frontend: React (Vite)
2. Language: TypeScript
3. State Management: Zustand
4. Styling: Tailwind CSS
5. API: DummyJSON API
6. Routing: React Router DOM
7. Notifications: React Toastify

📁 Project Structure (Simplified)

```bash
src/
├── components/   # UI components (Navbar, ProductCard, etc.)
├── pages/        # Pages (Login, Products, Cart)
├── store/        # Zustand stores (auth, cart)
├── services/     # API setup
├── types/        # TypeScript types
```

⚙️ How to run locally

Clone the project:

```bash
git clone https://github.com/tripathirahul-lwf/cartify.git
cd cartify
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

---

## 🔐 Demo Login

Use this to test login:

```bash
Username: emilys
Password: emilyspass
```

---

## 🌐 APIs Used

* https://dummyjson.com/products
* https://dummyjson.com/auth/login

---

## ⚡ Performance Handling

Instead of loading all products at once, I implemented **infinite scrolling** using pagination (limit + skip).
This makes the app faster and prevents UI lag when handling large datasets.

---

## 🧠 State Management Approach

I used Zustand because:

* It’s simple and clean
* No boilerplate like Redux
* Easy to manage global state

Cart and auth state are stored globally and synced with localStorage so data persists after refresh.

---

## 🚀 What I can improve next

* Add checkout flow
* Add Product Detail Page
* Add product filters/search
* Improve UI animations
* Add user profile/dashboard

---

## 👨‍💻 About Me

**Rahul Tripathi**

I’m a full-stack developer in progress, focused on building real-world applications to strengthen my problem-solving and development skills. I enjoy working with modern technologies like React, TypeScript, and backend systems, and I’m continuously learning by building practical projects that reflect real industry use cases.

---

## ⭐ If you like this

Feel free to star the repo or give feedback!

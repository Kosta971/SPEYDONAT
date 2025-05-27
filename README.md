donationalerts_clone/
├── backend/
│   ├── main.py            ← Точка входа FastAPI
│   ├── models.py          ← SQLAlchemy модели
│   ├── schemas.py         ← Pydantic-схемы
│   ├── database.py        ← Подключение к БД
│   ├── auth.py            ← JWT + авторизация
│   ├── routes/
│   │   ├── users.py       ← Регистрация / вход
│   │   └── donations.py   ← Отправка донатов
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── DonatePage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Widget.jsx
├── docker-compose.yml

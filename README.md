# Лендинг страхового агента Брюханковой Инны Владимировны

Одностраничный лендинг в стиле Taplink для страхового агента.

## Особенности

- 🎨 Бежевая цветовая схема
- 📱 Полная мобильная адаптация
- ⚡ Быстрые кнопки связи (WhatsApp, Telegram, VK, Email)
- 📋 Форма оформления полиса с отправкой в WhatsApp
- 🎯 Каталог самостоятельного оформления страховки
- 💬 Блок отзывов клиентов
- ✨ Плавные анимации и эффекты

## Как добавить фотографию

1. Загрузите фото агента в папку `images/`
2. Назовите файл `agent-photo.jpg` (или `.png`)
3. Замените SVG-аватар в `index.html` на:
   ```html
   <img src="images/agent-photo.jpg" alt="Брюханкова Инна Владимировна" class="avatar">
   ```

## Настройка контактов

В файле `script.js` замените:
- `businessPhone = '79999999999'` - на реальный номер WhatsApp
- `agent@example.com` - на реальный email

В файле `index.html` обновите ссылки в блоке `.socials` и `.mobile-bar`.

## Запуск

Просто откройте `index.html` в браузере или запустите локальный сервер:

```bash
python -m http.server 8000
```

## Технологии

- HTML5
- CSS3 (CSS Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Responsive Design
- Accessibility (ARIA)

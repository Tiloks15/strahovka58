# Логотипы партнеров

Загрузите сюда логотипы ваших партнеров для отображения в бегущей строке.

## Форматы файлов
- **PNG** (рекомендуется) - с прозрачным фоном
- **JPG** - с белым фоном
- **SVG** - векторные логотипы

## Размеры
- **Ширина**: 120-200px
- **Высота**: 40-80px
- **Соотношение**: примерно 3:1 или 2:1

## Названия файлов
Используйте понятные названия:
- `alfastrakhovanie.png`
- `sogaz.png`
- `ingosstrah.png`
- `rosgosstrah.png`

## Как добавить логотипы в бегущую строку

После загрузки логотипов замените в `index.html` блок с текстом на:

```html
<div class="ticker-content">
    <img src="partners-logos/alfastrakhovanie.png" alt="АльфаСтрахование" class="partner-logo">
    <img src="partners-logos/sogaz.png" alt="СОГАЗ" class="partner-logo">
    <img src="partners-logos/ingosstrah.png" alt="Ингосстрах" class="partner-logo">
    <img src="partners-logos/rosgosstrah.png" alt="Росгосстрах" class="partner-logo">
</div>
```

## CSS стили для логотипов

В `styles.css` уже добавлены стили `.partner-logo` для корректного отображения.

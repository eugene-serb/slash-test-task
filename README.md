# Описание решения
  * Парсер корзин интернет-магазинов который парсит тот магазин
    в том режиме и с теми правилами, которые были внесены.
  * Из магазинов сейчас:
      * newlook.com/uk
      * converse.com/uk
  * Из режимов:
      * Парсинг по JSON (для newlook).
      * Парсинг по HTML (для converse).
  * P.S. Решил не делать просто по парсеру для двух сайтов, а сделать
    универсальный парсер с возможностью добавить свои сайты,
    свои правила обработки этих сайтов, свои парсеры,
    если не подходят стандартные, и конечно, сделать тестовое задание.

## Как добавить нового продавца
  * Описать карточку продавца, например, как в '@/assets/merchants/custom.js'.
  * Подключить через import в  файле '@/assets/merchants.js',
    и добавить подключенный объект в массив merchants.

## Как добавить новый режим парсера
  * Описать скрипт обработки как угодно, но она должна вернуть
    значение типа Basket, для этого используй вызов:
    'return new Basket(0, [])', где первое значение общая сумма заказа,
    второе значение – массив товаров Entries.
    Файл можно описать по подобию, как в файле '@/assets/parsers/custom.js'.
  * Подключить через import в файле '@/assets/parsers.js',
    и добавить подключенный объект в объект parsers и дать
    ему имя в ключе.
  * Готово! Можно использовать новый парсер по имени-ключу
    в правилах продавца.

## Как добавить новый модификатор
  * Описать функцию принимающее значение и возвращающее модифицированное
    значение, и поместить в каталог '@/assets/mods/'.
  * Подключить через import в  файле '@/assets/modificators.js',
    и добавить подключенный объект в объект modificators, дать ему имя в ключе.
  * Готово! Можно использовать новый модификатор по имени-ключу
    в правилах продавца. ВниманиеЖ они выполняются по порядку.

## Известные ошибки
  * Newlook формирует JSON иногда таким образом, что по нужным ключам
    товары некоторые не находит, и нужен обработчик таких случаев.
  * Newlook не отправляет файл, если не было до этого обращения к серверу,
    видимо, с данными сохраненными в браузере, или с обновлёнными ключами сессии.

## Что осталось сделать
  * Расширить возможности применителя модификаций значений,
    чтобы можно было сделать функцию, которая будет делить цену
    на количество товара, чтобы получить цену одного товара.
  * Фиксить значение цифр после запятой .toFixed(2). 
  * Передавать из бека в вью компонент ещё каренси магазина.

# Постановка задачи от Слеш

## Задача
  Необходимо реализовать парсинг содержимого корзины для двух сайтов
    * www.newlook.com/uk
    * www.converse.com/uk

## Время выполнения
  * 2 дня с момента получения задания

## Порядок выполнения
  1. Установить зависимости
  2. Собрать расширение командой yarn start
  3. Установить собранное расширение 
    * Открыть вкладку с расширениями
    * В правом верхнем углу переключиться в режим разработчика
    * Нажать кнопку загрузить распакованное расширение и выбрать папку dist полученную на шаге 2
  4. Изменить файл /src/background/index.js так, что бы когда ты на одном из двух вышеуказанных сайтов
    при клике на иконку расширения в браузере отображалось содержимое корзины соответствующего магазина.
    Можно изменять любые файлы как угодно. Можно подключать любые библиотеки.

## Отправка на ревью
  * Упаковать исходный код в архив и отправить HR

## Критерии оценки
  * Полнота выполнения задачи
  * Качество кода

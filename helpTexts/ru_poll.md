Для опросов используется команда `/poll`.
Существует 3 подкомманды:
`/poll common` - создаёт опрос среди всех. То есть отвечать на него и получать результаты о нём могут все.
`/poll senate` - создаёт модераторский опрос. Отвечать и просматривать результаты могут только модераторы с Легион и выше.
Эти две команды имеют одинаковые аргументы:
`вопрос:` - ваш вопрос. На него будут отвечать опрошенные.
`min:` - минимальное количество символов в ответе. 0 - ответ не обязателен. По умолчанию 0.
`public:` - публичный ли опрос. Если Ложь то каждый в результатах будет видеть общее количество голосов и свой голос. Если Истина то будут также видны ответы остальных проголосовавших.

`/poll show` поиск опроса или ответа. Можно ввести любую информацию о опросе/ответе. Однако пока что поддерживаются только ID сообщений и пользователей.
Бот предложит список из найденных объектов системы опросов.

**Обратите внимание** что из соображений пользовательского опыта в результатах не видно весь текст ответа. Чтобы посмотреть весь ответ воспользуйтесь `/poll show`

Чтобы ответить на опрос достойно нажать на кнопку ЗА или ПРОТИВ под сообщением бота. После этого откроется всплывающее окно в котором вам будет предложено ввести ответ. Чтобы подтвердить голос вам нужно нажать "Отправить".
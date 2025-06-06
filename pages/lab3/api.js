document.addEventListener("DOMContentLoaded", () => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js') 
        .then(response => response.json())
        .then(data => {
            const valute = data.Valute;
            const container = document.getElementById('valute-container');

            for (let key in valute) {
                if (valute.hasOwnProperty(key)) {
                    const currency = valute[key];
                    const div = document.createElement('div');
                    div.textContent = `${currency.Name} (${currency.CharCode}): ${currency.Value} руб.`;
                    container.appendChild(div);
                }
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('valute-container').textContent = 'Не удалось загрузить данные о валютах.';
        });
});
$(document).ready(function () {
    $('#test_btn').click(function () {
        ajaxGetXML();
    });

});

function ajaxGetXML() {
    $.ajax({
        type: "POST", // метод передачи данных
        url: "portfolio.xml", // путь к xml файлу
        dataType: "xml", // тип данных
        // если получили данные из файла

        success: function (data) {

            var html = '';
            // перебираем все теги project

            $(data).find('project').each(function () {

                var id = $(this).attr('id'); // получаем значение атрибута id проекта
                var year = $(this).attr('year'); // получаем значение атрибута year проекта
                var title = $(this).find('title').html(); // получаем значение тега название
                var img = $(this).find('img').attr('href'); // получаем значение атрибута img проекта

                html += "<br><label>Номер проекта: " + id + "</label><br/>";
                html += "<label>Год проекта: " + year + "</label><br/>";
                html += "<label>Название: " + title + "</label><br/>";
                if (img) {
                    html += "<label>Картинка: <img src='" + img + "' /></label><br/>";
                } else {
                    html += "<label>Картинка: Не найдено</label><br/>";
                }
                html += "<hr/>";

            });

            $('#content_div').html(html); // выводим данные
        },
        // если произошла ошибка при получении файла
        error: function (e) {
            alert(e.status + ' ' + e.statusText);
        }

    });
}
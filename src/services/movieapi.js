export const getMovies = () => {
    // return fetch('https://api.themoviedb.org/3/movie/503?api_key=98312ffcf969092a3b66b9fb44af06cc')
    return fetch('https://api.themoviedb.org/3/search/movie?api_key=98312ffcf969092a3b66b9fb44af06cc&query=batman')
    //Возвращаем функцию фетч из функции гетМуви
    .then((response) => {
        // после того как получили ответ - response, преобразовали
        // его в формат джаваскрипта чтобы приложение смого его прочитать
        return response.json();
    })
    // .then((data) => {
    //     // преобразованный объект теперь можем вывести в консоль

    //     console.log(data);
    // });
}
// функция then у fetch нужна для указания необходимой последовательности выпонения
//  действий

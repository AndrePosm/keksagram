// Домашка:

// Напишите функцию для создания массива из 25 сгенерированных JS объектов.
// Каждый объект массива ‐ описание фотографии, опубликованной пользователем.
// Поля объекта:
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} это число от 1 до 25. Адреса картинок не должны
// повторяться.
//
// description, пустая строка — описание фотографии.
//
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
//
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
// Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются
// случайным образом.
//
// Пример описания объекта с комментарием:
//
// {
//     avatar: "img/avatar-6.svg",
//     message: "В целом всё неплохо. Но не всё.",
//     name: "Артем"
// }
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
//
// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из
// представленных ниже:
//
// Всё отлично!
// В целом всё неплохо. Но не всё.
// Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
// Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
// Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
// Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!


// Имена авторов также должны быть случайными. Аватарки подготовлены в директории img. Набор имён для комментаторов
// составьте сами. Подставляйте случайное имя в поле name.
//


const commentTexts = ['Всё отлично!', 'В конце концов это просто непрофессионально',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
      'Лица у людей на фотке перекошены, как будто их избивают']

function getRandomLikes() {
  return Math.floor(Math.random() * (200 - 16)) + 15;
}

function getRandomUrlPic() {
  return Math.floor(Math.random() * (25 - 2)) + 1;
}

function getRandomTextsCount() {
  return Math.floor(Math.random() * (2 - 2)) + 1;
}

function getMessege() {
  const randomCount = getRandomTextsCount(1,2);
  const result = [];
  for (let i = 0; i <randomCount; i++) {
    result.push(commentTexts[getRandomTextsCount(0, commentTexts.length - 1)])
  }
  return result.join('');
}

function getRandomAvatarNumber() {
  return Math.floor(Math.random() * (6 - 2)) + 1;

function getComments() {
  return [{
    avatar: 'img/avatar-`${getRandomAvatarNumber(1, 6)}`.svg',
    message: getMessege(),
    name: 'Артем'
  }];
}


function getPicture() {
  return {
    likes: getRandomLikes(15, 200),
    description: '',
    url: 'photos/`${getRandomUrlPic(1, 25)`.jpg',
    comments: getComments()
  }
}


const pictures = getPictures(25);

function getPictures(count) {
  const pictures = [];
  for (let i = 0; i < count; i++) {
    pictures.push(getPicture());
  }

  return pictures;
}

console.log(pictures, 2); //noway

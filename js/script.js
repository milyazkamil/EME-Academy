const header = document.querySelector('.header');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const logo = document.querySelector(".logo");
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');

const lastLink = document.querySelector('.last-link');
const chat = document.querySelector('.chat');
const chatOverlay = document.querySelector('.chat-overlay');

const darkMode = document.querySelector('.dark-mode');
const darkModeText = document.querySelectorAll(".dark-mode-text");
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

const bigChat = document.querySelector('.big-chat');
const closeChat = document.querySelector('.close-chat');

const inputContainers = document.querySelectorAll('.input-container');
const formLabels = document.querySelectorAll('.form-label');
const formInputs = document.querySelectorAll('.form-input');

const courses = [
  {
    courseId: 1,
    linkKey: 'link-key0',
    courseTitle: 'JavaScript',
    shortDescription: 'Master the fundamentals of JavaScript programming.',
    img: './src/assets/images/courseImages/js.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Enes Tavlu',
    price: 250,
    viewsCount: 7000,
    durationHours: 35,
    numberOfLessons: 18,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/enes.jpg',
  },
  {
    courseId: 2,
    linkKey: 'link-key1',
    courseTitle: 'React',
    shortDescription: 'Master the art of building user interfaces with React.',
    img: './src/assets/images/courseImages/react.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Milyaz Kamil',
    price: 300,
    viewsCount: 8000,
    durationHours: 40,
    numberOfLessons: 20,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/milyaz.png',
  },
  {
    courseId: 3,
    linkKey: 'link-key2',
    courseTitle: 'Kotlin',
    shortDescription:
      'Kotlin is a modern programming language for Android development.',
    img: './src/assets/images/courseImages/kotlin.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Emre Karayakupoğlu',
    price: 280,
    viewsCount: 7500,
    durationHours: 38,
    numberOfLessons: 22,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/emre.jpg',
  },
  {
    courseId: 4,
    linkKey: 'link-key3',
    courseTitle: 'Unity',
    shortDescription:
      'Create stunning games and interactive experiences with Unity.',
    img: './src/assets/images/courseImages/unity.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Fatih Mehmet Erkoç',
    price: 320,
    viewsCount: 8500,
    durationHours: 45,
    numberOfLessons: 25,
    difficultyLevel: 'Advanced',
    instructorImage: './src/assets/images/fatih.png',
  },
  {
    courseId: 5,
    linkKey: 'link-key4',
    courseTitle: 'Swift',
    shortDescription:
      'Master Swift, is a language for iOS and macOS development.',
    img: './src/assets/images/courseImages/swift.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Sophia Martinez',
    price: 290,
    viewsCount: 7800,
    durationHours: 42,
    numberOfLessons: 23,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/i1.jpeg',
  },
  {
    courseId: 6,
    linkKey: 'link-key5',
    courseTitle: 'C#',
    shortDescription:
      'Become a proficient C# developer and build powerful applications.',
    img: './src/assets/images/courseImages/c-sharp.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Elizabeth Williams',
    price: 270,
    viewsCount: 7200,
    durationHours: 37,
    numberOfLessons: 21,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/i2.jpeg',
  },
  {
    courseId: 7,
    linkKey: 'link-key6',
    courseTitle: 'GO',
    shortDescription:
      'Learn Go (Golang) and build scalable and efficient applications.',
    img: './src/assets/images/courseImages/go.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Olivia Lee',
    price: 260,
    viewsCount: 7400,
    durationHours: 39,
    numberOfLessons: 19,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/i3.jpeg',
  },
  {
    courseId: 8,
    linkKey: 'link-key7',
    courseTitle: 'Rust',
    shortDescription:
      'Master Rust programming language for safe and concurrent systems.',
    img: './src/assets/images/courseImages/rust.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'Jennifer Turner',
    price: 280,
    viewsCount: 7600,
    durationHours: 40,
    numberOfLessons: 20,
    difficultyLevel: 'Intermediate',
    instructorImage: './src/assets/images/i4.jpeg',
  },
  {
    courseId: 9,
    linkKey: 'link-key8',
    courseTitle: 'Unreal Engine',
    shortDescription:
      'Unreal Engine for game development and virtual experiences.',
    img: './src/assets/images/courseImages/unreal-engine.jpg',
    firstLink: 'single-course.html',
    secondLink: 'https://github.com/milyazkamil/EME-Academy',
    instructor: 'John Smigla',
    price: 320,
    viewsCount: 8200,
    durationHours: 45,
    numberOfLessons: 24,
    difficultyLevel: 'Advanced',
    instructorImage: './src/assets/images/i5.jpeg',
  },
]

const instructors = [
  {
    id: 1,
    name: 'Enes Tavlu',
    job: 'Mobile Developer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cum rem voluptate eaque nostrum porro, quo eius! Architecto, unde adipisci.',
    img: './src/assets/images/enes.jpg',
  },
  {
    id: 2,
    name: 'Milyaz Kamil',
    job: 'Web Developer',
    review:
      "I'm Milyaz Kamil, a Front-end Developer in the web sector with two years of experience. Throughout my career, I have created various projects, continuously striving for improvement.",
    img: './src/assets/images/milyaz.png',
  },
  {
    id: 3,
    name: 'Emre Karayakupoğlu',
    job: 'Mentor',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam dolorum asperiores?',
    img: './src/assets/images/emre.jpg',
  },
  {
    id: 4,
    name: 'Natalie Walker',
    job: 'Mobile Developer',
    review:
      "I'm Milyaz Kamil, a Front-end Developer in the web sector with two years of experience. Throughout my career, I have created various projects, continuously striving for improvement.",
    img: './src/assets/images/i2.jpeg',
  },
  {
    id: 5,
    name: 'Elijah Turner',
    job: 'Web Developer',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam dolorum asperiores repudiandae. Aut provident repellendus ad delectus?',
    img: './src/assets/images/i4.jpeg',
  },
];

const educationFromJs = document.querySelector('.education-from-js');
const instructorsFromJs = document.querySelector('.instructors-from-js');

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let percentage1 = 0;
let percentage2 = 50;
let percentage3 = 100;
let percentage4 = 150;
let percentage5 = 200;

const itemsReview = [];

for (let i = 0; i < instructors.length; i++) {
  const singleReview = document.createElement('div');
  singleReview.classList.add(`single-review`);
  singleReview.classList.add(`single-review${i}`);

  if (singleReview.classList.contains(`single-review0`)) {
    singleReview.style.left = `${percentage1}%`;
    singleReview.style.transform = `translate(-${percentage1}%, 0%)`;
  }

  if (singleReview.classList.contains(`single-review1`)) {
    singleReview.style.left = `${percentage2}%`;
    singleReview.style.transform = `translate(-${percentage2}%, 0%)`;
  }

  if (singleReview.classList.contains(`single-review2`)) {
    singleReview.style.left = `${percentage3}%`;
    singleReview.style.transform = `translate(-${percentage3}%, 0%)`;
  }

  if (singleReview.classList.contains(`single-review3`)) {
    singleReview.style.left = `${percentage4}%`;
    singleReview.style.transform = `translate(-${percentage4}%, 0%)`;
  }

  if (singleReview.classList.contains(`single-review4`)) {
    singleReview.style.left = `${percentage5}%`;
    singleReview.style.transform = `translate(-${percentage5}%, 0%)`;
  }

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');;
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('stroke-width', '0');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('height', '2.5em');
  svg.setAttribute('width', '2.5em');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  // Create a path element and set its 'd' attribute
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043'
  );
  // Append the path element to the SVG element
  svg.appendChild(path);

  const imageBg = document.createElement('div');
  imageBg.classList.add('image-bg');
  const image = document.createElement('img');
  image.src = instructors[i].img;
  const name = document.createElement('h3');
  name.innerText = instructors[i].name;
  const job = document.createElement('h4');
  job.innerText = instructors[i].job;
  const content = document.createElement('p');
  content.innerText = instructors[i].review;
  imageContainer.append(svg, imageBg, image);
  singleReview.append(imageContainer, name, job, content);
  itemsReview.push(singleReview);
}

itemsReview.forEach((item) => {
  instructorsFromJs.append(item);
});

firstReview = document.querySelector('.single-review0');

leftBtn.addEventListener('click', () => {
  if (firstReview.style.left === "0%") {
    percentage1 -= 100;
    percentage2 -= 100;
    percentage3 -= 100;
    percentage4 -= 100;
    percentage5 -= 100;
  } else {
    percentage1 += 50;
    percentage2 += 50;
    percentage3 += 50;
    percentage4 += 50;
    percentage5 += 50;
  }
  reloadPercentage();
});

rightBtn.addEventListener('click', () => {
  if(!(firstReview.style.left === "-100%")) {
    percentage1 -= 50;
    percentage2 -= 50;
    percentage3 -= 50;
    percentage4 -= 50;
    percentage5 -= 50;
  } else {
    percentage1 += 100;
    percentage2 += 100;
    percentage3 += 100;
    percentage4 += 100;
    percentage5 += 100;
  }
  reloadPercentage();
});

const reloadPercentage = () => {
  itemsReview.forEach((item) => {
    if (item.classList.contains('single-review0')) {
      item.style.left = `${percentage1}%`;
      item.style.transform = `translate(-${percentage1}%, 0%)`;
    } else if (item.classList.contains('single-review1')) {
      item.style.left = `${percentage2}%`;
      item.style.transform = `translate(-${percentage2}%, 0%)`;
    } else if (item.classList.contains('single-review2')) {
      item.style.left = `${percentage3}%`;
      item.style.transform = `translate(-${percentage3}%, 0%)`;
    } else if (item.classList.contains('single-review3')) {
      item.style.left = `${percentage4}%`;
      item.style.transform = `translate(-${percentage4}%, 0%)`;
    } else if (item.classList.contains('single-review4')) {
      item.style.left = `${percentage5}%`;
      item.style.transform = `translate(-${percentage5}%, 0%)`;
    }
  });
};

let counter = 5;

const load = () => {
  const links = [];
  const items = [];

  for (let i = 0; i < counter; i++) {
    const clockSvg = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    clockSvg.setAttribute('stroke', 'currentColor');
    clockSvg.setAttribute('fill', 'currentColor');
    clockSvg.setAttribute('stroke-width', '0');
    clockSvg.setAttribute('version', '1.1');
    clockSvg.setAttribute('viewBox', '0 0 1024 1024');
    clockSvg.setAttribute('height', '1.2em');
    clockSvg.setAttribute('width', '1.2em');
    clockSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clockSvg.classList.add('clock-svg');

    // Create a path element and set its 'd' attribute
    const clockPath1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    clockPath1.setAttribute(
      'd',
      'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
    );

    const clockPath2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    clockPath2.setAttribute(
      'd',
      'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
    );
    // Append the path element to the SVG element
    clockSvg.appendChild(clockPath1);
    clockSvg.appendChild(clockPath2);

    const videoSvg = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    videoSvg.setAttribute('stroke', 'currentColor');
    videoSvg.setAttribute('fill', 'currentColor');
    videoSvg.setAttribute('stroke-width', '0');
    videoSvg.setAttribute('version', '1.1');
    videoSvg.setAttribute('viewBox', '0 0 16 16');
    videoSvg.setAttribute('height', '1.2em');
    videoSvg.setAttribute('width', '1.2em');
    videoSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    videoSvg.classList.add('video-svg');

    // Create a path element and set its 'd' attribute
    const videoPath1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    videoPath1.setAttribute(
      'd',
      'M2.667 3.5c-.645 0-1.167.522-1.167 1.167v6.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V4.667c0-.645-.522-1.167-1.167-1.167H2.667zM.5 4.667C.5 3.47 1.47 2.5 2.667 2.5h6.666c1.197 0 2.167.97 2.167 2.167v6.666c0 1.197-.97 2.167-2.167 2.167H2.667A2.167 2.167 0 01.5 11.333V4.667z'
    );

    const videoPath2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    videoPath2.setAttribute(
      'd',
      'M11.25 5.65l2.768-1.605a.318.318 0 01.482.263v7.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V4.308c0-1.033-1.125-1.626-1.984-1.128L10.75 4.785l.502.865z'
    );
    // Append the path element to the SVG element
    videoSvg.appendChild(videoPath1);
    videoSvg.appendChild(videoPath2);

    const lineSvg = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    lineSvg.setAttribute('stroke', 'currentColor');
    lineSvg.setAttribute('fill', 'currentColor');
    lineSvg.setAttribute('stroke-width', '0');
    lineSvg.setAttribute('version', '1.1');
    lineSvg.setAttribute('viewBox', '0 0 1024 1024');
    lineSvg.setAttribute('height', '1.2em');
    lineSvg.setAttribute('width', '1.2em');
    lineSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    lineSvg.classList.add('line-svg');

    // Create a path element and set its 'd' attribute
    const linePath1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    linePath1.setAttribute(
      'd',
      'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z'
    );

    // Append the path element to the SVG element
    lineSvg.appendChild(linePath1);

    const singleCourse = document.createElement('div');
    singleCourse.classList.add('single-course');

    const courseView = document.createElement('span');
    courseView.classList.add('course-view');
    courseView.innerText = `${courses[i].viewsCount} Views`;

    const coursePrice = document.createElement('span');
    coursePrice.classList.add('course-price');
    coursePrice.innerText = courses[i].price;

    const dollar = document.createElement('span');
    dollar.classList.add('dollar');
    dollar.innerText = '$';

    const coursePriceContainer = document.createElement('div');
    coursePriceContainer.classList.add('course-price-container');
    coursePriceContainer.append(coursePrice, dollar);

    const courseHours = document.createElement('span');
    courseHours.classList.add('course-hours');
    courseHours.innerText = `${courses[i].durationHours} Hours`;

    const courseHoursContainer = document.createElement('div');
    courseHoursContainer.classList.add('course-hours-container');
    courseHoursContainer.append(clockSvg, courseHours);

    const courseLessons = document.createElement('span');
    courseLessons.classList.add('course-lessons');
    courseLessons.innerText = `${courses[i].numberOfLessons} Lessons`;

    const courseLessonsContainer = document.createElement('div');
    courseLessonsContainer.classList.add('course-lessons-container');
    courseLessonsContainer.append(videoSvg, courseLessons);

    const courseLevel = document.createElement('span');
    courseLevel.classList.add('course-level');
    courseLevel.innerText = courses[i].difficultyLevel;

    const courseLevelContainer = document.createElement('div');
    courseLevelContainer.classList.add('course-level-container');
    courseLevelContainer.append(lineSvg, courseLevel);

    const jsTitle = document.createElement('span');
    jsTitle.classList.add('js-title');
    const jsContent = document.createElement('h3');
    jsContent.classList.add('js-content');
    const jsİmage = document.createElement('img');
    jsİmage.classList.add('single-image');

    const divWithLinks = document.createElement('div');
    divWithLinks.classList.add('div-with-links');
    const firstLink = document.createElement('a');
    firstLink.classList.add('first-link');
    const secondLink = document.createElement('a');
    secondLink.classList.add('second-link');
    firstLink.href = courses[i].firstLink;
    firstLink.innerText = 'Review the Course'
    firstLink.target = '_blank';
    firstLink.classList.add(`link-key${i}`);
    secondLink.href = courses[i].secondLink;
    secondLink.innerText = 'Visit GitHub';
    secondLink.target = '_blank';

    links.push(firstLink);

    divWithLinks.append(firstLink, secondLink);

    const singleCourseInfo = document.createElement('div');
    const singleCourseInfoTop = document.createElement('div');
    const singleCourseInfoCenter = document.createElement('div');
    const singleCourseInfoBottom = document.createElement('div');
    singleCourseInfo.classList.add('single-course-info');
    singleCourseInfoTop.classList.add('single-course-info-top');
    singleCourseInfoCenter.classList.add('single-course-info-center');
    singleCourseInfoBottom.classList.add('single-course-info-bottom');

    const jsAuthor = document.createElement('h3');
    jsAuthor.classList.add('js-author');

    jsTitle.innerHTML = courses[i].courseTitle;
    const jsContentShort = courses[i].shortDescription.slice(0, 50);
    jsContent.innerHTML = `${jsContentShort}...`;
    jsİmage.src = courses[i].img;
    jsAuthor.innerHTML = courses[i].instructor;

    const courseAuthorImage = document.createElement('img');
    courseAuthorImage.classList.add('course-author-image');
    courseAuthorImage.src = courses[i].instructorImage;

    const courseAuthor = document.createElement('div');
    courseAuthor.classList.add('course-author');
    courseAuthor.append(courseAuthorImage, jsAuthor);

    singleCourseInfoTop.append(jsTitle, courseView);

    singleCourseInfoCenter.append(
      courseHoursContainer,
      courseLessonsContainer,
      courseLevelContainer
    );

    singleCourseInfoBottom.append(courseAuthor, coursePriceContainer);

    singleCourseInfo.append(singleCourseInfoTop, jsContent, singleCourseInfoCenter, singleCourseInfoBottom);

    singleCourse.append(jsİmage, divWithLinks, singleCourseInfo);
    items.push(singleCourse);
  }

  items.forEach((item) => {
    educationFromJs.append(item);
  });
  
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Construct the URL with the class name parameter
      const queryParams = new URLSearchParams();
      queryParams.set('className', e.target.className);
      // Redirect to the second HTML page with the parameter
      window.location.href = 'single-course.html?' + queryParams.toString();
    });
  });
}

load();

const loadMore = document.querySelector(".load-more");

loadMore.addEventListener("click", () => {
  educationFromJs.innerHTML = '';
  if (counter < courses.length) {
    counter++;
    loadMore.innerText = 'Load More';

    if (counter === courses.length) {
      loadMore.innerText = 'Show Less';
    } 
  } else {
    counter = 5;
    loadMore.innerText = 'Load More';
  }
  load();
});

inputContainers.forEach((inputContainer) => {
  inputContainer.addEventListener('mouseover', (e) => {
    formLabels.forEach((formLabel) => {
      if (formLabel.classList[0] === e.target.classList[0]) {
        formLabel.style.top = '-50%';
        formLabel.style.left = '5%';
      }
    });
  });

  inputContainer.addEventListener('mouseout', (e) => {
    formLabels.forEach((formLabel) => {
      if (formLabel.classList[0] === e.target.classList[0]) {
        formLabel.style.top = '50%';
        formLabel.style.left = '10%';
      }
    });
  });
});

moon.style.left = '25%';
sun.style.left = '25%';
closeMenu.style.display = 'none';
darkMode.addEventListener('click', () => {
  if (moon.style.left === '25%') {
    moon.style.left = '80%';
    sun.style.left = '80%';
    body.style.backgroundColor = '#120926';
    header.style.backgroundColor = '#090916';
    nav.style.backgroundColor = '#090916'
    logo.src = "./src/assets/images/logo1.png";
    moon.style.visibility = 'hidden';
    sun.style.visibility = 'visible';
    moon.style.opacity = '0';
    sun.style.opacity = '1';
    sun.style.fill = 'white';
    sun.style.stroke = 'white';
    darkMode.style.backgroundColor = 'transparent';
    darkMode.style.borderColor = "white";
    darkModeText.forEach((text) => {
      text.style.color = 'white';
    });
  } else {
    header.style.backgroundColor = 'white';
    nav.style.backgroundColor = 'white';
    logo.src = './src/assets/images/logo2.png';
    body.style.backgroundColor = 'white';
    moon.style.left = '25%';
    sun.style.left = '25%';
    moon.style.visibility = 'visible';
    sun.style.visibility = 'hidden';
    moon.style.opacity = '1';
    sun.style.opacity = '0';
    darkMode.style.backgroundColor = 'black';
    darkModeText.forEach((text) => {
      text.style.color = 'black';
    });
  }
});

hamburgerMenu.addEventListener('click', () => {
  nav.classList.add('show-nav');
  closeMenu.style.display = 'flex';
  hamburgerMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  hamburgerMenu.style.display = 'flex';
  closeMenu.style.display = 'none';
  nav.classList.remove('show-nav');
});

const toggleChat = () => {
  if (!chat.classList.contains('show-chat')) {
    chat.classList.add('show-chat');
    chatOverlay.style.visibility = 'visible';
    body.style.overflow = 'hidden';
  } else {
    chat.classList.remove('show-chat');
    chatOverlay.style.visibility = 'hidden';
    body.style.overflow = 'visible';
  }
}

lastLink.addEventListener('click', toggleChat);

closeChat.addEventListener('click', toggleChat);

bigChat.addEventListener('click', () => {
  if (!chat.classList.contains('big-chat')) {
    chat.classList.add('big-chat');
  } else {
    chat.classList.remove('big-chat');
  }
});
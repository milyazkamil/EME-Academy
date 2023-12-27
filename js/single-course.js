const card = document.querySelector('.card');
const courseImage = document.querySelector('.course-image');
const courseVideoContainer = document.querySelector(".course-video-container");
const overlay = document.querySelector('.overlay');
const playBtn = document.querySelector('.play-btn');

const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
closeMenu.style.display = 'none';
const nav = document.querySelector('.nav');

const courseTitle = document.querySelector('.course-title');
const cardCourseTitle = document.querySelector('.card-course-title');
const shortDescription = document.querySelector('.short-description');
const instructorImageUrl = document.querySelector('.instructor-image-url');
const instructor = document.querySelector('.instructor');

const likesCount = document.querySelector('.likes-count');
const cardLikesCount = document.querySelector('.card-likes-count');
const viewsCount = document.querySelector('.views-count');
const cardViewsCount = document.querySelector('.card-views-count');
const durationHours = document.querySelector('.duration-hours');
const numberOfLessons = document.querySelector('.number-of-lessons');
const cardNumberOfLessons = document.querySelector('.card-number-of-lessons');

const fullDescription = document.querySelector('.full-description');
const certificationTitle = document.querySelector('.certification-title');
const price = document.querySelector('.price');
const difficultyLevel = document.querySelector('.difficulty-level');
const courseDescription = document.querySelector('.course-description');
const courseCertification = document.querySelector('.course-certification');
const bottomInfo = document.querySelector('.bottom-info');

const darkMode = document.querySelector('.dark-mode');
const darkModeText = document.querySelectorAll('.dark-mode-text');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

const courseVideo = document.createElement('iframe');
courseVideo.classList.add('course-video');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

const descBtns = [btn1, btn2, btn3, btn4];
btn1.style.backgroundColor = '#ff6c4b';
btn1.style.color = 'white';

const courses = [
  {
    courseId: 1,
    linkKey: 'link-key0',
    courseTitle: 'JavaScript',
    shortDescription: 'Master the fundamentals of JavaScript programming.',
    fullDescription:
      'Explore the world of JavaScript and become proficient in front-end and back-end development. This course covers everything from basic syntax to advanced topics like asynchronous programming and ES6 features.',
    certificationTitle: 'JavaScript Programming Certification',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg?si=UTEwLo-M_vMwYYfG',
    imageUrl: './src/assets/images/courseImages/js.jpg',
    instructor: 'Enes Tavlu',
    price: 250,
    viewsCount: 7000,
    durationHours: 35,
    numberOfLessons: 18,
    likesCount: 110,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/enes.jpg',
  },
  {
    courseId: 2,
    linkKey: 'link-key1',
    courseTitle: 'React',
    shortDescription: 'Master the art of building user interfaces with React.',
    fullDescription:
      'Learn React.js from scratch and build powerful, interactive web applications. Explore advanced concepts like Redux and React Hooks, and gain hands-on experience through real-world projects.',
    certificationTitle: 'React Mastery Certification',
    videoUrl: 'https://www.youtube.com/embed/u2B75HWI2JI?si=vCe3EQ-n9Y5DJJLr',
    imageUrl: './src/assets/images/courseImages/react.jpg',
    instructor: 'Milyaz Kamil',
    price: 300,
    viewsCount: 8000,
    durationHours: 40,
    numberOfLessons: 20,
    likesCount: 120,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/milyaz.png',
  },
  {
    courseId: 3,
    linkKey: 'link-key2',
    courseTitle: 'Kotlin',
    shortDescription:
      'Become proficient in Kotlin, the modern programming language for Android development.',
    fullDescription:
      'Dive into Kotlin, the expressive and concise programming language designed to interoperate fully with Java. Learn to build Android apps with Kotlin, explore advanced features.',
    certificationTitle: 'Kotlin for Android Certification',
    videoUrl: 'https://www.youtube.com/embed/F9UC9DY-vIU?si=KBBW_ISNZuKbhGu2',
    imageUrl: './src/assets/images/courseImages/kotlin.jpg',
    instructor: 'Emre Karayakupoğlu',
    price: 280,
    viewsCount: 7500,
    durationHours: 38,
    numberOfLessons: 22,
    likesCount: 105,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/emre.jpg',
  },
  {
    courseId: 4,
    linkKey: 'link-key3',
    courseTitle: 'Unity',
    shortDescription:
      'Create stunning games and interactive experiences with Unity.',
    fullDescription:
      'Unlock the full potential of Unity game development. From basics to advanced techniques, this course covers everything you need to know to create immersive games.',
    certificationTitle: 'Unity Game Development Certification',
    videoUrl: 'https://www.youtube.com/embed/EOR_L2eSn_o?si=7pxMbBpG7GBoKrLQ',
    imageUrl: './src/assets/images/courseImages/unity.jpg',
    instructor: 'Fatih Mehmet Erkoç',
    price: 320,
    viewsCount: 8500,
    durationHours: 45,
    numberOfLessons: 25,
    likesCount: 130,
    difficultyLevel: 'Advanced',
    instructorImageUrl: './src/assets/images/fatih.png',
  },
  {
    courseId: 5,
    linkKey: 'link-key4',
    courseTitle: 'Swift',
    shortDescription:
      'Master Swift, the programming language for iOS and macOS development.',
    fullDescription:
      'Become proficient in Swift and unleash your creativity in iOS and macOS app development. From the basics to advanced iOS features.',
    certificationTitle: 'Swift for iOS Development Certification',
    videoUrl: 'https://www.youtube.com/embed/ngyzQuLJlvY?si=qb3o0YC2O07sP5bS',
    imageUrl: './src/assets/images/courseImages/swift.jpg',
    instructor: 'Sophia Martinez',
    price: 290,
    viewsCount: 7800,
    durationHours: 42,
    numberOfLessons: 23,
    likesCount: 115,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/i1.jpeg',
  },
  {
    courseId: 6,
    linkKey: 'link-key5',
    courseTitle: 'C#',
    shortDescription:
      'Become a proficient C# developer and build powerful applications.',
    fullDescription:
      'Master C# programming language and unleash its potential in building desktop, web, and mobile applications. From basic syntax to advanced features, this course provides a comprehensive understanding of C#.',
    certificationTitle: 'C# Programming Certification',
    videoUrl: 'https://www.youtube.com/embed/GhQdlIFylQ8?si=KwFptLDeLB4gL9Yj',
    imageUrl: './src/assets/images/courseImages/c-sharp.jpg',
    instructor: 'Elizabeth Williams',
    price: 270,
    viewsCount: 7200,
    durationHours: 37,
    numberOfLessons: 21,
    likesCount: 100,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/i2.jpeg',
  },
  {
    courseId: 7,
    linkKey: 'link-key6',
    courseTitle: 'GO',
    shortDescription:
      'Learn Go (Golang) and build scalable and efficient applications.',
    fullDescription:
      'Discover the power of Go (Golang) programming language and build high-performance, scalable applications. From basic syntax to advanced concurrency patterns.',
    certificationTitle: 'Go Programming Certification',
    videoUrl: 'https://www.youtube.com/embed/qJqx7dxWW8I?si=WDe2eFAxHPvhfe02',
    imageUrl: './src/assets/images/courseImages/go.jpg',
    instructor: 'Olivia Lee',
    price: 260,
    viewsCount: 7400,
    durationHours: 39,
    numberOfLessons: 19,
    likesCount: 95,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/i3.jpeg',
  },
  {
    courseId: 8,
    linkKey: 'link-key7',
    courseTitle: 'Rust',
    shortDescription:
      'Master Rust programming language for safe and concurrent systems.',
    fullDescription:
      'Delve into Rust, the language known for its focus on safety and performance in system-level programming. Learn memory safety principles, explore concurrent programming.',
    certificationTitle: 'Rust Programming Certification',
    videoUrl: 'https://www.youtube.com/embed/BpPEoZW5IiY?si=5wpdwXaAldw63uup',
    imageUrl: './src/assets/images/courseImages/rust.jpg',
    instructor: 'Jennifer Turner',
    price: 280,
    viewsCount: 7600,
    durationHours: 40,
    numberOfLessons: 20,
    likesCount: 105,
    difficultyLevel: 'Intermediate',
    instructorImageUrl: './src/assets/images/i4.jpeg',
  },
  {
    courseId: 9,
    linkKey: 'link-key8',
    courseTitle: 'Unreal Engine',
    shortDescription:
      'Unlock the power of Unreal Engine for game development and virtual experiences.',
    fullDescription:
      'Dive into Unreal Engine and unleash your creativity in game development and virtual experiences. From the basics of the Unreal Editor to advanced features like Blueprints.',
    certificationTitle: 'Unreal Engine Developer Certification',
    videoUrl: 'https://www.youtube.com/embed/MRISn-RbpAI?si=SVB-WxtD9XI3tNU1',
    imageUrl: './src/assets/images/courseImages/unreal-engine.jpg',
    instructor: 'John Smigla',
    price: 320,
    viewsCount: 8200,
    durationHours: 45,
    numberOfLessons: 24,
    likesCount: 110,
    difficultyLevel: 'Advanced',
    instructorImageUrl: './src/assets/images/i5.jpeg',
  },
]

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

descBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    for (let i = 0; i < descBtns.length; i++) {
      const singleBtn = descBtns[i];
      singleBtn.style.backgroundColor = 'white';
      singleBtn.style.color = 'black';
    }

    if (button.classList.contains(e.target.className)) {
      button.style.backgroundColor = '#ff6c4b';
      button.style.color = 'white';
    }
  })

  button.addEventListener('mouseover', () => {
    if (button.style.backgroundColor === 'rgb(255, 108, 75)') {
      button.style.color = 'white';
    } else if (button.style.backgroundColor === 'rgb(255, 255, 255)') {
      button.style.color = 'black';
    } else {
      button.style.color = 'rgb(255, 108, 75)';
    }
  })

  button.addEventListener('mouseout', () => {
    if (button.style.color === 'rgb(255, 108, 75)') {
      button.style.color = 'black';
    }
  })
})

window.addEventListener('scroll', function () {
  if (window.scrollY > 900) {
    card.style.position = 'sticky';
  }
})

playBtn.addEventListener('click', () => {
  courseImage.style.opacity = '0';
  courseImage.style.visibility = 'hidden';
  courseImage.style.zIndex = '1';
  courseVideo.style.opacity = '1';
  courseVideo.style.visibility = 'visible';
  courseVideo.style.zIndex = '2';
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
});

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  // Get the value for className
  const className = urlParams.get('className');
  const shortClassName = className.slice(11);

  courses.forEach((course) => {
    if (course.linkKey === shortClassName) {
      courseTitle.innerHTML = course.courseTitle;
      cardCourseTitle.innerHTML = course.courseTitle;
      shortDescription.innerHTML = course.shortDescription;
      fullDescription.innerHTML = course.fullDescription;
      certificationTitle.innerHTML = course.certificationTitle;
      instructor.innerHTML = course.instructor;
      price.innerHTML = course.price;
      viewsCount.innerHTML = course.viewsCount;
      cardViewsCount.innerHTML = course.viewsCount;
      durationHours.innerHTML = course.durationHours;
      numberOfLessons.innerHTML = course.numberOfLessons;
      cardNumberOfLessons.innerHTML = course.numberOfLessons;
      likesCount.innerHTML = course.likesCount;
      difficultyLevel.innerHTML = course.difficultyLevel;
      courseImage.src = course.imageUrl;
      instructorImageUrl.src = course.instructorImageUrl;
      courseVideo.src = course.videoUrl;
      courseVideo.title = 'YouTube video player';
      courseVideo.frameBorder = '0';
      courseVideo.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      courseVideo.allowFullscreen = true;
      courseVideoContainer.append(courseVideo);
    }
  });
});


moon.style.left = '25%';
sun.style.left = '25%';

darkMode.addEventListener('click', () => {
  if (moon.style.left === '25%') {
    moon.style.left = '80%';
    sun.style.left = '80%';
    body.style.backgroundColor = '#120926';
    header.style.backgroundColor = '#090916';
    bottomInfo.style.backgroundColor = '#090916';
    card.style.backgroundColor = '#120926'
    card.style.borderColor = '#ff6c4b';
    nav.style.backgroundColor = '#090916'
    courseDescription.style.backgroundColor = "#120926";
    courseDescription.style.color = "white";
    courseDescription.style.borderColor = "#ff6c4b";
    courseCertification.style.backgroundColor = "#120926";
    courseCertification.style.color = "white";
    courseCertification.style.borderColor = "#ff6c4b";
    logo.src = './src/assets/images/logo1.png';
    moon.style.visibility = 'hidden';
    sun.style.visibility = 'visible';
    moon.style.opacity = '0';
    sun.style.opacity = '1';
    sun.style.fill = 'white';
    sun.style.stroke = 'white';
    darkMode.style.backgroundColor = 'transparent';
    darkMode.style.borderColor = 'white';
    darkModeText.forEach((text) => {
      text.style.color = 'white';
    })
  } else {
    header.style.backgroundColor = 'white';;
    card.style.backgroundColor = 'white';
    nav.style.backgroundColor = 'white';
    card.style.borderColor = 'rgb(196, 196, 196)';
    bottomInfo.style.backgroundColor = '#F3F3F3';
    courseDescription.style.backgroundColor = 'white';
    courseDescription.style.color = 'black';
    courseDescription.style.borderColor = 'transparent';
    courseCertification.style.backgroundColor = 'white';
    courseCertification.style.color = 'black';
    courseCertification.style.borderColor = 'transparent';
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
// // Header scroll
// function fixHeaderOnScroll() {
//     const header = document.querySelector('header');
  
//     if (window.scrollY >= 1) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }
// }
  
// window.addEventListener('scroll', fixHeaderOnScroll);
// fixHeaderOnScroll();

// // Header menu
// const headerBurger = document.querySelector('.header-burger');
// let scrollPosition = 0;

// headerBurger.addEventListener('click', () => {
//     if (document.body.classList.contains('menu-is-open')) {
//         document.body.classList.remove('menu-is-open');
//         window.scrollTo({top: scrollPosition, behavior: 'auto'});
//     } else {
//         scrollPosition = window.scrollY;
//         document.body.classList.add('menu-is-open');
//     }
// });
  
// window.addEventListener('resize', () => {
//     document.body.classList.remove('menu-is-open');
// });

// // Tiny slider
// const sliderWrap = document.querySelector('.slider-wrap');

// if(sliderWrap){
//     var slider = tns({
//         container: '.slider-wrap',
//         items: 1,
//         mouseDrag: true,
//         controls: true,
//         nav: false,
//         autoHeight: true
//     });
// }

const blurredImageDiv = document.querySelectorAll(".blurred-img");
blurredImageDiv.forEach(image => {
  const img = image.querySelector("img");
  function loaded() {
    image.classList.add("loaded");
  }
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
  
});

var map;
var InforObj = [];
var centerCords = {
    lat: -25.344,
    lng: 131.036
};
var markersOnMap = [
    {
        placeName: "Australia (Uluru)",
        LatLng: [{
            lat: -25.344,
            lng: 131.036
        }],
        placeInfo: "Australia is a country in Oceania, including the Australian continent, the island of Tasmania, and several smaller islands."
    },
    {
        placeName: "Australia (Melbourne)",
        LatLng: [{
            lat: -37.852086,
            lng: 504.985963
        }],
        placeInfo: "Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit."
    },
    {
        placeName: "Australia (Canberra)",
        LatLng: [{
            lat: -35.299085,
            lng: 509.109615
        }],
        placeInfo: "Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit."
    },
    {
        placeName: "Australia (Gold Coast)",
        LatLng: [{
            lat: -28.013044,
            lng: 513.425586
        }],
        placeInfo: "Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit."
    },
    {
        placeName: "Australia (Perth)",
        placeInfo: "Perth is the capital of Western Australia, with a population of about 1.2 million people. It is the largest city in Australia, and the second largest in the world after London.",
        LatLng: [{
            lat: -31.951994,
            lng: 475.858081
        }]
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
            '</h1><p>' + markersOnMap[i].placeInfo + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if (InforObj.length > 0) {
        InforObj[0].set("marker", null);
        InforObj[0].close();
        InforObj.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: centerCords
    });
    addMarkerInfo();
}

const questions = document.querySelectorAll('.question-item');

questions.forEach(question => {
    question.addEventListener('click', () => {
        if (question.classList.contains('active')) {
            question.classList.remove('active');
        } else {
            questions.forEach(item => {
                if (item !== question) {
                    item.classList.remove('active');
                }
            });
            question.classList.add('active');
        }
    })
});
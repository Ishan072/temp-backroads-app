import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';

export const pageLinks = [
    {
        id:1,
        href:"#home",
        text:"home"
    },
    {
        id:2,
        href:"#about",
        text:"about"
    },
    {
        id:3,
        href:"#services",
        text:"services"
    },
    {
        id:4,
        href:"#tours",
        text:"tours"
    }
];

export const socialLinks = [
    {
        id:1,
        href:"https://www.twitter.com",
        icon:"fab fa-facebook"
    },
    {
        id:2,
        href:"https://www.twitter.com",
        icon:"fab fa-twitter"
    },
    {
        id:3,
        href:"https://www.twitter.com",
        icon:"fab fa-squarespace"
    }
];

export const services = [
    {
        id:1,
        title:"saving money",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        icon:"fas fa-wallet fa-fw"
    },
    {
        id:2,
        title:"endless hiking",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        icon:"fas fa-tree fa-fw"
    },
    {
        id:3,
        title:"amazing comfort",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        icon:"fas fa-socks fa-fw"
    }
];

export const tours = [
    {
        id:1,
        title:"Tibet Adventure",
        href:img1,
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        date:"december 5th, 2019",
        map:"fas fa-map",
        price:"6 days",
        days:"from $2100",
        place:"china"
    },
    {
        id:2,
        title:"best of java",
        href:img2,
        date:"december 5th, 2019",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        map:"fas fa-map",
        price:"from $1400",
        days:"11 days",
        place:"indonesia"
    },
    {
        id:3,
        title:"explore hong kong",
        href:img3,
        date:"december 5th, 2019",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        map:"fas fa-map",
        price:"from $5000",
        days:"8 days",
        place:"hong kong"
    },
    {
        id:4,
        title:"kenya highlights",
        href:img4,
        date:"december 5th, 2019",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
        map:"fas fa-map",
        price:"from $3300",
        days:"20 days",
        place:"kenya"
    }
];
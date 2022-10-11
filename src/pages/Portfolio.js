import React from "react";
import Project from "../components/Project";
import Spoiler from "../assets/project_images/spoiler-alert-preview.png";
import Shopshopdux from "../assets/project_images/shop-shopdux.png";
import Techies from "../assets/project_images/techies.png";
import BookSite from "../assets/project_images/book-search-site.png";
import BudgetTracker from "../assets/project_images/budget_tracker.png";
import Gale from "../assets/project_images/gale.png";

function Portfolio() {
    const projects = [
                {
            title: "Spoiler Alert",
            id: 1,
            img: Spoiler,
            link: "https://obscure-ravine-58128.herokuapp.com/",
            git: "https://github.com/zarazhas/spoiler-alert",
            description: 'CMS style blog site where comments are hidden for those that have not yet seen a program.',
            built: 'Node.js, jQuery, MySQL2, Sequelize, Handlebars, Bootstrap'
        },
        {
            title: "Gale",
            id: 2,
            img: Gale,
            link: "https://enigmatic-everglades-42855.herokuapp.com",
            git: "https://github.com/zarazhas/gale-weather-app",
            description: 'React-based website to save and show weather properties of an user.',
            built: 'React, Context API, JWT, Material UI, GraphQL, MongoDB, OpenWeather API'
        },
        {
            title: "Shop-Shopdux",
            id: 3,
            img: Shopshopdux,
            link: "https://rocky-basin-87086.herokuapp.com/",
            git: "https://github.com/zarazhas/shop-shopdux",
            description: 'E-commerce website clone to demonstrate offline capabilities and checkout functions.',
            built: 'IndexedDB, React, Redux, Stripe API'
        },
        {
            title: "Budget Tracker",
            id: 4,
            img: BudgetTracker,
            link: "https://stormy-mountain-76634.herokuapp.com/",
            git: "https://github.com/zarazhas/PWA-Budget-Tracker",
            description: 'PWA budget tracking app that can work with no internet connection.',
            built: 'Progressive Web Application, MondoDB, Express.js, Node.js, Mongoose'
        },
        {
            title: "Techies Blog",
            id: 5,
            img: Techies,
            link: "https://quiet-plains-39124.herokuapp.com/",
            git: "https://github.com/zarazhas/techie-blog",
            description: 'Reddit-like site utlizing full-stack development with no starter code provided.',
            built: 'MySQL, Handlebars, bcrypt, Express.js, dotenv, Heroku'
        },
        {
            title: "Book Search Engine",
            id: 6,
            img: BookSite,
            link: "https://agile-plains-92114.herokuapp.com/",
            git: "https://github.com/zarazhas/book-search-engine",
            description: 'Refactored book search engine to use GraphQL.',
            built: 'Apollo, MongoDB, React, Node.js, Google book search API'
        },
        
    ]
    return (
        <Project
        projects={projects}>
        </Project>
    );
}

export default Portfolio;

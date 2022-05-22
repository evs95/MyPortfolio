import React from 'react';

export default function Portfolio() {
  return (
    <div>
            <div className='panelhead'>Work</div>
            <div>
                <a href="https://github.com/evs95/people_eatery" target="_blank" className="card img1" id="project1">
                    <div className="card-title">
                        <h3>People Eatery</h3>
                        <p>Node.js/ Express.js/ Express-Session/ Axios/ Sequelize ORM/ Handlebars.js/ Bulma CSS Extensions/ Html/ CSS/ Heroku </p>
                    </div>
                </a>
                <a href="https://github.com/evs95/TechBlog" target="_blank"  className="card img2" id="project2">
                    <div className="card-title">
                        <h3>Tech Blog</h3>
                        <p>Node.js/ Express.js/ Express-Session/ Sequelize ORM/ Handlebars.js/ Html/ CSS/ Heroku</p>
                    </div>
                </a>
                <a href="https://github.com/evs95/ActivitySuggester" target="_blank"  className="card img3" id="project3">
                    <div className="card-title">
                        <h3>Sunshine</h3>
                        <p>Apis/ Javascript/ FoundationJS/ Html/ CSS</p>
                    </div>
                </a>
                <a href="https://github.com/evs95/CodeQuiz" target="_blank"  className="card img4" id="project4">
                    <div className="card-title">
                        <h3>Code Quiz</h3>
                        <p>Javascript/ Jquery/ Html/ CSS</p>
                    </div>
                </a>
                <a href="https://github.com/evs95/ECommerceApi" target="_blank"  className="card img5" id="project5">
                    <div className="card-title">
                        <h3>E-Commerce Back End</h3>
                        <p>Express.js/ Sequelize ORM</p>
                    </div>
                </a>
            </div>
        </div>
  );
}

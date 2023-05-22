import React from 'react'
import './portfolio.css'
import CALCI from "../../assets/222.jpg"
import QUIZIE from "../../assets/project3.png"
import WORKOUT from "../../assets/project4.png"
import HAPPYPLACE from "../../assets/project5.png"
import WEATHER from "../../assets/project6.png"
import TRELLO from "../../assets/111.jpg"

const data = [

  {
    id:1,
    image: TRELLO,
    title: 'This a Propert Market Website',
    github: 'https://github.com/anuj777777/Property-Market',
    demo: 'https://property-market.netlify.app/'
  },
  {
    id:2,
    image: WEATHER,
    title: 'This is a Rocking Music Website',
    github: 'https://github.com/anuj777777/html-css-project/tree/main/PROJECT%203',
    demo: 'https://property-market.netlify.app/'
  },
  {
    id:3,
    image: HAPPYPLACE,
    title: 'This is a Reastaurent Website ',
    github: 'https://github.com/anuj777777/html-css-project',
    demo: 'https://property-market.netlify.app/'
  },
  {
    id:4,
    image: WORKOUT,
    title: 'This is a Developers Landing Page',
    github: 'https://github.com/anuj777777/html-css-project',
    demo: 'https://property-market.netlify.app/'
  },
  {
    id:5,
    image: QUIZIE,
    title: 'This is a Hotel Management Website',
    github: 'https://github.com/anuj777777/html-css-project',
    demo: 'https://property-market.netlify.app/'
  },
  {
    id:6,
    image: CALCI,
    title: 'This is a Calculator',
    github: 'https://github.com/anuj777777/html-css-project',
    demo: 'https://property-market.netlify.app/'
  },
  
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return  (
              
              <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          )
        })
      }
      </div>
    </section>
    )
}



<>
<article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TRELLO} alt='' />
          </div>
          <h3>The Ultimate Project Management Tool</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/anuj777777/Property-Market" className='btn' target='_blank'>Github</a>
            <a href="https://property-market.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={WEATHER} alt='' />
          </div>
          <h3>This is a Weather Forcasting App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/anuj777777/html-css-project/tree/main/PROJECT%203" className='btn' target='_blank'>Github</a>
            <a href="https://property-market.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HAPPYPLACE} alt='' />
          </div>
          <h3>This is a Happy Place App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/anuj777777/html-css-project" className='btn' target='_blank'>Github</a>
            <a href="https://property-market.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={WORKOUT} alt='' />
          </div>
          <h3>This is a Workout App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/anuj777777/html-css-project" className='btn' target='_blank'>Github</a>
            <a href="https://property-market.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={QUIZIE} alt='' />
          </div>
          <h3>This is a Quiz App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/anuj777777/html-css-project" className='btn' target='_blank'>Github</a>
            <a href="https://property-market.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CALCI} alt='' />
          </div>
          <h3>This is a Calculator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/anuj777777/html-css-project" className='btn' target='_blank'>Github</a>
            <a href="https://property-market.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          </>
export default Porfolio
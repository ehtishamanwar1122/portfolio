import React, { useState } from 'react';
import './Projects.css';
import project1 from "./project1.jpg"
import project2 from '../../Images/project2.jpg';
import project3 from '../../Images/project3.jpg';
import project4 from '../../Images/4.jpg';
import Snowfall from 'react-snowfall';
function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Description of Project 1 ',
      client: 'Client: Meta',
      stars: '★★★★★',
      image: {project1},
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'Description of Project 2 ',
      client: 'Client: Dubai',
      stars: '★★★★★',
      image: {project2},
    },
    {
      id: 3,
      title: 'Project Title 3',
      description: 'Description of Project 3 ',
      client: 'Client: American',
      stars: '★★★★★',
      image: {project3},
    },
    {
      id: 4,
      title: 'Project',
      description: 'Description of Project 4',
      client: 'Client: Pakistani',
      stars: '★★★★★',
      image: {project4},
    },
  ]);

  return (
    <div>
      <section className="products">
    <Snowfall snowflakeCount={9} />

        <h1>Projects</h1>
        <div className="box">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <div className="small_card">
                <i className="fa fa-heart"></i>
                <i className="fa fa-share-alt"></i>
              </div>
              <div className="image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="products_text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <h3>{project.client}</h3>
                <div className="products_star">{project.stars}</div>
                <a href="#" className="btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

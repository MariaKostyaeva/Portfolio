import React from 'react';
import './projectList.styles.css';
import Card from "../Card/Card";
const ProjectList = () => {
    return (
        <div className="portfolioContainer">
            <div className="tag">
                <p>🔗 Портфолио</p>
            </div>
            <div className="title">
                <p>Работы и проекты</p>
            </div>
            <div className="projectList">
                <Card/>
            </div>
        </div>
    );
};

export default ProjectList;
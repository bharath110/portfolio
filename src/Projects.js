import React,{Component} from 'react';
import PROJECTS from './data/projects'
class Project extends Component{
    
    render(){
        const {title,desc,image,link} = this.props.project;
        console.log('Project ',this.props)
        return(
            <div style={{display:'inline-block',width:300,margin:10}}>
               <h3>{title}</h3>
               <img src={image} alt='pic' style={{width:200,height:120}}></img>
               <p><i>{desc}</i></p>
               <a href={link}>{link}</a> 
            </div>
        )
    }
        
}
class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                {
                    PROJECTS.map(PROJECT =>{
                        return (
                            <Project key={PROJECT.id} project={PROJECT}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;
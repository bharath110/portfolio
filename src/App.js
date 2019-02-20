import React,{Component} from 'react';
class RegularC {}
class ComponentClass extends Component{}
const reg = new RegularC()
const compClass = new ComponentClass()
console.log('regulr c :',reg)
console.log('Comp c :',compClass)
class App extends Component{
    constructor(){
        super()
        this.state = {showBio : false};
        this.toggleBio = this.toggleBio.bind(this)
    }
    toggleBio(){
        this.setState({showBio : !this.state.showBio})
    }
    render(){
        return(
            <div>
                <h1>Hello from App!</h1>
                <p>Simple app to show the working of reeact Component</p>
                {this.state.showBio ?
                <div>
                <span>I'm Bharath Kumar</span>
                <p>Living in Bangalore  and work as Software Engineer</p>
                <button onClick={this.toggleBio}>Read Less</button>
                </div> :
                <button onClick={this.toggleBio}>Read More</button>
                }
            </div>
        )
    }
}
export default App;
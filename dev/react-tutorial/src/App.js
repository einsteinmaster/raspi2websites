import {Component} from "react";
import './App.css';
import MyTable from "./MyTable";
import DynTable from "./DynTable";

function App() {
    return (
        <Home/>
    );
}

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'MyTable'
        }
    }
    handleOptionChange(e){
        console.log(e);
        console.log(this);
        this.state.selectedOption = e.target.value;
        this.forceUpdate()
    }
    renderTable(){
        if(this.state.selectedOption === 'DynTable')
            return (<DynTable/>);
        return (<MyTable/>);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">


                    <div>
                        Hallo From React!
                    </div>


                    <div>
                        <form>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="MyTable"
                                           checked={this.state.selectedOption === 'MyTable'}
                                           onChange={this.handleOptionChange.bind(this)}/>
                                    MyTable
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="DynTable"
                                           checked={this.state.selectedOption === 'DynTable'}
                                           onChange={this.handleOptionChange.bind(this)}/>
                                    DynTable
                                </label>
                            </div>
                        </form>
                    </div>


                    <div>
                        {this.renderTable()}
                    </div>

                </header>
            </div>
        );
    }
}

export default App;
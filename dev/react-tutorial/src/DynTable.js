import {Component} from "react";
import './MyTable.css';
import {api_getLayout, api_updateSum} from './restApi';

class DynTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            layout: api_getLayout(),
            data: [],
            isLoaded: false,
            error: null
        }
        for(let i=0;i<this.state.layout.length;i++ ){
            let tableitem = {
                key:i,
                name:this.state.layout[i].name,
                value:"0"
            }
            this.state.data.push(tableitem)
        }
    }
    async updateValue(key,newValue){
        let ent = this.state.data.find(it => it.key == key);
        ent.value = newValue;
    }
    async entryChangedHandler(e){
        if(e.nativeEvent instanceof InputEvent){
            await this.updateValue(e.target.className,parseInt(e.target.value));
            this.forceUpdate();
        }
    }
    renderTableData(){
        return this.state.data.map((item)=>
            <tr>
                <td>{item.name}</td>
                <td>{item.value}</td>
                <td>
                    <input className={item.key}
                           type="text"
                           value={item.value}
                           onChange={this.entryChangedHandler.bind(this)}
                    />
                </td>
                <td>{item.total}</td>
            </tr>
        )
    }
    render(){
        return (
            <div>
                <h1 className="TableTitle">DynTable</h1>
                <table className="DynTable">
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DynTable;

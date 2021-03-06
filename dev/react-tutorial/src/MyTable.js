import {Component} from "react";
import './MyTable.css';
import {api_getData,api_getLayout,api_updateSum} from './restApi';

class MyTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            layout: api_getLayout(),
            data: api_getData(),
            isLoaded: false,
            error: null
        }
    }
    getEntryByKey(key){
        return this.state.data.filter((ent,ind,arr)=>{
            return ent.key == key
        })[0]
    }
    async updateEntryAmount(key,amount){
        let ent = this.getEntryByKey(key);
        ent.amount = amount;
        let res = await api_updateSum(amount,ent.price)
        ent.total = res;
    }
    async entryChangedHandler(e){
        if(e.nativeEvent instanceof InputEvent){
            await this.updateEntryAmount(e.target.className,parseInt(e.target.value));
            this.forceUpdate();
        }
    }
    renderTableData(){
        return this.state.data.map((item)=>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input className={item.key}
                           type="text"
                           value={item.amount}
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
                <h1 className="title">MyTable</h1>
                <table className="mytable">
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyTable;

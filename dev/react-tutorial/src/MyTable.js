import {Component} from "react";
import './MyTable.css';


class MyTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key:1234,name: "milch",price:2.5,amount:0,total:0},
                {key:231,name: "eier",price:1.5,amount:0,total:0}
            ],
            isLoaded: false,
            error: null
        }
    }
    getEntryByKey(key){
        return this.state.data.filter((ent,ind,arr)=>{
            return ent.key == key
        })[0]
    }
    updateEntryAmount(key,amount){
        let ent = this.getEntryByKey(key);
        ent.amount = amount
        let querystr = '/dev/getTotal.php?amount=' + ent.amount + '&price=' + ent.price;
        fetch(querystr)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                    });
                    ent.total = result.total;
                    console.log('total is '+ent.total);
                    this.forceUpdate();
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    entryChangedHandler(e){
        if(e.nativeEvent instanceof InputEvent){
            this.updateEntryAmount(e.target.className,parseInt(e.target.value))
        }
    }
    renderTableData(){
        return this.state.data.map((item)=>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><input className={item.key} type="text" value={item.amount} onChange={this.entryChangedHandler.bind(this)}/></td>
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

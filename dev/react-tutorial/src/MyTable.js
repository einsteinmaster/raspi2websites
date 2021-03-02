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
        console.log('update entry called')
        console.log(ent)
        ent.amount = amount
        console.log(ent)
        console.log(ent.amount)
        let querystr = 'http://rkp.intecelektro.de/dev/getTotal.php?amount=' + ent.amount + '&price=' + ent.price;
        console.log(querystr)
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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    entryChangedHandler(e){
        console.log("changed val")
        console.log(e)
        console.log(e.target.className)
        console.log(this.getEntryByKey(e.target.className))
        if(e.nativeEvent instanceof InputEvent){
            console.log(e.nativeEvent.data)
            this.updateEntryAmount(e.target.className,parseInt(e.target.value))
        }
    }
    renderTableData(){
        console.log("rendered table")
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

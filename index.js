Привет

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemsFilter from './components/items-filter';
import ItemAddForm from './components/item-add-form';


class App extends React.Component {

    maxId=100;

    state = {
        todoData : [
            { label: "Wake Up", important: false, id: 1},
            { label: "Drink tea", important: true, id: 2},
            { label: "Eat breakfast", important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id ===id);
            const before = todoData.slice(0,indx);
            const after = todoData.slice(indx+1);
            const newArray = [...before, ...after];
            return {
                todoData: newArray
            };
        });
    }
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        this.setState(({todoData})=>{
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    render(){
        return(
            <div className="container" style={{maxWidth: 800}}>
                <AppHeader  toDo={3} done= {4}/>
                <div className="row pt-2 pb-2 ">
                    <div className="col-6">
                        <SearchPanel/>
                    </div>
                    <div className="col-6">
                        <ItemsFilter/>
                    </div>
                </div>
                <TodoList todos = 
                {this.state.todoData} 
                onDeleted ={ this.deleteItem}/>
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }

}
ReactDOM.render(<App/>, document.getElementById("root"));


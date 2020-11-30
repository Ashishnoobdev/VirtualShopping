import React from 'react';

import CardList from './CardList';
import { cardContentStructure } from './CardContentStructure';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        items: cardContentStructure,
        searchValue: ''
    }

    onSearchChange = (event) => {
        this.setState({ searchValue: event.target.value })
    };

    render() {
        const filteredItem = this.state.items.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        });
    
        return (
            <div className='tc'>
                <h1 className='pa3 f2 f1-l fw2 white-90 mb0 lh-title i underline'>Virtual Shopping Stop!</h1>
                <SearchBar onSearchChange={this.onSearchChange} />
                <CardList cardContentStructure={filteredItem} />
            </div>
        )
    }
};


export default App;
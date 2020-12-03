import React from 'react';

import CardList from './components/CardList';
import { cardContentStructure } from './CardContentStructure';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';

class App extends React.Component {
    state = {
        items: [],
        searchValue: ''
    }

    componentDidMount() {
        //NOTE: use fetch here to get the response from API when finished
        this.setState({ items: cardContentStructure });
    };

    onSearchChange = (event) => {
        this.setState({ searchValue: event.target.value });
    };

    render() {
        const filteredItem = this.state.items.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        });

        if(this.state.items.length === 0) {
            return <div>Loading ...</div>;
        } 
        return (
            <div className='tc'>
                <h1 className='pa3 f2 f1-l fw2 white-90 mb0 lh-title i underline'>Virtual Shopping Stop!</h1>
                <SearchBar onSearchChange={this.onSearchChange} />
                <Scroll>
                    <CardList cardContentStructure={filteredItem} />
                </Scroll>
            </div>
        )
    }
};


export default App;
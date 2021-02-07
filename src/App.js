import React from 'react';

import CardList from './components/CardList';
import { cardContentStructure } from './CardContentStructure';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';

class App extends React.Component {
    state = {
        items: [],
        currentPage: 1,
        itemsPerPage: 4,
        searchValue: ''
    }

    componentDidMount() {
        //NOTE: use fetch here to get the response from API when finished
        this.setState({ items: cardContentStructure });
    };

    onSearchChange = (event) => {
        this.setState({ searchValue: event.target.value });
    };

    handlePageNumberClick = (event) => {
        this.setState({ currentPage: event.target.id})
    }

    render() {
        const filteredItem = this.state.items.filter(item => {
            return (item.description.toLowerCase().includes(this.state.searchValue.toLowerCase()) || item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        });

        // Logic to display items
        const { items, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

        // Logic to display pageNumbers
        const pageNumbers = [];
        console.log(items.length);
        for(let i = 1; i <= Math.ceil(items.length/itemsPerPage); i++) {
            pageNumbers.push(i);
        };
        
        const renderPageNumbers = pageNumbers.map((number, index) => {
            return (
                <div
                className='br-100 pa2 ml1 mt3 mr2 bg-light-blue'
                key={index}
                id={number}
                onClick={this.handlePageNumberClick}
                >
                {number}
                </div>
            )
        });

        // const firstRender = currentItem.map((Item, index) => {
        //     return <li key={index}>{Item}</li>
        // });

        if(this.state.items.length === 0) {
            return <div>Loading ...</div>;
        } 
        return (
            <div className='tc'>
                <h1 className='pa3 f2 f1-l fw2 white-90 mb0 lh-title i underline'>Virtual Shopping Stop!</h1>
                <div className='flex items-center'>
                    <SearchBar onSearchChange={this.onSearchChange} />
                    {renderPageNumbers}
                </div>
                <Scroll>
                    <CardList cardContentStructure={currentItem} />
                </Scroll>
            </div>
        )
    }
};


export default App;
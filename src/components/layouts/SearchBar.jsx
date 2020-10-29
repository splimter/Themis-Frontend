import React, { useState } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import SearchService from "./../../services/search";

const InlineStyle = () => (
    <style>
        {`
            .input {
                margin-top: 5rem;
                width: 100%;
            }     
        `}
    </style>
)

export default function SearchBar(props) {
    const [searchVal, setSearchVal] = useState("")

    const handleSearch = () => {
        SearchService.query(searchVal)
            .then((r) => {props.setList(r.data.files); props.setSearch(searchVal)})
            .catch(e => console.log(e))
    }

    return (
        <>
            <InlineStyle />
            <Input placeholder='Search...' >
                <input value={searchVal} onChange={e => setSearchVal(e.target.value)} />
                <Button icon onClick={handleSearch}>
                    <Icon name='search' />
                </Button>
            </Input>
        </>
    )
}

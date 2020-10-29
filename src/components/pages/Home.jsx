import React, { useState } from 'react'
import SearchBar from '../layouts/SearchBar'
import SearchList from '../layouts/SearchList'
import { Container, Grid } from 'semantic-ui-react'
import PDFViewer from 'pdf-viewer-reactjs'

export default function Home() {
    const [list, setList] = useState([])
    const [url, setUrl] = useState("")
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    return (
        <Container>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <SearchBar setList={setList} setSearch={setSearch}/>
                    <SearchList list={list} setUrl={setUrl} setPage={setPage} search={search}/>
                    {url && <PDFViewer
                        document={{ url, page }}
                    />}
                </Grid.Column>
            </Grid.Row>


        </Container>
    )
}

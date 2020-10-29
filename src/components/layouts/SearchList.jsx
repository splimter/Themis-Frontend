import React from 'react'
import { Segment, List } from 'semantic-ui-react'
import SearchService from "./../../services/search";

// تعيين الوزير الأول
export default function SearchList(props) {
    const handleClick = (item) => {
        SearchService.getPDFByName(item.replace(".txt",""))
            .then(r=>{
                const file = new Blob([r.data], {type: 'application/pdf'});
                props.setUrl(URL.createObjectURL(file))
                window.open(`${URL.createObjectURL(file)}#search=${props.search}`, '_blank');
            })
            .catch(e=>console.log(e))
    }
    return (
        <Segment>
        <List divided>
            {props.list.map((e,i) => {
                return (
                    <List.Item key={i}>
                        <List.Content onClick={()=>handleClick(e)}>{e}</List.Content>
                    </List.Item>
                )
            })}
        </List>
        </Segment>
    )
}

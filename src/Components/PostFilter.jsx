import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."  
            />
            <MySelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка" 
                options={[
                {value: "title", name: "По названию"},
                {value: "body", name: "По описанию"}
                ]}
            />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                    {value: 5, name: "5"},
                    {value: 10, name: "10"},
                    {value: 15, name: "15"},
                    {value: 20, name: "20"},
                    {value: -1, name: "Показать все"},
                ]}
            />
        </div>
    )
}

export default PostFilter
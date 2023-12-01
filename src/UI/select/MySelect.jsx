import React from "react";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}   // здесь первая функция onChange вызывается каждый раз, когда меняется значение селекта, а вторая функция onChange является ссылкой на другую фукнцию, которая непосредственно будет сортировать посты
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default MySelect
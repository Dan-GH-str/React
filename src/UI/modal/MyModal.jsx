import React from "react";
import classes from "./MyModal.module.css" // Массив всех классов из css модуля

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.myModal]

    if(visible)
        rootClasses.push(classes.active)

    // stopPrapagation нужен для того, чтобы функция setVisible не вызывалась при нажатии на контентную часть модального окна
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}> 
                {children}
            </div>
        </div>
    )
}

export default MyModal
import React, { useMemo } from "react";
import { getPagesArray } from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages])
    
    return (
        <div className="pages__switcher">
            {pagesArray.map(num => 
                <span 
                    onClick={() => changePage(num)}
                    key={num} 
                    className={num === page ? "page current" : "page"}
                >
                    {num}
                </span>
            )}
      </div>
    )
}

export default Pagination
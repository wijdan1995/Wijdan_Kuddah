import React from 'react'

export default function Tab({tab, setCurrentTab }) {
    return (
        <div className="btn btn-light mr-2 mb-4"  onClick={()=> setCurrentTab(tab)}>
            {tab}
        </div>
    )
}

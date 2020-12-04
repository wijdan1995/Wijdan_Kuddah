import React from 'react'

export default function Tab({tab, setCurrentTab }) {
    return (
        <button className="btn btn-light mr-2 mb-4"  onClick={()=> setCurrentTab(tab)}>
            {tab.label}
        </button>
    )
}

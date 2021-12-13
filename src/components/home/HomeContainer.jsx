import React from 'react'
import ItemListContainer from '../product/ItemListContainer'
import SlideBar from '../navBar/SlideBar'

function HomeContainer() {
    return (
        <>
            <SlideBar title='Led Store' subtitle='Luces para ti' />
            <ItemListContainer heading='Productos' />
        </>
    )
}

export default HomeContainer

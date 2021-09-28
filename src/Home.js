import React from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'
import { Switch, Route } from 'react-router-dom'
import Packages from './layouts/Packages'

function Home() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/packages">
                    <Packages />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default Home

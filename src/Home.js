import React from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './routes/Main'
import { Switch, Route } from 'react-router-dom'
import Packages from './routes/Packages'

function Home() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/packages/website">
                    <Packages getData="PackageOne" />
                </Route>
                <Route path="/packages/webapp">
                    <Packages getData="PackageTwo" />
                </Route>
                <Route path="/packages/mobileapp">
                    <Packages getData="PackageThree" />
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

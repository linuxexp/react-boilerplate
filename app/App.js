/**
 * Created by raja on 27/01/18.
 */
import React, {Component} from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Link} from "react-router-dom";

import Button from "material-ui/Button";
import Grid from 'material-ui/Grid';
import Nested from "./components/Nested.component";

class App extends Component {

    constructor() {
        super(...arguments);
    }

    render() {

        const styles = {
            container: {
                minHeight: "100vh"
            }
        };

        return (
            <div>
                <Grid style={styles.container} container
                      direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <span>DataGrid</span>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/nested">Nested component</Button>
                    </Grid>
                    <Grid item>
                        <Route path="/nested" component={Nested} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

render ((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ), document.getElementById('app'));

require('file-loader?name=[name].[ext]!./index.html');

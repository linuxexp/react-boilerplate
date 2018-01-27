/**
 * Created by raja on 27/01/18.
 */
import React, {Component} from "react";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import {Route, Link} from "react-router-dom";

const NestedWithParam = (props) => {
    return (
        <div>
            param {props.match.params.id}
        </div>
    );
};

class Nested extends Component {

    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Button component={Link} to="/nested/1">
                        Nested component with param
                    </Button>
                </Grid>
                <Grid item>
                    <Route path="/nested/:id" component={NestedWithParam} />
                </Grid>
            </Grid>
        );
    }
}

export default Nested;
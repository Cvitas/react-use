import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Route, Switch } from 'react-router-dom'
import history from '@/routes/history'
import { page1, page2, page3 } from '@/routes'
import { CONFIG_ACTIONS } from "@/actions";

function app({ count,_count, setCount }) {
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked { count } times { _count}</p>
            <button onClick={ () => setCount() }>
                Click me
            </button>
            <div>
                <Route>
                    <Switch location={ history.location }>
                        <Route path="/page1" component={ page1 }></Route>
                        <Route path="/page2" component={ page2 }></Route>
                        <Route path="/page3" component={ page3 }></Route>
                    </Switch>
                </Route>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.config.count,
        _count: state.config._count,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...CONFIG_ACTIONS,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(app);
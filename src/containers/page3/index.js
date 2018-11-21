import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
function index() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function mapStateToProps(state){
    return{
    }
}

function mapDispatchToProps(dispatch){
    return{
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(index);
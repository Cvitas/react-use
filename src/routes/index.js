import React from 'react';
import Loadable from 'react-loadable'; //路由拆分插件

const LazyLoadingComponent = ( { isLoading, error } ) => {
    // Handle the loading state
    if ( isLoading ) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if ( error ) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const page1 = Loadable({
    loader: () => import('@/containers/page1'),
    loading: LazyLoadingComponent
});
const page2 = Loadable({
    loader: () => import('@/containers/page2'),
    loading: LazyLoadingComponent
});
const page3 = Loadable({
    loader: () => import('@/containers/page3'),
    loading: LazyLoadingComponent
});

export {
    page1,
    page2,
    page3
}
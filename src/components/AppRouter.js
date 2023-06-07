import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privatRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE, CHAT_ROUTE } from '../utils/consts';
const AppRouter = () => {
    const user = false;
    console.log("user",user, CHAT_ROUTE, LOGIN_ROUTE);
    return user ? (
        <Routes>
          { 
            privatRoutes.map(({ path: p, Component: Cp }) => {
            return <Route key={p} path={p} element={<Cp />} exact />;
          })}
          <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
        </Routes>
      )
      :
      (
        <Routes>
        { 
          publicRoutes.map(({ path: p, Component: Cp }) => {
          return <Route key={p} path={p} element={<Cp />} exact />;
        })}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
      </Routes>
      )
    // return user ? 
    // (
    //     <Routes>
    //         {privatRoutes.map(({path, Component}) => 
    //             <Route key={path} path={path} component={Component} exact={true}/>
    //         )}
    //         <Route to={CHAT_ROUTE}/>
    //     </Routes>

    // )
    // :
    // (
    //     <Routes>
    //         {publicRoutes.map(({path, Component}) => 
    //             <Route key={path} path={path} component={Component} exact={true}/>
    //         )}
    //         <Route to={LOGIN_ROUTE}/>
    //     </Routes>
    // )
};

export default AppRouter;
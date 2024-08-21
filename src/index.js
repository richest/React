import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals.js';
import UserWithAxios from './components/posts/UserWithAxios';
import {Provider} from 'react-redux'
import store from './redux/store'
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
      <Provider store={store()}>
        <App />
      </Provider>
  </StrictMode>
);
// root.render(
//   <StrictMode>
//      <BrowserRouter>
//       <Layout>
//         <App />
//       </Layout>
//        <Routes>
//         {/* <Route exact path='/posts' element={<AllPosts />}></Route> */}
//         <Route exact path='/users/:id' element={<UserWithAxios />}></Route>
//         </Routes>
//       </BrowserRouter>
//   </StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
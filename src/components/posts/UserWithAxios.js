import React from "react";
// import axios from 'axios'
import { getRequest } from "../../app/httpClient/axiosClient";

import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {_userdata} from '../../app/config/endpoints/reqresin'
import { _jsonPlaceHolder } from "../../app/config/endpoints/jsonplaceholder";
import apiRequest from "../../app/httpClient/axios/apiRequest";
import { defaultApi } from "../../app/httpClient/axios/axiosInstance";

const UserWithAxios = () => {
    const [user, setUser] = useState({});
    const id = useLocation().pathname.split("/")[2];
    
    // const { response, isLoading, error } = apiRequest({
    //     api: defaultApi,
    //     method: "get",
    //     url: "/repos/francisrod01/RNwithoutExpo/events",
    //     config: JSON.stringify({ requireAuthentication: true })
    // });
    
    useEffect(()=>{
        console.log(_jsonPlaceHolder);
        //const _URL = `${_userdata.user}${id}`;
        // const _URL = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetchUser(`${_jsonPlaceHolder.user}${id}`);


    }, [id]);
    
    async function fetchUser(_url) {
        try {
            const userData = await getRequest(_url);
            console.log({userData});
        } catch(error) {
            console.log({error});
        }
    }
    // useEffect(()=>{
    //     console.log(_userdata);
    //     //const _URL = `${_userdata.user}${id}`;
    //     const _URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    //     let unsubscribed = false;
    //     const cancelToken = axios.CancelToken.source();   
         
    //     axios.get(_URL, {cancelToken:cancelToken.token})
    //     .then((res) => {
    //         setUser(res.data);
    //     }).catch(err=>{
    //         if( axios.isCancel(err) ){
    //             console.log("request cancled!!!.");
    //         }
    //         //console.log( ( err.name === "AbortError" ) ? "request canceled!":"yet to be handled." )
    //     });
    //     return ()=>{
    //         cancelToken.cancel();
    //     }
    // }, [id]);
   
    // useEffect(()=>{
    //     let unsubscribed = false;
    //     const cancelToken = axios.CancelToken.source();    
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {cancelToken:cancelToken.token})
    //     .then((res) => {
    //         setUser(res.data);
    //     }).catch(err=>{
    //         if( axios.isCancel(err) ){
    //             console.log("request cancled!!!.");
    //         }
    //         //console.log( ( err.name === "AbortError" ) ? "request canceled!":"yet to be handled." )
    //     });
    //     return ()=>{
    //         cancelToken.cancel();
    //     }
    // }, [id]);
    
    
    // const controller = new AbortController();
    // const signal = controller.signal;
    // useEffect(()=>{
    //     let unsubscribed = false;
    //     const controller = new AbortController();
    //     const signal = controller.signal;
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {signal})
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         setUser(data);
    //     }).catch(err=>{
    //         console.log( ( err.name === "AbortError" ) ? "request canceled!":"yet to be handled." )
    //     });
    //     return ()=>{
    //         controller.abort();
    //     }
    // }, [id]);


    return (
        <div>
           <p>Name: {user.name}</p>
           <p>Username: {user.username}</p>
           <p>Email: {user.email}</p>
           <br /><Link to="/users/2">User 2</Link>
           <br /><Link to="/users/3">User 3</Link>
           <br /><Link to="/users/4">User 4</Link>
        </div>
    );

}
export default UserWithAxios
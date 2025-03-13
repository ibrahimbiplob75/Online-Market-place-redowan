import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxios from './UseAxios';

const UerInfo = () => {
    const Axios = UseAxios();
    const {user,loading}=useAuth();

    const {data:userinfo="",isLoading}=useQuery({
        queryKey:["userinfo",user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data}= await Axios(`/users/${user?.email}`);
            return data
        }
        
    })
    return [userinfo, isLoading];
    
};

export default UerInfo;
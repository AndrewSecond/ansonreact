import {PostContentButtons} from './PostContentButtons';
import { useContext, useState } from 'react';
import { UserContext } from '../utils/contexts/UserContext';

export default function PostContant({data}) {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <div><span>PostContent</span></div>
      {data} <br />
      {userContextData.username} <br />
      {/* {userContextData.company.name} <br /> */}
      {userContextData.email} <br />
      <PostContentButtons />
    </div>
  )
}
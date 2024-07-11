import { useContext, useState } from 'react';
import PostContent from './PostContent';
import { UserContext } from '../utils/contexts/UserContext';

export default function PostContainer() {
  const [data, setData] = useState("Hello!!!!");
  const userContextData = useContext(UserContext);
  return (
    <div>
      <div><span>PostContainer</span></div>
      <div>
        {userContextData.name}
      </div>
      <PostContent data={data} />
    </div>
  );
}
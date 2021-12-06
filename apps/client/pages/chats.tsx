import './chats.module.scss';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface ChatsProps {}

export function Chats(props: ChatsProps) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push('login');
  };
  return (
    <div>
      <h1>Welcome to Chats!</h1>
      <a href={''} onClick={handleClick}>
        Go to login page
      </a>
    </div>
  );
}

export default Chats;

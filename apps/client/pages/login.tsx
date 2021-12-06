import './login.module.scss';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div>
      <h1 className="text-green-500">Welcome to Login!</h1>
      <Link href="/chats">
        <a>Go to chat page</a>
      </Link>
    </div>
  );
}

export default Login;

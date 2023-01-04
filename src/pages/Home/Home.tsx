import { Link } from 'react-router-dom';
import Button from '@components/Button';

export const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is the Home Page</h1>
      <Button>My Button</Button>
      <p>
        <Link to="contact">Click to view our contact page</Link>
      </p>
    </div>
  );
};

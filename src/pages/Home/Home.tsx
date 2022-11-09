import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>This is the Home Page</div>
      <Link to="contact">Click to view our contact page</Link>
    </>
  )
}


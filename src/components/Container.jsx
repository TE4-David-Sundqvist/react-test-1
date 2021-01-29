import './Container.scss';

export default function Container() {
  const greeting = 'Hello Function Component!';
 
  return (
    <div className="container">
      <h1 className="containerTitle">
        {greeting}
      </h1>
    </div>
  );
}
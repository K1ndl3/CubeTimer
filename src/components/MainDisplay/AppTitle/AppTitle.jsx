import './AppTitle.css'

function AppTitle() {
  const title = "ON-TRACK";
  const titleArr = [...title];
  return (
    <div className="title-wrapper">
      {titleArr.map((char, index) => (
        <h1 key={index} className="letter">{char}</h1>
      ))}
    </div>
  );
}

export default AppTitle;

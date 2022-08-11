
import './App.css';

function App() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
 <div className="container-fluid">
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/">BCS191097</a>
       </li>
       <span></span>
       <span></span>
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/"></a>
       </li>
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/"></a>
       </li>
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/"></a>
       </li>
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/">           Home</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/">contact</a>
       </li>
       <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           about
         </a>
      </li>
     </ul>
   </div>
 </div>
</nav>
<table>
  <tr>
    <th>id</th>
    <th>product name</th>
    <th>price</th>
    <th>stock</th>
    <th>warehouse location</th>
  </tr>
  <tr>
    <td>01</td>
    <td>panadol</td>
    <td>100</td>
    <td>low stock</td>
    <td>karachi</td>
    <td><button type="button" >edit</button></td>
 <td><button type="button" >delete</button></td>
  </tr>
  <tr>
    <td>02</td>
    <td>book</td>
    <td>1000</td>
    <td>in stock</td>
    <td>islamabad</td>
    <td><button type="button" >edit</button></td>
 <td><button type="button" >delete</button></td>
  </tr>
  <tr>
   

  </tr>
</table>


    </>
    
  );
}

export default App;

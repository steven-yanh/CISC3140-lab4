
import './App.css';
import records from './data.json'
const url = "http://localhost:8000/cars"
function App(){
  return (
    <div className='App'>
      {
        records.map( record =>{
          return(
            <div className='box' key={record.carid}>
              carid:{ record.carid}<p>  </p>
              first name:{ record.fname}<p>  </p>
              last name:{ record.lname}<p>  </p>
              make:{ record.make}<p>  </p>
              model:{record.model}<p>  </p>
              year:{record.year}<p>  </p>
              </div>
          )
        })
      }
    </div>
  );
}

export default App;
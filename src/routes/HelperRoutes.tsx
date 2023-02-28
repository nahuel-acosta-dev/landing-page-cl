import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/error/Error404';


const HelperRouters = () =>{

    return (
      <Routes>
        <Route path="*" element={<Error404/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>

    )
}

export default HelperRouters;
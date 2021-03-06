import React,{ useState, useEffect, lazy, Suspense } from 'react'
import { Route , Switch } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles.scss'
import axios from 'axios'

const Homepage = lazy(()=> import('../Homepage/Homepage')) 
const NotFound = lazy(()=> import('../NotFound/NotFound'))

const App = () => {
  const [repos, setRepos] = useState([]);
  const fetchRepos = async() =>{
    try {
      const res = await axios({
        method: "get",
        url: `https://api.github.com/users/luc-georges/repos`
        ,
      });
      console.log(res.data)
      setRepos(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
   fetchRepos();
   AOS.init()
}, []);
const [Open, setOpen] = useState(false);


return (
  <Suspense fallback={<div>Loading... </div>}>
      <div className="app">
    <Switch>
    <Route exact path="/">
    <Homepage Open={Open} setOpen={setOpen} repos={repos}/>
    </Route>
    <Route>
        <NotFound Open={Open} setOpen={setOpen}/>
    </Route>
    </Switch>

    </div>
</Suspense>
   
);
}
export default App ;
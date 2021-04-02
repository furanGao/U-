import './App.css';
import {lazy,Suspense} from 'react'
import Index from './pages'
import Play from "./pages/play";
import Detail from "./pages/detail";
// const Index = lazy(()=>import('./pages/index'))
// const Play = lazy(()=>import('./pages/play'))
// const Detail = lazy( ()=> import('./pages/detail'))
import {Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
          {/*<Suspense fallback={<div>无所谓</div>}>*/}
              <Route path='/index' component={Index}>
              </Route>
          {/*</Suspense>*/}
              <Route path='/play' component={Play}>
              </Route>
              <Route path='/detail' component={Detail}>
              </Route>
              <Redirect to='/index'>
              </Redirect>
          {/*</Suspense>*/}
      </Switch>
    </div>
  );
}

export default App;

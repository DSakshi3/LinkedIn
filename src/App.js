import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import Login from './components/Login';
import { auth, db } from './firebaseAppConfig';
import Widgets from './components/Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const getDescription1 = async uid => {
    
    const results = await db.collection('user').where('uid', '==', uid).get()
    var description_value = null
    console.log("results", results, typeof results)
    if (results.empty) {
      console.log('No matching documents.');
      return description_value;
    }
    
    results.forEach(doc => {
      // console.log(doc.id, '=>', doc.data().description);
      description_value = doc.data().description;
    });
    return description_value;
  }
  const getDescription = async userAuth => {
    


    // return name;
    console.log(userAuth.displayName)
    const output =  await getDescription1(userAuth.uid);
    // return console.log('Result is' + JSON.stringify(output));
    // const desc_value = 
    dispatch(login({
      email : userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
      photoUrl: userAuth.photoURL,
      description: JSON.stringify(output).replace(/^[\s"]+|[\s"]+$/g, '') === "null"? userAuth.email : JSON.stringify(output).replace(/^[\s"]+|[\s"]+$/g, '')
    }))
    // return console.log('Result is' + JSON.stringify(output));
    // .then(ans => {
    //   return console.log("Output is ", JSON.stringify(ans))
    //  });
    // const result = getDescription1(name).then(what => {
    //   console.log("what", what, typeof what);
    //   desc_val = what
    // } )
    // console.log( "result", result, typeof result)
    // console.log( "desc_val", desc_val, typeof desc_val)
    // console.log( "output", output, typeof output)
    // // const result 
    // return desc_val;
    // const results = await db.collection('posts').where('name', '==', name).get()
    // console.log( typeof results, results)
    // console.log( typeof name, name)
    // console.log(" results are : ", results)
    // if (results.empty) {
    //   console.log('No matching documents.');
    //   return name;
    // } 
    // results.forEach(doc => {
    //   console.log(doc.id, '=>', doc.data().description);
    // });
    // console.log("No results found");
    // return name
  }

 
  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      if(userAuth){
        // user loggedin
        console.log("userAuth", userAuth);
        getDescription(userAuth);
      }else{
        //user logged out
        dispatch(logout());
      }
    })
  }, []);

  console.log(user);
  return (
    <div className="app">
      <Header />
        {!user ? <Login /> : ( 
            <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>          
        )}
        
    </div>
  );
}

export default App;

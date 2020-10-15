import React from 'react';
import './App.css';
import Customer from './components/customer'


const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이선우',
    'birthday': '960406',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김소연',
    'birthday': '960214',
    'gender': '여자',
    'job': '바보'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '정승규',
    'birthday': '961002',
    'gender': '남자',
    'job': '병신'
  }
]

class App extends React.Component{
  render(){
    return(
      <div>
        {
          customers.map(v => {
            return <Customer key={v.id} id={v.id} image={v.image} name={v.name} birthday={v.birthday} gender={v.gender} job={v.job}/>
          })
        }
      </div>
    )
  }
}

export default App;

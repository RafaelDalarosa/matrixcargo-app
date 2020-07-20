<<<<<<< HEAD
import React, { useState, useEffect, Component } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 61131e7a74a0557f3e60581082d442612e8d44ca
import { Form, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';



<<<<<<< HEAD

  function App() {
  
  

  const [name, setName] = useState();
  const [language, setLanguage] = useState();
  const [id, setId] = useState();
  const [score, setScore] = useState();
  const [watchers, setWatchers] = useState();
  const [html_url, setHtmlUrl] = useState();
  const [userInput, setUserInput] = useState();
  const [error, setError] = useState();

    useEffect(() => {
        document.write = id
    }, [id]);
=======
  function App() {

  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [id, setId] = useState('');
  const [score, setScore] = useState('');
  const [watchers, setWatchers] = useState('');
  const [html_url, setHtmlUrl] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

    useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=language:python&page=1&per_page=100") 
    .then (res => res.json())
    .then (data => {
      setData(data.items);
    });
  }, []);
>>>>>>> 61131e7a74a0557f3e60581082d442612e8d44ca
  
  const setData = ({ language, id, name, score, watchers, html_url}) => 
  {
    setName(name);
    setLanguage(language);
    setId(id);
    setScore(score);
    setWatchers(watchers);
    setHtmlUrl(html_url);
  }; 


  const handleSearch = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/search/repositories?q=language:${userInput}&page=1&per_page=100`) 
    .then (res => res.json())
<<<<<<< HEAD
    .then (data => { for (let i = 0; i < data.items.length; i++){
      setData(data.items[i]);
    } 
=======
    .then (data => {  
        setData(data.items);
      
>>>>>>> 61131e7a74a0557f3e60581082d442612e8d44ca
  });
}


<<<<<<< HEAD
const renderCard = () => {

  return (
      <Card>
          <Card.Content>
          <Card.Header>Repositorie Name > {name}</Card.Header>
          <Card.Description>
            <a href={html_url}>
            Go to Github
            </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            Language > {language}
        </Card.Content>
        <Card.Content extra>
            Watchers > {watchers}
        </Card.Content>
        <Card.Content extra>
            Score > {score}
        </Card.Content>
        <Card.Content extra>
            ID > {id}
        </Card.Content>
      </Card>
  )
=======

  return (
    <div>
      <div className="navbar">Github Repositories Search</div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Language Search' name='language' onChange={handleSearch}/>
            <Form.Button content='Search'/>
          </Form.Group>
        </Form>
      </div>
        <Card>
      <Card.Content>
      <Card.Header>Repositorie Name > {name}</Card.Header>
      <Card.Description>
        <a href={html_url}>
        Go to Github
        </a>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        Language > {language}
    </Card.Content>
    <Card.Content extra>
         Watchers > {watchers}
    </Card.Content>
    <Card.Content extra>
         Score > {score}
    </Card.Content>
    <Card.Content extra>
        ID > {id}
    </Card.Content>
  </Card>
  </div>
    
  );
>>>>>>> 61131e7a74a0557f3e60581082d442612e8d44ca
}
  

  return (
    <div>
      <div className="navbar">Github Repositories Search</div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Language Search' name='language' onChange={handleSearch}/>
            <Form.Button content='Search'/>
          </Form.Group>
        </Form>
      </div>
      <div className="repo">
      <Card.Group itemsPerRow={4}>
         
      </Card.Group>
      </div>
      </div>
    
  );
 
  }

export default App;

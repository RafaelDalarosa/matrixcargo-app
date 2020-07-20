import React, { useState } from 'react';
import { Form, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';




  function App() {
  

  const [userInput, setUserInput] = useState();
  const [data, setData] = useState([]);


  const handleSearch = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/search/repositories?q=language:${userInput}&page=1&per_page=100`) 
    .then (res => res.json())
    .then (data => { 
      setData(data.items);
  });
}

  return (
    <div>
      <div className="navbar"> Search Github Repositories</div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Language Search' name='language' onChange={handleSearch}/>
            <Form.Button content='Search'/>
          </Form.Group>
        </Form>
      </div>
      <div className="repo">
         {data.map(data => {
          return (
                  <Card>
                  <Card.Content>
                  <Card.Header>Repositorie Name > {data.name}</Card.Header>
                  <Card.Description>
                  <a href={data.html_url}>
                  Go to Github
                  </a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                  Language > {data.language}
              </Card.Content>
              <Card.Content extra>
                  Watchers > {data.watchers}
              </Card.Content>
              <Card.Content extra>
                  Score > {data.score}
              </Card.Content>
              <Card.Content extra>
                  ID > {data.id}
              </Card.Content>
            </Card>
          )
        })}
      </div>
      </div>
    
  );
 
  }

export default App;

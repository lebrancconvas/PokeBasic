import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Container} from "@mui/material";  
import {Box} from "@mui/system"; 
import TestAPI from "./pages/TestAPI"; 

const App = () => {
  return (
    <div>
      <Router>
        <Container maxWidth="sm"> 
          <Box mt={3}>  
            <Routes>
              <Route exact path="/testapi" element={<TestAPI />}/> 
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;

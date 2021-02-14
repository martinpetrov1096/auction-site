import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import siteInfo from '../config/site-info.json';

export default function NavigationBar() {


   return (
      <Navbar bg="light" expand="lg" fixed="top">
         <Navbar.Brand href="/">{siteInfo.name}</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/about">About</Nav.Link>
              
            </Nav>
            <Form inline>
               <FormControl type="text" placeholder="Search Lot or VIN" className="mr-sm-2" />
               <Button variant="outline-success">Search</Button>
            </Form>
         </Navbar.Collapse>
      </Navbar>
   );
}
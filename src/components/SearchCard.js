import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const HomeCard = props => (
    <Form>
        <FormGroup>
            <Input type="search" name="search" id="searchbar" placeholder="Try Costa del Sol" />
        </FormGroup>
        <FormGroup>
            <Button>Search</Button>
        </FormGroup>
    </Form >



)


export default HomeCard;
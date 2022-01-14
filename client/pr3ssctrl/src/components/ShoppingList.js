import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {getitems, deleteitem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getitems();
    }
   
    onDeleteClick = (id) =>{
        this.props.deleteitem(id);
    }
    render() {
        
        const { items } =this.this.props.item;
        return (
            <Container>'
            
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({ id, name}) =>(
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                < ListGroupItem>
                                <Button
                                className='remove-btn'
                                color='danger'
                                size='sm'
                                onClick={this.onDeleteClick.bind(this, id)}>
                                    &times;
                                </Button>

                                {name}
                                </ListGroupItem>
                            </CSSTransition>

                        ))}

                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
getitems: PropTypes.func.isRequired,
item: PropTypes.object.isRequired

}

const mapStateToProps= (state) => ({
    item : state.item
})

export default connect(mapStateToProps,{getitems, deleteitem} )(ShoppingList);







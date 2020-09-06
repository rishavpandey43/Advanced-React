import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import { perPage } from '../config';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <div>
        <Center>
          <Pagination page={this.props.page} />
          <Query
            query={ALL_ITEMS_QUERY}
            variables={{
              skip: this.props.page * perPage - perPage,
              first: perPage,
            }}
          >
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>{error.message}</p>;
              return (
                <ItemList>
                  {data.items.map((item) => (
                    <Item key={item.id} item={item} />
                  ))}
                </ItemList>
              );
            }}
          </Query>
          <Pagination page={this.props.page} />
        </Center>
      </div>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };

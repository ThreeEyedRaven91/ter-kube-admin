import { gql } from 'apollo-server-express';
import Dashboard from './Dashboard';
import Metadata from './Metadata';
import Namespace from './Namespace';
import Pod from './Pod';
import Spec from './Spec';

const mergeResolvers = (models) => {
  const query = models.reduce((total, current) => ({
    ...total,
    ...current.query.resolver,
  }), {});
  const mutation = models.reduce((total, current) => ({
    ...total,
    ...current.mutation.resolver,
  }), {});
  const type = models.reduce((total, current) => ({
    ...total,
    ...current.type.resolver,
  }), {});

  if (Object.keys(query).length > 0) {
    type.Query = query;
  }

  if (Object.keys(mutation).length > 0) {
    type.Mutation = mutation;
  }

  return type;
};

const mergeTypeDefs = (models) => {
  const queryString = models.map((model) => model.query.schema).join('');
  const mutationString = models.map((model) => model.mutation.schema).join('');
  const typeString = models.map((model) => model.type.schema).join('');

  const results = [];
  if (queryString.trim().length > 0) {
    results.push(`type Query {\n${queryString}\n}`);
  }

  if (mutationString.trim().length > 0) {
    results.push(`type Mutation {\n${mutationString}\n}`);
  }

  if (typeString.trim().length > 0) {
    results.push(typeString);
  }

  return gql(results.join('\n'));
};

const merge = (models) => ({
  typeDefs: mergeTypeDefs(models),
  resolvers: mergeResolvers(models),
});

export default merge([
  Dashboard,
  Metadata,
  Namespace,
  Pod,
  Spec,
]);

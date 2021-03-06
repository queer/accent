import gql from 'npm:graphql-tag';

export default gql`
  mutation TranslationCommentsSubscriptionDelete(
    $translationCommentsSubscripitionId: ID!
  ) {
    deleteTranslationCommentsSubscription(
      id: $translationCommentsSubscripitionId
    ) {
      translationCommentsSubscription {
        id
      }

      errors
    }
  }
`;

import gql from 'npm:graphql-tag';

export default gql`
  mutation TranslationUncorrect($translationId: ID!) {
    uncorrectTranslation(id: $translationId) {
      translation {
        id
        correctedText
        conflictedText
        isConflicted
        updatedAt
      }

      errors
    }
  }
`;

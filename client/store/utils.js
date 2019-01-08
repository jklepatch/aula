const createAction = type => {
  return {
    ACTION: `${type}.ACTION`,
    SUCCESS: `${type}.SUCCESS`,
    FAILED: `${type}.FAILED`
  };
}

export { createAction };
